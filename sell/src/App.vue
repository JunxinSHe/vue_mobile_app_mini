<template>
  <div id="app">
    <Myheader :poiInfo='poiInfo'></Myheader>

    <Mynav></Mynav>

    <router-view></router-view>

  </div>
</template>

<script>
import Myheader from 'components/Header/Header';
import Mynav from 'components/Nav/Nav';

export default {
  name: 'App',
  components: {
    Myheader,
    Mynav
  },
  data(){
    return {
      poiInfo: {}
    }
  },
  created(){ //发起异步请求获取数据

    var that = this;

    this.$axios.get('/api/goods')
      .then(function(response){
        // console.log(response);
        var dataSource = response.data;
        if(dataSource.code ==0){
          that.poiInfo = dataSource.data.poi_info;
          // console.log(that.poiInfo);
        }
      })
      .catch(function(error){
        console.log(error);
      });
  }
}
</script>

<style>

</style>
