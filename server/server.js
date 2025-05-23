import express from 'express'
import axios from 'axios'
const app = express();

app.use(express.json());

const API_KEY = 'Z5FBpH9QoAPmHNephhpoT9qE';
const SECRET_KEY = 'gxM9i07jHZElNu8l4oO7EwtvcdvnjRsh';

let tokenCache = { token: '', expiresAt: 0 };

async function getAccessToken() {
  if (Date.now() < tokenCache.expiresAt) return tokenCache.token;

  const res = await axios.get('https://aip.baidubce.com/oauth/2.0/token', {
    params: {
      grant_type: 'client_credentials',
      client_id: API_KEY,
      client_secret: SECRET_KEY
    }
  });

  tokenCache.token = res.data.access_token;
  tokenCache.expiresAt = Date.now() + res.data.expires_in * 1000;
  return tokenCache.token;
}

app.post('/api/wenxin', async (req, res) => {
  const token = await getAccessToken();
  const question = req.body.question;

  const wenxinRes = await axios.post(
    'https://qianfan.gz.baidubce.com/v2/chat/completions',
    {
      model: 'ernie-3.5-8k',
      messages: [
        { role: 'system', content: '你是一个有帮助的AI助手。' },
        { role: 'user', content: question }
      ],
      stream: false
    },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    }
  );

  res.json(wenxinRes.data);
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
