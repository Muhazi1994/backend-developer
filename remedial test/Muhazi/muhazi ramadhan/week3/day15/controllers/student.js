let data = require('../models/data.json');

class Student {
    getAllStudents(req, res, next) {
        try {
            res.status(200).json({data: data});
        } catch (error) {
            res.status(500).json({
                error: ('internal Server Error'),
            });
        }
    }
}

module.exports = new Student();