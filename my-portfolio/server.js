const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/log-error', (req, res) => {
    console.error('Error from React app:', req.body.error);
    res.status(200).send('Error logged');
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
