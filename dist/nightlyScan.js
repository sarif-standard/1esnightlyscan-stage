import {InteractionType} from "../web_modules/@azure/msal-browser.js";
import {AuthenticatedTemplate, UnauthenticatedTemplate, useIsAuthenticated, useMsal, useMsalAuthentication} from "../web_modules/@azure/msal-react.js";
import swc from "../web_modules/@microsoft/sarif-web-component.js";
import {Button} from "../web_modules/azure-devops-ui/Button.js";
import {MoreButton} from "../web_modules/azure-devops-ui/Menu.js";
import {Spinner} from "../web_modules/azure-devops-ui/Spinner.js";
import React, {useEffect, useState} from "../web_modules/react.js";
import {Age} from "./age.js";
import {Discussion2} from "./discussion2.js";
import {DiscussionStore} from "./discussionStore.js";
import {download} from "./download.js";
import {instance} from "./publicClientApplication.js";
import {RepoStatus} from "./repoStatus.js";
import {RevalidateButton} from "./revalidateButton.js";
import {sarifLogSomeResults, sarifLogZeroResults} from "./sampleSarifLog.js";
import params from "./searchParams.js";
const {Viewer} = swc;
const discussionStore = new DiscussionStore(instance, params.secretHash);
export function NightlyScan() {
  const isAuthenticated = useIsAuthenticated();
  const {instance: instance2, accounts} = useMsal();
  const {login} = useMsalAuthentication(InteractionType.Silent, {scopes: []});
  const [loading, setLoading] = useState(false);
  const [sarif, setSarif] = useState();
  const [getSnippets, setGetSnippets] = useState();
  const [repoEnabled, setRepoEnabled] = useState(params.mockRepoEnabled);
  const isRespository = repoEnabled != void 0;
  async function callApi(funcName, method) {
    const headers = new Headers();
    const {accessToken: funcToken} = await instance2.acquireTokenSilent({
      account: instance2.getAllAccounts()[0],
      scopes: ["api://f42dbafe-6e53-4dce-b025-cc4df39fb5cc/Ruleset.read"]
    });
    headers.append("Authorization", `Bearer ${funcToken}`);
    const {accessToken: adoToken} = await instance2.acquireTokenSilent({
      account: instance2.getAllAccounts()[0],
      scopes: ["499b84ac-1321-427f-aa17-267ca6975798/user_impersonation"]
    });
    const outboundParams = new URLSearchParams(window.location.search);
    outboundParams.set("token", adoToken);
    return await fetch(`https://sarif-pattern-matcher-internal-function.azurewebsites.net/api/${funcName}?${outboundParams}`, {method, headers});
  }
  useEffect(() => {
    if (!isAuthenticated)
      return;
    if (loading)
      return;
    if (sarif)
      return;
    if (params.mockZeroResults) {
      setSarif(sarifLogZeroResults);
      if (params.mockRepoEnabled === void 0) {
        const repoDisabled = sarifLogZeroResults?.runs?.[0]?.versionControlProvenance?.[0]?.properties?.isDisabled;
        setRepoEnabled(repoDisabled == void 0 ? void 0 : !repoDisabled);
      }
      return;
    }
    if (params.mockSomeResults) {
      setSarif(sarifLogSomeResults);
      if (params.mockRepoEnabled === void 0) {
        const repoDisabled = sarifLogZeroResults?.runs?.[0]?.versionControlProvenance?.[0]?.properties?.isDisabled;
        setRepoEnabled(repoDisabled == void 0 ? void 0 : !repoDisabled);
      }
      return;
    }
    ;
    (async () => {
      setLoading(true);
      try {
        const response = await callApi("query");
        const responseJson = await response.json();
        if (params.download && accounts[0]?.username === "mikefan@microsoft.com") {
          const fileName = params.repository ?? params.repo ?? "results";
          download(`${fileName}.sarif`, JSON.stringify(responseJson, null, "  "));
        }
        setSarif(responseJson);
        if (params.mockRepoEnabled === void 0) {
          const repoDisabled = responseJson?.runs?.[0]?.versionControlProvenance?.[0]?.properties?.isDisabled;
          setRepoEnabled(repoDisabled == void 0 ? void 0 : !repoDisabled);
        }
      } catch (error) {
        alert(error);
      }
      setLoading(false);
    })();
  }, [isAuthenticated]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(UnauthenticatedTemplate, null, /* @__PURE__ */ React.createElement("div", {
    className: "intro"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "introHeader"
  }, /* @__PURE__ */ React.createElement("h1", null, document.title))), /* @__PURE__ */ React.createElement("div", {
    className: "center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex-column flex-center"
  }, /* @__PURE__ */ React.createElement(Button, {
    onClick: () => login(InteractionType.Popup, {scopes: []})
  }, "Sign in"), /* @__PURE__ */ React.createElement("div", {
    className: "signinMessage"
  }, "Sign in to view scan results.")))), /* @__PURE__ */ React.createElement(AuthenticatedTemplate, null, /* @__PURE__ */ React.createElement("div", {
    className: "intro"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "introHeader"
  }, /* @__PURE__ */ React.createElement("h1", null, document.title, ": Live Secrets"), /* @__PURE__ */ React.createElement(Age, null), loading && /* @__PURE__ */ React.createElement(Spinner, null), /* @__PURE__ */ React.createElement(RevalidateButton, {
    disabled: !sarif,
    getSnippets
  }), /* @__PURE__ */ React.createElement(Button, {
    iconProps: {iconName: "Mail"},
    href: `mailto:caicredremediation@microsoft.com?subject=${encodeURIComponent(document.location.toString())}`
  }), /* @__PURE__ */ React.createElement(Button, {
    iconProps: {iconName: "Help"},
    href: "https://aka.ms/1esnightlyscan/help",
    target: "_blank"
  }), /* @__PURE__ */ React.createElement(MoreButton, {
    contextualMenuProps: {
      menuProps: {id: "moreMenu", items: [
        {
          id: "signOut",
          text: `Sign out ${accounts[0]?.username}`,
          onActivate: () => void instance2.logout()
        }
      ]}
    }
  }))), /* @__PURE__ */ React.createElement("div", {
    className: `viewer ${sarif ? "viewerActive" : ""}`
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex-column"
  }, /* @__PURE__ */ React.createElement(RepoStatus, {
    repository: params.repository ?? params.repo ?? "",
    repoEnabled,
    sarif,
    fetchSpam: callApi,
    setRepoEnabled
  }), /* @__PURE__ */ React.createElement(Viewer, {
    logs: sarif && [sarif],
    filterState: {
      Keywords: {value: params.filterKeywords},
      Baseline: {value: ["new", "unchanged", "updated"]},
      Level: {value: ["error"]}
    },
    hideBaseline: true,
    successMessage: isRespository ? `No live secrets have been detected in the '${params.repository ?? params.repo}' repository. Nice job!` : "No live secrets detected.",
    onCreate: (getFilteredContextRegionSnippetTexts) => {
      setGetSnippets(() => getFilteredContextRegionSnippetTexts);
    }
  })), /* @__PURE__ */ React.createElement(Discussion2, {
    store: discussionStore,
    user: accounts[0]?.username ?? "Anonymous"
  }))));
}
