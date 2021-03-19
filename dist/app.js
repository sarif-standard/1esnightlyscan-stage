import {InteractionType} from "../web_modules/@azure/msal-browser.js";
import {AuthenticatedTemplate, UnauthenticatedTemplate, useIsAuthenticated, useMsal, useMsalAuthentication} from "../web_modules/@azure/msal-react.js";
import swc from "../web_modules/@microsoft/sarif-web-component.js";
import {Button} from "../web_modules/azure-devops-ui/Button.js";
import {Card} from "../web_modules/azure-devops-ui/Card.js";
import {Checkbox} from "../web_modules/azure-devops-ui/Checkbox.js";
import {Icon, IconSize} from "../web_modules/azure-devops-ui/Icon.js";
import {Page} from "../web_modules/azure-devops-ui/Page.js";
import {Spinner} from "../web_modules/azure-devops-ui/Spinner.js";
import dayjs from "../web_modules/dayjs.js";
import relativeTime from "../web_modules/dayjs/plugin/relativeTime.js";
import timezone from "../web_modules/dayjs/plugin/timezone.js";
import utc from "../web_modules/dayjs/plugin/utc.js";
import React, {useEffect, useState} from "../web_modules/react.js";
const {Viewer} = swc;
dayjs.extend(relativeTime);
dayjs.extend(timezone);
dayjs.extend(utc);
const sarifLogZeroResults = {
  version: "2.1.0",
  runs: [{
    tool: {
      driver: {
        name: "Sample Tool"
      }
    },
    versionControlProvenance: [
      {
        properties: {
          isDisabled: false
        }
      }
    ]
  }]
};
const params = new URLSearchParams(window.location.search);
const {repo, repository} = Object.fromEntries(params.entries());
const filterKeywords = params.get("filterKeywords") ?? "";
const paramDownload = params.get("download") != null;
const mockRepoEnabled = (() => {
  const value = params.get("mockRepoEnabled");
  if (value === "true")
    return true;
  if (value === "false")
    return false;
  return void 0;
})();
const mockZeroResults = (() => {
  const value = params.get("mockZeroResults");
  if (value === "")
    return true;
  return void 0;
})();
let getSnippets;
function download(saveAs, contents) {
  const a = document.createElement("a");
  a.setAttribute("href", `data:text/json;base64,${btoa(contents)}`);
  a.setAttribute("download", saveAs);
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
export function App() {
  const isAuthenticated = useIsAuthenticated();
  const {instance, accounts} = useMsal();
  const {login} = useMsalAuthentication(InteractionType.Silent, {scopes: []});
  const [loading, setLoading] = useState(false);
  const [sarif, setSarif] = useState();
  const [getSnippetsReady, setGetSnippetsReady] = useState(false);
  const [responsibility, setResponsibility] = useState(false);
  const [repoEnabled, setRepoEnabled] = useState(mockRepoEnabled);
  const isRespository = repoEnabled != void 0;
  async function fetchSpam(funcName, method) {
    const headers = new Headers();
    const {accessToken: funcToken} = await instance.acquireTokenSilent({
      account: instance.getAllAccounts()[0],
      scopes: ["api://f42dbafe-6e53-4dce-b025-cc4df39fb5cc/Ruleset.read"]
    });
    headers.append("Authorization", `Bearer ${funcToken}`);
    const {accessToken: adoToken} = await instance.acquireTokenSilent({
      account: instance.getAllAccounts()[0],
      scopes: ["499b84ac-1321-427f-aa17-267ca6975798/user_impersonation"]
    });
    const outboundParams = new URLSearchParams(params);
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
    if (mockZeroResults) {
      setSarif(sarifLogZeroResults);
      if (mockRepoEnabled === void 0) {
        const repoDisabled = sarifLogZeroResults?.runs?.[0]?.versionControlProvenance?.[0]?.properties?.isDisabled;
        setRepoEnabled(repoDisabled == void 0 ? void 0 : !repoDisabled);
      }
      return;
    }
    ;
    (async () => {
      setLoading(true);
      try {
        const response = await fetchSpam("query");
        const responseJson = await response.json();
        if (paramDownload) {
          const fileName = repository ?? repo ?? "results";
          download(`${fileName}.sarif`, JSON.stringify(responseJson, null, "  "));
        }
        setSarif(responseJson);
        if (mockRepoEnabled === void 0) {
          const repoDisabled = responseJson?.runs?.[0]?.versionControlProvenance?.[0]?.properties?.isDisabled;
          setRepoEnabled(repoDisabled == void 0 ? void 0 : !repoDisabled);
        }
      } catch (error) {
        alert(error);
      }
      setLoading(false);
    })();
  }, [isAuthenticated]);
  const resultCount = sarif?.runs?.reduce((acc, run) => {
    return acc + (run.results?.filter((result) => result.level === "error").length ?? 0);
  }, 0);
  const scanAge = (() => {
    const local = dayjs();
    const pacific = local.tz("America/Los_Angeles");
    const pacificMidnight = pacific.startOf("day");
    const pacificNoon = pacificMidnight.add(12, "hour");
    return pacific >= pacificNoon ? pacificNoon.from(pacific) : pacificMidnight.from(pacific);
  })();
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
  }, "Sign in to view repository status", /* @__PURE__ */ React.createElement("br", null), "and live secrets that require remediation.")))), /* @__PURE__ */ React.createElement(AuthenticatedTemplate, null, /* @__PURE__ */ React.createElement("div", {
    className: "intro"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "introHeader"
  }, /* @__PURE__ */ React.createElement("h1", null, document.title), /* @__PURE__ */ React.createElement("span", null, "Current as of ", scanAge), loading && /* @__PURE__ */ React.createElement(Spinner, null), /* @__PURE__ */ React.createElement(Button, {
    disabled: !sarif || !getSnippetsReady,
    onClick: () => {
      const spamcopUrl = "https://sarif-standard.github.io/spamcop/";
      const spamcop = open(spamcopUrl);
      if (!spamcop)
        return;
      setTimeout(() => {
        spamcop.postMessage(getSnippets().join("\n\n"), spamcopUrl);
      }, 500);
    }
  }, "Revalidate Now"), /* @__PURE__ */ React.createElement(Button, {
    onClick: () => instance.logout()
  }, "Sign out ", accounts[0]?.username), /* @__PURE__ */ React.createElement(Button, {
    iconProps: {iconName: "Mail"},
    href: `mailto:caicredremediation@microsoft.com?subject=${encodeURIComponent(document.location.toString())}`
  }), /* @__PURE__ */ React.createElement(Button, {
    iconProps: {iconName: "Help"},
    href: "https://aka.ms/1esnightlyscan/help",
    target: "_blank"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: `viewer ${sarif ? "viewerActive" : ""}`
  }, (() => {
    if (!isRespository)
      return null;
    if (repoEnabled && !resultCount)
      return null;
    return /* @__PURE__ */ React.createElement(Page, {
      className: "heightAuto bolt-page-grey"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "page-content page-content-top"
    }, /* @__PURE__ */ React.createElement(Card, null, repoEnabled ? /* @__PURE__ */ React.createElement("div", {
      className: "flex-row flex-center"
    }, /* @__PURE__ */ React.createElement(Icon, {
      iconName: "Unlock",
      size: IconSize.large
    }), /* @__PURE__ */ React.createElement("div", {
      style: {marginLeft: 16}
    }, "The '", repository ?? repo, "' repository contains live secrets in its source code or history. All repositories inside Microsoft must be free of secrets. The repository is temporarily enabled in order to assist with remediation. If the below issues are not remediated, this repository will be disabled.")) : /* @__PURE__ */ React.createElement("div", {
      className: "flex-row flex-center"
    }, /* @__PURE__ */ React.createElement(Icon, {
      iconName: "Lock",
      size: IconSize.large
    }), /* @__PURE__ */ React.createElement("div", {
      className: "flex-grow",
      style: {margin: "0 32px 0 16px"}
    }, !resultCount ? /* @__PURE__ */ React.createElement("div", null, "No live secrets were detected. This repository is currently disabled (due to system refresh latency or missing repository ownership information). Click 'Enable Repository' to enable the repository.") : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", null, "The '", repository ?? repo, "' repository has been disabled because it contains live secrets in its source code or history. All repositories inside Microsoft must be free of secrets. You may temporarily enable this repository by clicking the 'Enable Repository' button. Your identity will be associated with this request."), /* @__PURE__ */ React.createElement("div", {
      style: {marginTop: 12}
    }, /* @__PURE__ */ React.createElement(Checkbox, {
      label: "I understand that by enabling this repository, I accept responsibility to ensure all currently exposed secrets are invalidated within 72 hours.",
      checked: responsibility,
      onChange: (_, checked) => setResponsibility(checked)
    })))), /* @__PURE__ */ React.createElement(Button, {
      disabled: !!resultCount && !responsibility,
      onClick: async () => {
        try {
          const response = await fetchSpam("enable", "PATCH");
          if (response.status !== 200)
            throw new Error(response.statusText);
          setRepoEnabled(true);
        } catch (error) {
          alert(error);
        }
      },
      primary: true
    }, "Enable Repository")))));
  })(), /* @__PURE__ */ React.createElement(Viewer, {
    logs: sarif && [sarif],
    filterState: {
      Keywords: {value: filterKeywords},
      Baseline: {value: ["new", "unchanged", "updated"]},
      Level: {value: ["error"]}
    },
    hideBaseline: true,
    successMessage: isRespository ? `No live secrets have been detected in the '${repository ?? repo}' repository. Nice job!` : "No live secrets detected.",
    onCreate: (getFilteredContextRegionSnippetTexts) => {
      getSnippets = getFilteredContextRegionSnippetTexts;
      setGetSnippetsReady(true);
    }
  }))));
}
