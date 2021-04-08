var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorate = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
import {Ago} from "../web_modules/azure-devops-ui/Ago.js";
import {CardContent, CustomCard} from "../web_modules/azure-devops-ui/Card.js";
import {ObservableValue} from "../web_modules/azure-devops-ui/Core/Observable.js";
import {FormItem} from "../web_modules/azure-devops-ui/FormItem.js";
import {Header} from "../web_modules/azure-devops-ui/Header.js";
import {TextField} from "../web_modules/azure-devops-ui/TextField.js";
import {VssPersona} from "../web_modules/azure-devops-ui/VssPersona.js";
import {observer} from "../web_modules/mobx-react.js";
import * as React from "../web_modules/react.js";
import {Component} from "../web_modules/react.js";
import {Comment} from "./discussionStore.js";
export let Discussion = class extends Component {
  constructor() {
    super(...arguments);
    this.newCommentText = new ObservableValue("");
    this.newCommentError = new ObservableValue(false);
  }
  render() {
    const {store, user} = this.props;
    if (!store.secretHash)
      return null;
    return /* @__PURE__ */ React.createElement("div", {
      className: "bolt-page v-scroll-auto flex-column bolt-page-grey",
      style: {flex: "0 0 400px", padding: 32, paddingLeft: 8}
    }, /* @__PURE__ */ React.createElement(CustomCard, {
      className: "bolt-card-with-header flex-grow bolt-card-white"
    }, /* @__PURE__ */ React.createElement(Header, {
      title: "Discussion"
    }), /* @__PURE__ */ React.createElement(CardContent, {
      className: "swcDiscussionPane"
    }, store.comments.map((comment, i) => {
      const {who, when, text} = comment;
      return /* @__PURE__ */ React.createElement("div", {
        className: "swcCommentRowContent flex-row flex-start",
        key: i
      }, /* @__PURE__ */ React.createElement(VssPersona, {
        size: "small"
      }), /* @__PURE__ */ React.createElement("div", {
        className: "flex-column"
      }, /* @__PURE__ */ React.createElement("div", {
        className: "flex-row swcCommentTitle"
      }, /* @__PURE__ */ React.createElement("div", {
        className: "primary-text text-ellipsis swcCommentPerson"
      }, who), /* @__PURE__ */ React.createElement("div", {
        className: "secondary-text"
      }, /* @__PURE__ */ React.createElement(Ago, {
        date: new Date(when)
      }))), /* @__PURE__ */ React.createElement("div", {
        className: "secondary-text",
        style: {lineHeight: 1.5}
      }, text)));
    }), /* @__PURE__ */ React.createElement("div", {
      className: "flex-row",
      style: {marginTop: 8}
    }, /* @__PURE__ */ React.createElement(VssPersona, {
      size: "small"
    }), /* @__PURE__ */ React.createElement(FormItem, {
      error: this.newCommentError,
      className: "flex-grow"
    }, /* @__PURE__ */ React.createElement(TextField, {
      ariaLabel: "Write a comment...",
      placeholder: "Write a comment...",
      value: this.newCommentText,
      onChange: (e, newValue) => {
        this.newCommentText.value = newValue;
        this.newCommentError.value = !this.newCommentText.value;
      },
      onKeyPress: (e) => {
        if (e.key !== "Enter")
          return;
        e.preventDefault();
        store.comments.push(new Comment(user, new Date().toISOString(), this.newCommentText.value));
        this.newCommentText.value = "";
      },
      multiline: true,
      rows: 4
    }))))));
  }
};
Discussion = __decorate([
  observer
], Discussion);
