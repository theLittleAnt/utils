//页数跳转
function pagination(fn,type) {
    var currentPage = document.querySelector(".current-page").innerHTML;
    var totalPage = document.querySelector(".total-page").innerHTML;
    var toPage = document.querySelector(".jump-to-input").value;
    var nextCurrent;
    switch (type){
        case "p":
            if(currentPage=="" ||currentPage=="1"){
                alert("不存在页数或者当前为第一页");
                return;
            }
            nextCurrent=parseInt(currentPage)-1;
            break;
        case "n":
            if(currentPage=="" || currentPage==totalPage){
                alert("不存在页数或者当前为尾页");
                return;
            }
            nextCurrent=parseInt(currentPage)+1;
            break;
        case "t":
            if(toPage==""){
                alert("没有输入页数");
                return;
            }
            var to = parseInt(toPage);
            if(to<=0){
                nextCurrent=1;
            }else if(to>totalPage){
                nextCurrent=parseInt(totalPage);
            }else{
                nextCurrent=parseInt(toPage);
            }
            break;
        default:
            return;
    }
    fn(nextCurrent);
}
//为分页绑定事件
function pageOpration(fnName,page,dataSize) {
    document.querySelector(".previous").href="javascript:pagination("+fnName+",'p')";
    document.querySelector(".current-page").innerHTML=page;
    document.querySelector(".total-page").innerHTML=Math.ceil(dataSize/12);//默认一页12条
    document.querySelector(".next").href="javascript:pagination("+fnName+",'n')";
    document.querySelector(".jump-to").href="javascript:pagination("+fnName+",'t')";
}