const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter');
const ProductRouter = require('./Routes/ProductRouter');

require('dotenv').config();
require('./Models/db');
const PORT = process.env.PORT || 8080;

app.get('/ping', (req, res) => {
    res.send('PONG');
});

app.use(bodyParser.json());

import cors from "cors";

const allowedOrigins = [
  "https://meghana-mern-bctw-5nadawiez-meghana-hss-projects.vercel.app",
  "http://localhost:3000"
];

app.use(cors({
  origin: function(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));




app.use('/auth', AuthRouter);
app.use('/products', ProductRouter);


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})
