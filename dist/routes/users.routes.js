"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRouters = void 0;
const express_1 = require("express");
// upload avatar
const multer_1 = __importDefault(require("multer"));
// upload avatar
const upload_1 = __importDefault(require("../config/upload"));
const ensureAuthenticated_1 = require("../middlewares/ensureAuthenticated");
const CreateUserController_1 = require("../modules/accounts/UseCases/createUser/CreateUserController");
const UpdateUserAvatarController_1 = require("../modules/accounts/UseCases/updateUserAvatar/UpdateUserAvatarController");
const usersRouters = (0, express_1.Router)();
exports.usersRouters = usersRouters;
const uploadAvatar = (0, multer_1.default)(upload_1.default.upload("./tmp/avatar"));
const createUserController = new CreateUserController_1.CreateUserController();
// update avatar
const updateUserAvatarController = new UpdateUserAvatarController_1.UpdateUserAvatarController();
usersRouters.post("/", createUserController.handle);
// update avatar
usersRouters.patch("/avatar", ensureAuthenticated_1.ensureAuthenticated, uploadAvatar.single("avatar"), updateUserAvatarController.handle);
