const getRootHandler = (req, res) => {
  console.log('getRootHandler');
  res.send('<h1>Start PAGE</h1>');
};

module.exports = { getRootHandler };
