
const accountRouter = require("./account")
const farmerRouter = require("./farmer")
const fieldRouter = require("./field.js")
const pesticideRouter = require("./pesticide")
const sprayingscheduleRouter = require("./sprayingSchedule")

module.exports = function(app) { 
    app.use("/api/account", accountRouter);
    app.use("/api/farmer", farmerRouter);
    app.use("/api/field", fieldRouter);
    app.use("/api/pesticide", pesticideRouter);
    app.use("/api/sprayingschedule", sprayingscheduleRouter);
}