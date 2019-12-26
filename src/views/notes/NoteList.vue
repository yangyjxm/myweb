<template>
  <div class="noteList">
    <div class="block">
      <ul>
        <li v-for="(item,index) in 30"
            :key="item"
            @click="queryDetails()">
          <span class="date">2019-12-24</span>
          <span class="circle"></span>
          <span class="title">Centen OS下的mysql安装与配置({{index}})：入门篇</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'noteList',
  data () {
    return {
    }
  },
  methods: {
    queryDetails () {
      this.$router.push({ path: '/note/noteDetails' }).catch(err => err)
    }
  }
}
</script>
<style lang='scss'>
.noteList {
  .block {
    width: 66%;
    min-height: 600px;
    margin: 0 auto;
    padding: 30px 0;
    ul {
      list-style-type: none;
      li {
        border-left: 6px solid #409eff;
        line-height: 60px;
        .date {
          display: inline-block;
          position: relative;
          left: -130px;
          top: 3px;
        }
        .title {
          display: inline-block;
          position: relative;
          left: -60px;
          top: 3px;
          cursor: pointer;
          font-size: 22px;
          font-weight: bold;
          transition: 0.5s;
          &:hover {
            color: #409eff;
            transform: translateX(30px);
            &:before {
              content: "🌞";
            }
          }
        }
        .circle {
          display: inline-block;
          width: 12px;
          height: 12px;
          background-color: #fff;
          border: 4px solid #409eff;
          border-radius: 50%;
          position: relative;
          left: -95px;
          top: 6px;
        }
      }
    }
  }
}
</style>
