import {Button} from "../web_modules/azure-devops-ui/Button.js";
import {TextField} from "../web_modules/azure-devops-ui/TextField.js";
import * as React from "../web_modules/react.js";
import {useState} from "../web_modules/react.js";
import {roleItems, voteItems} from "./discussion.js";
import {MultipleDropdown} from "./multipleDropdown.js";
import {Checkbox} from "../web_modules/azure-devops-ui/Checkbox.js";
export function CommentEditor2(props) {
  const [votes, setVotes] = useState(props.comment.votes);
  const [roles, setRoles] = useState(props.comment.roles);
  const [text, setText] = useState(props.comment.text);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "flex-column margin-bottom-8 rhythm-vertical-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "secondary-text"
  }, "Please check all that apply"), voteItems.map((voteItem) => /* @__PURE__ */ React.createElement(Checkbox, {
    key: voteItem.id,
    label: voteItem.text,
    checked: votes.includes(voteItem.id),
    onChange: (_event, checked) => {
      if (checked) {
        if (!votes.includes(voteItem.id))
          setVotes([...votes, voteItem.id]);
      } else {
        setVotes(votes.filter((v) => v !== voteItem.id));
      }
    }
  }))), /* @__PURE__ */ React.createElement("div", null, "Role"), /* @__PURE__ */ React.createElement(MultipleDropdown, {
    className: "margin-bottom-8",
    placeholder: "Role",
    items: roleItems,
    values: Array.isArray(roles) ? roles : [],
    onChange: (values) => setRoles(values)
  }), /* @__PURE__ */ React.createElement("div", null, "Comments"), /* @__PURE__ */ React.createElement(TextField, {
    ariaLabel: "Write a comment...",
    placeholder: "Write a comment...",
    value: text,
    onChange: (_e, newValue) => setText(newValue),
    multiline: true,
    rows: 5
  }), /* @__PURE__ */ React.createElement("div", {
    className: "margin-top-8 flex-row justify-end rhythm-horizontal-8"
  }, /* @__PURE__ */ React.createElement(Button, {
    text: "Cancel",
    onClick: () => props.onCancel()
  }), /* @__PURE__ */ React.createElement(Button, {
    text: "Done",
    primary: true,
    className: "margin-right-8",
    onClick: () => props.onUpdate(roles, votes, text)
  })));
}
