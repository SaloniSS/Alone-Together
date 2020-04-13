const Resource = require('../models/resource_model');

exports.getResource = async (req, res, next) => {
    try {
        const resources = await Resource.find();

        return res.status(200).json({
            success: true,
            count: resources.length,
            data: resources
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}

exports.addResource = async (req, res, next) => {
    try {
        const { url, title, description, category, medium} = req.body;

        const resource = await Resource.create(req.body);

        return res.status(201).json({
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