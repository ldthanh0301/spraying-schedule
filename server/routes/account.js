const express = require('express')
const router = express.Router()
const Account= require("../models/Account")
const argon2 = require("argon2");
const jwt = require("jsonwebtoken")

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
    let {username, password, passwordConfirm}= req.body;
    console.log("accounts : ", req.body)
    if (!username || !password || !passwordConfirm) {
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
    if (password != password) {
        res.status(400).json({
            message: "Mật khẩu xác nhận sai!!",
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


//@route POST api/account/login
//@desc POST account/login
//@access Public

router.post("/login",async (req,res)=>{
    let {username, password}= req.body;
    console.log("accounts : ", req.body)
    if (!username || !password) {
        res.status(400).json({
            message:" Thiếu trường dữ liệu!!"
        })
        return;
    }
    const accountExist = await Account.findByPk(username);
    console.log("acc:", accountExist);
    if (!accountExist) {
        res.status(400).json({
            message: "Tài khoản chưa được tạo!!",
        })
        return;
    }
    const passwordValid = await argon2.verify(accountExist.password, password);
    if (!passwordValid) {
        res.status(400).json({
            message: "Mật khẩu hoặc tài khoản sai!!",
        })
        return;
    }
    // all good 
     //return token
     const accessToken = jwt.sign(
        { username: accountExist.username },
        process.env.ACCESS_TOKEN_SECRET
      );
    res.json({
        message:"Đăng nhập thành công",
        accessToken
    });
})


module.exports = router