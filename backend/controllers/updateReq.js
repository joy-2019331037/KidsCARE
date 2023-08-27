import db from '../db.js';

export const updateInReq = (req, res) => {
  const { requestId,time } = req.body;

  if (!requestId) {
    return res.status(400).json({ error: 'Missing requestId' });
  }

  const query = 'UPDATE requests SET approved = "y",checkIn=? WHERE id = ?';

  db.query(query, [time,requestId], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'An error occurred' });
    }

    if (results.affectedRows === 0) {
      return res.status(404).json({ error: 'Request not found' });
    }

    res.json(results);
  });
};

export const updateOutReq = (req, res) => {
  const { requestId,time } = req.body;

  if (!requestId) {
    return res.status(400).json({ error: 'Missing requestId' });
  }

  const query = 'UPDATE requests SET approved = "y",checkOut=? WHERE id = ?';

  db.query(query, [time,requestId], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'An error occurred' });
    }

    if (results.affectedRows === 0) {
      return res.status(404).json({ error: 'Request not found' });
    }

    res.json(results);
  });
};
