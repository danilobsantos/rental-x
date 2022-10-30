import { Router } from "express";
// upload avatar
import multer from "multer";

// upload avatar
import uploadConfig from "../config/upload";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateUserController } from "../modules/accounts/UseCases/createUser/CreateUserController";
import { UpdateUserAvatarController } from "../modules/accounts/UseCases/updateUserAvatar/UpdateUserAvatarController";

const usersRouters = Router();

const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"));

const createUserController = new CreateUserController();
// update avatar
const updateUserAvatarController = new UpdateUserAvatarController();

usersRouters.post("/", createUserController.handle);
// update avatar
usersRouters.patch(
    "/avatar",
    ensureAuthenticated,
    uploadAvatar.single("avatar"),
    updateUserAvatarController.handle
);

export { usersRouters };
