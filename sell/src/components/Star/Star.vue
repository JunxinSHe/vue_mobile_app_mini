<template lang="html">
  <div class="star">
    <span v-for="itemClass in itemClasses" :class="itemClass" class="star-item"></span>
  </div>
</template>

<script>
  //星星长度
  const LENGTH = 5;
  //星星对应的class
  const CLS_ON = 'on';
  const CLS_HALF = 'half';
  const CLS_OFF = 'off';

  export default {
    props:{
      score: {
        type: Number
      }
    },
    computed: {
      itemClasses(){
        let result = [];
        //对分数进行处理, floor是向下取整数，要得到小数，要乘以二向下取整再除以二才行
        let score = Math.floor(this.score*2)/2

        let hasDecimal = score % 1 !==0;

        let integer = Math.floor(score);

        //全星
        for (let i=0; i<integer; i++){
          result.push(CLS_ON);
        }
        //半星
        if(hasDecimal){
          result.push(CLS_HALF);
        }
        //补齐
        while(result.length < LENGTH){
          result.push(CLS_OFF);
        }

        return result;
      }
    }
  }
</script>

<style lang="css" scoped>
  .star{
    font-size: 0;
  }
  .star .star-item{
    display: inline-block;
    width: 10px;
    height: 10px;
    margin-right: 3px;
    background-repeat: no-repeat;
    background-size: 10px 10px;
  }
  .star .star-item:last-child{
    margin-right: 0;
  }

  .star .on{
    background-image: url(star24_on@2x.png);
  }
  .star .half{
    background-image: url(star24_half@2x.png);
  }
  .star .off{
    background-image: url(star24_off@2x.png);
  }
</style>
