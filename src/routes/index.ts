import { Router } from "express";

import { categoriesRoutes } from "./categories.routes";
import { specificationsRoutes } from "./specifications.routes";
// import users.routes
import { usersRouters } from "./users.routes";

const router = Router();

router.use("/categories", categoriesRoutes);
router.use("/specifications", specificationsRoutes);
// adicionando nova rota
router.use("/users", usersRouters);

export { router };
