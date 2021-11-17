<template>
  <div class="page-content">
    <div class="section">
      <div class="left">
        <img src="@/assets/images/leo_ce.gif" />
      </div>
      <div class="right">
        <div class="title">关于作者</div>
        <ul>
          <li>
            I'm a frontend engineer at
            <a
              href="https://baike.baidu.com/item/%E6%9E%81%E5%AE%A2%E5%AD%A6%E9%99%A2/13207736"
              >极客学院</a
            >
          </li>
          <li>
            I love coding, and am capable of
            <span>
              <el-tag
                :style="
                  `background-color: ${t.color}; color: #fff;font-weight: bold`
                "
                v-for="t in langTags"
                :key="t.label"
                >{{ t.label }}</el-tag
              >
            </span>
          </li>
          <li>
            Master degree <a href="https://www.unsw.edu.au/">UNSW</a>, and
            Bachelor degree <a href="http://www.zstu.edu.cn/">ZSTU</a>
          </li>
          <li>
            Experienced at web, h5, 微信小程序, data visualization with AntV
          </li>
          <li>
            Some experiences at Microservices with
            <el-tag
              :style="
                `background-color: #2c2c2c; color: #fff;font-weight: bold`
              "
              >node</el-tag
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="section">
      <div class="left">
        <div class="title">联系作者</div>
        <ul>
          <li>email: luyy9277@163.com</li>
          <li>
            社交媒体：<a href="https://twitter.com/home"
              ><j-icon type="twitter" :size="30"></j-icon
            ></a>
            <a href="https://www.facebook.com/lu.yaoye.3/">
              <j-icon type="facebook" :size="30"
            /></a>
            <a
              href="https://weibo.com/1909681800/profile?topnav=1&wvr=6&is_all=1"
              ><j-icon type="weibo" :size="30"
            /></a>
          </li>
        </ul>
      </div>
      <div class="right">
        <img
          src="@/assets/images/buyme.png"
          style="object-fit: contain; object-position: top center;"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      langTags: [
        {
          label: "JS",
          color: "#f4ea2a",
        },
        {
          label: "HTML",
          color: "#fc490b",
        },
        {
          label: "CSS",
          color: "#1296db",
        },
        {
          label: "TS",
          color: "#1296db",
        },
        {
          label: "Vue",
          color: "#41b883",
        },
        {
          label: "微信小程序",
          color: "#45cc76",
        },
        {
          label: "React",
          color: "#61dafb",
        },
        {
          label: "Node",
          color: "#2c2c2c",
        },
        {
          label: "Koa",
          color: "#4ea209",
        },
        {
          label: "Less",
          color: "#7058c6",
        },
        {
          label: "Python",
          color: "#fdd835",
        },
        {
          label: "C",
          color: "#515151",
        },
        {
          label: "Go",
          color: "#2c2c2c",
        },
        {
          label: "egg",
          color: "#22ab28",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.page-content {
  font-family: PingFangSC-Regular, PingFang SC;
  font-size: 24px;
  background: #fff;
  min-height: calc(100vh - 60px);
  padding: 50px 30px;
  .section {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 80px;
    .left,
    .right {
      width: 45%;
      text-align: left;
      img {
        width: 100%;
        object-fit: cover;
        height: 300px;
      }
      li {
        line-height: 32px;
        /deep/ .el-tag {
          margin: 0 2px;
        }
      }
    }
    .title {
      font-size: 32px;
      font-family: PingFangSC-Medium, PingFang SC;
    }
  }
}
</style>
