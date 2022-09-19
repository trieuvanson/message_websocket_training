const Role = require('../models/role');

exports.create = async (req, res) => {
    try {
        const role = await Role.create(req.body);
        res.status(200).json({
            role,
        });
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
}

//create many
exports.createMany = async (req, res) => {
    try {
        const roles = await Role.insertMany(req.body);
        res.status(200).json({
            roles,
        });
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
}

exports.findAll = async (req, res) => {
    try {
        const roles = await Role.find();
        res.status(200).json({
            roles,
        });
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
}

exports.findOne = async (req, res) => {
    try {
        const {id} = req.params;
        const role = await Role.findById(id);
        if (role) {
            return res.status(200).json({
                role,
            });
        }
        res.status(404).json({
            error: "Role not found",
        });
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
}

exports.update = async (req, res) => {
    try {
        const {id} = req.params;
        const role = await Role.findByIdAndUpdate(id, req.body, {new: true});
        if (role) {
            return res.status(200).json({
                role,
            });
        }
        res.status(404).json({
            error: "Role not found",
        });
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
}

//update many
exports.updateMany = async (req, res) => {
    try {
        const {ids} = req.body;
        const roles = await Role.updateMany({_id: {$in: ids}}, req.body);
        if (roles) {
            return res.status(200).json({
                roles,
            });
        }
        res.status(404).json({
            error: "Roles not found",
        });
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
}

exports.delete = async (req, res) => {
    try {
        const {id} = req.params;
        const role = await Role.findByIdAndDelete(id);
        if (role) {
            return res.status(200).json({
                role,
            });
        }
        res.status(404).json({
            error: "Role not found",
        });
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
}

//delete many
exports.deleteMany = async (req, res) => {
    try {
        const {ids} = req.body;
        const roles = await Role.deleteMany({_id: {$in: ids}});
        if (roles) {
            return res.status(200).json({
                roles,
            });
        }
        res.status(404).json({
            error: "Roles not found",
        });
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
}

