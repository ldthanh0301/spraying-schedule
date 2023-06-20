const express = require("express");
const router = express.Router();
const Pesticide = require("../models/Pesticide");
const SprayingSchedule = require("../models/SprayingSchedule");

//@route Get api/sprayingschedule
//@desc get sprayingschedule
//@access Private

router.get("/", async (req, res) => {
  const sprayingSchedules = await SprayingSchedule.findAll();
  res.json(sprayingSchedules);
});

//@route POST api/sprayingschedule
//@desc POST sprayingschedule
//@access Public

router.post("/", async (req, res) => {
  let { spraying_name, spraying_date, spraying_note, spraying_farmer, spraying_field } = req.body;
  if (!spraying_name || !spraying_date || !spraying_note || !spraying_farmer || !spraying_field) {
    res.status(400).json({
      message: " Thiếu trường dữ liệu!!",
    });
    return;
  }
  
  const sprayingSchedule = await SprayingSchedule.create({
    spraying_name, spraying_date, spraying_note, spraying_farmer, spraying_field
  });
  if (pesticide) {
    res.json({
      sprayingSchedule: sprayingSchedule,
      message: " Tạo thành công",
    });
  }
});

module.exports = router;
