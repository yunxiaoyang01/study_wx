// pages/demo15/demo15.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    gender: "",
    fruits: [],
    list:[
      {
        id:0,
        name:"苹果",
        value:"apple"
      },
      {
        id:1,
        name:"葡萄",
        value:"grape",
      },
      {
        id:2,
        name:"香蕉",
        value:"bananer"
      }
    ]
  },

  handleChange(e: any) {
    //console.log(e)
    let value = e.detail.value == "male" ? "男" : "女"
    this.setData({ gender: value })

  },

  handleCheckBoxChange(e: any) {
    console.log(e)
    let value = e.detail.value
    this.setData({
      fruits: value
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})