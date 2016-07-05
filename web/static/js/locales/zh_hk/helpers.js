export default {
  button: {
    chooseFromComputer: '從電腦中選取',
    cancel: '取消',
    saveAndExit: '儲存及離開',
    search: '搜尋',
  },
  accordion: {
    collapsePriceDetails: '隱藏費用詳情',
    expandPriceDetails: '查看費用詳情',
  },
  addressBox: {
    autocompletePopover: {
      locationSuggestion: '建議地址',
    },
    index: {
      addALocation: '增加地點',
      address: '地址',
      collectOnDelivery: '代收貨款',
      company: '公司名稱',
      contactName: '聯絡人姓名',
      contactPhone: '聯絡人電話號碼',
      desiredDeliveryTime: '期望送達時間',
      detailAddress: '樓層/房號',
      downloadTemplate: '下載CSV檔案範例',
      email: '電郵地址',
      importRoutes: '使用CSV檔案匯入路線',
      notApplicable: 'N/A',
      remark: '備註',
      remarkValue: (options) => `期望送達時間: ${options.desiredDeliveryTime}, 代收貨款: ${options.collectOnDelivery}, 備註: ${options.remark}`,
      viewAll: '查看全部',
      region: '路線',
    }
  },
  datepicker: {
    date: '日期',
    cancel: '取消',
    ok: '確認',
  },
  dialog: {
    cancel: '取消',
    submit: '提交',
  },
  footer: {
    linkList: {
      aboutUs: '關於GOGOVAN',
      blog: '網誌',
      blogUrl: 'http://blog.gogovan.com.hk',
      business: '商務合作',
      careers: '工作機會',
      contactUs: '聯繫我們',
      faq: '常見問題',
      home: '主頁',
      legal: '條款及條件',
      placeOrder: '叫車',
      pricing: '收費表',
      privacy: '隐私政策',
      services: '服務',
    }
  },
  loading: {
    loading: '載入中...',
  },
  mapView: {
    driver: '司機',
    eta: '預計到達時間',
    license: '車牌號碼',
    notApplicable: 'N/A',
    phone: '電話',
  },
  text: {
    addressNotFound: '無搜尋結果',
    required: '字段不能為空',
  },
  timepicker: {
    cancel: '取消',
    ok: '確認',
  }
}