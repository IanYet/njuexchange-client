//index.js
//获取应用实例
const { globalData } = getApp()

Page({
    data: {},

    onLaunch() {
        if (globalData.isWxAuthed && globalData.isStudent) {
        }
    },

    getUserInfo(e) {
        console.log(e)
        globalData.userInfo = e.detail.userInfo
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true,
        })
    },
})
