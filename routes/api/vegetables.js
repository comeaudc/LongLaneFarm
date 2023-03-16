const express = require('express');
const router = express.Router();
const Vegetable = require('../../models/Vegetable');

// @route:   GET api/vegetables
// @desc:    Test route
// @access:  Public
router.get('/', async (req, res) => {
  let vegetables = await Vegetable.find({})

  res.json(vegetables)
});

// @route:   POST api/vegetables
// @desc:    Route for Creating vegetales
// @access:  Private
router.post('/', async (req, res) => {
  const { name, pricing } = req.body;
  try {
    let vegetable = await Vegetable.findOne({ name });
    if (vegetable) {
      return res
        .status(400)
        .json({ errors: [{ msg: 'Vegetable Already Exists' }] });
    }

    vegetable = new Vegetable({
      name,
      pricing,
    });

    await vegetable.save();
    console.log(vegetable);
    res.send('Vegetable Created');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// @route:   PUT api/vegetables/:id
// @desc:    Route for updating vegetables
// @access:  Private
router.put('/:id', async (req, res) => {
  if (err.kind === 'ObjectId') {
    return res.status(404).json({ msg: 'Vegetable not found' });
  }
  let updatedData = req.body;
  try {
    await Vegetable.findByIdAndUpdate(id, updatedData);
    res.send('Vegetable Updated');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// @route:   Delete api/vegetables/:id
// @desc:    Route for deleting vegetables
// @access:  Private
router.delete('/:id', async (req, res) => {
  let id = req.params.id;
  try {
    const vegetable = await Vegetable.findById(id);

    if (!vegetable) {
      return res.status(401).json({ msg: 'Veggie not found' });
    }

    await vegetable.deleteOne();

    res.json({ msg: 'Vegetable removed' });
  } catch (err) {
    console.error(err);

    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Vegetable not found' });
    }
  }
});

module.exports = router;
