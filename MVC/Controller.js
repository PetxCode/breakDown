const {
  getAllEntry,
  getSingleEntry,
  createEntry,
  updateSingleEntry,
  deleteSingleEntry,
} = require("./View");
const express = require("express");
const router = express.Router();

router.route("/").get(getAllEntry).post(createEntry);
router.route("/:id").get(getSingleEntry);

router.route("/:id").patch(updateSingleEntry);

router.route("/:id").delete(deleteSingleEntry);

module.exports = router;
