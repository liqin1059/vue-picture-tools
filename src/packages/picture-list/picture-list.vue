<template>
  <div id="app">
    <ul class="picture-ul" :style="[boxStyle]">
      <li class="picture-li" v-for="(item, index) in imgUrls" :key="index"
        @click="showPicture(index, item)"
        :style="[listStyle]">
        <img :src="item[urlName]" alt="">
      </li>
    </ul>
    <transition name="fadein-fade">
      <picture-preview
        v-if="previewShow"
        :picture-index="pictureIndex"
        :picture-data="pictureData"
        :deleStyle="deleStyle"
        :is-delete="isDelete"
        :urlName="urlName"
        :zoom="zoom"
        :speed="speed"
        @picture-out="previewShow = false"
        @delete-picture="deletePicture">
      </picture-preview>
    </transition>
  </div>
</template>

<script>
import picturePreview from '../picture-preview/picture-preview.vue';

export default {
  name: 'picture-list',
  components: {
    'picture-preview': picturePreview
  },
  props: {
    speed: {
      type: Number,
      default: 800,
      required: false
    },
    zoom: {
      type: Boolean,
      default: true,
      required: false
    },
    urlName: {
      type: String,
      default: 'url',
      required: false
    },
    isDelete: {
      type: Boolean,
      default: false
    },
    deleStyle: {
      type: Object,
      default: () => {
        return {}
      },
      required: false
    },
    boxStyle: {
      type: Object,
      default: () => {
        return {
          width: '100%'
        }
      },
      required: false
    },
    listStyle: {
      type: Object,
      default: () => {
        return {
          width: '200px',
          height: '200px',
          margin: '10px 0 0 10px',
        }
      },
      required: false
    },
    imgUrls: {
      type: Array,
      default: () => []
    },
  },
  data () {
    return {
      previewShow: false,
      pictureIndex: 0,
      pictureData: 0
    }
  },
  methods: {
    showPicture(index, item) {
      this.$data.previewShow = true;
      this.$data.pictureIndex = index;
      this.$data.pictureData = this.imgUrls;
    },
    deletePicture(index) {
      this.$data.previewShow = false;
      this.$emit('delete-picture', index);
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
  cursor: pointer;
  background-size: cover;
  background-position: center center;
  transition: all .3s;
  transition-property: transform;
  transform: translate3d(0px, 0px, 0px);
}
a {
  color: #42b983;
}
.picture-ul{
  display: inline-block;
  font-size: 0;
}
.picture-li img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.fadein-fade-enter-active {
  transition: all .3s ease;
}
.fadein-fade-enter, .fadein-fade-leave-to{
  opacity: 0;
}
</style>
