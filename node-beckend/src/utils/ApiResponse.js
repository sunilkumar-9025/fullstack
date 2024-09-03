const ApiResponse = (res, statusCode, data) => {
  return res.status(statusCode).json({
    status: "Success",
    response: data,
  });
};

module.exports = { ApiResponse };
