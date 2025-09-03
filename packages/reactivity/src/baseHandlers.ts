import { track, trigger } from "./effect";

function createGetter() {
  return function get(target: any, key: string | symbol, receiver: any) {
    const res = Reflect.get(target, key, receiver)
    track(target, key)
    return res
  }
}

const get = createGetter()


function createSetter() {
  return function set(target: any, key: string | symbol, value: any, receiver: any) {
    const res = Reflect.set(target, key, value, receiver)
    trigger(target, key, value)
    return res
  }
}

const set = createSetter()

export const mutableHandlers: ProxyHandler<any> = {
  get,
  set
}

function aa() {
  return function abc() {
    return 1
  }
}