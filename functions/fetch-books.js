const axios = require('axios');

const handler = async (event) => {

  //const { query } = event.queryStringParameters.query; // not working - undefined
  // const queryString = event.queryStringParameters; // working
  // const query = queryString.query || "harry+potter"; // working
  const query = event.queryStringParameters.query; // working
 
  const API_KEY = process.env.GOOGLE_BOOKS_API_KEY;
  const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${API_KEY}&maxResults=25`;
  
  try {
    const { data } = await axios.get(url);
 
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