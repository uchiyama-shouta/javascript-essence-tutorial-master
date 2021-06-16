function sleep(ms) {
  const startTime = new Date();
  // new Date() - startTime → 経過時間
  // new Date() - startTime < ms → 与えられたミリ秒分、　ループ
  while (new Date() - startTime < ms);
  console.log('sleep done');
}


const btn = document.querySelector('button');
btn.addEventListener('click', function(){
  console.log('button clicked');
});

setTimeout(function() {
  sleep(3000);
}, 2000)
