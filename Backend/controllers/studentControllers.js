const student = require('../models/student');
exports.getAllStudent = async (req, res, next) => {
    try {
        let [allStudent,_] = await student.getAllStudent();
        res.status(200).json(allStudent); 
    } catch (error) {
        console.log(error);
        next(error);
    }
}

exports.getStudentByID = async (req, res, next) => {
    try {
        let id = req.params.id;
        let [studentinfo,_] = await student.getStudentByID(id);
        res.status(200).json(studentinfo); 
    } catch (error) {
        console.log(error);
        next(error);
    }
}

exports.addStudent = async (req, res, next) => {
    try {
        let  { id,name } = req.body;
        let [result,_] = await student.addStudent(id,name);
        res.status(201).json({message:"Student added"}); 
    } catch (error) {
        console.log(error);
        next(error);
    }
}

exports.updateStudentInfo = async (req, res, next) => {
    try {
        let id = req.params.id;
        let { name } = req.body;
        let [result,_] = await student.updateStudentInfo(id, name);
        console.log(result);
        res.status(204).json({message:"Resource Updated Succesfully"}); 
    } catch (error) {
        console.log(error);
        next(error);
    }
}

exports.deleteStudentInfo = async (req, res, next) => {
    try {
        let id = req.params.id;
        let [result,_] = await student.deleteStudentInfo(id);
        console.log(result);
        res.status(204).json({message:"Resource Deleted Succesfully"}); 
    } catch (error) {
        console.log(error);
        next(error);
    }
}