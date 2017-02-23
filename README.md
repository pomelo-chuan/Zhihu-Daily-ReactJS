### dva数据走向

> 以点击按钮，页面显示的数字加一为例子



1. 在model中定义好初始state
2. 使用mapStateToProps将model里的state连到页面组件中
3. 点击按钮，通过点击事件触发一个action，这个action提交一个effect
4. effect触发一个action，这个action提交一个reducer
5. 刚刚提交的reducer改变state中的值，然后返回新的state
6. 页面随着reducer的提交成功，state随即发生改变

