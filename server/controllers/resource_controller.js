//@desc     Get all resources
//@route    GET /api/v1/resources
//@access   Public
exports.getResources = (req, res, next) => {
    res.send('GET resources');
}

//@desc     Add all resources
//@route    POST /api/v1/resources
//@access   Public
exports.addResources = (req, res, next) => {
    res.send('POST resources');
}