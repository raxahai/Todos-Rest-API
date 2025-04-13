const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  const code = err.code || 500;
  const message = err.message || "Internal Server Error";

  res.status(code).json({
    code: code,
    error: message,
  });
};

module.exports = errorHandler;
