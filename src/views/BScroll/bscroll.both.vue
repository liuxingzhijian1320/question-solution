<template>
  <div id="goodsComponents" v-if="demoList">
    <div class="content">
      <div class="meun-wrapper" ref="menuWrapper">
        <ul>
          <li v-for='(item,index) in demoList' v-if="item.list.length !=0" ref="menuList" class="menu-item" :key='index'
            :class='{current:currentIndex === index}' @click="selectMenu(index,$event)">
            {{item.title}}
          </li>
        </ul>
      </div>
      <div class="goods-wrapper" ref='foodsWrapper'>
        <ul>
          <li class="food-list" ref="foodList" v-for="(item,index) in demoList" v-if="item.list.length !=0" :key='index'>
            <div class="title">{{item.title}}</div>
            <ul>
              <li class="food-item" v-for=' (itemList,index) in  item.list' :key='index'>
                <!--方形-->
                <div class="food-item-logo">
                  <div class="food-item-logo-border"></div>
                </div>
                <div class="food-item-info">
                  <div class="food-item-info-title height">{{itemList.title}}</div>
                  <div class="food-item-info-subtitle height">{{itemList.subtitle}}</div>
                  <div class="food-item-info-spec height">{{itemList.spec}}</div>
                </div>
                <div class="food-item-num">数量：{{itemList.num}}</div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll';
