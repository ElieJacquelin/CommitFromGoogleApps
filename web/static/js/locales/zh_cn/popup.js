export default {
  merge: {
    dismissAll: '全部关闭',
    notifStatement: (options) => `你有 ${options.count} 个新通知`,
    seeAll: '显示全部',
  },
  message: {
    dismiss: '关闭',
    todayAt: (options) => `今天@${options.time}`,
  }
}