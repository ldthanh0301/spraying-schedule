const express = require('express')
const router = express.Router()
const Account= require("../models/Account")
const argon2 = require("argon2");

//@route Get api/account
//@desc get account
//@access Private

router.get("/",async (req,res)=>{
    const account = await Account.findAll()
    res.json(account);
})

//@route POST api/account
//@desc POST account
//@access Public

router.post("/",async (req,res)=>{
    let {username, password}= req.body;
    if (!username || !password) {
        res.status(400).json({
            message:" Thiếu trường dữ liệu!!"
        })
        return;
    }
    const accountExist = await Account.findByPk(username);
    console.log("acc:", accountExist);
    if (accountExist) {
        res.status(400).json({
            message: "Trùng tên đăng nhập!!",
        })
        return;
    }
    const hanshedPassword = await argon2.hash(password);
    const account = await Account.create({
        username: username,
        password: hanshedPassword
    })
    if (account) {
        res.json({
            message:" Tạo thành công"
        });
    }
})



module.exports = router