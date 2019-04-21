//index.js
//获取应用实例
const { globalData } = getApp()

Page({
    data: {
        isWxAuthed: false,
        isStudent: false,
        getWxInfo: false,
        getStInfo: false,
        url: '/pages/shop/shop',
    },

    onLoad({ url }) {

        if (url) {
            this.setData({ url })
            globalData.toUrl = url
        }

        wx.login({
            success: res => {
                console.log(`login:${res.code}`)
                //验证学生身份
                setTimeout(() => {
                    console.log('student authed')
                    this.setData(
                        {
                            isStudent: true,
                            getStInfo: true,
                        },
                        () => {
                            globalData.isStudent = true

                            if (this.data.isStudent && this.data.isWxAuthed) {
                                this.toPage()
                            }
                        }
                    )
                }, 1000)
            },
        })
        // 获取用户信息
        wx.getSetting({
            success: res => {
                if (res.authSetting['scope.userInfo']) {
                    console.log('wx authed before')
                    this.setData(
                        {
                            isWxAuthed: true,
                            getWxInfo: true,
                        },
                        () => {
                            globalData.isWxAuthed = true

                            if (this.data.isStudent && this.data.isWxAuthed) {
                                this.toPage()
                            }
                        }
                    )
                } else {
                    this.setData({ getWxInfo: true })
                    console.log('wx not auth')
                }
            },
        })
    },

    toPage() {
        const url = this.data.url

        if (url.includes('shop') || url.includes('user')) {
            wx.switchTab({ url })
        } else {
            wx.redirectTo({ url })
        }
    },

    getUserInfo(e) {
        if (!e.detail.userInfo) {
            return
        }

        globalData.isWxAuthed = true
        this.setData({ isWxAuthed: true }, () => {
            globalData.isWxAuthed = true

            if (this.data.isStudent && this.data.isWxAuthed) {
                this.toPage()
            }
        })
    },

    toStudentAuth() {
        wx.navigateTo({ url: '/pages/studentAuth/studentAuth' })
    },
})
