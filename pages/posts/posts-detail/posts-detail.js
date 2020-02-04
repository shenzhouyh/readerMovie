// pages/posts/posts-detail/posts-detail.js
const postData = require('../../../data/posts-data');
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const postId = options.id;
    const currentData = postData.postList[postId];
    this.setData({
      postData: currentData
    })

  },
  onCollection: function (options) {
    wx.setStorage({
      data: "CollectionIsTrue",
      key: 'key',
    })
    wx.setStorage({
      data: "todayissecondDay",
      key: 'key1',
    })
  },
  cancelCollection:function(){
    wx.clearStorage({
      complete: (res) => {console.log("已清空缓存")},
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})