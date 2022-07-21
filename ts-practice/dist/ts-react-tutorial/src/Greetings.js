"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Greetings = ({ name, mark }) => (<div>
    Hello, {name} {mark}
  </div>);
Greetings.defaultProps = {
    mark: '!'
};
exports.default = Greetings;
