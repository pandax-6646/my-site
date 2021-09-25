<template>
  <div id="test-container">
    <Contact />
  </div>
</template>

<script>
import Contact from "./";
import "@/assets/css/globalBase.less";
export default {
  name: "test",
  data() {
    return {};
  },
  components: {
    Contact,
  },
};
</script>

<style>
#test-container {
  height: 600px;
  width: 400px;
  border: 1px solid black;
  background-color: black;
  margin: 0 auto;
  padding-top: 200px;
}
</style>
