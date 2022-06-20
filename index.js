var params = (new URL(document.location)).searchParams;
var key = params.get('key');

$(function () {
    // 送信
    $('form').submit(function () {
        var reasons = $('textarea[name="reasons"]').val();
        var time = $('input[name="time1"]').val();
        var num = $('input[name="num1"]').val();
        var breed = $('input[name="breed"]').val();
        
        //var breed0 = obj.filter(function(input) {
  //return input.name.match(/breed/);
});
        
        
        // var date = $('input[name="date"]').val();
        // var tool = $('input[name="tool"]').val();
           
        //var msg = `${key}\n朝礼/終礼不参加の理由：${reasons}\n返信期限：${date}\n使用ツール：${tool}`;
    var msg = `ご注文内容：\n${breed} \n${num} \n${time} \n${reasons}`;
        
        
        sendText(msg);

        return false;
    });
});
