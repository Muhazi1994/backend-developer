const { comments, events, users } = require("../models");
const moment = require("moment");
const { date } = require("faker");

class Comments {
  static async getAllComments(req, res, next) {
    try {
      const data = await comments.findAll({
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });

      if (data.length === 0) {
        return res.status(404).json({ errors: ["Comment not found"] });
      }

      res.status(200).json({ data });
    } catch (error) {
      console.log(error);
      res.status(500).json({ errors: ["Internal Server Error"] });
    }
  }

  static async updateComment(req, res, next) {
    try {
      // Comment Table Update Data

      const commentId = await comments.findOne({
        where: { id: req.params.id },
      });
      console.log(commentId);

      if (commentId.userId !== req.userData.id) {
        return res
          .status(401)
          .json({ errors: ["You do not have permission to access this!"] });
      }

      const updatedData = await comments.update(req.body, {
        where: {
          id: req.params.id,
        },
      });

      // If no data updated
      if (updatedData[0] === 0) {
        return res.status(404).json({ errors: ["Comment not found"] });
      }

      const updateComment = await comments.findOne(
        {
          eventId: req.body.eventId,
          userId: req.userData.id,
          comment: req.body.id,
        },
        { where: { id: req.params.id } }
      );
      const data = await events.findOne({
        where: { id: req.params.id },
      });

      res.status(201).json({ data, message: ["Succes Update Your Comment"] });
    } catch (error) {
      next(error);
    }
  }
  static async getDetailComment(req, res, next) {
    try {
      var todayStart = new Date().setHours(0, 0, 0, 0);
      var now = new Date().setHours(24, 0, 0, 0);

      const data = await comments.findOne({
        where: { id: req.params.id },
      });

      let waktu = data.createdAt;
      let currentTime = new Date(waktu).toLocaleString("en-US", {
        timeZone: "Asia/Jakarta",
      });

      let commentTime = moment(currentTime, "MM/DD/YYYY hh:mm:ss A").fromNow();

      if (!data) {
        return res.status(404).json({ errors: ["Comment is empty"] });
      }

      res.status(200).json({ data, commentTime });
    } catch (error) {
      console.log(error);
      res.status(500).json({ errors: ["Internal Server Error"] });
    }
  }

  static async createComment(req, res, next) {
    try {
      const newData = await comments.create(req.body);

      const data = await comments.findOne({
        where: {
          id: newData.id,
        },
        attributes: {
          exclude: ["userId", "eventId", "createdAt", "updateAt", "deletedAt"],
        },
        include: [
          {
            model: users,
            attributes: ["id", "firstName", "lastName", "image"],
          },
          {
            model: events,
          },
        ],
      });

      res.status(201).json({
        data: data,
        message: ["Congrats! You have successfully submitted a comment"],
      });
    } catch (error) {
      res.status(500).json({ errors: ["Internal Server Error"] });
    }
  }

  static async deleteComment(req, res, next) {
    try {
      const commentId = await comments.findOne({
        where: { id: req.params.id },
      });

      if (commentId.userId !== req.userData.id) {
        return res
          .status(401)
          .json({ errors: ["You do not have permission to access this!"] });
      }
      let data = await comments.destroy({ where: { id: req.params.id } });

      if (!data) {
        return res.status(404).json({ errors: ["Comment not found"] });
      }

      res
        .status(200)
        .json({ data: data, message: ["Success delete your comment!"] });
    } catch (error) {
      res.status(500).json({ errors: ["Internal Server Error"] });
    }
  }
}

module.exports = Comments;
