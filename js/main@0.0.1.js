import Events from '../core/events@0.0.1'

// 摩羯系统全局消息监听机制，负责模块间通信
!window.Capricorn && (window.Capricorn = {})
window.Capricorn.events = new Events