const mongoose = require("mongoose");

const UpcomingScheme = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please add a title"],
    maxlength: [40, "Title cannot be more than 40 characters"]
  },
  description: {
    type: String,
    required: true,
    maxlength: [200, "Description cannot be more than 200 characters"]
  },
  date: {
    type: String,
    required: true,
    maxlength: [200, "Date is required"]
  }
});

module.exports =
  mongoose.models.Upcoming || mongoose.model("Upcoming", UpcomingScheme);
