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
    //保存ID，便于全局调用
      this.data.postId = postId;
    const currentData = postData.postList[postId];
    this.setData({
      postData: currentData
    });
      let postsCollected = wx.getStorageSync("posts_collected");
      //存在缓存则获取缓存
      if(postsCollected){
          const currentCollected = postsCollected[postId];
          if(currentCollected){
              this.setData({
                  collected:currentCollected
              })
          }
      }
      //不存在缓存则放入缓存
      else{
          postsCollected = {};
          postsCollected[postId]=false;
          wx.setStorageSync("posts_collected",postsCollected);
      }


  },
    //点击收藏或者取消收藏
    onCollectionTap:function(options){
        let postsCollected = wx.getStorageSync("posts_collected");
        let currentPost = postsCollected[this.data.postId];
        currentPost =!currentPost;
        postsCollected[this.data.postId] = currentPost;
        //放入缓存
        wx.setStorageSync("posts_collected",postsCollected);
        //更新绑定变量
        this.setData({
            collected:currentPost
        })


    },
  /*onCollection: function (options) {
    wx.setStorageSync('key', data)({
      data: "CollectionIsTrue",
      key: 'key',
    })
  },
  cancelCollection:function(){
    wx.clearStorage({
      complete: (res) => {console.log("已清空缓存")},
    })
  },*/

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