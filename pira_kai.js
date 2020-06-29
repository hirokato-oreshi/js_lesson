//ピラミッドの改良
//スペースと★の出力で表現できないか？
//関数で作る

const main = () =>{
    //縦の列
    const lin =  3;

    //開始
    for ( let i = 0; i < lin; i++ ){
        //空欄を表示する数を求める
        let space_count = (lin - i) - 1;
        //空欄の表示
        let space_length = create_item(space_count, "　");

        //星を表示する数を求める
        let str_count = ( i* 2 ) + 1;
        //星の表示
        let str_length = create_item(str_count, "★");

        //出力
        let str = (space_length + str_length + space_length);
        console.log(str);
    }
}

//各アイテムを生成する関数
const create_item = (length, item) =>{
    let s = ""
    for (let i = 0; i < length; i++){
        s += item;
    }
    return s;
}
main();