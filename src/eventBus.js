// const listeners = {}
// export default {
//     $on(eventName, callback) {
//         if (!listeners[eventName]) {
//             listeners[eventName] = new Set();
//         }
//         listeners[eventName].add(callback);
//     },
//     $off(eventName, callback) {
//         if (!listeners[eventName]) {
//             return;
//         }
//         listeners[eventName].delete(callback);
//     },
//     $emit(eventName, ...args) {
//         if (!listeners[eventName]) {
//             return;
//         }
//         for (const iterator of listeners[eventName]) {
//             iterator(...args);
//         }
//     }
// }
import Vue from "vue"
const bus = new Vue({});
Vue.prototype.$bus = bus;
export default bus;


