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
import {CosmosClient} from "../web_modules/@azure/cosmos.js";
import {observable} from "../web_modules/mobx.js";
import {deepObserve} from "../web_modules/mobx-utils.js";
export class Comment {
  constructor(who, when, text) {
    this.who = who;
    this.when = when;
    this.text = text;
  }
}
export class DiscussionStore {
  constructor(secretHash) {
    this.secretHash = secretHash;
    this.comments = [];
    if (!secretHash)
      return;
    const client = new CosmosClient({
      endpoint: "https://jeff-cosmos-db.documents.azure.com:443/",
      key: "SrBeW9VezroEZJZzuI4K1N3pKiDWM66YtHZy3U1Z5CEmqGizo89955IJIFltcE1ccXUTn1Vf2cNig5o4bYJJLQ=="
    });
    (async () => {
      const container = this.container = await client.database("demo").container("secretHash");
      try {
        await container.items.create({
          id: secretHash,
          comments: []
        });
      } catch (error) {
        if (error.code !== 409)
          console.error(error);
      }
      const {resources} = await container.items.query(`SELECT * FROM c WHERE c.id = "${secretHash}"`).fetchAll();
      this.comments = resources[0]?.comments ?? [];
      deepObserve(this.comments, () => this.publish());
    })();
  }
  publish() {
    if (!this.secretHash)
      return;
    this.container?.item(this.secretHash).replace({
      id: this.secretHash,
      comments: this.comments
    });
  }
}
__decorate([
  observable
], DiscussionStore.prototype, "comments", 2);
