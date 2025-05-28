<template>
  <div class="page-background">
    <el-container height="600px">
      <el-container id="cccc">
        <el-header height="100px" style="border-radius: 6px; border-bottom: 1px white solid">
          <el-row justify="center" style="margin-top: 20px" :column="24">
            <el-col :span="6">
              <span class="logo">🌤 小Y天气</span>
            </el-col>
            <el-col :span="6">
              <el-icon style="font-size: 20px"><Location /></el-icon>
              <span class="region"> {{ weatherData.province }}-{{ weatherData.city }}</span>
            </el-col>
            <el-col :span="6">
              <el-cascader
                class="rounded-input"
                v-model="selectedRegion"
                :options="regionData"
                clearable
                filterable
                placeholder="请输入城市"
                @change="limitChange"
                :show-all-levels="false"
              />
            </el-col>
          </el-row>
        </el-header>
        <el-main v-loading="fullscreenLoading">
          <el-row justify="end">
            <el-col :span="4">
              <span class="reportTime"> 中央气象台{{ formattedTime }}发布</span>
            </el-col>
          </el-row>
          <div class="todayWeather">
            <div class="weatherStation">🌤 天气实况</div>
            <el-row style="margin: 20px 0 25px 0px" align="middle" justify="center">
              <el-col :span="6">
                <span class="tempature">
                  <CountTo :endVal="weatherData.temperature" :duration="1000" suffix="°" />
                </span>
              </el-col>
              <el-col :span="8">
                <span class="weathers">{{ weatherData.weather }}</span>
              </el-col>
            </el-row>
            <el-row align="middle" justify="center">
              <el-col :span="6">
                <span class="discription"
                  ><wind />💨 {{ weatherData.winddirection }}风 {{ weatherData.windpower }}级</span
                >
              </el-col>
              <el-col :span="6">
                <span class="discription"> 💧 {{ weatherData.humidity }}%</span>
              </el-col>
            </el-row>
          </div>
        </el-main>
        <el-footer class="footer">
          <el-row justify="center">
            <el-col :span="24">
              <span>气象数据来源：中央气象台</span>
            </el-col>
          </el-row>
          <el-row justify="center">
            <el-col :span="24">
              <span>预报更新时间：每日06、08、12、16、20时</span>
            </el-col>
          </el-row>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, computed } from 'vue'
import { getWeatherStation } from '@/api/weather'
import { regionData } from 'element-china-area-data'
import { Location } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import dayjs from 'dayjs'
import { CountTo } from 'vue3-count-to'

const city = ref('610116')
const selectedRegion = ref([])
const fullscreenLoading = ref(false)

const weatherData = reactive({
  province: undefined,
  city: undefined,
  adcode: undefined,
  weather: undefined,
  temperature: undefined,
  winddirection: undefined,
  windpower: undefined,
  humidity: undefined,
  reporttime: undefined,
  temperature_float: undefined,
  humidity_float: undefined,
})

const formattedTime = computed(() => {
  return dayjs(weatherData.reporttime).format('HH:mm')
})

const limitChange = async (value: string[]) => {
  city.value = value[value.length - 1]
  console.log('city', city.value)
  await getData(city.value)
}

const getData = async (city: string) => {
  try {
    fullscreenLoading.value = true
    const res = await getWeatherStation(city)
    const data = res.data.lives[0]
    console.log('data', res.data.lives[0])

    // weatherData = {...res.data.lives[0]}
    Object.assign(weatherData, data)
    console.log('weatherData.city', weatherData.city)
  } catch (error) {
    ElMessage.error('获取天气数据失败，请稍后再试')
  } finally {
    fullscreenLoading.value = false
  }
}

onMounted(async () => {
  await getData(city.value)
})
</script>

<style scoped>
.page-background {
  background-image: url('@/assets/imgs/weather.png');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
#cccc {
  color: white;
}
:deep(.rounded-input .el-input__wrapper) {
  border-radius: 20px;
  padding: 4px 14px;
  border: 1px solid #dcdfe6;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  font-size: clamp(10px, 0.8vw, 22px);
}
:deep(.rounded-input .el-input__wrapper:hover) {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
:deep(.rounded-input .el-input__suffix .el-icon) {
  display: none;
}
:deep(.rounded-input .el-cascader__dropdown) {
  font-size: 10px;
}

.tempature {
  font-size: clamp(15px, 4vw, 80px);
}
.weathers {
  font-size: clamp(10px, 2vw, 40px);
}
.region {
  font-size: clamp(10px, 1.5vw, 40px);
  margin: 0 0 0 5px;
  color: #fff;
}

.reportTime {
  font-size: clamp(10px, 0.7vw, 20px);
  color: #999;
}
.logo {
  font-size: clamp(10px, 1.5vw, 40px);
  font-weight: bold;
  font-family: 'Segoe UI', 'Arial', sans-serif;
  padding: 10px 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  backdrop-filter: blur(6px);
  color: #ffffff;
  box-shadow:
    0 4px 8px rgba(0, 0, 0, 0.2),
    inset 0 0 6px rgba(255, 255, 255, 0.2);
  text-shadow: 0 0 6px rgba(0, 200, 255, 0.6);
  transition: all 0.3s ease;
  user-select: none;
  cursor: default;
  white-space: nowrap;
}

.logo:hover {
  transform: scale(1.05);
  box-shadow:
    0 6px 12px rgba(0, 0, 0, 0.3),
    inset 0 0 8px rgba(0, 200, 255, 0.4);
}
.discription {
  font-size: clamp(10px, 1.2vw, 1.5vw);
}

.todayWeather {
  background-color: #98d5f2;
  width: 45%;
  min-height: 200px;
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  padding: 20px;
  box-sizing: border-box;
}

.todayWeather:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

.weatherStation {
  font-size: clamp(10px, 1.3vw, 22px);
  font-weight: bold;
  text-align: center;
  cursor: default;
  transition: all 0.3s ease;
  letter-spacing: 1px;
  position: relative;
}
.weatherStation:hover {
  transform: scale(1.1);
}
.footer {
  background-color: #aec3db;
  font-size: clamp(10px, 0.7vw, 20px);
  text-align: center;
}
</style>
