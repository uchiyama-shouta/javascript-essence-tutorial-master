function sleep(val) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      console.log(val++);
      resolve(val);
    }, 1000);
  });
}

async function init() {
  // resolveに渡される引数を代入
  let val = await sleep(0)
  val = await sleep(val)
  val = await sleep(val)
  val = await sleep(val)
  val = await sleep(val)
  // console.log(val)/
  return val;
}

init().then(val => console.log('hello ' + val) );