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
            <span size="large"  type="success">小Y天气</span>
          </el-col>
          <el-col :span="6">
            <span>{{weatherData.province}}-{{weatherData.city}}</span>
          </el-col>
          <el-col :span="6">
            <el-form-item>
          <el-input
          placeholder="请输入城市名称进行搜索"
          style="width:230px;"
          class="rounded-input"
          @keyup.enter="getData(city)"
          v-model = "city"
          />
            </el-form-item>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <el-row >
          <el-col :span="16">
            <el-row style="margin:30px 0 50px 20px;">
              <el-col>
                <span>中央气象台{{weatherData.reporttime}}发布</span>
              </el-col>
            </el-row>
            <el-row style="margin:0px 0 30px 20px;" align="middle" justify="start" >
              <el-col :span =3>
              <span class="tempature">{{weatherData.temperature}}°</span>
              </el-col>
              <el-col :span =2>
              <span class="weathers">{{weatherData.weather}}</span>
              </el-col>
              <el-col :span =4>
              <span class="weatherStatus">46 优</span>
              </el-col>
            </el-row>
            <el-row style="margin:0 20px;">
              <el-col :span =5>
              <span>风情：{{weatherData.winddirection}} {{weatherData.windpower}}级</span>
              </el-col>
              <el-col :span =3>
              <span> 湿度: {{weatherData.humidity}}%</span>
              </el-col>
              <el-col :span =4>
              <span>气压: 968hPa</span>
              </el-col>
              <el-col :span =4>
              <span>车辆限行: 1和6</span>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="8">
            <el-row style="margin:50px 0 50px 20px;">
             <span>天气图片</span>
            </el-row>
          </el-col>
        </el-row>
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

const city = ref('110101')

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
.rounded-input::v-deep(.el-input__wrapper) {
  border-radius: 20px; /* 控制圆角 */
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
</style>
