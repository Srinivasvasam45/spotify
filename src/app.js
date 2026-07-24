const express = require('express');
const cookieParser = require('cookie-parser')
const authRoutes = require('./routes/auth.rotes')
const musicRoutes = require('./routes/music.routes')


const app = express();
app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('Server is running successfully!');
});

app.use("/api/auth",authRoutes)
app.use("/api/music",musicRoutes)
app.use(cookieParser())


module.exports = app;
