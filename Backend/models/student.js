const db = require('../config/mysqldb');

const student = {};

student.addStudent = (id,studnetName) => {
    let sql = `INSERT into studentinfo(id,name) values("${id}","${studnetName}");`;
    return db.execute(sql);
}
student.getAllStudent = () => {
    let sql = `SELECT * FROM studentinfo`;
    return db.execute(sql);
}
student.getStudentByID = (id) => {
    let sql = `SELECT * FROM studentinfo WHERE id = ${id};`;
    return db.execute(sql);
}
student.updateStudentInfo = (id,name) => {
    let sql = `UPDATE studentinfo SET name = "${name}" WHERE id = ${id};`;
    return db.execute(sql);
} 
student.deleteStudentInfo = (id) => {
    let sql = `DELETE FROM studentinfo WHERE id = ${id};`;
    return db.execute(sql);
}

module.exports = student;