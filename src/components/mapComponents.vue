<template>
  <div id="container"></div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import AMapLoader from "@amap/amap-jsapi-loader";

let map: any = null;

onMounted(() => {
  window._AMapSecurityConfig = {
    securityJsCode: "4510877a60378ac967c828f15dbdc48e",
  };

  AMapLoader.load({
    key: "addce04dbc62fb2b902302f3753af3e7",
    version: "2.0",
    plugins: ["AMap.Scale", "AMap.Geolocation","AMap.ToolBar"],
  })
    .then((AMap) => {
      //初始化地图
      map = new AMap.Map("container", {
        viewMode: "3D",
        zoom: 11,
      })

      //缩放工具条
      const toolbar = new AMap.ToolBar({
         position: "LT"
      });
      map.addControl(toolbar);

      //浏览器定位
      const geolocation = new AMap.Geolocation({
        enableHighAccuracy: true,
        timeout: 10000,
        offset: [10, 20],
        zoomToAccuracy: true,
        position: "RB",
      });

      map.addControl(geolocation)

      geolocation.getCurrentPosition((status: any, result: any) => {
        if (status === "complete") {
          onComplete(result);
        } else {
          onError(result);
        }
      });

      function onComplete(data: any) {
        console.log("定位成功：", data);
      }

      function onError(error: any) {
        console.error("定位失败：", error);
      }
    })
    .catch((e) => {
      console.error("地图加载失败", e);
    });


});

onUnmounted(() => {
  map?.destroy();
});
</script>

<style scoped>
#container {
  width: 100%;
  height: 100vh;
}
</style>
