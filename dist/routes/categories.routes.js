"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesRoutes = void 0;
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
// 1 ajustar importação
const CreateCategoryController_1 = require("../modules/cars/useCases/createCategory/CreateCategoryController");
const ImportCategoryController_1 = require("../modules/cars/useCases/ImportCategory/ImportCategoryController");
// import { listCategoriesController } from "../modules/cars/useCases/listCategories";
const ListCategoriesController_1 = require("../modules/cars/useCases/listCategories/ListCategoriesController");
const categoriesRoutes = (0, express_1.Router)();
exports.categoriesRoutes = categoriesRoutes;
const upload = (0, multer_1.default)({
    dest: "./tmp",
});
// 2 instanciar a classe
const createCategoryController = new CreateCategoryController_1.CreateCategoryController();
const importCategoryController = new ImportCategoryController_1.ImportCategoryController();
const listCategoriesController = new ListCategoriesController_1.ListCategoriesController();
// 3 alterar requeste/response
categoriesRoutes.post("/", createCategoryController.handle);
categoriesRoutes.get("/", listCategoriesController.handle);
categoriesRoutes.post("/import", upload.single("file"), importCategoryController.handle);
