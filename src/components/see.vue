<template>
     <div class="see">
          <brain>公司舆情监控系统</brain>

          <article class="article">
               <div class="left">
                    <p>热门话题榜</p>
                    <ul>
                         <li v-for="(item,index) in data">
                              {{index+1}}. {{item.title}}
                              <div :class="{count:!item.through}" >{{item.count}}</div>
                              <div :class="{active:item.through}" class="icon"></div>
                         </li>
                    </ul>
               </div>
               <div class="right">
                        <p>关键词</p>
                        <div class="round">
                             <div class="flower">
                                  哈哈哈
                             </div>
                             <div class="monkey">
                                    哈哈哈
                             </div>
                             <div class="dead">
                                哈哈哈
                             </div>
                             <div class="mountain">哈哈哈</div>
                             <div class="horse">哈哈哈</div>
                        </div>
               </div>
          </article>
     </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
let data = [
     { title: "哈哈哈", count: 2167, through: true },
     { title: "哈哈哈", count: 2167, through: true },
     { title: "哈哈哈", count: 2367, through: false },
     { title: "哈哈哈", count: 2367, through: false },
     { title: "哈哈哈", count: 2267, through: false },
]


</script>

<style lang='less' scoped>
ul,
li {
     padding: 0;
     list-style: none;
}

.see {
     border: 1px solid #d5ffff;
     height: 242px;
     .article {
          padding: 5px;
          display: flex;
          height: 195px;
          padding-bottom:10px;
          .left {
               padding: 0;
               padding-left: 20px;
               margin: 0;
               p {
                    margin: 9px 0 0 0;
                    color: #d5ffff;
                    font-size: 17px;
               }

               ul {
                    li {
                         margin:5px 0;
                         color: #fff;
                         font-size: 15px;
                         text-align: left;
                         letter-spacing: 1px;
                         display: flex;
                         div{
                              margin-left:5px;
                              color:#d5ffff;
                         }
                         .count{
                             color:#d9207b;   
                         }
                         .icon {

                              width: 15px;
                              height: 15px;
                              background: url(../assets/img/bottom.png);
                              background-repeat: no-repeat;
                              background-size: cover;
                         }

                         .active {
                              background-image: url(../assets/img/top.png);
                         }
                    }
               }
          }
          .right{
               padding: 0;
               margin: 0;
               width: 195px;
               p {
                    margin: 9px 0 0 0;
                    color: #d5ffff;
                    font-size: 17px;
                    text-align:center;
               }
               .round{
                    height: 169px;
                    width:100%;
                    position:relative;
                    div{
                         position:absolute;
                         width: 50px;
                         height: 50px;
                         border-radius:50%;
                         line-height: 50px;
                         text-align: center;
                         color:#fff;
                         font-size:12px;
                         border:3px solid rgb(141, 190, 177);
                    }
                    .flower{
                         top:70px;
                         left:20px;
                         background: radial-gradient(rgba(59, 86, 85,.4),rgb(141, 190, 177));
                    }
                    .monkey{
                         width:70px;
                         height: 70px;
                         line-height: 70px;
                         font-size:16px;
                         top:60px;
                         left:70px;
                         background: radial-gradient(rgba(5, 147, 230, 0.5),rgb(141, 190, 177));
                    }
                    .horse{
                         top:20px;
                         left:140px;
                         background: radial-gradient(rgba(5, 147, 230, 0.5),rgb(141, 190, 177)); 
                    }
                    .mountain{
                         top:100px;
                         left:120px;
                         background: radial-gradient(rgba(5, 147, 230, 0.5),rgb(141, 190, 177));
                    }
                    .dead{
                         top:10px;
                         left:60px;
                         background: radial-gradient(rgba(59, 86, 85,.4),rgb(141, 190, 177));
                    }
               }

          }
     }
}
</style>