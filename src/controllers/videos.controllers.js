const VideoServices = require("../services/videos.services");

const createVideo = async (req, res, next) => {
  try {
    const newVideo = req.body;
    const result = await VideoServices.add(newVideo);
    res.status(201).json(result);
  } catch (error) {
    next({
      status: 418,
      errorContent: error,
      message: "Check the information you send",
    });
  }
};

const deleteVideo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await VideoServices.delete(id);
    res.status(200).json(result);
  } catch (error) {
    next({
      status: 418,
      errorContent: error,
      message: "Check the information you send",
    });
  }
};

module.exports = {
  createVideo,
  deleteVideo,
};
