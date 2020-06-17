// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
name:"钟秀峰",
friends:[
  {name:"friend-a"},
  {name:"friend-b"},
  {name:"friend-c"}
],
counter:0,
  },
  add: function(){
    this.setData({
      counter:this.data.counter+=1
    })},
    del: function(){
      this.setData({
        counter:this.data.counter-=1
      })}

 

})