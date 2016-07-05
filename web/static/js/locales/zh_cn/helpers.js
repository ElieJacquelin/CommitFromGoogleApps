export default {
  button: {
    chooseFromComputer: '从电脑上传',
    cancel: '取消',
    saveAndExit: '保存并退出',
    search: '搜索',
  },
  accordion: {
    collapsePriceDetails: '收起费用明细',
    expandPriceDetails: '查看费用明细',
  },
  addressBox: {
    autocompletePopover: {
      locationSuggestion: '建议地址',
    },
    index: {
      addALocation: '添加多个目的地',
      address: '地址',
      collectOnDelivery: '代收货款',
      company: '公司名称',
      contactName: '联系人姓名',
      contactPhone: '联系人手机号码',
      desiredDeliveryTime: '期望配送时间',
      detailAddress: '楼层／房号',
      downloadTemplate: '下载表格模板',
      email: '邮箱地址',
      importRoutes: '通过CSV文档导入地址',
      notApplicable: 'N/A',
      remark: '备注',
      remarkValue: (options) => `期望配送时间: ${options.desiredDeliveryTime}, 代收货款: ${options.collectOnDelivery}, 备注: ${options.remark}`,
      viewAll: '查看全部',
      region: '路线',
    }
  },
  datepicker: {
    date: '日期',
    cancel: '取消',
    ok: '确认',
  },
  dialog: {
    cancel: '取消',
    submit: '提交',
  },
  footer: {
    linkList: {
      aboutUs: '关于快狗速运',
      blog: '博客',
      blogUrl: 'http://weibo.com/p/1006065496176844',
      business: '商务合作',
      careers: '诚聘英才',
      contactUs: '联系我们',
      faq: '常见问题',
      home: '主页',
      legal: '条款及条件',
      placeOrder: '叫车',
      pricing: '收费说明',
      privacy: '隐私政策',
      services: '服务',
    }
  },
  loading: {
    loading: '加载中…',
  },
  mapView: {
    driver: '司机',
    eta: '预计到达时间',
    license: '牌照',
    notApplicable: 'N/A',
    phone: '电话',
  },
  text: {
    addressNotFound: '无搜索结果',
    required: '字段不能为空',
  },
  timepicker: {
    cancel: '取消',
    ok: '确认',
  }
}