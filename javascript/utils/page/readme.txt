��ҳ��������JSPҳ���Լ�CSS,JS

JS��ʹ�ã�
�ڳ�ʼ����ҳ���ֵ���pageOpration
����
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