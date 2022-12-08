// components/Tabs/Tabs.ts
Component({
  /**
   * 组件的属性列表 
   * 要从父组件上接收的数据
   */
  properties: {
    // 要接收的数据的名称
    tabs: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleItemTap(e: any) {
      const index = e.currentTarget.dataset.index
      console.log(e.currentTarget.dataset.index)
      // let { tabs } = this.data
      // tabs.forEach((v, i) => i === index ? v.isActive = true : v.isActive = false);
      // this.setData({ tabs })

      // 点击事件触发的时候
      //  触发父组件中的自定义时间 同时传递数据给父组件
      this.triggerEvent("itemChange", { index })
    }
  }
})
