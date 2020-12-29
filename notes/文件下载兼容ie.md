##### 微软在ie10 和ie11中有两个特有的方法：window.navigator.msSaveBlob和window.navigator.msSaveOrOpenBlob 方法，这两个方法的区别在于，前者只有保存，后者有保存和打开两个选项，按个人喜好使用就行。
```
api.download().then(res => {
  let blob = new Blob([res.data])
  //判断是否是IE浏览器
  if (window.navigator.msSaveBlob) {
    try {
      window.navigator.msSaveBlob(blob, '此处是文件名.jpeg')
    } catch (e) {
      console.log(e);
    }
  } else {
    // 谷歌浏览器等其他浏览器通过创建a标签添加download属性下载
    var a = document.createElement('a');
    a.href = window.URL.createObjectURL(blob);
    a.download = '此处是文件名.jpeg'; //下载后文件名
    a.click(); //模拟点击下载
  }
})
```