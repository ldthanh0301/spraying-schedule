const express = require("express");
const router = express.Router();
const Pesticide = require("../models/Pesticide");
const Farmer = require("../models/Farmer");
const SprayingSchedule = require("../models/SprayingSchedule");

//@route Get api/spraying-schedule
//@desc get spraying-schedule
//@access Private

router.get("/", async (req, res) => {
  const sprayingSchedules = await SprayingSchedule.findAll();
  res.json(sprayingSchedules);
});

//@route Get api/spraying-schedule/:id
//@desc get spraying-schedule/:id
//@access Private

router.get("/:id", async (req, res) => {
  const sprayingSchedule = await SprayingSchedule.findOne({
    where: {spraying_id: req.params.id},
    include:Farmer
  });
  res.json(sprayingSchedule);
});


//@route POST api/spraying-schedule
//@desc POST spraying-schedule
//@access Public

router.post("/", async (req, res) => {
  console.log("res: ", req.body)
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
  if (sprayingSchedule) {
    res.json({
      sprayingSchedule: sprayingSchedule,
      message: " Tạo thành công",
    });
  }
});

//@route DELETE api/spraying-schedule/:id
//@desc DELETE spraying-schedule/:id
//@access Public
router.delete("/:id",async (req, res)=>{
  const id = req.params.id;

  const spraying= await SprayingSchedule.destroy({
    where: {
      spraying_id: id
    },
    force: true
  });
  if (spraying) {
    res.json({
      message: "Xoá thành công"
    })
    return
  }
    res.json({
      message: "Lỗi khi xóa"
    })
})
module.exports = router;
