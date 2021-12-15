const mongoose = require("mongoose");
const express = require("express");
const Customer = require("../model/customer");
const bcrypt = require("bcrypt");
const route = express.Router();

route.post("/cadd", async (req, res) => {
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
    };
    if (pwd != cpwd) {
      res.json({ err: `Invalid` });
      console.log("Invalid");
    } else {
      const result = await Customer.create(obj);
      res.json({ msg: `Customer added!` });
      console.log("cusomer added!");
    }
  } catch (err) {
    console.log(err);
  }
});

route.get("/clist", async (req, res) => {
  try {
    const result = await Customer.find();
    const data = res.json(result);
  } catch (err) {
    console.log(err);
  }
});

route.get("/ctotal", async (req, res) => {
  try {
    var result = await Customer.find();
    Customer.count((err, count) => {
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
