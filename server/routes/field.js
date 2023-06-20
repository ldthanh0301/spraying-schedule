const express = require("express");
const router = express.Router();
const Field = require("../models/Field");
const argon2 = require("argon2");

//@route Get api/field
//@desc get field
//@access Private

router.get("/", async (req, res) => {
  const field = await Field.findAll();
  res.json(field);
});

//@route POST api/field
//@desc POST field
//@access Public

router.post("/", async (req, res) => {
  let { field_name, field_address, field_farmer } = req.body;
  if (!field_name || !field_address || !field_farmer) {
    res.status(400).json({
      message: " Thiếu trường dữ liệu!!",
    });
    return;
  }
  // check farmer_id
  const farmerExist = await Farmer.findByPk(field_farmer);
  if (!farmerExist) {
    res.status(400).json({
      message: "Nông dân chưa được tạo!!",
    });
    return;
  }
  const field = await Field.create({
    field_name,
    field_address,
    field_farmer,
  });
  if (field) {
    res.json({
      field: field,
      message: " Tạo thành công",
    });
  }
});

module.exports = router;
