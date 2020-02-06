// pages/posts/posts-detail/posts-detail.js
const postData = require('../../../data/posts-data');
Page({

    /**
     * 页面的初始数据
     */
    data: {
        playAudio:false
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
        this.data.postsCollected = wx.getStorageSync("posts_collected");
        //存在缓存则获取缓存
        if (this.data.postsCollected) {
            this.data.currentCollected = this.data.postsCollected[postId];
            if (this.data.currentCollected) {
                this.setData({
                    collected: this.data.currentCollected
                })
            }
        }
        //不存在缓存则放入缓存
        else {
            this.data.postsCollected = {};
            this.data.postsCollected[postId] = false;
            wx.setStorageSync("posts_collected", this.data.postsCollected);
        }


    },
    //点击收藏或者取消收藏
    onCollectionTap: function (options) {
        this.data.postsCollected = wx.getStorageSync("posts_collected");
        this.data.currentCollected = this.data.postsCollected[this.data.postId];
        this.data.currentCollected = !this.data.currentCollected;
        this.data.postsCollected[this.data.postId] = this.data.currentCollected;
        //this.showToast();
        this.showModal(this.data.currentCollected,this.data.postsCollected);
    },
    showToast: function () {
        //放入缓存
        wx.setStorageSync("posts_collected", this.data.postsCollected);
        //更新绑定变量
        this.setData({
            collected: this.data.currentCollected
        });
        //给用户交互体验
        const text = this.data.currentCollected ? "已收藏" : "已取消";
        wx.showToast({
            title: text,
            icon: 'success',
            duration: 2000,
            mask: true
        });
    },
    showModal: function (currentCollected,postsCollected) {
        const that = this;
        wx.showModal({
            title: "收藏",
            content: !currentCollected?"取消收藏":"确认收藏",
            showCancel: true,
            cancelText: "取消",
            cancelColor: "#333",
            confirmText: "确认",
            confirmColor: "#405f80",
            success(res) {
                if (res.confirm) {
                    //放入缓存
                    wx.setStorageSync("posts_collected", postsCollected);
                    //更新绑定变量
                    that.setData({
                        collected: currentCollected
                    });
                }
            }
        })
    },
    onPlayAudio:function(options){
        //获取当前文章详情
        const currentData = postData.postList[this.data.postId];
        const src = currentData.music.url;
        const title = currentData.music.title;
        const coverImgUrl = currentData.music.coverImg;
        //播放音乐
        let audioManager = wx.getBackgroundAudioManager();
        audioManager.src=src;//"http://music.163.com/song/media/outer/url?id=152428.mp3";
        audioManager.title=title;//"朋友-谭咏麟";
        audioManager.coverImgUrl=coverImgUrl;//"http://y.gtimg.cn/music/photo_new/T002R150x150M000004eGsCN3SUheO.jpg?max_age=2592000";
        if(!this.data.playAudio){
            audioManager.play();
            this.setData({
                playAudio:true
            })
        }else{
            audioManager.pause();
            this.setData({
                playAudio:false
            })
        }
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
});