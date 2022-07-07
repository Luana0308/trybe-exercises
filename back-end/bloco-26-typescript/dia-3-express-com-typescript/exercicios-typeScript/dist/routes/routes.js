"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_controllers_1 = __importDefault(require("../controllers/users.controllers"));
const express_1 = require("express");
const userRouter = (0, express_1.Router)();
userRouter.use('./', users_controllers_1.default);
exports.default = userRouter;
