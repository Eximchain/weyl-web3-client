"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var web3_1 = __importDefault(require("web3"));
var weylABI_1 = __importDefault(require("./weylABI"));
var bvABI_1 = __importDefault(require("./bvABI"));
exports.buildClient = function (url) {
    var web3 = new web3_1["default"](new web3_1["default"].providers.HttpProvider(url));
    var BV = new web3.eth.Contract(bvABI_1["default"], '0x0000000000000000000000000000000000000020');
    return {
        contract: new web3.eth.Contract(weylABI_1["default"], '0x000000000000000000000000000000000000002A'),
        isBlockMaker: function (address) { return BV.methods.isBlockMaker(address).call(); }
    };
};
exports["default"] = exports.buildClient;
