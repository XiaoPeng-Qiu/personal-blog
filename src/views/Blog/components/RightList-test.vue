<template>
  <RightList :list="list" @select="selectClick"/>
</template>

<script>
import RightList from "./RightList.vue";
export default {
  components: {
    RightList,
  },
  data() {
    return {
      list: [
        {
          name: "a",
          isSelect: true,
          children: [
            { name: "a-1", isSelect: false },
            {
              name: "a-2",
              isSelect: false,
              children: [{ name: "a-2-1", isSelect: true }],
            },
          ],
        },
        { name: "b", isSelect: false },
        { name: "c", isSelect: false },
        { name: "d", isSelect: true },
      ],
    };
  },
  methods:{
      selectClick(item){
          console.log(item)
      }
  }
};
</script>

<style>
</style>