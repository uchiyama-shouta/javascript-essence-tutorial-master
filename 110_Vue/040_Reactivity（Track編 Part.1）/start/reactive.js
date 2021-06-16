const handler = {
  get(target, key, receiver) {
    const res = Reflect.get(target, key, receiver);
    console.log('%c[reactive:get]', 'background: green; color: white;', target, key, res);
    track(target, key);
    return res;
  },
  set(target, key, value, receiver) {
    const res = Reflect.set(target, key, value, receiver);
    console.log('%c[reactive:set]', 'background: red; color: white;', target, key, value);
    trigger(target, key);
    return res;
  }
}
function reactive(target) {
  return new Proxy(target, handler);
}

let activeEffect = null;
function effect(fn) {
  activeEffect = fn;
  activeEffect();
  activeEffect = null;
}

const targetMap = new WeakMap();
function track(target, key) {
  if (activeEffect ) {
    
  }
  let depsMap = targetMap.get(target);

  if(!depsMap) {
    targetMap.set(target, depsMap = new Map())
  }

  let dep = depsMap.get(key);
  if(!dep) {
    depsMap.set(key, dep = new Set());
  }
  if(!dep.has(activeEffect)) {
  console.log('%c[effect:register]', 'background: blue; color: white;', target, activeEffect, key);
  dep.add(activeEffect);
  }
}

function trigger(target, key) {
  const depsMap = targetMap.get(target);
  if(!depsMap) {
    return;
  }
  const deps = depsMap.get(key);
  if(!deps) {
    return;
  }
  deps.forEach(effect => effect());
}
export { effect, trigger, reactive };