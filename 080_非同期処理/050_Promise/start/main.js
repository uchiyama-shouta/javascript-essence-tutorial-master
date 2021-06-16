/*
   インスタンス化したPromiseオブジェクトの第一引数にcallback関数を記述する。
   function(resolve, reject) {}
   resolveにはthen(function(){})が呼ばれる
   rejectにはcatch(function(){})が呼ばれる。

   then()のなかでエラー時の処理を記述する場合はthrowでエラーが起きたことを伝えると.catch()に移行する
   finaly()には引数は渡せない
*/

new Promise(function(resolve, reject) {
   console.log('hello')
   setTimeout(() => {
      resolve('hello')
   }, 2000)
}).then(function(date) {
   console.log('then: ' + date , 'first')
   return date;
}).then(function(date) {
   console.log('then: ' + date)
   return date;
}).catch(function(date) {
   console.log('catch: ' + date)
   return date;
}).finally(function() {
   console.log('finaly: ')
})

// console.log('global end')