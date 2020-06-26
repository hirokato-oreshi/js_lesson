//増えて減る

//縦の列
const lin = 11;

//中央値を求める
const cen = ( lin + 1 ) / 2 ;



//開始
for ( let i = 0; i < lin; i ++ ){
    //星の数を求める変数
    let str_count = 0;
   //中心値より前は１づつ増える
   if ( i < cen ){
       str_count = i + 1;
   }
   //中央値より後は１づつ減る
   if ( i >= cen ){
       str_count = (cen - 1) - i + cen;
   }
   //星を出力する
   let str = "";
   for ( let r = 0; r < str_count; r ++ ){
       str = str + "★";
   }
   console.log( str );
}
