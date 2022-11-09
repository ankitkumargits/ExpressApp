const router = require('express').Router();
const Task = require('../models/taskSchema');

router.get("/", async (req, res) => {
    try {
        const taskData = await Task.find();
        res.status(200).json(taskData);
    } catch (err) {
        res.status(400).json(message = err.message);
    }
});

const addedDate = new Date().toLocaleString();
router.post("/", async (req, res) => {
    const { tName } = req.body;
    const taskData = new Task({
        tName: tName,
        tDate: addedDate
    })
    try {
        await taskData.save();
        res.status(201).json(taskData);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


router.delete("/:id", async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Your Item successfully deleted" })
});

router.put("/:id", async (req, res) => {
    const id = req.params.id;
    const { tName } = req.body;
    try {
        await Task.findByIdAndUpdate(id, {
            tName: tName,
            tDate: addedDate
        });
        res.status(200).json({ message: "successfully updated" });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});



module.exports = router;