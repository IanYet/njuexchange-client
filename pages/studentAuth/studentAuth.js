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
        isSend: false,
        sendDisabled: false,
        veriCode: '',
        veriDisabled: false,
    },

    toggleMailAuth(e) {
        this.setData({isMailAuth: true})
    },
    toggleArtiAuth(e) {
        this.setData({isMailAuth: false})
    },

    inputStudentNum(e) {
        this.setData({
            studentNumber: e.detail.value,
        })
    },

    sendCode(e) {
        if (this.data.studentNumber.trim() === '') {
            this.showTip({
                type: 'info',
                text: '学号不能为空',
            })

            return
        }

        this.setData({
            sendDisabled: true,
        })

        console.log(`${this.data.studentNumber}@smail.nju.edu.cn`.trim())

        setTimeout(() => {
            this.setData({
                sendDisabled: false,
                studentNumber: '',
                isSend: true,
            })
            this.showTip({
                type: 'success',
                text: '验证码已发送',
            })
        }, 1000)
    },

    showTip(tips) {
        this.closeTip()
        
        this.setData({
            tips: { ...tips, show: true },
        })
        setTimeout(this.closeTip, 5000)
    },

    closeTip(e) {
        this.setData({
            tips: { show: false },
        })
    },
    inputVeriCode(e) {
        this.setData({
            veriCode: e.detail.value,
        })
    },
    verify() {
        console.log(this.data.veriCode)
        const code = this.data.veriCode

        if (code.length < 6) {
            this.showTip({
                type: 'info',
                text: '请输入完整的验证码',
            })

            return
        }

        this.setData({
            veriDisabled: true,
        })

        setTimeout(() => {
            this.showTip({
                type: 'success',
                text: '验证已通过',
            })

            setTimeout(() => wx.switchTab({ url: '/pages/shop/shop' }), 1000)
            
        }, 1000)
    },
})
