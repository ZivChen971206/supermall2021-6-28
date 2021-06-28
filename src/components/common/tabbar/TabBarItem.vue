<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="tab-bar"></slot>
    </div>
    <div v-else>
      <slot name="tab-bar-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="tab-bar-text"></slot>
    </div>

  </div>
</template>

<script>
export default {
  name: "TabbarItem",
  props: {
    path: String,
    activeColor:{
      type:String,
      default:'#ff5777'
    }
  },
  data(){
    return{
    }
  },
  methods: {
    itemClick() {
      this.$router.push(this.path)
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path)!==-1
    },
    activeStyle(){
      return this.isActive?{color:this.activeColor}: {}
    }
  }
}
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
}
</style>
