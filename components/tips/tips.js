// components/tips.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        tipType: String
    },

    lifetimes: {
        ready() {
            this.setData({
                isShow: true
            })
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        isShow: false
    },

    /**
     * 组件的方法列表
     */
    methods: {
        handleTap() {
            this.triggerEvent('close', {}, {})
        }
    }
})
