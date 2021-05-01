import { r as react } from '../common/index-abdc4d2d.js';
import { s as stubbedPublicClientApplication, a as InteractionStatus, L as Logger, W as WrapperSKU, E as EventType, b as EventMessageUtils, I as InteractionType } from '../common/index.es-54ffa174.js';
import '../common/_commonjsHelpers-4f955397.js';

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/*
 * Stubbed context implementation
 * Only used when there is no provider, which is an unsupported scenario
 */

const defaultMsalContext = {
  instance: stubbedPublicClientApplication,
  inProgress: InteractionStatus.None,
  accounts: [],
  logger: /*#__PURE__*/new Logger({})
};
const MsalContext = /*#__PURE__*/react.createContext(defaultMsalContext);
MsalContext.Consumer;

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
function getChildrenOrFunction(children, args) {
  if (typeof children === "function") {
    return children(args);
  }

  return children;
}
/**
 * Helper function to determine whether 2 arrays are equal
 * Used to avoid unnecessary state updates
 * @param arrayA
 * @param arrayB
 */

function accountArraysAreEqual(arrayA, arrayB) {
  if (arrayA.length !== arrayB.length) {
    return false;
  }

  const comparisonArray = [...arrayB];
  return arrayA.every(elementA => {
    const elementB = comparisonArray.shift();

    if (!elementA || !elementB) {
      return false;
    }

    return elementA.homeAccountId === elementB.homeAccountId && elementA.localAccountId === elementB.localAccountId && elementA.username === elementB.username;
  });
}

/* eslint-disable header/header */
const name = "@azure/msal-react";
const version = "1.0.0-beta.2";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
function MsalProvider({
  instance,
  children
}) {
  react.useEffect(() => {
    instance.initializeWrapperLibrary(WrapperSKU.React, version);
  }, [instance]); // Create a logger instance for msal-react with the same options as PublicClientApplication

  const logger = react.useMemo(() => {
    return instance.getLogger().clone(name, version);
  }, [instance]); // State hook to store accounts

  const [accounts, setAccounts] = react.useState([]); // State hook to store in progress value

  const [inProgress, setInProgress] = react.useState(InteractionStatus.Startup);
  react.useEffect(() => {
    const callbackId = instance.addEventCallback(message => {
      switch (message.eventType) {
        case EventType.LOGIN_SUCCESS:
        case EventType.SSO_SILENT_SUCCESS:
        case EventType.HANDLE_REDIRECT_END:
        case EventType.LOGIN_FAILURE:
        case EventType.SSO_SILENT_FAILURE:
        case EventType.LOGOUT_END:
        case EventType.ACQUIRE_TOKEN_SUCCESS:
        case EventType.ACQUIRE_TOKEN_FAILURE:
          const currentAccounts = instance.getAllAccounts();

          if (!accountArraysAreEqual(currentAccounts, accounts)) {
            logger.info("MsalProvider - updating account state");
            setAccounts(currentAccounts);
          } else {
            logger.info("MsalProvider - no account changes");
          }

          break;
      }
    });
    logger.verbose(`MsalProvider - Registered event callback with id: ${callbackId}`);
    return () => {
      // Remove callback when component unmounts or accounts change
      if (callbackId) {
        logger.verbose(`MsalProvider - Removing event callback ${callbackId}`);
        instance.removeEventCallback(callbackId);
      }
    };
  }, [instance, accounts, logger]);
  react.useEffect(() => {
    const callbackId = instance.addEventCallback(message => {
      const status = EventMessageUtils.getInteractionStatusFromEvent(message);

      if (status !== null) {
        logger.info(`MsalProvider - ${message.eventType} results in setting inProgress to ${status}`);
        setInProgress(status);
      }
    });
    logger.verbose(`MsalProvider - Registered event callback with id: ${callbackId}`);
    instance.handleRedirectPromise().catch(() => {
      // Errors should be handled by listening to the LOGIN_FAILURE event
      return;
    });
    return () => {
      if (callbackId) {
        logger.verbose(`MsalProvider - Removing event callback ${callbackId}`);
        instance.removeEventCallback(callbackId);
      }
    };
  }, [instance, logger]);
  const contextValue = {
    instance,
    inProgress,
    accounts,
    logger
  };
  return react.createElement(MsalContext.Provider, {
    value: contextValue
  }, children);
}

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * Returns Msal Context values
 */

const useMsal = () => react.useContext(MsalContext);

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

function getAccount(instance, accountIdentifiers) {
  const allAccounts = instance.getAllAccounts();

  if (allAccounts.length > 0 && (accountIdentifiers.homeAccountId || accountIdentifiers.localAccountId || accountIdentifiers.username)) {
    const matchedAccounts = allAccounts.filter(accountObj => {
      if (accountIdentifiers.username && accountIdentifiers.username.toLowerCase() !== accountObj.username.toLowerCase()) {
        return false;
      }

      if (accountIdentifiers.homeAccountId && accountIdentifiers.homeAccountId.toLowerCase() !== accountObj.homeAccountId.toLowerCase()) {
        return false;
      }

      if (accountIdentifiers.localAccountId && accountIdentifiers.localAccountId.toLowerCase() !== accountObj.localAccountId.toLowerCase()) {
        return false;
      }

      return true;
    });
    return matchedAccounts[0] || null;
  } else {
    return null;
  }
}
/**
 * Given 1 or more accountIdentifiers, returns the Account object if the user is signed-in
 * @param accountIdentifiers
 */


