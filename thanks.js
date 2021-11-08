$(function () {
    $('form').submit(function () {
        closeWin();
//        setTimeout(closeWin, 3000);/////これだとボタンを押した3秒後にとじる。実現したいのとは違った・・・
        return false;
    });
});
