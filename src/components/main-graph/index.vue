<template>
  <div>
  <div class="myCanvasContainer">
    <div id="myCanvasContainer" class="myCanvasContainer2" style="margin-left:420px">
      <canvas id="myCanvas" height="800px" width="800px"  style="border: #2d93ca solid;">
        <p>Anything in here will be replaced on browsers that support the canvas element</p>
      </canvas>
    </div>
    <div id="tags" class="myCanvasContainer2">
      <ul>
        <li><a href="/fish" style="font-size: 60px">三国演义</a></li>
        <li><a href="/chips" style="font-size: 100px">水浒传</a></li>
        <li><a href="/salt" style="font-size: 50px">西游记</a></li>
        <li><a href="/vinegar" style="font-size: 1px">红楼梦</a></li>
        <li><a href="/vinegar">The thinking of java</a></li>
        <li><a href="/vinegar">追风筝的人</a></li>
        <li><a href="/vinegar">钢铁是怎样炼成的</a></li>
        <li><a href="/vinegar">跑步</a></li>
        <li><a href="/vinegar">玩游戏</a></li>
        <li><a href="/vinegar">听音乐</a></li>
        <li><a href="/vinegar">散步</a></li>
        <li><a href="/vinegar">聊天</a></li>
        <li><a href="/fish" style="font-size: 60px">三国演义</a></li>
        <li><a href="/chips" style="font-size: 100px">水浒传</a></li>
        <li><a href="/salt" style="font-size: 50px">西游记</a></li>
        <li><a href="/vinegar" style="font-size: 1px">红楼梦</a></li>
        <li><a href="/vinegar">The thinking of java</a></li>
        <li><a href="/vinegar">追风筝的人</a></li>
        <li><a href="/vinegar">钢铁是怎样炼成的</a></li>
        <li><a href="/vinegar">跑步</a></li>
        <li><a href="/vinegar">玩游戏</a></li>
        <li><a href="/vinegar">听音乐</a></li>
        <li><a href="/vinegar">散步</a></li>
        <li><a href="/vinegar">聊天</a></li>
        <li><a href="/fish" style="font-size: 60px">三国演义</a></li>
        <li><a href="/chips" style="font-size: 100px">水浒传</a></li>
        <li><a href="/salt" style="font-size: 50px">西游记</a></li>
        <li><a href="/vinegar" style="font-size: 1px">红楼梦</a></li>
        <li><a href="/vinegar">The thinking of java</a></li>
        <li><a href="/vinegar">追风筝的人</a></li>
        <li><a href="/vinegar">钢铁是怎样炼成的</a></li>
        <li><a href="/vinegar">跑步</a></li>
        <li><a href="/vinegar">玩游戏</a></li>
        <li><a href="/vinegar">听音乐</a></li>
        <li><a href="/vinegar">散步</a></li>
        <li><a href="/vinegar">聊天</a></li>
      </ul>
    </div>
  </div>
  </div>

</template>

<script>
import '@/static/tagcanvas.js'

export default {
  name: "index",
  mounted() {


    var gradient = {
      0: '#ff0000', // red
      0.33: '#ff0', // yellow
      0.66: '#0f0', // green
      1: '#00f'  // blue
    };

    TagCanvas.Start('myCanvas', 'tags', {
      weight: true,
      weightMode: "colour",
      outlineColour: '#ff00ff',
      reverse: true,
      depth: 1,
      maxSpeed: 0.03,
      textColour: '#e508c1',
      textHeight: 25,
      weightSize: 0.5,
      weightGradient: gradient,
    });

  }
}
</script>

<style scoped>

</style>