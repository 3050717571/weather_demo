<template>
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
    <el-container>
      <el-header
        height="100px"
        style="background: linear-gradient(135deg, #7ecfff 0%, #4b6fff 100%);
        border-radius: 6px;
        "

      >
        <el-row justify="center" style="margin-top: 20px" :column="24">
          <el-col :span="6">
            <el-text size="large"  type="success">小Y天气</el-text>
          </el-col>
          <el-col :span="6">
            <el-text size="large">陕西省西安市</el-text>
          </el-col>
          <el-col :span="6">
            <el-form-item label="请输入城市名称">
              <el-input placeholder="请输入城市名称进行搜索" style="width: 230px" />
            </el-form-item>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <el-row >
          <el-col :span="16">
            <el-row style="margin:30px 0 50px 20px;">
              <el-col>
                <el-text>中央气象台17:35发布</el-text>
              </el-col>
            </el-row>
            <el-row style="margin:30px 0 50px 20px;">
              <el-col :span =2>
              <el-text>25°</el-text>
              </el-col>
              <el-col :span =2>
              <el-text>多云</el-text>
              </el-col>
              <el-col :span =2>
              <el-text>46 优</el-text>
              </el-col>
            </el-row>
            <el-row style="margin:0 20px;">
              <el-col :span =4>
              <el-text>西北风 3-4级</el-text>
              </el-col>
              <el-col :span =4>
              <el-text> 湿度 10%</el-text>
              </el-col>
              <el-col :span =4>
              <el-text>气压 968hPa</el-text>
              </el-col>
              <el-col :span =4>
              <el-text>限行 1和6</el-text>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="8">
            <el-row style="margin:50px 0 50px 20px;">
             <el-text>天气图片</el-text>
            </el-row>
          </el-col>
        </el-row>
      </el-main>
      <el-footer>
        <el-row justify="center">
          <el-col :span="8">
            <el-text>说明</el-text>
          </el-col>
        </el-row>
      </el-footer>
    </el-container>
  </el-container>
</template>
