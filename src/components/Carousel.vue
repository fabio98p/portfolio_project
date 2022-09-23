<template>
    <div class="carousel"></div>
        <div v-for="data in datas">
            
          <img :src="data.link.source" />
          <button v-if="slidesCount > 1" @click="deleteImage(index)">x</button> -->
        </div>
  
  </template>
  
  <script>
  
  export default({
    name: "carousel",
    props: {
      datas: Array,
    },
    components: {
    },
  });
  </script>
  