<template>
  <div id="app" class="test">
    <Empty  />
  </div>
</template>

<script>
import Empty from "./";
export default {
  name:'test',
  data() {
    return {
    };
  },
  components: {
    Empty,
  },
  
};
</script>

<style scope>
.test{
  position: relative;
  width: 500px;
  height: 500px;
  border: 1px solid black;
}

</style>
