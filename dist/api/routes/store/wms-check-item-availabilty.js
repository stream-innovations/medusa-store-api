"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = async (req, res) => {
    const wmsService = req.scope.resolve("wmsService");
    const article = await wmsService.checkItemAvailibility(req.query.articleNumber);
    res.json({
        status: 200,
        data: article.data,
    });
};
