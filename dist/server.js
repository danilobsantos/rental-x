"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
// importar express-async-errors
require("express-async-errors");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const AppError_1 = require("./errors/AppError");
const routes_1 = require("./routes");
const swagger_json_1 = __importDefault(require("./swagger.json"));
require("./database");
require("./shared/container");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
app.use(routes_1.router);
// criar rota com tratamento
app.use((err, request, response, next) => {
    if (err instanceof AppError_1.AppError) {
        return response.status(err.statusCode).json({
            message: err.message,
        });
    }
    return response.status(500).json({
        status: "error",
        message: `Internal server error - ${err.message}`,
    });
    next();
});
dotenv_1.default.config();
app.listen(3334, () => console.log("Server is running!"));
