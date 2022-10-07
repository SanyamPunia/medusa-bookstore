import { Router } from "express";
import cors from "cors";
import { projectConfig } from "../../medusa-config";

/**
 * All the endpoints for storefront should be in this director `src/api`
 * This exports the function which creates an endpoint `/store/hello`
 */

export default () => {
  const router = Router();

  const corsOptions = {
    origin: projectConfig.store_cors.split(","),
    credentials: true,
  };

  router.get("/store/hello", cors(corsOptions), (req, res) => {
    res.json({
      message: "welcome to my store",
    });
  });

  return router;
};
