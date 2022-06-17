var params = (new URL(document.location)).searchParams;
var key = params.get('key');

$(function () {
    // 送信
    $('form').submit(function () {
        var reasons = $('textarea[name="reasons"]').val();
        var time1 = $('input[name="time1"]').val();
        var num1 = $('input[name="num1"]').val();
        var breed = $('input[name="breed"]').val();
        
        // var date = $('input[name="date"]').val();
        // var tool = $('input[name="tool"]').val();
        
        //var msg = `${key}\n朝礼/終礼不参加の理由：${reasons}\n返信期限：${date}\n使用ツール：${tool}`;
    var msg = `ご注文内容：\n${reasons} \n${time1} \n${num1} \n${breed}`;
        sendText(msg);

        return false;
    });
});
