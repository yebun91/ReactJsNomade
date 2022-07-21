"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Greetings_1 = __importDefault(require("./Greetings"));
const App = () => {
    return <Greetings_1.default name="Hello"/>;
};
exports.default = App;