function useAccount(accountIdentifiers) {
  const {
    instance,
    inProgress
  } = useMsal();
  const initialStateValue = inProgress === InteractionStatus.Startup ? null : getAccount(instance, accountIdentifiers);
  const [account, setAccount] = react.useState(initialStateValue);
  react.useEffect(() => {
    setAccount(getAccount(instance, accountIdentifiers));
  }, [inProgress, accountIdentifiers, instance]);
  return account;
}

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

function isAuthenticated(allAccounts, account, matchAccount) {
  if (matchAccount && (matchAccount.username || matchAccount.homeAccountId || matchAccount.localAccountId)) {
    return !!account;
  }

  return allAccounts.length > 0;
}
/**
 * Returns whether or not a user is currently signed-in. Optionally provide 1 or more accountIdentifiers to determine if a specific user is signed-in
 * @param matchAccount
 */


function useIsAuthenticated(matchAccount) {
  const {
    accounts: allAccounts,
    inProgress
  } = useMsal();
  const account = useAccount(matchAccount || {});
  const initialStateValue = inProgress === InteractionStatus.Startup ? false : isAuthenticated(allAccounts, account, matchAccount);
  const [hasAuthenticated, setHasAuthenticated] = react.useState(initialStateValue);
  react.useEffect(() => {
    setHasAuthenticated(isAuthenticated(allAccounts, account, matchAccount));
  }, [allAccounts, account, matchAccount]);
  return hasAuthenticated;
}

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * Renders child components if user is authenticated
 * @param props
 */

function AuthenticatedTemplate({
  username,
  homeAccountId,
  localAccountId,
  children
}) {
  const context = useMsal();
  const accountIdentifier = react.useMemo(() => {
    return {
      username,
      homeAccountId,
      localAccountId
    };
  }, [username, homeAccountId, localAccountId]);
  const isAuthenticated = useIsAuthenticated(accountIdentifier);

  if (isAuthenticated && context.inProgress !== InteractionStatus.Startup) {
    return react.createElement(react.Fragment, null, getChildrenOrFunction(children, context));
  }

  return null;
}

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * Renders child components if user is unauthenticated
 * @param props
 */

function UnauthenticatedTemplate({
  username,
  homeAccountId,
  localAccountId,
  children
}) {
  const context = useMsal();
  const accountIdentifier = react.useMemo(() => {
    return {
      username,
      homeAccountId,
      localAccountId
    };
  }, [username, homeAccountId, localAccountId]);
  const isAuthenticated = useIsAuthenticated(accountIdentifier);

  if (!isAuthenticated && context.inProgress !== InteractionStatus.Startup) {
    return react.createElement(react.Fragment, null, getChildrenOrFunction(children, context));
  }

  return null;
}

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * Invokes a login call if a user is not currently signed-in. Failed logins can be retried using the login callback returned.
 * Optionally provide a request object to be used in the login call.
 * Optionally provide a specific user that should be logged in.
 * @param interactionType
 * @param authenticationRequest
 * @param accountIdentifiers
 */

function useMsalAuthentication(interactionType, authenticationRequest, accountIdentifiers) {
  const {
    instance,
    inProgress,
    logger
  } = useMsal();
  const isAuthenticated = useIsAuthenticated(accountIdentifiers);
  const [[result, error], setResponse] = react.useState([null, null]);
  const [hasBeenCalled, setHasBeenCalled] = react.useState(false);
  const login = react.useCallback(async (callbackInteractionType, callbackRequest) => {
    const loginType = callbackInteractionType || interactionType;
    const loginRequest = callbackRequest || authenticationRequest;

    switch (loginType) {
      case InteractionType.Popup:
        logger.verbose("useMsalAuthentication - Calling loginPopup");
        return instance.loginPopup(loginRequest);

      case InteractionType.Redirect:
        // This promise is not expected to resolve due to full frame redirect
        logger.verbose("useMsalAuthentication - Calling loginRedirect");
        return instance.loginRedirect(loginRequest).then(null);

      case InteractionType.Silent:
        logger.verbose("useMsalAuthentication - Calling ssoSilent");
        return instance.ssoSilent(loginRequest);

      default:
        throw "Invalid interaction type provided.";
    }
  }, [instance, interactionType, authenticationRequest, logger]);
  react.useEffect(() => {
    const callbackId = instance.addEventCallback(message => {
      switch (message.eventType) {
        case EventType.LOGIN_SUCCESS:
        case EventType.SSO_SILENT_SUCCESS:
          if (message.payload) {
            setResponse([message.payload, null]);
          }

          break;

        case EventType.LOGIN_FAILURE:
        case EventType.SSO_SILENT_FAILURE:
          if (message.error) {
            setResponse([null, message.error]);
          }

          break;
      }
    });
    logger.verbose(`useMsalAuthentication - Registered event callback with id: ${callbackId}`);
    return () => {
      if (callbackId) {
        logger.verbose(`useMsalAuthentication - Removing event callback ${callbackId}`);
        instance.removeEventCallback(callbackId);
      }
    };
  }, [instance, logger]);
  react.useEffect(() => {
    if (!hasBeenCalled && !error && !isAuthenticated && inProgress === InteractionStatus.None) {
      logger.info("useMsalAuthentication - No user is authenticated, attempting to login"); // Ensure login is only called one time from within this hook, any subsequent login attempts should use the callback returned

      setHasBeenCalled(true);
      login().catch(() => {
        // Errors are handled by the event handler above
        return;
      });
    }
  }, [isAuthenticated, inProgress, error, hasBeenCalled, login, logger]);
  return {
    login,
    result,
    error
  };
}

export { AuthenticatedTemplate, MsalProvider, UnauthenticatedTemplate, useIsAuthenticated, useMsal, useMsalAuthentication };
