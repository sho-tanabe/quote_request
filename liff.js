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



//2通同時に送れるかテスト→テスト結果：同時送信成功！！コメントアウトのままとしている。
// LINEトーク画面上でメッセージ送信
function sendMessages(text) {
    liff.sendMessages([{
        'type': 'text',
        'text': text
//    },{
//        'type': 'text',
//        'text': "見積もり申し込み"
    }]).then(function () {
        document.googleform1.submit();
    }).then(function () {
        window.alert('申し込み内容はLINEチャット画面に表示されます。');
//GoogleFormを利用しない場合に限り、then文とliff.closewindowをここに挟み込むことで画面クローズを動作させることができる。
    //}).then(function () {    
        //liff.closeWindow();
//GoogleFormを利用しない場合に限り、liff.closewindowをここに挟み込むことで画面クローズを動作させることができる。        
    }).catch(function (error) {
        window.alert('Failed to send message ' + error);
    });
}
//2通同時に送れるかテスト


//thanks.jsで呼び出しているため削除不可
function closeWin() {
    liff.closeWindow();
}
//thanks.jsで呼び出しているため削除不可




// Webブラウザからメッセージ送信
function shareTargetPicker(text) {
    liff.shareTargetPicker([{
        'type': 'text',
        'text': text
    }]).catch(function (error) {
        window.alert('Failed to send message ' + error);
    });    
}





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
    }]).then(function () {   //再びおかしくなったので（２連続で投稿するとフリーズする）
//        liff.closeWindow();　　　　//再びおかしくなったので（２連続で投稿するとフリーズする）
        window.alert('サンクス画面へ遷移');
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
