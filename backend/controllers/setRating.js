import db from '../db.js';

export const setRating = async (req, res) => {
    const { id, newRating } = req.body;

    const selectQuery = "SELECT * FROM caregivers WHERE id = ?";
    
    try {
        db.query(selectQuery, [id], (err, data) => {
            if (err) return res.json(err);

            if (data && data.length > 0) {
                const caregiver = data[0];

                const divider = caregiver.rateCount + 1;
                const updatedRating = (caregiver.rating * caregiver.rateCount + newRating) / divider;

                const updateQuery = "UPDATE caregivers SET rating = ?, rateCount = ? WHERE id = ?";
                db.query(updateQuery, [updatedRating, divider, id], (err, updateResult) => {
                    if (err) return res.json(err);
                    console.log(updateResult);
                    return res.status(200).json(updateResult);
                });
            } else {
                return res.status(404).json({ message: "Caregiver not found" });
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred" });
    }
};
