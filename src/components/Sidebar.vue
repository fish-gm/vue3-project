<template>
    <div class="side-main">
      <div class="logo-container">
        <router-link to="/" class="logo"><img src="@assets/img/logo.jpg" alt=""></router-link>
        <ul class="nav">
          <li :class="{'is-active' : menuActive.indexOf(item.path) >= 0}" v-for="item in menuList" :key="item.path" @click="selectMenu(item.path)">
            <i :class="['iconfont', `icon-${item.path}`]"></i><span class="qwe">{{item.name}}</span>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
<script setup>
    import { useRoute, useRouter } from 'vue-router';
    import { reactive, computed } from 'vue'

    const route = useRoute();
    const router = useRouter();
    const menuList = reactive([{
            name: '首页',
            path: 'index'
        }, {
            name: '排行榜',
            path: 'rank'
        }, {
            name: '歌单',
            path: 'playlist'
        }, {
            name: 'MV',
            path: 'mvlist'
        }, {
            name: '歌手',
            path: 'artist'
        }, {
            name: '我的音乐',
            path: 'my'
        }]);
    // 当前选择菜单
    const menuActive = computed(() => route.path);

    // 切换导航跳转
    const selectMenu = (item) => {
        router.push({
                path: '/' + item
        })
    };

</script>
<style lang="less" scoped>
.side-main {
  padding: 0 35px;
  text-align: center;
}

.logo-container {
  display: flex; /* 添加display:flex属性 */
  align-items: center; /* 垂直居中对齐 */

  .logo {
    display: inline-block;
    width: 145px;
    margin-right: 10px; /* 调整与按钮之间的间距 */
  }

  .nav {
    display: flex; /* 添加display:flex属性 */
    align-items: center; /* 垂直居中对齐 */
    border-top: 1px solid #f5f5f5;
    flex-grow: 1; /* 占据剩余空间 */

    li {
      display: block;
      padding: 10px 16px;
      color: var(--color-text-main);
      border-radius: 8px;
      text-align: center;
      font-weight: 300;
      cursor: pointer;

      &.is-active {
        font-weight: 400;
        background-color: #fff;
        box-shadow: 0 20px 27px rgb(0 0 0 / 5%);

        .iconfont {
          color: #fff;
          background-color: var(--color-text-height);
        }
      }



      span {
        display: inline-block;
        line-height: 32px;
        margin: 0 10px;
      }
    }

    .iconfont {
      display: inline-flex;
      width: 32px;
      height: 32px;
      background-color: #fff;
      box-shadow: 0 4px 6px rgb(0 0 0 / 12%);
      border-radius: 6px;
      justify-content: center;
      align-items: center;
      margin-right: 10px;
      font-size: 18px;
      color: var(--color-text);
      vertical-align: top;
      margin: 0 auto;
    }
  }
}
</style>
