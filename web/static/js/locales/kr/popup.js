export default {
  merge: {
    dismissAll: '모두 지우기',
    notifStatement: (options) => `신규 알림이 ${options.count}개 있습니다`,
    seeAll: '모두',
  },
  message: {
    dismiss: '버리다',
    todayAt: (options) => `오늘 ${options.time}`,
  }
}