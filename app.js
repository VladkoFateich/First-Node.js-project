const express = require('express');
const app = express();
const router = require('./routes/index');

app.use(router);
app.listen(9000, () => {
  console.log('Server was started on port 9000');
});
