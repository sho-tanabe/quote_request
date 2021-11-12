$(document).ready(function () {
    // liffId: LIFF URL "https://liff.line.me/xxx"のxxxに該当する箇所
    // LINE DevelopersのLIFF画面より確認可能
    var liffId = "1656567556-GW67e4wB";
    initializeLiff(liffId);
})

function initializeLiff(liffId) {
    liff
        .init({
            liffId: liffId
        })
        .then(() => {
            // Webブラウザからアクセスされた場合は、LINEにログインする
            if (!liff.isInClient() && !liff.isLoggedIn()) {
                window.alert("LINEアカウントにログインしてください。");
                liff.login({redirectUri: location.href});
            }
        })
        .catch((err) => {
            console.log('LIFF Initialization failed ', err);
        });
}


//旧sendText部の開始
//function sendText(text) {
//    if (!liff.isInClient()) {
//        shareTargetPicker(text);
//    } else {
//        sendMessages(text);
//    }
//}
//旧sendText部の終了


function sendText(text) {
    if (!liff.isInClient()) {
//WEBブラウザアクセスの場合の動作↓
        //shareTargetPicker(text);
        alert('本画面をLINEアプリ以外で起動している場合、料金を診断できません。スマートフォンのLINEアプリから料金診断を行って下さい。');
//WEBブラウザアクセス以外の場合の動作↑
    } else {
        sendMessages(text);        
    }
}

// LINEトーク画面上でメッセージ送信→2通同時テスト成功のため、メッセージ2通目を動的に代入するテストが成功するまで、コメントアウトのままとしている。
//function sendMessages(text) {
//    liff.sendMessages([{
//        'type': 'text',
//        'text': text
//    }]).then(function () {
//        liff.closeWindow();
//    }).catch(function (error) {
//        window.alert('Failed to send message ' + error);
//    });
//}


//2通同時に送れるかテスト→テスト結果：同時送信成功！！コメントアウトのままとしている。
// LINEトーク画面上でメッセージ送信
function sendMessages(text) {
    liff.sendMessages([{
        'type': 'text',
        'text': text
    },{
        'type': 'text',
        'text': "見積もり申し込み"
    }]).then(function () {
        document.googleform1.submit();
    }).then(function () {
        window.alert('診断結果はLINEチャット画面に表示されます。');
//GoogleFormを利用しない場合に限り、then文とliff.closewindowをここに挟み込むことで画面クローズを動作させることができる。
    //}).then(function () {    
        //liff.closeWindow();
//GoogleFormを利用しない場合に限り、liff.closewindowをここに挟み込むことで画面クローズを動作させることができる。        
    }).catch(function (error) {
        window.alert('999Failed to send message ' + error);
    });
}
//2通同時に送れるかテスト


//thanks.jsで呼び出しているため削除不可
function closeWin() {
    liff.closeWindow();
}
//thanks.jsで呼び出しているため削除不可


//バリデーションテスト
function check(){
    if (googleform1.username.value == ""){
        //条件に一致する場合(メールアドレスが空の場合)
        alert("お名前を入力してください");    //エラーメッセージを出力
        return false;    //送信ボタン本来の動作をキャンセルします
    }else{
        //条件に一致しない場合(メールアドレスが入力されている場合)
        return true;    //送信ボタン本来の動作を実行します
    }
}
//バリデーションテスト


// Webブラウザからメッセージ送信
function shareTargetPicker(text) {
    liff.shareTargetPicker([{
        'type': 'text',
        'text': text
    }]).catch(function (error) {
        window.alert('Failed to send message ' + error);
    });    
}



//Email送信(Elastic Emailを利用中。永久無料プランでは、1日に最大100通のメールを送信できます。この制限を超えた場合には、使用量に対して支払いを行うことができます。メール1,000通あたり0.09ドルです。)
//function sendautomail(text){
function sendautomail(msg){
    Email.send({
        SecureToken : "720bc3d8-8906-4b0d-bb67-6ed51d1861f0", //HOSTやユーザーパスワード等の直書きをやめてセキュアトークン発行をしたところ再び成功した。（参照：https://www.smtpjs.com/）
        To : 'lpg.switching@gmail.com',
        From : "lpg.switching@gmail.com",
        Subject : "LINE経由でガス料金単価の計算実行あり。",
        Body : msg
//      3回目以降フリーズする理由。この後のthen以降のalert出すのを消したらうまくいくのではないか？？またはtextとmsgが怪しい。だめだ・・・同じ現象が発生・・
//        Body : text
    }).then(
        message => alert(message)
    )
};


//クリアボタン押下時の動作
function refresh() {
    isInit = true;
    secondNum = 0;
    ans = 0;
    kigou = "";
    type.innerHTML = "";
    display.innerHTML = 0;
    textbox1.value = "";
    textbox2.value = "";
}

//----------------------------------------算出ロジック開始----------------------------------------

function update_field(){    
    var resultabout = Math.floor( ( $('#billingamount').val() - $('#basiccharge').val() ) / $('#quantity').val() );
    var result = `${resultabout}円`;
    $('#unitprice').text(result);
}
$(function() {
  $('input[type="number"]').on('keyup change', function() {
    update_field();
  });
});

//----------------------------------------算出ロジック終了----------------------------------------

//----------------------------------------以下Sendtextテスト２----------------------------------------
function sendText2(text) {
    if (!liff.isInClient()) {
//        shareTargetPicker2(text);
//        liff.openWindow({
//            url: "https://goofy-offer-5121.glide.page/dl//s/d0a5f4",
//            external: true
//        });
    } else {
        sendMessages2(text);
    }
}

// LINEトーク画面上でメッセージ送信
function sendMessages2(text) {
    liff.sendMessages([{
        'type': 'text',
        'text': text
    }]).then(function () {
        liff.closeWindow();
    }).catch(function (error) {
        window.alert('Failed to send message ' + error);
    });
}

// Webブラウザからメッセージ送信
function shareTargetPicker2(text) {
    liff.shareTargetPicker([{
        'type': 'text',
        'text': text
    }]).catch(function (error) {
        window.alert('Failed to send message ' + error);
    });
}
//----------------------------------------以上Sendtextテスト２----------------------------------------
