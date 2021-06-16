/**
 * 問題：
 * コールバックとクロージャーの仕組みを使って、
 * setTimeoutで1秒後に"hello Tom"と表示されるような
 * hello関数を作成してみましょう。
 * 
 * 条件としてはhello関数の引数には必ず
 * nameの引数を取るものとします。
 * 
 */
function hello(name) {
   // console.log('hello'+ ' ' + name);
   return function() {
      console.log('hello ' + name)
   }
}

/**
 * 実行文は以下の通りです。
 */
setTimeout(hello('Tom'), 1000);

/* ↓ */

// hello関数で結果を出力する関数を返しているので
// 実質
// setTimeout(function() {
//    console.log('hello ' + name)
// } , 1000)
// となる