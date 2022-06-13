const userModel = require('../models/model').userModel
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const getUser = async (req, res) => { 
    try {
        if (req.body && req.body.username && req.body.password) {
          userModel.find({ username: {$eq: req.body.username} }, (err, data) => {
            if (data.length > 0) {  
              console.log(data);            
              if (data[0].password === req.body.password) {                
                checkUserAndGenerateToken(data[0], req, res);
              } else {
                res.status(400).json({
                  errorMessage: 'Username or password is incorrect!!',
                  status: false
                });
              }
    
            } else {
              res.status(400).json({
                errorMessage: 'Username or password is incorrect!',
                status: false
              });
            }
          })
        } else {
          res.status(400).json({
            errorMessage: 'Add proper parameter first!',
            status: false
          });
        }
      } catch (e) {
        res.status(400).json({
          errorMessage: 'Something went wrong!',
          status: false
        });
      }
} 

  
const registerUser =async (req, res) => {
    try {
        if (req.body && req.body.username && req.body.password) {
          userModel.find({ username: {$eq: req.body.username} }, (err, data) => {
            if (data.length===0) {
              let User = new userModel({
                username: req.body.username,
                password: req.body.password,
                permission: 'employee'

              });
              User.save((err, data) => {
                if (err) {
                  res.status(400).json({
                    errorMessage: err,
                    status: false
                  });
                } else {
                  res.status(200).json({
                    status: true,
                    title: 'Registered Successfully.'
                  });
                }
              });
    
            } else {
              res.status(400).json({
                errorMessage: `UserName ${req.body.username} Already Exist!`,
                status: false
              });
            }
    
          });
    
        } else {
          res.status(400).json({
            errorMessage: 'Add proper parameter first!',
            status: false
          });
        }
      } catch (e) {
        res.status(400).json({
          errorMessage: 'Something went wrong!',
          status: false
        });
      }
} 

const addUser =async (req, res) => {
  try {
      if (req.body && req.body.username && req.body.password) {
        userModel.find({ username: {$eq: req.body.username} }, (err, data) => {
          if (data.length===0) {
            let User = new userModel({
              username: req.body.username,
              password: req.body.password,
              permission: 'employee'

            });
            User.save((err, data) => {
              if (err) {
                res.status(400).json({
                  errorMessage: err,
                  status: false
                });
              } else {
                res.status(200).json({
                  status: true,
                  title: 'Registered Successfully.'
                });
              }
            });
  
          } else {
            res.status(400).json({
              errorMessage: `UserName ${req.body.username} Already Exist!`,
              status: false
            });
          }
  
        });
  
      } else {
        res.status(400).json({
          errorMessage: 'Add proper parameter first!',
          status: false
        });
      }
    } catch (e) {
      res.status(400).json({
        errorMessage: 'Something went wrong!',
        status: false
      });
    }
} 

 const checkUserAndGenerateToken=(data, req, res) =>{
    jwt.sign({ user: data.username, id: data._id }, 'shhhhh11111', { expiresIn: '1d' }, (err, token) => {
      if (err) {
        res.status(400).json({
          status: false,
          errorMessage: err,
        });
      } else {
        res.json({
          message: 'Login Successfully.',
          token: token,
          username:data.username,
          permission:data.permission,
          status: true
        });
      }
    });
  }

const deleteUser = (req, res) => {
    const { empId } = req.params
    userModel.findByIdAndDelete(empId, (err, data) => {
        if (err)
        return res.status(404).send(err)
        return res.status(200).send(data)
    })
}

const updateUser = (req, res) => {
    const { empId } = req.params
    const { firstName,permission } = req.body
    userModel.findByIdAndUpdate(empId,{firstName:firstName,permission:permission},{new:true}, (err,data) => {
        if (err)
        return res.status(204).send(err)
        return res.status(201).send(data)
    })
}

const FinishedTask = (req, res) => {
  const { empId } = req.params
  userModel.findByIdAndDelete(empId, (err, data) => {
      if (err)
      return res.status(404).send(err)
      return res.status(200).send(data)
  })
}

const TaskInProcess = (req, res) => {
  const { empId } = req.params
  const { firstName,permission } = req.body
  userModel.findByIdAndUpdate(empId,{firstName:firstName,permission:permission},{new:true}, (err,data) => {
      if (err)
      return res.status(204).send(err)
      return res.status(201).send(data)
  })
}
  module.exports = {
      getUser,
      registerUser,
      deleteUser,
      updateUser,
      addUser,
      TaskInProcess,
      FinishedTask
  }