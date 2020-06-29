//ひし形
//if文を使わない
//中央値からの差で表示する数を変える 
//関数を使う

const main = () =>{
    //縦の列
    const lin = 3;

    //中央値を求める
    const cen = ( lin - 1 ) / 2;

    //開始
    for ( let i = 0; i < lin; i++ ){
    //中央値からの差を求める
    let diff = Math.abs ( i - cen );

    
    //空白の数は中央値からの差と同じ
    //空白の生成
    let space = diff;
    let space_length = create_item(space, "　");

    //星の数を求める
    let str_count = lin - diff * 2;
    //星の生成
    let str_length = create_item(str_count, "★");
    //出力
    let str = (space_length + str_length + space_length );
    console.log(str);
    }
};

//各アイテムを生成する関数
const create_item = (length, icon) =>{
    let s = "";
    for (let i = 0; i < length; i++){
        s += icon;
    }
    return s;
}
main();