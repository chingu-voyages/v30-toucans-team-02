const axios = require('axios');

const handler = async (event) => {

  const { query } = event.queryStringParameters;
  console.log("query", query);

  const API_KEY = process.env.GOOGLE_BOOKS_API_KEY;
  const url = `https://www.googleapis.com/books/v1/volumes?q="harry+potter"&key=${API_KEY}&maxResults=25`;
  console.log("url", url);

  try {
    const { data } = await axios.get(url);
    console.log("axios-data", data);

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };

  } catch (error) {
    const { status, statusText, headers, data } = error.response;
    return {
      statusCode: status,
      body: JSON.stringify({status, statusText, headers, data})
    };
  }
};

module.exports = { handler };