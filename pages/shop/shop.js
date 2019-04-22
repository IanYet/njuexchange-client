// pages/shop.js
const { globalData } = getApp()

Page({
    /**
     * 页面的初始数据
     */
    data: {
        isBuy: true,
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {},

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {},

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {},

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {},

    toggleTab(e) {
        const tab = e.currentTarget.dataset.title
        this.setData({
            isBuy: tab === 'buy'
        })
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: globalData.share,
})
