// pages/demo12/demo12.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 1 标签字符串
    //html: '<div class="icons-wrapper" data-spm="icons"><div class="icons-wrapper-inner"><div class="icons-item-wrapper first" data-before-current-y="21.828125" data-appeared="true" data-has-appeared="true" data-has-disappeared="true"><a class="icons-item" title="天猫新品" href="https://pages.tmall.com/wow/heihe/act/upr?wh_pid=act/indexv6&amp;disableNav=YES&amp;wh_biz=tm"><img class="icons-item-img" src="//gw.alicdn.com/imgextra/i4/O1CN01XCiY1B1px9ivHkDGm_!!6000000005426-2-tps-183-144.png_q90.jpg_.webp" alt="天猫新品"><p class="icons-item-title">天猫新品</p></a><a class="icons-item" title="淘宝吃货" href="https://market.m.taobao.com/app/tmall-def/chihuo/pages/index/index.html?disableNav=YES"><img class="icons-item-img" src="//gw.alicdn.com/imgextra/i1/O1CN018Ilnep1Qt9ryh1Vue_!!6000000002033-2-tps-183-144.png_q90.jpg_.webp" alt="淘宝吃货"><p class="icons-item-title">淘宝吃货</p></a></div><div class="icons-item-wrapper " data-before-current-y="21.828125" data-appeared="true" data-has-appeared="true" data-has-disappeared="true"><a class="icons-item" title="今日爆款" href="https://pages.tmall.com/wow/bz/jingmi/670?disableNav=YES"><img class="icons-item-img" src="//gw.alicdn.com/imgextra/i3/O1CN01FgQFp81spmBXqQMtA_!!6000000005816-2-tps-183-144.png_q90.jpg_.webp" alt="今日爆款"><p class="icons-item-title">今日爆款</p></a><a class="icons-item" title="省钱卡" href="https://market.m.taobao.com/app/tmall-def/hbsqk/pages/new/index.html?disableNav=YES&amp;from=wx"><img class="icons-item-img" src="//gw.alicdn.com/imgextra/i2/O1CN01gUIFrA1OuPj70aTIW_!!6000000001765-2-tps-183-144.png_q90.jpg_.webp" alt="省钱卡"><p class="icons-item-title">省钱卡</p></a></div><div class="icons-item-wrapper " data-before-current-y="21.828125" data-appeared="true" data-has-appeared="true" data-has-disappeared="true"><a class="icons-item" title="天猫国际" href="https://pages.tmall.com/wow/z/import/tmg-rax-home/tmallimportHomewupr-index?wh_pid=tmg-website%2FBCAIIYE0LVS"><img class="icons-item-img" src="//gw.alicdn.com/imgextra/i1/O1CN01tsk5OY1q0MUo5PJga_!!6000000005433-2-tps-183-144.png_q90.jpg_.webp" alt="天猫国际"><p class="icons-item-title">天猫国际</p></a><a class="icons-item" title="领淘金币" href="https://pages.tmall.com/wow/z/tmtjb/town/home-wx"><img class="icons-item-img" src="//gw.alicdn.com/imgextra/i3/O1CN013WcsZW1jfr4AXnmVl_!!6000000004576-2-tps-183-144.png_q90.jpg_.webp" alt="领淘金币"><p class="icons-item-title">领淘金币</p></a></div><div class="icons-item-wrapper " data-before-current-y="21.828125" data-appeared="true" data-has-appeared="true" data-has-disappeared="true"><a class="icons-item" title="飞猪旅行" href="https://h5.m.taobao.com/trip/home/index.html"><img class="icons-item-img" src="//gw.alicdn.com/imgextra/i2/O1CN01yK3Cxn1sTnAx1fOjq_!!6000000005768-2-tps-183-144.png_q90.jpg_.webp" alt="飞猪旅行"><p class="icons-item-title">飞猪旅行</p></a><a class="icons-item" title="阿里拍卖" href="https://market.m.taobao.com/app/pm/new-main/home"><img class="icons-item-img" src="//gw.alicdn.com/imgextra/i2/O1CN01ZOR1cv1yjGFORGh1V_!!6000000006614-2-tps-183-144.png_q90.jpg_.webp" alt="阿里拍卖"><p class="icons-item-title">阿里拍卖</p></a></div><div class="icons-item-wrapper " data-before-current-y="21.828125" data-appeared="true" data-has-appeared="true" data-has-disappeared="true"><a class="icons-item" title="天猫超市" href="https://chaoshi.m.tmall.com/"><img class="icons-item-img" src="//gw.alicdn.com/imgextra/i1/O1CN01iZIGkz1URSOUdRHqS_!!6000000002514-2-tps-183-144.png_q90.jpg_.webp" alt="天猫超市"><p class="icons-item-title">天猫超市</p></a><a class="icons-item" title="分类" href="https://market.m.taobao.com/app/tbsearchwireless-pages/new-catemap/p/s-nx-categories?spm=a215s.7406091.0.0&amp;utparam=%7B%22ranger_buckets_native%22%3A%22tsp2584_31920%22%7D&amp;scm=1007.home_icon.fenl.d&amp;wh_weex=true"><img class="icons-item-img" src="//gw.alicdn.com/tfs/TB1WgOmesieb18jSZFvXXaI3FXa-183-144.png_q90.jpg_.webp?getAvatar=1" alt="分类"><p class="icons-item-title">分类</p></a></div><div class="icons-item-wrapper " data-before-current-y="58.328125" data-appeared="false" data-has-appeared="true" data-has-disappeared="true"><a class="icons-item" title="冬奥公益" href="https://3hours.taobao.com/beijing2022?from=weixin"><img class="icons-item-img" src="//gw.alicdn.com/imgextra/i4/O1CN01VuRfwH1muSbsJFxoM_!!6000000005014-2-tps-183-144.png_q90.jpg_.webp" alt="冬奥公益"><p class="icons-item-title">冬奥公益</p></a><a class="icons-item" title="闲鱼" href="https://h5.m.goofish.com/app/idleFish-F2e/fish-mini-pha/home.html"><img class="icons-item-img" src="//gw.alicdn.com/imgextra/i1/O1CN01rIm4u11F81KogrKz4_!!6000000000441-2-tps-183-144.png_q90.jpg_.webp" alt="闲鱼"><p class="icons-item-title">闲鱼</p></a></div><div class="icons-item-wrapper " data-before-current-y="58.328125" data-appeared="false" data-has-appeared="true" data-has-disappeared="true"><a class="icons-item" title="淘票票" href="https://m.taopiaopiao.com/tickets/moviemain/pages/home/index.html?from=nearby&amp;spm=dianying.tb.wechat.tpptbh5&amp;sqm=dianying.tb.wechat.tpptbh5"><img class="icons-item-img" src="//gw.alicdn.com/imgextra/i2/O1CN01qrrUAN1wRjrhtfk6Q_!!6000000006305-2-tps-183-144.png_q90.jpg_.webp" alt="淘票票"><p class="icons-item-title">淘票票</p></a><a class="icons-item" title="土货鲜食" href="https://3hours.taobao.com/nativeFresh"><img class="icons-item-img" src="//gw.alicdn.com/imgextra/i1/O1CN019LbO921EcsOuQqWTM_!!6000000000373-2-tps-183-144.png_q90.jpg_.webp" alt="土货鲜食"><p class="icons-item-title">土货鲜食</p></a></div><div class="icons-item-wrapper " data-before-current-y="58.328125" data-appeared="false" data-has-appeared="true" data-has-disappeared="true"><a class="icons-item" title="天猫好房" href="https://huodong.taobao.com/wow/z/tmallfang/uc/hTP32mEGBha7YhD3y5it?AHSrc=gf_weixin&amp;AHMdm=xf&amp;AHActId=100545"><img class="icons-item-img" src="//gw.alicdn.com/imgextra/i3/O1CN01MiunNU1oU0uEKRvja_!!6000000005227-2-tps-183-144.png_q90.jpg_.webp" alt="天猫好房"><p class="icons-item-title">天猫好房</p></a><a class="icons-item" title="天猫汽车" href="https://market.m.taobao.com/app/acar/mycar-webapp/index.html"><img class="icons-item-img" src="//gw.alicdn.com/imgextra/i4/O1CN01cxU47W1RnUaWavX3f_!!6000000002156-2-tps-183-144.png_q90.jpg_.webp" alt="天猫汽车"><p class="icons-item-title">天猫汽车</p></a></div></div><div class="icons-nav-wrapper"><div class="icons-nav"><div class="icons-nav-slipper" style="transform: translate(0px);"></div></div></div></div>'
    // 2 对象数组
    html: [
      {
        // 1 div标签 name属性来指定
        name: "div",
        // 2 标签上有哪些属性
        attrs: {
          class: "my_div",
          style: "color:red;"
        },
        // 3 子节点 children 要接收的数据 nodes第二种渲染方式的数据类型一致
        children: [
          {
            name: "p",
            attrs: {},
            children: [{
              type: "text",
              text: "hello"
            }]
          }
        ]
      }
    ]
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