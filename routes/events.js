const express = require("express")
const router = express.Router()

const {
    postEvent, getEvents, getEventById,
} = require("../controllers/eventControllers");

// post a new events

router.post("/", postEvent);
router.get("/", getEvents);
router.get("/:id", getEventById)

module.exports = router;