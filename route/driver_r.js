const mongoose = require("mongoose");
const express = require("express");
const Driver = require("../model/driver");

const route = express.Router();

route.post("/dadd", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const pwd = await bcrypt.hash(req.body.password, salt);
    const cpwd = await bcrypt.hash(req.body.cpassword, salt);
    var obj = {
      fname: req.body.fname,
      lname: req.body.lname,
      phone: req.body.phone,
      mail: req.body.mail,
      password: pwd,
      cpassword: cpwd,
      gender: req.body.gender,
      experience: req.body.experience,
      carType: req.body.carType,
      kyc: req.body.kyc,
    };
    if (pwd != cpwd) {
      console.log("Invalid");
    } else {
      const result = await Driver.create(obj);
      res.json({ msg: `Driver added!` });
      console.log(result);
    }
  } catch (err) {
    console.log(err);
  }
});

route.get("/dlist", async (req, res) => {
  try {
    var result = await Driver.find();
    const data = res.json(result);
    // console.log(result);
  } catch (err) {
    console.log(err);
  }
});

route.get("/dtotal", async (req, res) => {
  try {
    var result = await Driver.find();
    Driver.count((err, count) => {
      if (err) {
        console.log(err);
      } else {
        console.log(count);
        res.json(count);
      }
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = route;
