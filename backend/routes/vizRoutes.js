import express from "express";
import {
  getMapData,
  getLocationTrend,
  compareDatasets,
  getGlobalMean,
} from "../controllers/vizController.js";
import { protect, requirePro } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/map-data", protect, getMapData);
router.get("/location-trend", protect, getLocationTrend);
// Dataset comparison is a Pro-only feature
router.get("/compare-datasets", protect, requirePro, compareDatasets);
router.get("/global-mean", protect, getGlobalMean);

export default router;
