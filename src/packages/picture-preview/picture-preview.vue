<template>
  <transition name="fade">
    <div class="full-picture-bg">
      <!-- <img class="back-images" @click.stop.prevent="pictureOut" src="../../assets/home_back_withe_icon_normal@2x.png" alt="" srcset=""> -->
      <span :style="[deleStyle]" class="delete-span" @click.stop="deletePic" v-if="isDelete">×</span>
      <!-- Swiper -->
      <div class="swiper-container picture-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item, index) in pictureLists" :key="index">
            <div class="swiper-zoom-container" @click.stop="pictureClick">
              <!-- <div class="picture-out-bg" @click.stop="pictureOut"></div> -->
              <img :src="item[urlName]" class="animated zoomIn">
            </div>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination swiper-pagination-white"></div>
        <!-- Add Navigation -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    </div>
  </transition>
</template>
<script>
import Swiper from 'swiper';

export default {
  name: 'picture-preview',
  data() {
    return {
      pictureSwiper: null,
      pictureLists: [],
      clickNum: 0
    };
  },
  props: {
    urlName: {
      type: String,
      default: 'url',
      required: false
    },
    deleStyle: {
      type: Object,
      default: () => {
        return {}
      },
      required: false
    },
    pictureIndex: {
      type: Number,
      default: 0
    },
    pictureData: {
      type: Array,
      default() {
        return [];
      }
    },
    isDelete: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    // 判断单击双击
    pictureClick() {
      this.$data.clickNum++;
      setTimeout(() => {
        if (this.$data.clickNum === 1) {
          this.$emit('picture-out');
        } else {
          this.$data.clickNum = 0;
        }
      }, 250);
    },
    pictureOut() {
      this.$emit('picture-out');
    },
    // 创建帖子时删除图片
    deletePic() {
      // console.log(Object.prototype.toString.call(this.$data.pictureSwiper));
      // this.$data.pictureLists.splice(this.$data.pictureSwiper.activeIndex, 1);
      this.$emit('delete-picture', this.$data.pictureSwiper.activeIndex);
    }
  },
  mounted() {
    this.$data.pictureSwiper = new Swiper('.picture-container', {
      speed: 800,
      spaceBetween: 0,
      loop: false,
      zoom: true,
      observer: true,
      observeParents: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      mousewheel: true,
      effect : 'slide',
      // slidesPerView: 3,
      // centeredSlides: true,
      // loadOnTransitionStart: true,
      // pagination: {
      //   el: '.swiper-pagination'
      // },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      on: {
        init() {
        }
      }
    });
    if (this.pictureDatas !== []) {
      this.$data.pictureLists = this.pictureData;
    };
    // console.log(this.$data.pictureSwiper);
    // 设置当前点击的图片为放大h后的的激活Index
    this.$data.pictureSwiper.slideToLoop(this.pictureIndex, 1000, false);
  }
};
</script>
<style lang="scss" scoped>
@import '../../../node_modules/swiper/dist/css/swiper.css';
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.back-images{
  position: absolute;
  top: 10px;
  left: 15px;
  width: 10px;
  z-index: 1002;
}
.delete-span{
  position: absolute;
  right: 15px;
  top: 15px;
  width: 26px;
  line-height: 26px;
  text-align: center;
  border-radius: 50%;
  background: #fbfbfb78;
  cursor: pointer;
  color: #cccccc;
  z-index: 1002;
}
.swiper-pagination-bullet{
  opacity: 1;
  background: #dcdcdc;
}
.full-picture-bg{
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba($color: #000000, $alpha: 1);
  z-index: 10000;
  .swiper-container{
    height: 100%;
    position: relative;
  }
  .swiper-zoom-container{
    img{
      width: 100%;
      z-index: 999;
      cursor: pointer;
    }
  }
  .picture-out-bg{
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    // background: rgba($color: #000000, $alpha: 0.4);
  }
}
</style>

