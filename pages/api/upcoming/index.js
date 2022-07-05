import dbConnect from "../../../utils/dbConnect";
import Upcoming from "../../../model/Upcoming";

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const upcomings = await Upcoming.find({});

        res.status(200).json({ success: true, data: upcomings });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const upcoming = await Upcoming.create(req.body);

        res.status(201).json({ success: true, data: upcoming });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
