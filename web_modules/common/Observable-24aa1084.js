import './index-abdc4d2d.js';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

/**
 * An Observable implementation that will track a set of subscribers and supports
 * notifications when the underlying system changes.
 */
var Observable = /** @class */ (function () {
    function Observable() {
        this.observers = {};
        this.subscriberCount = 0;
    }
    /**
     * notify is used to send the event to all subscribers that have signed up for this events
     * action. This means they have subscribed directly to this action, or to all actions.
     * If the caller requested the event be persisted the event will be fired in order to new
     * subscribers as well when they subscribe.
     *
     * @param value - The object that represents the event data.
     *
     * @param action - The action that happened on this observable to produce the event.
     *
     * @param persistEvent - Optional value that determines if all future subscribers will
     *  recieve the event as well.
     */
    Observable.prototype.notify = function (value, action, persistEvent) {
        var executeObserverAction = function (observer, value, action) {
            try {
                observer(value, action);
            }
            catch (ex) {
                console.warn(ex);
                if (ex && typeof ErrorEvent === "function") {
                    window.dispatchEvent(new ErrorEvent("error", {
                        error: ex,
                        filename: "Observable.ts",
                        message: ex.message
                    }));
                }
            }
        };
        // NOTE: We need to make a copy of the observers since they may change during notification.
        if (this.observers[action]) {
            var observers = this.observers[action].slice();
            for (var observerIndex = 0; observerIndex < observers.length; observerIndex++) {
                executeObserverAction(observers[observerIndex], value, action);
            }
        }
        if (this.observers[""]) {
            var observers = this.observers[""].slice();
            for (var observerIndex = 0; observerIndex < observers.length; observerIndex++) {
                executeObserverAction(observers[observerIndex], value, action);
            }
        }
        // If the caller wants this event sent to all subscribers, even future ones, track it.
        if (persistEvent) {
            if (!this.events) {
                this.events = [];
            }
            this.events.push({ action: action, value: value });
        }
    };
    Observable.prototype.subscribe = function (observer, action) {
        action = action || "";
        if (!this.observers[action]) {
            this.observers[action] = [];
        }
        this.observers[action].push(observer);
        this.subscriberCount++;
        // Fire the callback for any events that were persisted when they were sent.
        if (this.events) {
            for (var _i = 0, _a = this.events; _i < _a.length; _i++) {
                var event_1 = _a[_i];
                if (!action || event_1.action === action) {
                    observer(event_1.value, event_1.action);
                }
            }
        }
    };
    Observable.prototype.unsubscribe = function (observer, action) {
        action = action || "";
        if (this.observers[action]) {
            var observerIndex = this.observers[action].indexOf(observer);
            if (observerIndex >= 0) {
                this.observers[action].splice(observerIndex, 1);
                this.subscriberCount--;
            }
        }
    };
    return Observable;
}());
var ObservableLike;
(function (ObservableLike) {
    /**
     * Check whether the specified object is an observable or not.
     *
     * @param observableLike Object to perform observable check.
     */
    function isObservable(observableLike) {
        return observableLike && typeof observableLike.subscribe === "function";
    }
    ObservableLike.isObservable = isObservable;
    function getValue(observableLike) {
        if (isObservable(observableLike)) {
            return observableLike.value;
        }
        return observableLike;
    }
    ObservableLike.getValue = getValue;
    /**
     * Subscribes to the specified object if it is an observable.
     *
     * @param observableLike Object to subscribe its value change if applicable.
     * @param observer Delegate to be executed when the underlying data changes.
     * @param action Optional argument that allows the consumer to supply a action
     *  with the delegate. If the action is supplied only those actions are delievered,
     *  while all actions are delivered is no action is supplied.
     */
    function subscribe(observableLike, observer, action) {
        if (isObservable(observableLike)) {
            observableLike.subscribe(observer, action);
        }
    }
    ObservableLike.subscribe = subscribe;
    /**
     * Unsubscribes from the specified object if it is an observable.
     *
     * @param observableLike Object to subscribe its value change if applicable.
     * @param observer Delegate to be executed when the underlying data changes.
     * @param action Optional argument that allows the consumer to supply a action
     *  with the delegate. If the action is supplied only those actions are delievered,
     *  while all actions are delivered is no action is supplied.
     */
    function unsubscribe(observableLike, observer, action) {
        if (isObservable(observableLike)) {
            observableLike.unsubscribe(observer, action);
        }
    }
    ObservableLike.unsubscribe = unsubscribe;
})(ObservableLike || (ObservableLike = {}));
var ObservableValue = /** @class */ (function (_super) {
    __extends(ObservableValue, _super);
    function ObservableValue(value) {
        var _this = _super.call(this) || this;
        _this.v = value;
        return _this;
    }
    Object.defineProperty(ObservableValue.prototype, "value", {
        get: function () {
            return this.v;
        },
        set: function (value) {
            this.v = value;
            this.notify(this.v, "set");
        },
        enumerable: true,
        configurable: true
    });
    return ObservableValue;
}(Observable));
/**
 * An ObservableObject can be used to key a named collection of properties
 * and offer an observable endpoint.
 */
