const usermodel = require("../models/userSchema");

const Users = {};

Users.addUser = (req,res,next) => {
    const newUser = new usermodel(req.body);
    newUser.save((err) => {
        if(err) next(err);
        else{
            res.status(201).json({
                message: "User added Successfully",
            })
        }
    });
}

Users.getAllUser = (req,res,next) => {
    usermodel.find({}).exec((err,data) =>{
        if(err) next(err);
        else{
            res.status(200).json({
                results: data,
                message: "Success",
            })
        }
    });
}

Users.updateUser = (req,res,next) => {
    const result = usermodel.findOneAndUpdate({
        username: req.params.username
    },
    {
        name: req.body.name,
        email: req.body.email,
        address: req.body.address,
        phone: req.body.phone
    },
    {
        new: true
    },
    (err) => {
        if(err) next(err);
        else res.status(200).json({
            message: "Userinfo updated Succesfully"
        })
    });
    console.log(result);
}
Users.deleteUser = (req,res,next) => {
    usermodel.deleteOne({ username : req.params.username}).exec((err) => {
        if(err) next(err);
        else res.status(200).json({
            message: "Userinfo deleted Succesfully"
        })
    })
}

module.exports = Users;
