// pages/studentAuth/studentAuth.js
Page({
    /**
     * 页面的初始数据
     */
    data: {
        tips: {
            show: false,
            text: '',
            type: 'success',
        },
        isMailAuth: true,
        studentNumber: '',
        veriCode: [
            { value: '', key: '1' },
            { value: '', key: '1' },
            { value: '', key: '1' },
            { value: '', key: '1' },
            { value: '', key: '1' },
            { value: '', key: '1' },
        ],
        isSend: false,
        sendDisabled: false,
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {},

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {},

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {},

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {},

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {},

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {},

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {},

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {},

    inputStudentNum(e) {
        this.setData({
            studentNumber: e.detail.value,
        })
    },

    sendCode(e) {
        if (this.data.studentNumber.trim() === '') {
            this.showTip({
                type: 'fail',
                text: '学号不能为空',
            })

            return
        }

        this.setData({
            sendDisabled: true,
        })

        console.log(`${this.data.studentNumber}@smail.nju.edu.cn`.trim())

        setTimeout(() => {
            this.setData({ sendDisabled: false })
            this.showTip({
                type: 'success',
                text: '验证码已发送'
            })
        }, 1000)
    },

    showTip(tips) {
        this.setData({
            tips: { ...tips, show:true },
        })
        setTimeout(this.closeTip, 3000)
    },

    closeTip(e) {
        this.setData({
            tips: { show: false },
        })
    },
})
