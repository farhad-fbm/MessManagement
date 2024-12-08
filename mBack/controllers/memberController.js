// controllers/memberController.js

const Member = require('../models/member');

// Add a new member
const addMember = async (req, res) => {
  const { name, email, phone,password } = req.body;
  try {
    const newMember = new Member({ name, email, phone,password });
    await newMember.save();
    res.status(201).json(newMember);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all members
const getAllMembers = async (req, res) => {
  const { page = 1, limit = 15 } = req.query; // Defaults: page=1, limit=10
  try {
    const members = await Member.find()
      .skip((page - 1) * limit)
      .limit(parseInt(limit));
    const total = await Member.countDocuments();
    res.status(200).json({ total, page, limit, members });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Delete a member
const deleteMember = async (req, res) => {
  try {
    const member = await Member.findByIdAndDelete(req.params.id);
    if (!member) return res.status(404).json({ error: 'Member not found' });
    res.status(200).json({ message: 'Member deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { addMember, getAllMembers, deleteMember };
