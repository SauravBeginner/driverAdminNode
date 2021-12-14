const mongoose = require("mongoose");
const express = require("express");
const Customer = require("../model/customer");

const route = express.Router();

route.post("/cadd", async (req, res) => {
  try {
    var obj = {
      fname: req.body.fname,
      lname: req.body.lname,
      phone: req.body.phone,
      mail: req.body.mail,
      password: req.body.password,
      cpassword: req.body.cpassword,
    };

    const result = await Customer.create(obj);
    res.json({ msg: `Customer added!` });
    console.log("cusomer added!");
  } catch (err) {
    console.log(err);
  }
});

route.get("/clist", async (req, res) => {
  try {
    const result = await Customer.find();
    const data = res.json(result);
    // Customer.count((err, count) => {
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     console.log(count);
    //   }
    // });
    // console.log(result);
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
