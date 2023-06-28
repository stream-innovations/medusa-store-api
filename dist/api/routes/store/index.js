"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.attachStoreRoutes = void 0;
const express_1 = require("express");
const wms_submit_order_1 = __importDefault(require("./wms-submit-order"));
const wms_check_item_availabilty_1 = __importDefault(require("./wms-check-item-availabilty"));
const medusa_1 = require("@medusajs/medusa");
// Initialize a custom router
const router = (0, express_1.Router)();
function attachStoreRoutes(storeRouter) {
    // Attach our router to a custom path on the store router
    storeRouter.use("/wms", router);
    // Define a GET endpoint on the root route of our custom path
    // router.get("/", wrapHandler(wmsSubmitOrder));
    router.get("/check-item-availability", (0, medusa_1.wrapHandler)(wms_check_item_availabilty_1.default));
    router.get("/create-wms-order", (0, medusa_1.wrapHandler)(wms_submit_order_1.default));
}
exports.attachStoreRoutes = attachStoreRoutes;
