exports.handler = async (event) => {
  try {
    const date = event.queryStringParameters?.date || new Date().toISOString().slice(0, 10);
    const url = `https://api-web.nhle.com/v1/score/${date}`;
    const res = await fetch(url);
    const data = await res.json();
    return {
      statusCode: 200,
      headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    };
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) };
  }
};
