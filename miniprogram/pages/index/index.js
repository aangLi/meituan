//index.js
const app = getApp()

Page({
  data: {
    imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    circular: true,

    touchS : [0,0],
    touchE : [0,0]
  },
  onLoad: function() {
    
  },
  touchStart: function(e){
    // console.log(e.touches[0].pageX)
    let sx = e.touches[0].pageX
    // let sy = e.touches[0].pageY
    // this.data.touchS = [sx,sy]
    this.data.touchS = [sx]
    console.log(e)
  },
  touchMove: function(e){
    let sx = e.touches[0].pageX;
    // let sy = e.touches[0].pageY;
    // this.data.touchE = [sx, sy]
    this.data.touchE = [sx]
    let start = this.data.touchS
    let end = this.data.touchE
    changesX = end - start
    if(changesX > 50) {
      
    }
  },
  touchEnd: function(e){
    let start = this.data.touchS
    let end = this.data.touchE
    console.log(start)
    console.log(end)
    if(start[0] < end[0] - 50){
      console.log('右滑')
    }else if(start[0] > end[0] + 50){
      console.log('左滑')
    }else{
      console.log('静止')
    }
  }
})