/** @class */ ((function (_super) {
    __extends(ObservableObject, _super);
    function ObservableObject() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.objects = {};
        return _this;
    }
    ObservableObject.prototype.add = function (objectName, objectDefinition) {
        if (!this.objects.hasOwnProperty(objectName)) {
            this.objects[objectName] = objectDefinition;
            this.notify({ key: objectName, value: objectDefinition }, "add");
        }
    };
    ObservableObject.prototype.get = function (objectName) {
        return this.objects[objectName];
    };
    ObservableObject.prototype.set = function (objectName, objectDefinition) {
        if (this.objects.hasOwnProperty(objectName)) {
            this.objects[objectName] = objectDefinition;
            this.notify({ key: objectName, value: objectDefinition }, "replace");
        }
        else {
            this.add(objectName, objectDefinition);
        }
    };
    ObservableObject.prototype.keys = function () {
        return Object.keys(this.objects);
    };
    return ObservableObject;
})(Observable));
/**
 * EventTypes:
 *  change - { changedItems, index }
 *  push - {addedItems, index }
 *  pop - { index, removedItems}
 *  removeAll - {index, removedItems }
 *  splice - { addedItems, index, removedItems }
 */
var ObservableArray = /** @class */ (function (_super) {
    __extends(ObservableArray, _super);
    function ObservableArray(items) {
        if (items === void 0) { items = []; }
        var _this = _super.call(this) || this;
        _this.internalItems = items || [];
        return _this;
    }
    ObservableArray.prototype.change = function (start) {
        var _a;
        var items = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            items[_i - 1] = arguments[_i];
        }
        (_a = this.internalItems).splice.apply(_a, __spreadArrays([start, items.length], items));
        this.notify({ index: start, changedItems: items }, "change");
        return items.length;
    };
    Object.defineProperty(ObservableArray.prototype, "length", {
        get: function () {
            return this.internalItems.length;
        },
        enumerable: true,
        configurable: true
    });
    ObservableArray.prototype.push = function () {
        var _a;
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        if (items.length) {
            var index = this.internalItems.length;
            (_a = this.internalItems).push.apply(_a, items);
            this.notify({ addedItems: items, index: index }, "push");
        }
        return items.length;
    };
    ObservableArray.prototype.pop = function () {
        var item = this.internalItems.pop();
        if (item !== undefined) {
            this.notify({ index: this.internalItems.length, removedItems: [item] }, "pop");
        }
        return item;
    };
    ObservableArray.prototype.removeAll = function (filter) {
        var removedItems = [];
        var remainingItems = [];
        for (var _i = 0, _a = this.internalItems; _i < _a.length; _i++) {
            var item = _a[_i];
            if (!filter || filter(item)) {
                removedItems.push(item);
            }
            else {
                remainingItems.push(item);
            }
        }
        if (removedItems.length > 0) {
            this.internalItems.splice(0, this.internalItems.length);
            for (var _b = 0, remainingItems_1 = remainingItems; _b < remainingItems_1.length; _b++) {
                var item = remainingItems_1[_b];
                this.internalItems.push(item);
            }
            this.notify({ index: 0, removedItems: removedItems }, "removeAll");
        }
        return removedItems;
    };
    ObservableArray.prototype.splice = function (start, deleteCount) {
        var _a;
        var itemsToAdd = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            itemsToAdd[_i - 2] = arguments[_i];
        }
        var removedItems = (_a = this.internalItems).splice.apply(_a, __spreadArrays([start, deleteCount], itemsToAdd));
        this.notify({ addedItems: itemsToAdd, index: start, removedItems: removedItems }, "splice");
        return removedItems;
    };
    Object.defineProperty(ObservableArray.prototype, "value", {
        get: function () {
            return this.internalItems;
        },
        set: function (items) {
            // Preserve the original array, but avoid the "..." arguments issue with splice/push
            var removedItems;
            if (items === this.internalItems) {
                // Special case for someone passing us the same internal array that we are already using
                // We don't need to modify the internalItems. The "removedItems" in the event is
                // not going to be accurate in the case that someone modified this internal array
                // outside of the observable -- we won't know the prior state in that case.
                removedItems = this.internalItems;
            }
            else {
                // Clear out the existing items
                removedItems = this.internalItems.slice();
                this.internalItems.length = 0;
                // Add all new items
                if (items.length) {
                    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                        var item = items_1[_i];
                        this.internalItems.push(item);
                    }
                }
            }
            this.notify({ addedItems: items, index: 0, removedItems: removedItems }, "splice");
        },
        enumerable: true,
        configurable: true
    });
    return ObservableArray;
}(Observable));
/**
 * An Observable Collection takes an arry of arrays or observable arrays
 * and flattens out the items into a single readonly observable array
 * (with all the underlying array values aggregated together).
 *
 * This handles subscribing to any underlying observable arrays and
 * updating the aggregate array as appropriate (and notifying subscribers)
 */
