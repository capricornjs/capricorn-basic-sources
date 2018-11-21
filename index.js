import Events from 'mona-events'
import toast from './components/toast'
import './style/index.less'
import axios from 'axios'
import qs from 'qs'
import ajax from './core/ajax'

!window.Capricorn && (window.Capricorn = {})

// 公共基础组件
window.toast = toast

// 摩羯系统全局消息监听机制，负责模块间通信
// https://www.npmjs.com/package/mona-events
window.Capricorn.Events = Events
window.Capricorn.events = new Events

// qs公共模块
// https://www.npmjs.com/package/qs
window.Capricorn.qs = qs

// axios 公共请求模块
// https://www.npmjs.com/package/axios
window.Capricorn.axios = axios
window.Capricorn.ajax = ajax