var params = (new URL(document.location)).searchParams;
var key = params.get('key');

$(function () {
    // 送信
    $('form').submit(function () {
        var reasons = $('textarea[name="reasons"]').val();
        var time1 = $('input[name="time1"]').val();
        //var num1 = $('input[name="num1"]').val();
        
        // var date = $('input[name="date"]').val();
        // var tool = $('input[name="tool"]').val();
        
        //var msg = `${key}\n朝礼/終礼不参加の理由：${reasons}\n返信期限：${date}\n使用ツール：${tool}`;
        var msg = `${key}\n理由：${reasons}`;
        var msg2 = `${key}\n日時：${time1}`;
        //var msg3 = `${key}\n数：${num1}`;
        sendText(msg);

        return false;
    });
});
