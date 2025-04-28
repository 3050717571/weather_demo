<template>
  <el-container style="height: 100vh; padding: 0 20px;">
    <!-- Header: 应用标题 -->
    <el-header style="background-color: #409eff; color: white; text-align: center; padding: 2px;">
      <h1 >weather</h1>
    </el-header>

    <!-- Main Content: 主要内容区域 -->
    <el-main>
      <!-- Search Area: 搜索框 -->
      <el-row justify="center" style="margin-bottom: 20px;">
        <el-col :span="8">
          <el-input v-model="city" placeholder="请输入城市名称" @keyup.enter="getWeather"></el-input>
        </el-col>
      </el-row>

      <!-- Current Weather: 当前天气展示 -->
      <el-row justify="center" style="margin-bottom: 30px;">
        <el-col :span="12" class="current-weather">
          <div style="text-align: center;">
            <h3>{{ currentWeather.city }}</h3>
            <img :src="currentWeather.iconUrl" alt="weather icon" width="80" />
            <p>{{ currentWeather.temperature }}°C</p>
            <p>{{ currentWeather.condition }}</p>
            <p>风速: {{ currentWeather.windSpeed }} km/h</p>
          </div>
        </el-col>
      </el-row>

      <!-- Future Forecast: 未来天气预报 -->
      <el-row justify="space-around">
        <el-col v-for="(day, index) in forecast" :key="index" :span="4" class="forecast-card">
          <div style="text-align: center;">
            <h4>{{ day.date }}</h4>
            <img :src="day.iconUrl" alt="weather icon" width="50" />
            <p>{{ day.highTemp }}°C / {{ day.lowTemp }}°C</p>
          </div>
        </el-col>
      </el-row>
    </el-main>

    <!-- Footer: 页脚 -->
    <el-footer style="background-color: #f4f4f4; text-align: center; padding: 10px;">
      <p>weather</p>
    </el-footer>
  </el-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// 当前城市天气
const currentWeather = ref({
  city: '',
  temperature: '',
  condition: '',
  windSpeed: '',
  iconUrl: ''
});

// 未来几天的天气预报
const forecast = ref([
  { date: 'Day 1', highTemp: '33', lowTemp: '17', iconUrl: '' },
  { date: 'Day 2', highTemp: '', lowTemp: '', iconUrl: '' },
  { date: 'Day 3', highTemp: '', lowTemp: '', iconUrl: '' },
  { date: 'Day 4', highTemp: '', lowTemp: '', iconUrl: '' },
  { date: 'Day 5', highTemp: '', lowTemp: '', iconUrl: '' }
]);

// 输入的城市名称
const city = ref('');

// 获取天气数据的函数
const getWeather = async () => {
  // 这里可以添加天气API调用的代码来获取天气数据
  // 示例：通过输入的城市获取当前天气和未来天气预报

  // 模拟的天气数据
  currentWeather.value = {
    city: city.value,
    temperature: '25',
    condition: 'Sunny',
    windSpeed: '10',
    iconUrl: 'https://www.example.com/sunny-icon.png'
  };

  forecast.value = [
    { date: 'Day 1', highTemp: '28', lowTemp: '18', iconUrl: 'https://www.example.com/sunny-icon.png' },
    { date: 'Day 2', highTemp: '30', lowTemp: '20', iconUrl: 'https://www.example.com/cloudy-icon.png' },
    { date: 'Day 3', highTemp: '26', lowTemp: '19', iconUrl: 'https://www.example.com/rainy-icon.png' },
    { date: 'Day 4', highTemp: '27', lowTemp: '18', iconUrl: 'https://www.example.com/cloudy-icon.png' },
    { date: 'Day 5', highTemp: '29', lowTemp: '21', iconUrl: 'https://www.example.com/sunny-icon.png' }
  ];
};
</script>

<style scoped>
.current-weather {
  background-color: #e9e9e9;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.forecast-card {
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.forecast-card img {
  margin-bottom: 10px;
}
</style>
