//index.js
//获取应用实例
const {globalData} = getApp()

Page({
  data: {},

  onLaunch: function(){
      if(globalData.isWxAuthed && globalData.isStudent){
          
      }
  },

  bindGetUserInfo: function(e) {
    console.log(e)
    globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
