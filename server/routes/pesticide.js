const express = require("express");
const router = express.Router();
const Pesticide = require("../models/Pesticide");

//@route Get api/pesticide
//@desc get pesticide
//@access Private

router.get("/", async (req, res) => {
  const pesticides = await Pesticide.findAll();
  res.json(pesticides);
});

//@route POST api/pesticide
//@desc POST pesticide
//@access Public

router.post("/", async (req, res) => {
  let { pesticide_name, pesticide_description } = req.body;
  if (!pesticide_name || !pesticide_description ) {
    res.status(400).json({
      message: " Thiếu trường dữ liệu!!",
    });
    return;
  }
  
  const pesticide = await Pesticide.create({
    pesticide_name, pesticide_description
  });
  if (pesticide) {
    res.json({
      pesticide: pesticide,
      message: " Tạo thành công",
    });
  }
});

module.exports = router;
