const ApiError = (res, statusCode, message) => {
  return res.status(statusCode).json({
    status: "Failed",
    errorMessage: message,
  });
};

module.exports = { ApiError };
