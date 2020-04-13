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
    try {
        const { url, title, description, category, medium} = req.body;

        const resource = await Resource.create(req.body);

        return res.send(201).json({
            success: true,
            data: resource
        });
    } catch (error) {
        if(error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);
        
            return res.status(400).json({
                success: false,
                error: messages
            });
        }

        else {
            return res.status(500).json({
                success: false,
                error: 'Server Error'
            });
        }
    }
}