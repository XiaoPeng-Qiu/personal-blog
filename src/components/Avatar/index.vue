<template>
  <img :src="url" :style="{
      width:size + 'px',
      height:size + 'px'
  }" 
  class="avatar-container" />
</template>

<script>
export default {
    props:{
        url:{
            type:String,  //url属性必须是一个字符串
            required:true   //属性必传
        },
        size:{
            type:Number,
            default:150
        }
    },
}
</script>

<style>
.avatar-container{
    border-radius: 50%;
    object-fit: cover;
    display: block;
}
</style>
