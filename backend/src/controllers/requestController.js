const axios = require("axios");

const sendRequest = async (
  req,
  res
) => {
  const {
    method,
    url,
    body,
  } = req.body;

  const startTime = Date.now();

  try {
    const response = await axios({
      method,
      url,
      data: body,
    });

    const endTime = Date.now();

    res.json({
      status: response.status,
      time: endTime - startTime,
      data: response.data,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  sendRequest,
};