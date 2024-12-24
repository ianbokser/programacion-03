const express = require('express');
const mockingRoutes = require('./routes/mocking');
const CustomError = require('./utils/CustomError');

const app = express();

app.use(express.json());
app.use('/api/mocks', mockingRoutes);


const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

app.use((err, req, res, next) => {
  if (err instanceof CustomError) {
    res.status(400).json({ success: false, code: err.code, message: err.message });
  } else {
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

module.exports = app;

