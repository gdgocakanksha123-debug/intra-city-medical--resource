const express = require('express');
const router = express.Router();

router.get('/resources', (req, res) => {
  res.status(200).json({
    message: 'Medical resources list endpoint',
    resources: []
  });
});

router.get('/resources/:id', (req, res) => {
  res.status(200).json({
    message: 'Single resource endpoint',
    resourceId: req.params.id
  });
});

router.post('/resources', (req, res) => {
  const { name, type, location, availability } = req.body;

  res.status(201).json({
    message: 'Resource created successfully',
    resource: {
      name,
      type,
      location,
      availability
    }
  });
});

module.exports = router;
