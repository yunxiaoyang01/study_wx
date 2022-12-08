// app.ts
App<IAppOption>({

  globalData: {
  },
  // 1 应用第一次启动的就会触发的事件
  onLaunch() {
    console.log("onLaunch")
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        console.log("res code is " + res.code)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      },
    })
    // 不能触发 onPageNotFound
    // wx.navigateTo({
    //   url: '/11/22/33'
    // })
  },
  // 2 应用 被用户看到的时候触发
  onShow() {
    // 应用的数据或者页面效果 重置
    console.log("onShow")
  },
  // 3 应用 被隐藏了
  onHide() {
    // 暂停或者清除定时器
    console.log("onHide")
  },

  // 4 应用的代码发生了报错的时候就会触发
  onError(error) {
    // 应用发生错误的时候，收集用户的错误信息，通过异步请求，将错误的信息发送到后台去
    console.log(error)
  },
  // 页面找不到就会触发
  // 应用第一次启动的时候，如果找不到入口页面，才会触发
  onPageNotFound() {
    console.log("onPageNotFound")
    // 如果页面不存在了 通过js的方式来重新跳转页面，重新跳到第二个页面
    // 不能跳转tabbar页面 导航组件类似
    wx.navigateTo({
      url: ''
    })
  }
})