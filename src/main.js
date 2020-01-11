/* 
入口js
向外暴露工具函数
*/
export { apply } from './function/apply'
export { default as call } from './function/call'
export { bind } from './function/bind'
export { throttle } from './function/throttle'
export { debounce } from './function/debounce'
export { map, reduce, filter, find, findIndex, every, some } from './array/declares'
export {unique1, unique2, unique3} from './array/unique'
export {concat} from './array/concat'
export {slice} from './array/slice'
export {flatten1, flatten2} from './array/flatten'
export {default as compact} from './array/compact'
export {chunk} from './array/chunk'
export {difference, differences} from './array/difference'
export {mergeArray} from './array/mergeArray'
export {pull, pullAll} from './array/pull'
export {drop, dropRight} from './array/drop'
export {newInstance} from './object/newInstance'
export {myInstanceOf} from './object/myInstanceOf'
export {mergeObject} from './object/mergeObject'