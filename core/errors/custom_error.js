class CustomError extends Error {
  constructor(code, message) {
    super(message);

    this.code = code;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = CustomError;
