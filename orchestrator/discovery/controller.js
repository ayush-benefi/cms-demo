const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const causeID = parseInt(req.query.causeId);

    if (causeID === 0) {
        const staticJson = {
            "pagination": {
                "total": 4,
                "page": 1,
                "pageSize": 4
            },
            "items": [
                {
                    "id": 1,
                    "name": "Teach for America",
                    "description": "Foundational knowledge"
                },
                {
                    "id": 2,
                    "name": "Girls who code",
                    "description": "Advanced concepts"
                },
                {
                    "id": 3,
                    "name": "American Red Cross",
                    "description": "In-depth specialization"
                },
                {
                    "id": 4,
                    "name": "World Wildlife Fund",
                    "description": "In-depth specialization"
                }
            ]
        };
        res.json(staticJson);
    } else {
        res.status(400).json({ error: 'Invalid causeID' });
    }
});

module.exports = router;
