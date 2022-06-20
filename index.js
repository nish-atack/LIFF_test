var params = (new URL(document.location)).searchParams;
var key = params.get('key');

$(function () {
    // 送信
    $('form').submit(function () {
     
        var time0 = $('input[name="time1"]').val();
        var num0 = $('input[name="num1"]').val();
        var breed0 = $('input[name="breed1"]').val();
        
        //var breed0 = obj.filter(function(input) {
  //return input.name.match(/breed/);
});
        
        
        // var date = $('input[name="date"]').val();
        // var tool = $('input[name="tool"]').val();
           var reasons0 = $('textarea[name="reasons"]').val();
        //var msg = `${key}\n朝礼/終礼不参加の理由：${reasons}\n返信期限：${date}\n使用ツール：${tool}`;
    var msg = `ご注文内容：\n${breed0} \n${num0} \n${tim0} \n${reasons0}`;
        
        
        sendText(msg);

        return false;
    });
});
