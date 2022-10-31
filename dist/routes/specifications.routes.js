"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.specificationsRoutes = void 0;
const express_1 = require("express");
const ensureAuthenticated_1 = require("../middlewares/ensureAuthenticated");
const CreateSpecificationController_1 = require("../modules/cars/useCases/createSpecification/CreateSpecificationController");
const specificationsRoutes = (0, express_1.Router)();
exports.specificationsRoutes = specificationsRoutes;
const createSpecificationController = new CreateSpecificationController_1.CreateSpecificationController();
specificationsRoutes.use(ensureAuthenticated_1.ensureAuthenticated);
specificationsRoutes.post("/", createSpecificationController.handle);