export default {
  name: 'bscroll-both',
  data() {
    return {
      goods: [],
      listHeight: [],
      scrollY: 0,
      foodsScroll: '',
      demoList: [
        {
          id: 1,
          title: '宴会舞台区',
          list: [
            {
              title: '舞台truss架子',
              subtitle: '坚固安全 质地优质',
            },
            {
              title: '背景架',
              subtitle: '专业调配 质量保证',
            },
            {
              title: '浪漫星空',
              subtitle: '营造温馨浪漫感',
            },
            {
              title: '欧式吊幔',
              subtitle: '低调奢华 高端品质',
            },
            {
              title: '桁架',
              subtitle: '背景支架 坚实牢固',
            },
            {
              title: '精美珠光地毯',
              subtitle: '珠光闪耀 高端时尚',
            },
            {
              title: '梦幻水晶灯',
              subtitle: '奢华璀璨 高贵典雅',
            },
            {
              title: '华丽玫瑰花',
              subtitle: '精致浪漫 时尚优雅',
            },
            {
              title: '精美藤蔓',
              subtitle: '线条优美 浪漫情调',
            },
            {
              title: '主题背景板',
              subtitle: '高贵圣洁 华丽梦幻',
            },
            {
              title: '梦幻软光灯带',
              subtitle: '光芒璀璨 增添氛围',
            },
            {
              title: '欧式雕花柱',
              subtitle: '雕刻精细 增添立体感',
            },
            {
              title: '梦幻天使',
              subtitle: '人间精灵 守护爱情',
            },
            {
              title: '梦幻蜡烛',
              subtitle: '温馨烛光 灵动火苗',
            },
            {
              title: '欧式罗马花盆',
              subtitle: '精致浪漫 时尚优雅',
            },
            {
              title: '欧式罗马柱',
              subtitle: '尽显欧式奢华与典雅',
            },
            {
              title: '欧式唯美花艺',
              subtitle: '梦幻色调 唯美大气',
            },
          ],
        },
        {
          id: 2,
          title: 'T台过道区',
          list: [
            {
              title: '幸福之路',
              subtitle: '唯美浪漫 时尚大气',
            },
            {
              title: '台阶装置',
              subtitle: '唯美浪漫 时尚大气',
            },
            {
              title: '时尚小舞台',
              subtitle: '精致浪漫 凸显主题',
            },
            {
              title: '精美珠光地毯',
              subtitle: '珠光闪耀 高端大气',
            },
            {
              title: '梦幻水晶灯',
              subtitle: '奢华璀璨 高贵典雅',
            },
            {
              title: '欧式罗马柱',
              subtitle: '尽显欧式奢华与典雅',
            },
            {
              title: '欧式罗马花盆',
              subtitle: '高雅奢华 彰显品味',
            },
            {
              title: '梦幻蜡烛',
              subtitle: '温馨烛光 灵动火苗',
            },
            {
              title: '梦幻天使',
              subtitle: '人间精灵 守护爱情',
            },
            {
              title: '欧式唯美花艺',
              subtitle: '梦幻色调 唯美大气',
            },
            {
              title: '欧式浪漫花球',
              subtitle: '色彩搭配 增添氛围',
            },
          ],
        },
        {
          id: 3,
          title: '宴会餐桌区',
          list: [
            {
              title: '主题桌布',
              subtitle: '高贵色调 舒适柔软',
            },
            {
              title: '欧式吊幔桌围',
              subtitle: '低调奢华 高端品质',
            },
            {
              title: '欧式竹节椅',
              subtitle: '奢华享受 高贵低调',
            },
            {
              title: '欧式椅背纱',
              subtitle: '唯美梦幻 轻盈飘逸',
            },
            {
              title: '欧式主桌花',
              subtitle: '唯美大气 高贵华丽',
            },
            {
              title: '梦幻蜡烛',
              subtitle: '温馨时尚 精致梦幻',
            },
            {
              title: '欧式罗马柱',
              subtitle: '尽显欧式奢华与典雅',
            },
            {
              title: '金色欧式烛台',
              subtitle: '高贵奢华 彰显品味',
            },
            {
              title: '欧式客桌花',
              subtitle: '优雅别致 精美独特',
            },
            {
              title: '欧式珠链',
              subtitle: '高雅奢华 彰显品味',
            },
            {
              title: '精美椅背蝴蝶结',
              subtitle: '小巧精致 凸显主题',
            },
            {
              title: '浪漫花瓣',
              subtitle: '营造气氛 增加层次',
            },
            {
              title: '主题桌卡',
              subtitle: '主题风格 精美细节',
            },
            {
              title: '主题席卡',
              subtitle: '主题风格 精美细节',
            },
          ],
        },
        {
          id: 4,
          title: '迎宾合影区',
          list: [
            {
              title: '背景架',
              subtitle: '专业调配 质量保证',
            },
            {
              title: '主题布幔',
              subtitle: '丝质柔软 色彩鲜艳',
            },
            {
              title: '欧式吊幔',
              subtitle: '低调奢华 高端品质',
            },
            {
              title: '主题背景板',
              subtitle: '高贵圣洁 华丽梦幻',
            },
            {
              title: '欧式雕花栅栏',
              subtitle: '雕刻精美 增添氛围',
            },
            {
              title: '时尚小舞台',
              subtitle: '精致浪漫 凸显主题',
            },
            {
              title: '精美地毯',
              subtitle: '高贵色调 舒适柔软',
            },
            {
              title: '浪漫白鸽',
              subtitle: '灵动活泼 寓意美好',
            },
            {
              title: '欧式喷泉',
              subtitle: '高雅奢华 彰显品味',
            },
            {
              title: '欧式唯美花艺',
              subtitle: '色彩搭配 增添氛围',
            },
            {
              title: '欧式罗马花盆',
              subtitle: '高雅奢华 彰显品味',
            },
            {
              title: '欧式罗马柱',
              subtitle: '尽显欧式奢华与典雅',
            },
            {
              title: '梦幻天使',
              subtitle: '人间精灵 守护爱情',
            },
            {
              title: '梦幻蜡烛',
              subtitle: '温馨时尚 精致梦幻',
            },
            {
              title: '梦幻云朵棉',
              subtitle: '营造梦幻视觉感',
            },
          ],
        },
        {
          id: 5,
          title: '迎宾签到区',
          list: [
            {
              title: '背景架',
              subtitle: '专业调配 质量保证',
            },
            {
              title: '主题布幔',
              subtitle: '丝质柔软 色彩鲜艳',
            },
            {
              title: '欧式吊幔',
              subtitle: '低调奢华 高端品质',
            },
            {
              title: '主题背景板',
              subtitle: '高贵圣洁 华丽梦幻',
            },
            {
              title: '主题桌布',
              subtitle: '丝质柔软 色彩鲜艳',
            },
            {
              title: '复古香水瓶',
              subtitle: '高贵优雅 浪漫情调',
            },
            {
              title: '复古首饰盒',
              subtitle: '蕴含着典雅的贵族风情',
            },
            {
              title: '欧式罗马花盆',
              subtitle: '高雅奢华 彰显品味',
            },
            {
              title: '欧式奢华烛台',
              subtitle: '欧式浪漫 奢华品质',
            },
            {
              title: '金色欧式烛台',
              subtitle: '高贵奢华 彰显品味',
            },
            {
              title: '梦幻天使小摆件',
              subtitle: '人间精灵 守护爱情',
            },
            {
              title: '复古留声机',
              subtitle: '色调高雅 回味经典',
            },
            {
              title: '欧式唯美花艺',
              subtitle: '色彩搭配 增添氛围',
            },
            {
              title: '梦幻蜡烛',
              subtitle: '温馨时尚 精致梦幻',
            },
            {
              title: '欧式复古罗马花盆',
              subtitle: '高雅奢华 彰显品味',
            },
            {
              title: '欧式雕花相框',
              subtitle: '高雅奢华 精雕细琢',
            },
            {
              title: '华丽玫瑰花',
              subtitle: '精致浪漫 时尚优雅',
            },
            {
              title: '精美藤蔓',
              subtitle: '线条优美 浪漫情调',
            },
            {
              title: '欧式雕花栅栏',
              subtitle: '雕刻精美 增添氛围',
            },
            {
              title: '复古蝴蝶',
              subtitle: '灵动优美 复古时尚',
            },
            {
              title: '主题签到笔',
              subtitle: '主题搭配 细节精致',
            },
            {
              title: '主题签到本',
              subtitle: '精美独特 主题搭配',
            },
            {
              title: '梦幻水晶灯',
              subtitle: '奢华璀璨 高贵典雅',
            },
            {
              title: '主题迎宾牌',
              subtitle: '独特设计 主题展示',
            },
            {
              title: '精美画架',
              subtitle: '欧式风格 完美搭配',
            },
            {
              title: '主题席位牌',
              subtitle: '主题搭配 细节精致',
            },
          ],
        },
        {
          id: 6,
          title: '迎宾甜品区',
          list: [
            {
              title: '背景架',
              subtitle: '专业调配 质量保证',
            },
            {
              title: '主题布幔',
              subtitle: '丝质柔软 色彩鲜艳',
            },
            {
              title: '欧式吊幔',
              subtitle: '低调奢华 高端品质',
            },
            {
              title: '主题背景板',
              subtitle: '高贵圣洁 华丽梦幻',
            },
            {
              title: '梦幻logo字母',
              subtitle: '时尚新颖 温馨梦幻',
            },
            {
              title: '复古长条桌',
              subtitle: '典雅简约 华丽低调',
            },
            {
              title: '欧式雕花圆桌',
              subtitle: '精美雕花 端庄大气',
            },
            {
              title: '欧式实木雕花桌',
              subtitle: '浓厚的复古贵族气息',
            },
            {
              title: '梦幻水晶灯',
              subtitle: '奢华璀璨 高贵典雅',
            },
            {
              title: '复古首饰盒',
              subtitle: '蕴含着典雅的贵族风情',
            },
            {
              title: '精致甜品架',
              subtitle: '贴合主题 精致浪漫',
            },
            {
              title: '精致甜品盘',
              subtitle: '贴合主题 精致浪漫',
            },
            {
              title: '欧式雕花茶具',
              subtitle: '彰显欧式贵族风情',
            },
            {
              title: '欧式雕花椅',
              subtitle: '色调高雅 华丽复古',
            },
            {
              title: '复古小提琴',
              subtitle: '优雅别致 精美独特',
            },
            {
              title: '欧式唯美花艺',
              subtitle: '色彩搭配 增添氛围',
            },
            {
              title: '欧式罗马花盆',
              subtitle: '高雅奢华 彰显品味',
            },
            {
              title: '欧式罗马柱',
              subtitle: '尽显欧式奢华与典雅',
            },
            {
              title: '复古书本',
              subtitle: '复古文艺 经典传承',
            },
            {
              title: '梦幻蜡烛',
              subtitle: '温馨时尚 精致梦幻',
            },
            {
              title: '梦幻纱幔',
              subtitle: '唯美梦幻 轻盈飘逸',
            },
            {
              title: '优质插花网格',
              subtitle: '造型多变 主题搭配',
            },
            {
              title: '浪漫瀑布花',
              subtitle: '欧式浪漫 灵动优雅',
            },
            {
              title: '浪漫花瓣',
              subtitle: '营造气氛 增加层次',
            },
          ],
        },
        {
          id: 7,
          title: '花艺设计区',
          list: [
            {
              title: '追光灯',
              subtitle: '新娘手捧 传递幸福',
            },
            {
              title: '精美胸花',
              subtitle: '胸前装饰 精致小巧',
            },
            {
              title: '精美腕花',
              subtitle: '手腕花艺 花香相伴',
            },
            {
              title: '精美车头花',
              subtitle: '婚车头车精美花艺',
            },
          ],
        },
        {
          id: 9,
          title: '灯光舞美',
          list: [
            {
              title: '追光灯',
              subtitle: '突出中心 画龙点睛',
            },
            {
              title: '光束灯',
              subtitle: '光束集中 梦幻氛围',
            },
            {
              title: 'LED par灯',
              subtitle: '环境染色 烘托气氛',
            },
            {
              title: 'LED洗墙灯',
              subtitle: '渲染背景 增强效果',
            },
            {
              title: 'Par 64',
              subtitle: '基本光源 整体照明',
            },
            {
              title: '薄雾机',
              subtitle: '营造氛围 集中光束',
            },
          ],
        },
        {
          id: 10,
          title: '婚礼执行',
          list: [
            {
              title: '婚礼管家',
              subtitle: '专业贴心的统筹服务',
            },
            {
              title: '婚礼执行',
              subtitle: '呈现婚礼完美现场',
            },
            {
              title: '花艺指导',
              subtitle: '用艺术的视觉呈现花之美',
            },
            {
              title: '婚礼管家',
              subtitle: '专业贴心的统筹服务',
            },
            {
              title: '婚礼执行',
              subtitle: '呈现婚礼完美现场',
            },
            {
              title: '花艺指导',
              subtitle: '用艺术的视觉呈现花之美',
            },
            {
              title: '婚礼执行',
              subtitle: '呈现婚礼完美现场',
            },
            {
              title: '花艺指导',
              subtitle: '用艺术的视觉呈现花之美',
            },
            {
              title: '灯光指导',
              subtitle: '营造最梦幻的婚礼气氛',
            },
          ],
        },
      ],
    };
  },
  computed: {
    //实时计算的currentIndex
    currentIndex() {
      for (let i = 0; i < this.listHeight.length; i++) {
        let height1 = this.listHeight[i];
        let height2 = this.listHeight[i + 1];
        if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
          this._followScroll(i);
          return i;
        }
      }
      return 0;
    },
  },
  created() {
    //setTimeout fake http progress
    setTimeout(() => {
      // this.goods = this.data;
      //为了保证实例完全挂
      this.$nextTick(() => {
        this._initScroll();
        this._calculateHeight();
      });
    }, 17);
  },
  methods: {
    _initScroll() {
      //初始化menu滚动
      this.meunScroll = new BScroll(this.$refs.menuWrapper, {
        click: true, //取消默认阻止事件
      });
      //初始化foods滚动
      this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {
        click: true,
        probeType: 3, //实时派发scroll的事件
      });
      //实施监听scroll的派发出来的pos的参数（下滑为负数，上滑为正数）
      this.foodsScroll.on('scroll', pos => {
        // console.info(pos.y);
        // 判断滑动方向，避免下拉时分类高亮错误（如第一分类商品数量为1时，下拉使得第二分类高亮）
        if (pos.y <= 0) {
          this.scrollY = Math.abs(Math.round(pos.y));
        }
      });
    },
    //计算的foods(右侧)每个li的高度
    _calculateHeight() {
      //获取的foodList的--所有的--节点
      let foodList = this.$refs.foodList;
      // console.info('foodList', foodList);
      //设置第一个foodList的第一个高度
      let height = 0;
      this.listHeight.push(height);
      // console.info('this.listHeight', this.listHeight);

      //写法一
      // for (let i = 0; i < foodList.length; i++) {
      //   let item = foodList[i];
      //   height += item.clientHeight;
      //   this.listHeight.push(height);
      // }

      //写法二
      foodList.forEach(n => {
        height += n.clientHeight; // 计算每个高度
        this.listHeight.push(height);
      });

      // console.info('this.listHeight', this.listHeight);
    },
    selectMenu(index, event) {
      //判断是不是pc版
      // if (!event._constructed) {
      //   return;
      // }
      // console.info(index);

      let foodList = this.$refs.foodList;
      //点击获取的index，就是当前点击的dom节点
      let el = foodList[index];
      // console.info(el);
      //滚动到指定的目标元素。
      this.foodsScroll.scrollToElement(el, 300);
    },
    //滚动menu，当menu的高度高一个屏幕的时候，会自动滚动的
    _followScroll(index) {
      let menuList = this.$refs.menuList;
      let el = menuList[index];
      this.meunScroll.scrollToElement(el, 300, 0, -100);
    },
  },
};
</script>
<style lang="scss" scoped>
#goodsComponents {
  .content {
    display: flex;
    width: 100%;
    position: absolute;
    bottom: 0rem;
    left: 0;
    top: 0;
    overflow: hidden;
    .meun-wrapper {
      width: 1.6rem;
      flex: 0 0 1.6rem;
      background: #f6f6f6;
      .menu-item {
        color: #666;
        text-decoration: none;
        /*line-height: 1.6rem;*/
        width: 100%;
        height: 1.6rem;
        font-size: 0.34rem;
        background: #f6f6f6;
        border-bottom: 1px solid #dfdfdf;
        border-left: 3px solid transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        padding: 0 0.2rem;
        /*overflow: hidden;*/
        /*text-overflow: ellipsis;*/
        /*white-space: nowrap;*/
        /*text-align: center;*/
        &.current {
          border-left: 3px solid #ff5a5f;
          color: #ff5a5f;
          background: #fff;
        }
      }
    }
    .goods-wrapper {
      flex: 1;
      .title {
        height: 0.5rem;
        width: 100%;
        background: #f6f6f6;
        border-left: 3px solid #dfdfdf;
        padding-left: 0.3rem;
        line-height: 0.5rem;
        color: #999;
        font-size: 0.24rem;
      }
      // .food-list:last-child {
      //   .android & {
      //     min-height: 10.95rem;
      //   }
      //   .ios & {
      //     min-height: 11.1rem;
      //   }
      // }
      .food-item {
        display: flex;
        height: 1.6rem;
        width: 100%;
        padding-left: 0.3rem;
        border-bottom: 1px solid #dfdfdf;
        .food-item-logo {
          width: 20%;
          padding-top: 0.3rem;
          .food-item-logo-border {
            width: 1rem;
            height: 1rem;
            background-color: #05cd76;
          }
        }
        .food-item-info {
          width: 55%;
          padding-top: 0.2rem;
          .height {
            height: 0.32rem;
          }
          .food-item-info-title {
            padding-top: 0.05rem;
            color: #333333;
            margin-bottom: 0.1rem;

            font-size: 0.26rem;
          }
          .food-item-info-subtitle {
            color: #999;
            font-size: 0.2rem;
            margin-bottom: 0.05rem;
          }
          .food-item-info-spec {
            color: #666666;
            font-size: 0.22rem;
          }
        }
        .food-item-num {
          width: 25%;
          padding-top: 1rem;
          color: #666;
          font-size: 0.22rem;
        }
      }
    }
  }
}
</style>
