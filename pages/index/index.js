//index.js
//获取应用实例
const { globalData } = getApp()

Page({
    data: {
        isWxAuthed: false,
        isStudent: false,
        showButton: false,
    },

    onLoad() {
        if (globalData.isWxAuthed && globalData.isStudent) {
            console.log('to shop');
            wx.switchTab({
                url: '/pages/shop/shop'
            })
        }
    },

    onReady() {
        this.setData({
            isWxAuthed: globalData.isWxAuthed,
            isStudent: globalData.isStudent,
            showButton: globalData.showButton,
        })
    },

    getUserInfo(e) {
        console.log(e)
        if(e.detail.userInfo){
            globalData.isWxAuthed = true
        }
    },
})
