const Resource = require ('../models/Resource');

//@desc     Get all resources
//@route    GET /api/v1/resources
//@access   Public
exports.getResources = async (req, res, next) => {
    try {
        const resources = await Resource.find();
        return res.status(200).json({
            success: true,
            count: resources.length,
            data: resources
        })
    } catch (error) {
        res.send(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}

//@desc     Add all resources
//@route    POST /api/v1/resources
//@access   Public
exports.addResources = async (req, res, next) => {
    res.send('POST resources');
}