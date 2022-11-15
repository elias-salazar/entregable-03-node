const { Router } = require("express");
const {
  createVideo,
  deleteVideo,
} = require("../controllers/videos.controllers");

const router = Router();

router.post("/videos", createVideo);
router.delete("/videos/:id", deleteVideo);

module.exports = router;
