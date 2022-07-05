const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema(
  {
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
    distance: {
      type: String,
      required: true,
      maxlength: [200, "Distance is required"]
    },
    img: {
      type: String,
      required: true,
      maxlength: [500, "Image is required"]
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.models.Note || mongoose.model("Note", NoteSchema);
