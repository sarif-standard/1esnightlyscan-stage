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
import {Card} from "../web_modules/azure-devops-ui/Card.js";
import {VssPersona} from "../web_modules/azure-devops-ui/VssPersona.js";
import {observable, runInAction} from "../web_modules/mobx.js";
import {observer} from "../web_modules/mobx-react.js";
import * as React from "../web_modules/react.js";
import {Component} from "../web_modules/react.js";
import {CommentEditor2} from "./commentEditor2.js";
import {Comment} from "./discussionStore.js";
import {SurfaceBackground, SurfaceContext} from "../web_modules/azure-devops-ui/Surface.js";
import {Page} from "../web_modules/azure-devops-ui/Page.js";
import {Button} from "../web_modules/azure-devops-ui/Button.js";
import {roleMap, voteMap} from "./discussion.js";
import {Pill, PillSize} from "../web_modules/azure-devops-ui/Pill.js";
function Meter(props) {
  const {value, maxValue} = props;
  return value ? /* @__PURE__ */ React.createElement("div", {
    className: "meter margin-top-8",
    style: {width: `${value / maxValue * 100}%`}
  }) : /* @__PURE__ */ React.createElement("div", {
    className: "meter margin-top-8 meter-empty"
  });
}
function PersonaStack(props) {
  const {names} = props;
  const personas = names.slice(0, 3).map((name, i) => /* @__PURE__ */ React.createElement(VssPersona, {
    key: i,
    displayName: name,
    size: "extra-extra-small",
    className: `personaStacking zIndex-${2 - i}`
  }));
  const moreThanThree = names.slice(3);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, personas, !!moreThanThree.length && /* @__PURE__ */ React.createElement(Pill, {
    size: PillSize.compact,
    className: "margin-left-4"
  }, "+", moreThanThree.length));
}
export let Discussion2 = class extends Component {
  constructor() {
    super(...arguments);
    this.commentBeingEdited = void 0;
  }
  render() {
    const {commentBeingEdited} = this;
    const {store, user} = this.props;
    const sorted = store.comments.slice().sort((a, b) => new Date(b.when).getTime() - new Date(a.when).getTime());
    const voteCounts = new Map([...voteMap.keys()].map((key) => [key, []]));
    store.comments.forEach((comment) => {
      comment.votes.forEach((vote) => {
        voteCounts.get(vote).push(comment.who);
      });
    });
    const voteItems = [...voteCounts.entries()].map(([id, names]) => ({id, names}));
    voteItems.sort((a, b) => b.names.length - a.names.length);
    const maxCount = voteItems.reduce((max, curr) => Math.max(max, curr.names.length), 1);
    const userAlreadyLeftAComment = store.comments.some((comment) => comment.who === user);
    return /* @__PURE__ */ React.createElement(SurfaceContext.Provider, {
      value: {background: SurfaceBackground.neutral}
    }, /* @__PURE__ */ React.createElement(Page, {
      className: "discussion2 rhythm-vertical-16"
    }, /* @__PURE__ */ React.createElement(Card, {
      titleProps: {text: `Secret Hash: ${"abc"}`}
    }, /* @__PURE__ */ React.createElement("div", {
      className: "flex-column rhythm-vertical-16"
    }, voteItems.map((voteItem) => /* @__PURE__ */ React.createElement("div", {
      key: voteItem.id,
      className: "flex-column"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "flex-row"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "flex-grow text-ellipsis"
    }, voteMap.get(voteItem.id)), /* @__PURE__ */ React.createElement("div", {
      className: "flex-row flex-center"
    }, /* @__PURE__ */ React.createElement(PersonaStack, {
      names: voteItem.names
    }))), /* @__PURE__ */ React.createElement(Meter, {
      value: voteItem.names.length,
      maxValue: maxCount
    }))))), /* @__PURE__ */ React.createElement("div", {
      className: "flex-row justify-end"
    }, /* @__PURE__ */ React.createElement(Button, {
      text: "Leave a comment",
      primary: true,
      onClick: () => {
        const comment = JSON.parse(JSON.stringify(new Comment(user, new Date().toISOString(), [], [], "")));
        store.comments.push(comment);
        this.commentBeingEdited = store.comments[store.comments.length - 1];
      },
      disabled: userAlreadyLeftAComment,
      tooltipProps: userAlreadyLeftAComment ? {text: "One comment per user"} : void 0
    })), sorted.map((comment, i) => /* @__PURE__ */ React.createElement(Card, {
      key: i,
      titleProps: {
        text: /* @__PURE__ */ React.createElement("span", {
          className: "flex-row rhythm-horizontal-8"
        }, /* @__PURE__ */ React.createElement(VssPersona, {
          key: i,
          displayName: comment.who,
          size: "small"
        }), /* @__PURE__ */ React.createElement("span", {
          className: "flex-column justify-center rhythm-vertical-4"
        }, /* @__PURE__ */ React.createElement("span", {
          className: "flex-row body-m rhythm-horizontal-8"
        }, /* @__PURE__ */ React.createElement("span", null, comment.who), /* @__PURE__ */ React.createElement(Ago, {
          date: new Date(comment.when),
          className: "secondary-text"
        }))))
      },
      headerCommandBarItems: comment.who === user && commentBeingEdited !== comment ? [
        {
          id: "edit",
          iconProps: {iconName: "Edit"},
          disabled: commentBeingEdited === comment,
          onActivate: () => void (this.commentBeingEdited = comment)
        },
        {
          id: "delete",
          iconProps: {iconName: "Delete"},
          text: "Delete",
          important: false,
          onActivate: () => {
            const i2 = store.comments.findIndex((storeComment) => storeComment.who === comment.who);
            store.comments.splice(i2, 1);
          }
        }
      ] : void 0,
      contentProps: {className: "rhythm-vertical-8"}
    }, commentBeingEdited === comment ? /* @__PURE__ */ React.createElement(CommentEditor2, {
      comment,
      onCancel: () => {
        this.commentBeingEdited = void 0;
      },
      onUpdate: (role, vote, text) => {
        runInAction(() => {
          comment.when = new Date().toISOString();
          comment.roles = role;
          comment.votes = vote;
          comment.text = text;
        });
        this.commentBeingEdited = void 0;
      }
    }) : /* @__PURE__ */ React.createElement(React.Fragment, null, !!comment.votes.length && /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("strong", null, "Vote", comment.votes.length > 1 ? "s" : "", ":"), " ", comment.votes.map((vote) => voteMap.get(vote)).join(" ")), !!comment.roles.length && /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("strong", null, "Role", comment.roles.length > 1 ? "s" : "", ":"), " ", comment.roles.map((role) => roleMap.get(role)).join(" ")), !!comment.text && /* @__PURE__ */ React.createElement("div", {
      className: "margin-top-12"
    }, /* @__PURE__ */ React.createElement("strong", null, "Comments:"), " ", comment.text))))));
  }
};
__decorate([
  observable
], Discussion2.prototype, "commentBeingEdited", 2);
Discussion2 = __decorate([
  observer
], Discussion2);
