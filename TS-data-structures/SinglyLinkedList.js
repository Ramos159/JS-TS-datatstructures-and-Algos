"use strict";
exports.__esModule = true;
var SingleListNode_1 = require("./SingleListNode");
var SinglyLinkedList = /** @class */ (function () {
    function SinglyLinkedList() {
        var _this = this;
        this.addToFrontOfTheList = function (value) {
            var node = new SingleListNode_1["default"](value);
            if (_this.head) {
                node.next = _this.head;
                _this.head = node;
                _this.size++;
            }
            else {
                _this.head = node;
                _this.tail = node;
                _this.size++;
            }
        };
        this.addToTheBackOfTheList = function (value) {
            var node = new SingleListNode_1["default"](value);
            if (_this.tail) {
                _this.tail.next = node;
                _this.tail = node;
                _this.size++;
            }
            else {
                _this.head = node;
                _this.tail = node;
                _this.size++;
            }
        };
        this.removeFirstNode = function (params) {
            if (_this.size === 0) {
                throw new Error("Can not remove first node, list is currently empty");
            }
            else if (_this.size === 1) {
                var node = _this.head;
                _this.head = null;
                _this.tail = null;
                _this.size--;
                return node;
            }
            else {
                var node = _this.head;
                _this.head = _this.head.next;
                node.next = null;
                _this.size--;
                return node;
            }
        };
        this.removeLastNode = function (params) {
            if (_this.size === 0) {
                throw new Error("Can not remove last node, list is currently empty");
            }
            else if (_this.size === 1) {
                var node = _this.head;
                _this.head = null;
                _this.tail = null;
                _this.size--;
                return node;
            }
            else {
                var oldTail = _this.head.next;
                var newTail = _this.head;
                while (oldTail.next != null) {
                    newTail = oldTail;
                    oldTail = oldTail.next;
                }
                _this.tail = newTail;
                newTail.next = null;
                _this.size--;
                return oldTail;
            }
        };
        this.getFirstNode = function (params) {
            return _this.head;
        };
        this.getLastNode = function (params) {
            return _this.tail;
        };
        this.getNodeAtIndex = function (index) {
        };
        this.removeNodeAtIndex = function (index) {
            if (index < 0) {
                throw new RangeError("Index parameter can not be negative");
            }
        };
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    return SinglyLinkedList;
}());
exports["default"] = SinglyLinkedList;