/** @class */ ((function (_super) {
    __extends(ObservableCollection, _super);
    function ObservableCollection() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.collections = [];
        _this.items = [];
        return _this;
    }
    Object.defineProperty(ObservableCollection.prototype, "length", {
        get: function () {
            if (!this.subscriberCount) {
                this.recalculateItems();
            }
            return this.items.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ObservableCollection.prototype, "value", {
        get: function () {
            if (!this.subscriberCount) {
                this.recalculateItems();
            }
            return this.items;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Adds an additional collection of items to the end of the array
     *
     * @param collection Array of items or an observable array of items
     * @params transformItems Delegate to process each item that is pulled from the given collection
     */
    ObservableCollection.prototype.push = function (collection, transformItems) {
        var collectionEntry;
        var pushedItems;
        if (ObservableLike.isObservable(collection)) {
            var observable = collection;
            var subscriber = this.getSubscriber(this.collections.length, transformItems);
            collectionEntry = { observable: observable, subscriber: subscriber, transformItems: transformItems, items: [] };
            pushedItems = observable.value;
            if (this.subscriberCount) {
                ObservableLike.subscribe(collectionEntry.observable, subscriber);
            }
        }
        else if (collection.length) {
            pushedItems = collection;
            collectionEntry = { items: this.transformItems(pushedItems, transformItems) };
        }
        if (collectionEntry) {
            this.collections.push(collectionEntry);
            if (this.subscriberCount && pushedItems.length) {
                var newItems = this.transformItems(pushedItems, transformItems);
                for (var _i = 0, newItems_1 = newItems; _i < newItems_1.length; _i++) {
                    var newItem = newItems_1[_i];
                    this.items.push(newItem);
                }
                this.notify({ addedItems: newItems, index: this.items.length - newItems.length }, "push");
            }
        }
    };
    ObservableCollection.prototype.subscribe = function (observer, action) {
        _super.prototype.subscribe.call(this, observer, action);
        if (this.subscriberCount === 1) {
            this.recalculateItems();
            for (var _i = 0, _a = this.collections; _i < _a.length; _i++) {
                var collection = _a[_i];
                if (collection.subscriber) {
                    collection.observable.subscribe(collection.subscriber);
                }
            }
        }
    };
    ObservableCollection.prototype.unsubscribe = function (observer, action) {
        _super.prototype.unsubscribe.call(this, observer, action);
        if (this.subscriberCount === 0) {
            for (var _i = 0, _a = this.collections; _i < _a.length; _i++) {
                var collection = _a[_i];
                if (collection.subscriber) {
                    collection.observable.unsubscribe(collection.subscriber);
                }
            }
        }
    };
    /**
     * Recalculate items. This is necessary while we work without subscribers, as we're not listening to changes in observable inner collections.
     * Once the first subscriber joins, items collection will be in sync real-time.
     */
    ObservableCollection.prototype.recalculateItems = function () {
        this.items.length = 0;
        for (var _i = 0, _a = this.collections; _i < _a.length; _i++) {
            var collection = _a[_i];
            if (collection.observable) {
                collection.items = this.transformItems(collection.observable.value, collection.transformItems);
            }
            for (var _b = 0, _c = collection.items; _b < _c.length; _b++) {
                var item = _c[_b];
                this.items.push(item);
            }
        }
    };
    ObservableCollection.prototype.transformItems = function (inputItems, transformInput) {
        var transformedItems;
        if (!inputItems) {
            transformedItems = [];
        }
        else if (transformInput) {
            transformedItems = [];
            for (var _i = 0, inputItems_1 = inputItems; _i < inputItems_1.length; _i++) {
                var inputItem = inputItems_1[_i];
                var transformedItem = transformInput(inputItem);
                if (transformedItem !== undefined) {
                    transformedItems.push(transformedItem);
                }
            }
        }
        else {
            transformedItems = inputItems;
        }
        return transformedItems;
    };
    ObservableCollection.prototype.getSubscriber = function (collectionIndex, transformInput) {
        var _this = this;
        return function (args) {
            var _a;
            // Find the index in our aggregate array
            var index = args.index;
            for (var i = 0; i < collectionIndex; i++) {
                index += _this.collections[i].items.length;
            }
            if (args.changedItems) {
                // Handle change event
                var changedItems = _this.transformItems(args.changedItems, transformInput);
                (_a = _this.items).splice.apply(_a, __spreadArrays([index, args.changedItems.length], changedItems));
                _this.notify({ changedItems: changedItems, index: index }, "change");
            }
            else {
                // Handle splice, push, pop events
                var removedItems = _this.transformItems(args.removedItems, transformInput);
                var addedItems = _this.transformItems(args.addedItems, transformInput);
                // We would normally just call splice here with 3 arguments, but splice takes a "..." argument for added items
                // which passes array elements on the stack and is therefore limited (to 32K/64K on some browsers)
                // Remove the removedItems first
                _this.items.splice(index, removedItems.length);
                // Slice-off any remaining items past where we want to insert
                var endItems = _this.items.splice(index);
                // Push the addedItems followed by the endItems that we just removed
                for (var _i = 0, addedItems_1 = addedItems; _i < addedItems_1.length; _i++) {
                    var item = addedItems_1[_i];
                    _this.items.push(item);
                }
                for (var _b = 0, endItems_1 = endItems; _b < endItems_1.length; _b++) {
                    var item = endItems_1[_b];
                    _this.items.push(item);
                }
                _this.notify({ removedItems: removedItems, addedItems: addedItems, index: index }, "splice");
            }
        };
    };
    return ObservableCollection;
})(Observable));
/** @class */ ((function (_super) {
    __extends(ReadyableObservableArray, _super);
    function ReadyableObservableArray(items, ready) {
        if (items === void 0) { items = []; }
        if (ready === void 0) { ready = false; }
        var _this = _super.call(this, items) || this;
        _this.ready = new ObservableValue(ready);
        return _this;
    }
    return ReadyableObservableArray;
})(ObservableArray));

export { ObservableValue as O, __extends as _, __assign as a, __spreadArrays as b, ObservableLike as c, ObservableArray as d, __rest as e };
