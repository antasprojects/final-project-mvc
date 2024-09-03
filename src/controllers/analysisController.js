const analysisModel = require('../models/Analysis');


async function getUserRecommendationCounts(req, res) {
    try {
        const data = await analysisModel.getUserRecommendationCounts();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

async function getUserVisitCounts(req, res) {
    try {
        const data = await analysisModel.getUserVisitCounts();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {

    getUserVisitCounts,
    getUserRecommendationCounts

}