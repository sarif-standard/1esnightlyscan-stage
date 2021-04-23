import {PublicClientApplication} from "../web_modules/@azure/msal-browser.js";
import {MsalProvider} from "../web_modules/@azure/msal-react.js";
import React from "../web_modules/react.js";
import ReactDOM from "../web_modules/react-dom.js";
import {App} from "./app.js";
const instance = new PublicClientApplication({
  auth: {
    clientId: "1c5cf812-7307-4f30-9c68-9e4371110062",
    authority: "https://login.microsoftonline.com/72f988bf-86f1-41af-91ab-2d7cd011db47"
  }
});
ReactDOM.render(/* @__PURE__ */ React.createElement(MsalProvider, {
  instance
}, /* @__PURE__ */ React.createElement(App, null)), document.getElementById("root"));
