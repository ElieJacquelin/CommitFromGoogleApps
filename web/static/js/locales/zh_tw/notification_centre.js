export default {
  drawerTitle: {
    notification: '通知',
  },
  message: {
    todayAt: (options) => `今天 @ <span className="event-time">${options.time}</span>`,
  },
  messagesCentre: {
    loadMore: '加載更多通知',
    prefs: '通知偏好設定',
  },
  preferencesCentre: {
    byEmail: '發送通知到我的電子郵件',
    prefs: '偏好設定',
  }
}