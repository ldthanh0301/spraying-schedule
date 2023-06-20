const express = require('express')
const router = express.Router()
const Farmer= require("../models/Farmer")
const Account= require("../models/Account")

//@route Get api/farmer
//@desc get farmer
//@access Private

router.get("/",async (req,res)=>{
    const farmer = await Farmer.findAll()
    res.json(farmer);
})

//@route POST api/farmer
//@desc POST farmer
//@access Public

router.post("/",async (req,res)=>{
    let {farmer_username, farmer_name, farmer_address, farmer_phone}= req.body;
    if (!farmer_username || !farmer_name || !farmer_phone || !farmer_address) {
        res.status(400).json({
            message:" Thiếu trường dữ liệu!!"
        })
        return;
    }
    const accountExist = await Account.findByPk(farmer_username);
    if (!accountExist) {
        res.status(400).json({
            message: "Tên tài khoản chưa được tạo!!",
        })
        return;
    }
    const farmer = await Farmer.create({
        farmer_username,
        farmer_name,
        farmer_address,
        farmer_phone
    })
    if (farmer) {
        res.json({
            message:" Tạo thành công"
        });
    }
})



module.exports = router