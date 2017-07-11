var postsData = require('../../../data/posts-data.js');
Page({
  onLoad: function (option) {
    var id = option.id;
    var postData = postsData.postList[id];
    console.log(id)
    this.setData({
      postData : postData
    });
  },
  toastTest: function (event) {
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000
    })
  }
})