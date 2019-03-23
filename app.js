//app.js
App({
    onLaunch: function(o) {
        console.log(o)
    },
    globalData: {
        isWxAuthed: false,
        isStudent: false,
        toUrl: '/pages/shop/shop',
        share() {
            const pages = getCurrentPages()
            const url = pages[pages.length-1].route

            return{path: `/pages/index/index?url=/${url}`}
        }
    },
})
