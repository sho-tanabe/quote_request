$(function () {
    
    // カレンダー
    $(function () {
        $('input[name="date"]').datepicker({
            dateFormat: 'yy/mm/dd',
        });
    });

    // 参加人数分の氏名欄を生成
    $('#form-number').click(function () {
        $('#form-name').empty();
        var num = $('input[name="number"]:checked').val();
        for (i = 0; i < num; i++) {
            $('#form-name').append(
                `<input class="form-control w-100 mt-1" name="name" maxlength="10">`
            );
        }
    });

    
    
            

    
    ////選択肢に応じて動的に項目を表示非表示させるファンクションのテスト開始
    
    //$('form').document.getElementById("ex_age_b").addEventListener("change", function(){
    //    var age_elem = document.getElementById("ex_age_b");
    //    var s_value = age_elem.options[age_elem.selectedIndex].value;
    //    if(s_value == "answer1"){$("#ex_box_div_b").hide("normal");}else{$("#ex_box_div_b").show("normal");}        
    //}, false);
    ////選択肢に応じて動的に項目を表示非表示させるファンクションのテスト開始
    
    
    
    
    
    
    //ブラウザバリデーション　→ 原因不明だがトーク投稿に至らないため、失敗。いったんコメントアウト中。ここが悪いのではなくhtml側の問題かもしれない。。。調査中。

//    $(function () {
//        var forms = document.querySelectorAll('.needs-validation');
//        Array.prototype.slice.call(forms).forEach(function (form) {    
//            form.addEventListener('submit', function (event) {
//                if (!form.checkValidity()) {
//                    event.preventDefault();        
//                    event.stopPropagation();
//                }
//                form.classList.add('was-validated');
//            }, false);
//        })
//    })();
    //ブラウザバリデーション　→ 原因不明だがトーク投稿に至らないため、失敗。いったんコメントアウト中。ここが悪いのではなくhtml側の問題かもしれない。。。調査中。    

    
    // 送信
    $('form').submit(function () {


        
        
        //練習エリア開始
//        var text1 = $('input[name="text1"]').val();
//        var select1 = $('[name="select1"] option:selected').val();
//        var text10 = $('input[name="text10"]').val();
//        var date = $('input[name="date"]').val();
//        var number = $('input[name="number"]:checked').val();
       
//        var names = '';
//        $('#form-name').children().each(function (i, elm) {
//            names += $(elm).val() + '、';
//        })
//        names = names.slice(0, -1);
        //練習エリア終了
        
        //住所項目

        var postnumber = $('input[name="entry.1592950719"]').val();
        var address1 = $('[name="entry.1674993749"] option:selected').text();//区分値に紐づく表示項目が表示される。
        var address1num = $('[name="entry.1674993749"] option:selected').val();//番号が表示される。後続の判定用。
        var address2 = $('input[name="entry.1656297817"]').val();
        var address3 = $('input[name="entry.33302498"]').val();
                
        
        //計算要素項目
        var billingamount = $('input[name="entry.642272830"]').val();
        var basiccharge = $('input[name="entry.299805872"]').val();
        var quantity = $('input[name="entry.1113780615"]').val();
        var unitprice = $('[name="entry.1056785657"]').val();
        

        //算出結果
//      var difference = ( $('#billingamount').val() - $('#basiccharge').val() ) / $('#quantity').val();
//      var difference = ( $('#entry.642272830').val() - $('#entry.299805872').val() ) / $('#entry.1113780615').val();
        var difference = ( $('#billingamount').val() - $('#basiccharge').val() ) / $('#quantity').val() ;
        var resultround = Math.floor(difference);
        
        //コスト削減予定額
        var costcut = (resultround - 280) * $('#quantity').val();
//        var costcut = (resultround - 280) * $('#entry.1113780615').val();


        //コスト削減予定額（LINEトーク送信用）
        if (costcut < 1000){
            var costcutmsg = `判定結果をご確認ください(${costcut})`;
        }　else if (costcut < 10000){
            var costcutfloor = Math.floor(costcut / 100) * 100;
            var costcutmsg = `約${costcutfloor}円程度`;
            } else {
                var costcutfloor = Math.floor(costcut / 1000) * 1000;
                var costcutmsg = `約${costcutfloor}円程度`;
                }
        
        if ( 7 >= address1num || address1num >= 15 ){
            var msg = `【現在お住まいの地域】\n〒:${postnumber}\n都道府県:${address1}\n市区町村:${address2}\n町・番地:${address3}\n【現在のガス料金情報】\nご請求予定金額(円):${billingamount}\n基本料金(円):${basiccharge}\n今回ご使用量(㎥):${quantity}\nガス料金単価:${resultround}\n-----------\n【お安くなる金額目安】\n対象外地域のため判定できません。`;
        } else {
            var msg = `【現在お住まいの地域】\n〒:${postnumber}\n都道府県:${address1}\n市区町村:${address2}\n町・番地:${address3}\n【現在のガス料金情報】\nご請求予定金額(円):${billingamount}\n基本料金(円):${basiccharge}\n今回ご使用量(㎥):${quantity}\nガス料金単価:${resultround}\n-----------\n【お安くなる金額目安】\n${costcutmsg}`;
        }

                
        if ( 7 >= address1num || address1num >= 15 ){
            var msg2 = `対象外地域`;
        } else if (difference < 281){
            var msg2 = `Sランク`; 
        } else if (difference >= 281 && difference < 300){
            var msg2 = `Aランク`; 
        } else if (difference >= 301 && difference < 500){
            var msg2 = `Bランク`; 
        } else {
            var msg2 = `Cランク`; 
        } 

        

        var submitresult = window.confirm('以下の内容で診断します\n--\n' + msg);/////////////////////////////////////////////診断ボタン押下後の条件分岐テスト用        
        if( submitresult ) {/////////////////////////////////////////////診断ボタン押下後の条件分岐テスト用
            console.log('OKがクリックされました');/////////////////////////////////////////////診断ボタン押下後の条件分岐テスト用

            
            sendText(msg);
            sendText2(msg2);
    

            return false;            
            

        }/////////////////////////////////////////////診断ボタン押下後の条件分岐テスト用
        else {/////////////////////////////////////////////診断ボタン押下後の条件分岐テスト用        
            console.log('キャンセルがクリックされました');/////////////////////////////////////////////診断ボタン押下後の条件分岐テスト用
            
            return false;  //条件分岐テストに伴って追加した。診断ボタン押下後の条件分岐テスト用を消す場合は一緒に消す。
            
        }/////////////////////////////////////////////診断ボタン押下後の条件分岐テスト用

    });
    
    
});
