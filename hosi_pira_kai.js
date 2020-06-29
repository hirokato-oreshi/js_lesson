//ピラミッドの改良
//スペースと★の出力で表現できないか？

//縦の列
const lin =  5;

//開始
for ( let i = 0; i < lin; i++ ){
    //空欄を表示する数を求める
    let space_count = (lin - i) - 1;
    //空欄の表示
    let space = "";
    for ( let r = 0; r < space_count; r++ ){
        space = space + "　";
    }
    //星を表示する数を求める
    let str_count = ( i* 2 ) + 1;
    //星の表示
    let str = "";
    for ( let s = 0; s < str_count; s++) {
        str = str + "★";
    }
    //出力
    console.log( space + str + space );
}