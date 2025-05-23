// 你可以放在某个 .vue 文件中或单独封装 API 方法

import axios from 'axios';

export  async function chatWithQianfan() {
  try {
    const res = await axios.post('http://localhost:3000/api/qianfan', {
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: '写一首诗' }
      ]
    });

    console.log('AI 回复：', res.data);
  } catch (err) {
    console.error('调用失败', err);
  }
}

