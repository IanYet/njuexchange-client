//app.js
App({
    onLaunch: function() {
        // 登录
        wx.login({
            success: res => {
                // 发送 res.code 到后台换取 openId, sessionKey, unionId
                console.log(`login:${res.code}`)
            },
        })
        // 获取用户信息
        wx.getSetting({
            success: res => {
                if (res.authSetting['scope.userInfo']) {
                    console.log('authed before')
                    this.globalData.isWxAuthed = true
                } else {
                    console.log('not auth')
                }
            },
        })

        //验证学生身份
        setTimeout(() => {
            console.log('student not authed')
            this.globalData.isStudent = false
            this.globalData.showButton = true

            wx.reLaunch({
                url: '/pages/index/index'
            })
        }, 5000)
    },
    globalData: {
        isWxAuthed: false,
        isStudent: false,
        showButton: false,
    },
})
