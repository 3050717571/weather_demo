<template>
  <div class="page-background">
  <el-container height="600px">
    <el-aside width="15%" style="background-color: #545c64; height: 100%">
      <el-menu>
        <el-menu-item>首页</el-menu-item>
        <el-menu-item>我的</el-menu-item>
        <el-menu-item>我的</el-menu-item>
        <el-menu-item>我的</el-menu-item>
        <el-menu-item>我的</el-menu-item>
        <el-menu-item>我的</el-menu-item>
        <el-menu-item>我的</el-menu-item>
        <el-menu-item>我的</el-menu-item>
        <el-menu-item>我的</el-menu-item>
        <el-menu-item>我的</el-menu-item>
        <el-menu-item>我的</el-menu-item>
        <el-menu-item>我的</el-menu-item>
        <el-menu-item>我的</el-menu-item>
        <el-menu-item>我的</el-menu-item>
        <el-menu-item>我的</el-menu-item>
        <el-menu-item>我的</el-menu-item>
        <el-menu-item>我的</el-menu-item>
      </el-menu>
    </el-aside>
    <el-container id="cccc">
      <el-header
        height="100px"
        style="
        border-radius: 6px;
        border-bottom:1px white solid ;
        "

      >
        <el-row justify="center" style="margin-top: 20px" :column="24">
          <el-col :span="6">
            <img src="@/assets/imgs/0.png" class="logo" />
          </el-col>
          <el-col :span="6">
            <el-icon style="font-size: 20px; "><Location /></el-icon>
            <span class="region"> {{weatherData.province}}-{{weatherData.city}}</span>
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
            @keyup.enter="getData(city)"
            />
          </el-col>
        </el-row>
      </el-header>
      <el-main>
            <el-row justify="end">
              <el-col :span="6" >
                <span class="reportTime"> 中央气象台{{weatherData.reporttime}}发布</span>
              </el-col>
            </el-row>
            <div class="todayWeather">
              <div class="weatherStation">  🌤 天气实况</div>
            <el-row style="margin:20px 0 25px 0px;" align="middle" justify="center" >
              <el-col :span=6>
              <span class="tempature">{{weatherData.temperature}}°</span>
              </el-col>
              <el-col :span =8>
              <span class="weathers">{{weatherData.weather}}</span>
              </el-col>
            </el-row>
            <el-row  align="middle" justify="center" >
              <el-col :span =6>
              <span><wind/>💨 {{weatherData.winddirection}}风 {{weatherData.windpower}}级</span>
              </el-col>
              <el-col :span =6>
              <span> 💧 {{weatherData.humidity}}%</span>
              </el-col>
            </el-row>
          </div>
      </el-main>
      <el-footer>
        <el-row justify="center">
          <el-col :span="8">
            <span>说明</span>
          </el-col>
        </el-row>
      </el-footer>
    </el-container>
  </el-container>
</div>
</template>

<script setup lang="ts">
import {ref,reactive, onMounted} from 'vue'
import { getWeatherStation } from '@/api/weather';
import { regionData } from 'element-china-area-data'
import { Location } from '@element-plus/icons-vue'

const city = ref('110101')
const selectedRegion = ref([])

let weatherData = reactive({
  province:undefined,
  city:undefined,
  adcode:undefined,
  weather:undefined,
  temperature:undefined,
  winddirection:undefined,
  windpower:undefined,
  humidity:undefined,
  reporttime:undefined,
  temperature_float:undefined,
  humidity_float:undefined,
})

const limitChange =async (value) =>{

  city.value = value[value.length -1]
   console.log('city',city.value)
  await getData(city.value)
}

const getData = async(city:string) =>{
  const res = await getWeatherStation(city)
  const data = res.data.lives[0]
  console.log("data",res.data.lives[0])

  // weatherData = {...res.data.lives[0]}
  Object.assign(weatherData,data)
  console.log('weatherData.city',weatherData.city)
}


onMounted(async()=>{
  await getData(city.value)
}
)
</script>

<style scoped>
.page-background{
  background-image: url('@/assets/imgs/weather.png');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
#cccc{
  color:white;
}
:deep(.rounded-input .el-input__wrapper) {
  border-radius: 20px;
  padding: 4px 14px;
  border: 1px solid #dcdfe6;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
}
:deep(.rounded-input .el-input__wrapper:hover) {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.tempature{
  font-size: 80px;
}
.weathers{
  font-size:30px;
}
.weatherStatus{
  font-size:15px;
}
.region{
  font-size:24px;
  margin:0 0 0 5px;
  color: #fff;
}

.reportTime{
  font-size: 15px;
  color: #999;
}
.logo{
  width: 156px;
  height: 37px;
}
.todayWeather {
  background-color: #98d5f2;
  width: 50%;
  height: 30%;
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.todayWeather:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

.weatherStation {
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  border-radius: 12px;
  cursor: default;
  transition: all 0.3s ease;
  letter-spacing: 1px;
  position: relative;
}
.weatherStation:hover {
  transform: scale(1.1);
}
</style>
