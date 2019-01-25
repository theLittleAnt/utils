在页面中引入JSP页面以及CSS,JS

JS的使用：
在初始化分页部分调用pageOpration
例如
$(function () {
    getInfo(1);
})
function getInfo(page) {
    $.ajax({
        url:"",
        type:"post",
        data:"page="+page,
        success:function (data) {
                pageOpration('getInfo',page,data.size);
	}
    })
}