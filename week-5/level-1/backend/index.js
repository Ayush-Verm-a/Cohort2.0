const express = require('express');
const app = express();
const PORT = 3500;

app.post('/makeCard')

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})