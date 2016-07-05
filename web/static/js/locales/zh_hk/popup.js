export default {
  merge: {
    dismissAll: '全部關閉',
    notifStatement: (options) => `您有 ${options.count} 個新通知`,
    seeAll: '顯示全部',
  },
  message: {
    dismiss: '關閉',
    todayAt: (options) => `今天@${options.time}`,
  }
}