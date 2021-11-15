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

    
    
    
    
    //バリデーションメッセージテスト
    $(function () {
        var forms = document.querySelectorAll('.needs-validation');
        Array.prototype.slice.call(forms).forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        })
    });
    
    
    
    
    // 送信
    $('form').submit(function () {

                

        //進め方項目
        var process = $('[name="entry.628793706"] option:selected').text();
        
        
        
        //基本情報項目
        var username = $('input[name="entry.123644310"]').val();
        var contact = $('[name="entry.499682447"] option:selected').text();
//        var tel = $('input[name="entry.1613264123"]').val();
        var tel1 = $('input[id="changetest1"]').val();
        var tel2 = $('input[id="changetest2"]').val();
        var tel3 = $('input[id="changetest4"]').val();

        var tel_date = $('input[name="entry.182653158"]').val();
        var email = $('input[name="entry.1196358205"]').val();        
                
        //電話番号関連項目 
        /*
        if( tel = "" ){
            var tel_date = '電話希望時のみ入力';
        }else{
            var tel_date = $('input[name="entry.182653158"]').val();
        }
        */
        
        //住所項目

        var postnumber = $('input[name="entry.1592950719"]').val();
        var address1 = $('[name="entry.1674993749"] option:selected').text();//区分値に紐づく表示項目が表示される。
        var address1num = $('[name="entry.1674993749"] option:selected').val();//番号が表示される。後続の判定用。
        var address2 = $('input[name="entry.1656297817"]').val();
        var address3 = $('input[name="entry.33302498"]').val();
                
        //ガス関連項目
        
        var gas_company = $('input[name="entry.1867640231"]').val();
        var gas_area = $('[name="entry.736823717"] option:selected').text();
        var gas_house = $('[name="entry.2013057432"] option:selected').text();        
        
        //アンケート関連項目
        
        
        
        
        
        
        //計算要素項目
        var billingamount = $('input[name="entry.642272830"]').val();
        var basiccharge = $('input[name="entry.299805872"]').val();
        var quantity = $('input[name="entry.1113780615"]').val();
        var unitprice = $('[name="entry.1056785657"]').val();
        

        //算出結果
        var difference = ( $('#billingamount').val() - $('#basiccharge').val() ) / $('#quantity').val() ;
        var resultround = Math.floor(difference);
        
        //コスト削減予定額
        var costcut = (resultround - 280) * $('#quantity').val();


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


        
        
        //送信前の確認画面のメッセージ
        var confirm_msg = `【基本情報】\nお名前:${username}様\n今後の進め方:${process}\n希望の連絡方法:${contact}\n電話番号:${tel1}${tel2}${tel3}\n(電話の希望日:${tel_date})\nメールアドレス:${email}\n【現在お住まいの地域】\n〒:${postnumber}\n都道府県:${address1}\n市区町村:${address2}\n町・番地:${address3}\n【現在のガスについて】\n利用中のガス提供会社:${gas_company}\n利用用途:${gas_area}\n居住形態:${gas_house}\nご請求予定金額:${billingamount}円\n基本料金:${basiccharge}円\n今回ご使用量:${quantity}㎥\nガス料金単価:${resultround}`;            


        //LINEトークに投稿するメッセージ
        if ( 7 >= address1num || address1num >= 15 ){
            var msg = `【基本情報】\nお名前:${username}様\n今後の進め方:${process}\n希望の連絡方法:${contact}\n電話番号:${tel1}${tel2}${tel3}\n(電話の希望日:${tel_date})\nメールアドレス:${email}\n【現在お住まいの地域】\n〒:${postnumber}\n都道府県:${address1}\n市区町村:${address2}\n町・番地:${address3}\n【現在のガスについて】\n利用中のガス提供会社:${gas_company}\n利用用途:${gas_area}\n居住形態:${gas_house}\nご請求予定金額:${billingamount}円\n基本料金:${basiccharge}円\n今回ご使用量:${quantity}㎥\nガス料金単価:${resultround}\n-----------\n【お安くなる金額目安】\n対象外地域のため判定できません。`;
        } else {
            var msg = `【基本情報】\nお名前:${username}様\n今後の進め方:${process}\n希望の連絡方法:${contact}\n電話番号:${tel1}${tel2}${tel3}\n(電話の希望日:${tel_date})\nメールアドレス:${email}\n【現在お住まいの地域】\n〒:${postnumber}\n都道府県:${address1}\n市区町村:${address2}\n町・番地:${address3}\n【現在のガスについて】\n利用中のガス提供会社:${gas_company}\n利用用途:${gas_area}\n居住形態:${gas_house}\nご請求予定金額:${billingamount}円\n基本料金:${basiccharge}円\n今回ご使用量:${quantity}㎥\nガス料金単価:${resultround}\n-----------\n【お安くなる金額目安】\n${costcutmsg}`;
        }

                
        if ( 7 >= address1num || address1num >= 15 ){
            var msg2 = `対象外地域`;
        } else {
            var msg2 = `見積もり申し込み`; 
        } 

        

        var submitresult = window.confirm('以下の内容で診断します\n--\n' + confirm_msg);/////////////////////////////////////////////診断ボタン押下後の条件分岐テスト用        
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
