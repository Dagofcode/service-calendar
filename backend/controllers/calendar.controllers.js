const Calendar = require("../models/Calendar");

exports.createCalendar = (req, res, next) => {
  Calendar.create({ ...req.body, post: req.body.post })
    .then(calendar => {
      res.status(200).json({ calendar, msg: "calendar day created" });
    })
    .catch(err => {
      res.status(500).json({ err });
    });
};

exports.getAllCalendar = (req, res, next) => {
  Calendar.find()
    .then(calendars => {
      res.status(200).json({ calendars });
    })
    .catch(err => {
      res.status(500).json({ err });
    });
};

exports.getSingleCalendar = (req, res, next) => {
  Calendar.findById(req.params.id)
    .then(calendar => {
      res.status(200).json({ calendar });
    })
    .catch(err => {
      res.status(500).json({ err });
    });
};
exports.deleteCalendar = (req, res, next) => {
  Calendar.findByIdAndDelete(req.params.id)
    .then(calendar => {
      res.status(200).json({ calendar });
    })
    .catch(err => {
      res.status(500).json({ err });
    });
};
