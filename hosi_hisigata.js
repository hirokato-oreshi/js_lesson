//ひし形
//if文を使わない
//中央値からの差で表示する数を変える 

//縦の列
const lin = 3;

//中央値を求める
const cen = ( lin - 1 ) / 2;

//開始
for ( let i = 0; i < lin; i++ ){
    //中央値からの差を求める
    let diff = Math.abs ( i - cen );
    
    //空白の数を求める
    //空白の数は中央値からの差と同じ
    //空白の表示
    let space = "";
    for (let r = 0; r < diff; r++ ){
        space = space + "　";
    }

    //星の数を求める
    let str_count = lin - diff * 2;
    //星の表示
    let str = "";
    for ( let s = 0; s < str_count; s++ ){
        str = str + "★";
    }
    //出力
    console.log( space + str + space );
}