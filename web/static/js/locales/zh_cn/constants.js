export default {
  addressBoxFields: {
    addressTypeReceiver: '收货人',
    addressTypeSender: '发货人',
    company: '公司名称',
    destination: '目的地',
    detailAddress: '楼层／房号',
    email: '电子邮件',
    instructions: '备注',
    phone: '电话号码＃',
    receiver: '收件人姓名(可选)',
    sender: '寄件人信息',
    region: '路线',
    parcelId: '',
    addressType: '地址类型',
  },
  goodsTypes: {
    constructionMaterials: '建筑材料',
    documents: '文件',
    food: '食用品',
    fragile: '易碎品',
    groceries: '生活用品',
    others: '其他（请填写)',
  },
  industries: {
    accounting: '会计及行政',
    agriculture: '农、林、牧、渔业',
    arts: '设计',
    construction: '建筑业',
    culture: '文化、体育和娱乐业',
    education: '教育',
    electricity: '电力、热力、燃气及水生产和供应业',
    environment: '水利、环境和公共设施管理业',
    financial: '金融业',
    healthcare: '卫生和社会工作',
    hotels: '住宿和餐饮业',
    information: '信息传输、软件和信息技术服务业',
    international: '国际组织',
    leasing: '租赁和商务服务业',
    legal: '律师',
    manufacturing: '制造业',
    mining: '采矿业',
    others: '其他（请填写)',
    professional: '科学研究和技术服务业',
    publicAdministration: '公共管理、社会保障和社会组织',
    realEstate: '房地产业',
    residentServices: '居民服务、修理和其他服务业',
    transport: '交通运输、仓储和邮政业',
    wholesale: '批发和零售业',
  },
  orderRequestStatuses: {
    active: '进行中',
    cancelled: '已取消',
    completed: '已完成',
    pending: '等待中',
  },
  services: {
    assemble: '需安装/拆卸',
    borrowCarts: '租用手推车／板车',
    dumperOrConstruction: '',
    express: '',
    helpPay: '',
    loadCargo: '需要装卸货',
    longerThanSixFt: '货物长度超过6呎',
    longerThanSixFtFull: '',
    longerThanSixFtHalf: '货物长度超过6呎长',
    manpower: '',
    mover: '需要搬运',
    needCarry: '需搬运',
    needCart: '租用手推车／板车',
    needCoveredLorry: '',
    needQueueing: '',
    needReceipt: '需回单',
    needTailgate: '',
    newCar: '新车',
    pcs: (options) => `${options.count}部`,
    pets: '接载宠物',
    raining: '',
    receivePayment: '由收件人支付',
    snowing: '',
    speakEnglish: '需要英文',
  },
  vehicles: {
    damas: '',
    labo: '',
    lorry10: '',
    lorry14: '',
    lorry24: '',
    motorcycle: '',
    mudou: '5.5吨货车',
    mudou9: '9吨货车',
    sedan: '',
    ton1: '',
    ton1_2_and_ton1_4: '',
    van: '',
    sbread: '小型面包车',
    mbread: '中型面包车',
    lbread: '大型面包车',
    struck: '小型货车',
    mtruck: '中型货车',
    ltruck: '大型货车',
    sltruck: '超大型货车',
    tricycle: '三轮车',
  }
}