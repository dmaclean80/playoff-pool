exports.handler = async () => {
  try {
    const url = 'https://api-web.nhle.com/v1/skater-stats-leaders/20252026/3?categories=points&limit=100';
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
