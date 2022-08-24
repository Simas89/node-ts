"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
// @ts-ignores
app.get("/", function (req, res) { return res.send("Hi there :)"); });
var PORT = process.env.PORT || 4000;
app.listen(PORT, function () {
    console.log("Hey!");
});
