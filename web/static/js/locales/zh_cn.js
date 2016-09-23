export default {
  accounts: {
    edit: {
      editUser: '编辑用户',
      pageHeader: '账户管理>编辑用户',
    },
    form: {
      accessLevel: '用户权限',
      branch: '分店',
      branchUser: '分店用户',
      changePassword: '修改密码',
      confirmPassword: '确认密码',
      currentPassword: '当前密码',
      detailAddress: '楼层／房号',
      email: '电邮',
      master: '管理员',
      name: '姓名',
      newPassword: '新密码',
      pageHeader: '账户管理>用户表',
      phone: '电话',
      profileForm: '档案表',
      profileImage: '个人头像',
      streetAddress: '街道地址',
      subUser: '子用户',
    },
    new: {
      createUser: '创建用户',
      pageHeader: '账户管理>创建新用户',
    },
    view: {
      accessLevel: '用户权限',
      addNewUser: '添加新用户',
      branch: '分店',
      branchUser: '分店用户',
      reactivate: '重新授权',
      reactivated: '已授权',
      deactivate: '取消授权',
      deactivated: '已撤销',
      detailAddress: '楼层／房号',
      editProfile: '修改账户',
      email: '电邮',
      false: '否',
      master: '管理员',
      name: '姓名',
      pageHeader: '账户管理',
      phone: '电话',
      queryPlaceholder: '姓名，分店，电子邮件等',
      streetAddress: '街道地址',
      subUser: '子用户',
      true: '是',
      users: '用户',
      showAll: '显示全部',
      search: '搜索:',
    }
  },
  helpers: {
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
        parcelIds: '',
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
      travelTime: '行车时间',
    },
    text: {
      addressNotFound: '无搜索结果',
      required: '字段不能为空',
    },
    timepicker: {
      cancel: '取消',
      ok: '确认',
    }
  },
  addresses: {
    edit: {
      editAddress: '编辑地址',
      pageHeader: '常用收货地址>编辑联系人',
    },
    index: {
      addNewContact: '添加新收货人',
      addresses: '地址',
      company: '公司名称',
      delete: '删除',
      detailAddress: '楼层／房号',
      edit: '编辑',
      email: '电邮',
      filterType: '地址类型',
      name: '姓名',
      pageHeader: '常用收货地址',
      phone: '电话号码＃',
      placeNewOrder: '下单',
      queryPlaceholder: '联系人名称/电话号码＃/电子邮件等',
      receiver: '收货人',
      search: '搜索',
      sender: '发货人',
      streetAddress: '街道地址',
      type: '类型',
      region: '路线',
    },
    new: {
      createAddress: '新建地址',
      pageHeader: '常用收货地址>添加新收货人',
      save: '保存并继续添加',
      successMessage: '常用地址添加成功',
    }
  },
  constants: {
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
      parcelIds: '',
      parcelIdsPlaceholder: '',
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
    extraRequirements: {
      assemble: '需安装/拆卸',
      borrowCarts: '租用手推车／板车',
      dumperOrConstruction: '',
      express: '',
      helpPay: '',
      inputPlaceholder: '',
      loadCargo: '需要装卸货',
      longerThanSixFt: '货物长度超过6呎',
      longerThanSixFtFull: '',
      longerThanSixFtHalf: '货物长度超过6呎长',
      manpower: '',
      mover: '需要搬运',
      movers: '',
      needCarry: '需搬运',
      needCart: '租用手推车／板车',
      needCoveredLorry: '',
      needQueueing: '',
      needQueueingFalse: '',
      needQueueingTrue: '',
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
      damasDescription: '',
      labo: '',
      laboDescription: '',
      lorry10: '',
      lorry10Description: '',
      lorry14: '',
      lorry14Description: '',
      lorry24: '',
      lorry24Description: '',
      motorcycle: '',
      motorcycleDescription: '',
      mudou: '5.5吨货车',
      mudouDescription: '',
      mudou9: '9吨货车',
      mudou9Description: '',
      sedan: '',
      sedanDescription: '',
      ton1: '',
      ton1Description: '',
      ton1_2_and_ton1_4: '',
      ton1_2_and_ton1_4Description: '',
      ton2_5: '',
      ton2_5Description: '',
      ton3_5: '',
      ton3_5Description: '',
      ton4_5: '',
      ton4_5Description: '',
      ton5: '',
      ton5Description: '',
      ton8: '',
      ton8Description: '',
      ton9_5: '',
      ton9_5Description: '',
      ton11: '',
      ton11Description: '',
      ton14: '',
      ton14Description: '',
      ton15: '',
      ton15Description: '',
      ton18: '',
      ton18Description: '',
      ton22: '',
      ton22Description: '',
      ton25: '',
      ton25Description: '',
      van: '',
      vanDescription: '',
      sbread: '小型面包车',
      mbread: '中型面包车',
      lbread: '大型面包车',
      struck: '小型货车',
      mtruck: '中型货车',
      ltruck: '大型货车',
      sltruck: '超大型货车',
      sbreadDescription: '载重: 0.6吨 体积(米): 1.7长/1.1宽/1.1高',
      mbreadDescription: '载重: 0.8吨 体积(米): 2.0长/1.3宽/1.4高',
      lbreadDescription: '载重: 1.2吨 体积(米): 2.6长/1.6宽/1.6高',
      struckDescription: '载重: 1.5吨 体积(米): 2.8长/1.6宽/1.6高',
      mtruckDescription: '载重: 3吨 体积(米): 4.2长/2.0宽/2.0高',
      ltruckDescription: '载重: 7吨 体积(米): 6.8长/2.3宽/2.3高',
      sltruckDescription: '载重: 15吨 体积(米): 9.6长/2.5宽/2.6高',
    },
    parcelStatuses: {
      assigned: '',
      delivered: '',
      failedToDeliver: '',
      reassigned: '',
      pending: '',
      pickedUp: '',
    }
  },
  errors: {
    auth: {
      restricted: '此页面禁止访问',
    },
    page_not_found: {
      oops: '噢！',
      status: '404 找不到这个页面',
      message: '对不起，发生了错误，找不到请求的页面！',
      home: '返回主页',
    }
  },
  faq: {
    contactUs: '如有其它问题，请致电快狗速运客服热线4006 800 877 或发送邮件给我们。',
    header: '常见问题',
    questions: [
      {
        answer: '快狗速运是一个基于手机软件的货运服务平台，目前已推出出手机软件、网页、微信等多种叫车方式，并衍生出各类增值服务。对于企业客户，我们开发出供企业客户使用的网页，并按需定制个性化服务，旨在帮助企业客户节省物流成本，提高货运效率。',
        question: '什么是快狗速运企业版？',
      },
      {
        answer: '快狗速运企业版为企业批量用车提供定制服务。无论是城市内的多点配送还是多种车型、线路安排，我们都能按需做出最优方案。',
        question: '快狗速运企业版的服务对象是谁？',
      },
      {
        answer: '是的，当您所选择的车辆无法一次装完您的所有货物时，您只需在菜单栏下方的“车型数量”中选择需要的数量即可。同时，您也可以在“线路共享”和“线路拆分”中进行选择。',
        question: '当我下单时，能否同时选择多辆车？',
      },
      {
        answer: [
          "当你不确定如何安排卸货点时，我们会为您提供几个选择：",
          "最快路线 - 重新安排卸货点次序，并提供一条让司机最快抵达的路线。",
          "最短路线 –重新安排卸货点次序，并提供一条让司机在最短的路程内完成各个点之间配送的路线。"
        ],
        question: '什么是最优线路？',
      },
      {
        answer: '您可以随时通过点击问号图像“？”来查询每种车型的限制，当然我们也希望您在下单页面的“货物信息及服务设置”栏位中输入货物的容量、重量及体积。司机可以根据货物信息来决定是否能接订单',
        question: '如何确定我的货物没有超过重量或者尺寸的限制',
      },
      {
        answer: '您可以通过微软电子表格将路线导入系统。详情请查阅《导入线路说明》\n[下载表格模板]',
        question: '如果有包含了各个配送地点的表格，可以把它导入路线中吗？',
      },
      {
        answer: '',
        question: '',
      },
      {
        answer: '',
        question: '',
      },
      {
        answer: '若你有特别的注意事项想让司机知道，那么您可以将注意事项写在下单页面的备注中',
        question: '若我有的订单有特別注意事项，是否有办法让司机在接单前知道？',
      },
      {
        answer: '',
        question: '',
      },
      {
        answer: '',
        question: '',
      },
      {
        answer: '',
        question: '',
      },
      {
        answer: '请您直接拨打客服热线联系快狗速运的客服，我们将会为你重新匹配新的司机',
        question: '如果司机无故消失或完全联系不上，该如何解决？ ',
      },
      {
        answer: '',
        question: '',
      }
    ]
  },
  header: {
    addressBook: '常用收货地址',
    dropdown: {
      aboutGGV: '关于快狗速运',
      accountMgmt: '账户管理',
      contactUs: '联系快狗',
      corporateProfile: '公司账户信息',
      help: '帮助',
      logout: '退出登录',
      tnc: '条款及细则',
      switchChineseEnglish: '',
    },
    orderMgmt: '订单管理',
    placeOrder: '下单',
    tnc: {
      agree: '我明白及同意以上条款和细则',
      content: `
      <p style="text-align: center;"><strong>用户使用条款</strong></p>
      <p><br /> <strong>您使用快狗速运企业版网络平台（下称&ldquo;快狗速运企业版&rdquo;）并获得快狗速运企业版提供的信息、建议和/或服务（定义见下文）适用本《用户使用条款》（下称&ldquo;本条款&rdquo;）。 快狗速运企业版在中国（不包含&ldquo;港澳台&rdquo;）区域内由高高信息科技（上海）有限公司及其分公司、子公司和关联方（下称&ldquo;我们&rdquo;）运营并提供相关服务。 在访问和使用快狗速运企业版前，您必须阅读并接受本条款，特别是免除或者限制责任的部分，否则您无权使用快狗速运企业版或获取快狗速运企业版提供的信息、建议和/或服务。您可通过如下方式接受本条款：（i）在快狗速运企业版网络平台上注册时，在我们向您提供的选择处点击接受或同意本条款；或（ii）您作出任何使用快狗速运企业版或获取快狗速运企业版提供的信息、建议和/或服务的行为即视为您已接受本条款。您接受本条款即表明本条款构成了您和我们之间关于使用快狗速运企业版或获取快狗速运企业版提供的信息、建议和/或服务的有法律约束力的合同。 </strong></p>
      <h4>1.定义与解释</h4>
      <ul>
      <li>a.除非另有界定或上下文中另有要求，下面的定义和解释规则适用于本条款和条件：<br /><br /> &ldquo;广告&rdquo;是指所有在您使用快狗速运企业版时可能在您使用的台式计算机或移动设备上出现的促销信息和消息。<br /> &ldquo;中国&rdquo;是指中华人民共和国，并且仅为本条款之目的，不包括香港特别行政区、澳门特别行政区及中国台湾地区。<br /> &ldquo;应用程序&rdquo;是指我们向你提供的快狗速运企业版网络平台，您可以通过台式计算机或移动设备访问qiye.kuaigou.co网站来使用本平台，并获取其提供的信息、建议和/或服务。<br /> &ldquo;服务&rdquo;是指我们通过快狗速运企业版向您提供的任何信息、建议和/或服务，包括在条款3(a)中所述的服务。<br /> &ldquo;承运人&rdquo;是指提供司机或车辆操作人员及承运车辆，并为您提供物流服务的公司或个人，您可通过使用快狗速运企业版向其提出要求。<br /> &ldquo;本条款&rdquo;是指本《用户使用条款》中列出的所有条款和条件，可由我们根据条款10随时进行补充和修正。</li>
      </ul>
      <ul>
      <li>b.本条款内各部分的标题仅为阅读方便，并不影响对所列条款与条件的解释。单数包括复数，同时男性应包括女性和中性，反之亦然。</li>
      </ul>
      <ul>
      <li>c.人、法人、信托、合伙企业、非法人团体或其他任何实体均可指代前述任何称谓。</li>
      </ul>
      <p>&nbsp;</p>
      <h4>2.应用许可</h4>
      <ul>
      <li>a.在您遵守本条款的前提下，我们授予您有限的、非排他的、不可转让的许可，以便您能通过台式计算机或移动设备访问并使用快狗速运企业版。本条款未明确授予的任何权利均由我们及我们的许可方继续保留。</li>
      </ul>
      <ul>
      <li>b.您使用快狗速运企业版的行为并不赋予您任何与我们知识产权相关的权利（包括但不限于版权、商标、标志、图形、图片、动画、视频和文本或在应用程序和应用中的权利），或有关我们合作伙伴的知识产权的权利，但您按照本条款就获取和使用服务而享有的不可转让的个人权利除外。&nbsp;</li>
      </ul>
      <ul>
      <li>c.您不得：（i）将服务或应用程序用作许可、再许可、出售、转售、转让、分配、分发或其他方式的商业用途，也不得以任何方式使第三方接触到服务或应用程序；（ii）对服务或应用进行修改或衍生开发；（iii）创立指向服务或应用程序的互联网&ldquo;超链接&rdquo;，或在任何其他服务器或基于无线或因特网的设备上建立直接从服务或应用程序调取内容的互联网页面框架或镜像复制服务或应用程序的内容（iv）进行反向工程或访问应用程序以便（1）设计或构造一个与之相竞争的产品或服务；（2）使用与服务或应用程序类似的理念、特性、功能、服务或图形设计来构造某产品；（3）抄袭服务或应用程序的任何理念、特性、功能或服务或图形；（4）运行每秒多次服务器请求或致使服务或应用产生过度负荷、影响其操作和/或性能的自动化程序或脚本，包括但不限于网络蜘蛛、网页爬虫、网络机器人、网络蚂蚁、网络索引、机器人程序、病毒、蠕虫或任何其他程序。</li>
      </ul>
      <p>&nbsp;</p>
      <h4>3.服务</h4>
      <ul>
      <li>a.我们提供一个物流信息第三方网络平台以提供信息和途径，使您能通过使用应用程序从获得承运人提供的物流服务。应用程序允许您向承运人发送物流需求（连同物流需求的具体内容），各相关承运人收到您的物流需求后可自行决定接受或拒绝，如果一个承运人最先接受您的物流需求的，应用程序将会通知您，并向您提供该承运人的信息，如车牌号码、联系电话和司机等级（如有）。您应当接受该承运人按照您之前的物流需求提供的物流服务，如果承运人接受您的物流需求后您希望取消本次物流需求的，应先获得承运人的同意，否则应承担相应责任。此外您还可以通过使用应用程序和服务进行批量物流需求路径规划管理、物流订单内容查询及简单统计。</li>
      </ul>
      <ul>
      <li>b.您承认并同意，我们只是提供给您一种新型的联系承运人的方式，我们只作为您和承运人之间的物流信息中介，为您和承运人提供物流信息服务，并且我们不是您或承运人的代理人，我们不是承运人，不提供运输服务。我们不对承运人的行为、疏忽、操作、措施或不作为（无论您是通过应用程序或其他方式获得的）负责。任何关于提供物流服务条款的运输合同，都属于您和承运人之间的合同，而不是您与我们之间的合同。我们并非您订立的运输合同中的一方当事人。如果您对承运人提供的物流服务有任何投诉，您应直接向承运人提出。</li>
      </ul>
      <ul>
      <li>c.您同时承认并同意，对于不提前与承运人沟通而单方面爽约的，我们保留包括停用您的账户在内的处罚权利。&nbsp;</li>
      </ul>
      <ul>
      <li>d.在使用应用程序和服务前，您应按我们要求提供您的主体信息及相关资质证明，我们审核通过后将向您提供一个登录并使用应用程序的账户（以下简称&ldquo;账户&rdquo;），您可以自己设定密码，以使用该账户访问和使用应用程序，除非我们另行书面同意，您只得拥有一个账户。帐号的所有权归我们所有，我们给您提供账号后您仅获得帐号的使用权，且该使用权仅属于您。同时，您不得赠与、借用、租用、转让或售卖帐号或者以其他方式许可除您公司员工外的他人使用帐号。他人不得通过受赠、继承、承租、受让或者其他任何方式使用帐号。您可以设立相应的子账户（以下简称&ldquo;账户&rdquo;）并进行管理和使用，但可设立子账户的数量和权限由我们单方制定的规则决定，我们有权不时设定并更改相关数量的权限的规则，仅需通知您后即对您有约束力。您应当对您账户下发生的一切行为承担责任，您同意始终确保您账户的用户名、密码等信息的安全和保密，不得向任何第三方泄露。当您怀疑他人在使用你的帐号时，您应立即通知我们。&nbsp;</li>
      </ul>
      <ul>
      <li>e.我们将假定任何使用您移动设备、用户名和密码的人员均为您本人或经过您授权的人员。</li>
      </ul>
      <ul>
      <li>f.您理解，我们仅提供应用程序，除此以外与相关网络服务有关的设备（如个人电脑、手机、其他与接入互联网或移动网有关的装置）及第三方收取的相关费用（如为接入互联网而支付的电话给及上网费、为使用移动网而支付的手机费）均应由您自行负担。</li>
      </ul>
      <p>&nbsp;</p>
      <h4>4. 您对应用程序及其服务的使用&nbsp;</h4>
      <p>您同意：</p>
      <ul>
      <li>a.<strong>并保证您向我们提供的所有信息和细节（包括通过应用程序提供的，包括注册信息）均在所有方面且始终正确、准确、完整、和最新，且不含违法和不良信息；</strong>&nbsp;</li>
      </ul>
      <ul>
      <li>b.您不会以如下方式使用应用程序或其服务：用于任何非法目的；以任何方式中断、损害、削弱或使应用程序或其服务效率变低；访问或尝试访问其他用户账户或渗透或尝试渗透任何保安措施；广告宣传或推广第三方或自己的产品或服务；</li>
      </ul>
      <ul>
      <li>c.在使用应用程序或其服务时遵守所有适用的法律；</li>
      </ul>
      <ul>
      <li>d.您使用应用程序或其服务不会造成公害、滋扰或不便；</li>
      </ul>
      <ul>
      <li>e.不作出任何不端或会对我们信誉造成损害（根据我们合理认为）的行为；<span style="font-size: 11px;">&nbsp;</span></li>
      </ul>
      <ul>
      <li>f.<span style="font-size: 11px;">&nbsp;</span>向我们提供任何合理要求的身份证明；</li>
      </ul>
      <ul>
      <li>g.尊重为您提供物流服务的承运人，不对其车辆造成损坏，在使用其车辆或服务时不从事任何非法、威胁、骚扰、辱骂的行为或活动；</li>
      </ul>
      <ul>
      <li>h.<strong>对于由任何其他人士提起的因您违背这些条款而产生的任何索赔或法律诉讼，您将全额赔偿并确保我们免责。</strong></li>
      </ul>
      <p><strong>如果我们有合理理由相信您违反任何条款或使用应用程序或其服务从事欺诈或非法活动，或我们认为您滥用应用程序或其服务，那么我们保留随时暂停、限制或终止您访问应用程序及其服务的权利，我们行使前述权利无须预先通知且不承担任何责任。上述措施不限制我们向您采取任何其他我们认为适当的捍卫我们或其他任何人权利的行动。</strong></p>
      <h4>5.&nbsp;<strong>收费和付款</strong></h4>
      <p>我们保留向您收取应用程序和/或服务使用费的权利。如果我们决定收取此类费用，我们会事先向您发送通知，并允许您选择继续履行或终止使用应用程序和/或服务，您选择终止使用应用程序和/或服务的，则无需支付相关的使用费。</p>
      <p>对于您通过应用程序获得的承运人向您提供的所有服务，您同意直接向其全额付款。有关承运人提供物流服务的物流费费标准，请参见发布在应用程序上的最新定价准则。该定价准则可由我们随时（无事先通知）自行决定进行修改和更新。此外，您确认并同意特定地区在用车高峰时间的成交价格可能会相应上涨，我们将会尽合理努力告知您适用的成交价格。您知悉并同意前述定价计算标准可能因多种因素（包括但不限于市场变化、推广、折扣等因素）而不时变化，您可以在应用程序上查看到变化后的定价计算标准。定价计算标准变更后，您继续访问和使用应用程序和服务的行为将构成您对前述定价计算标准变更的同意。您确认并同意，如果您在承运人到达之前取消已经被承运人接受的运输服务请求的，您应向承运人支付应用程序中规定的特定数额的取消费用。</p>
      <p>&nbsp;</p>
      <h4>6.&nbsp;<strong>促销</strong></h4>
      <p>我们可能不定期在应用程序上提供促销信息。我们保留修改、暂停、撤销或终止（不论是全部或部分）任何此类促销活动的权利，我们行使前述权利无需事先通知且我们拥有完全自主决定权。</p>
      <p>&nbsp;</p>
      <h4>7.&nbsp;<strong>链接和广告</strong></h4>
      <p>应用程序可能包含广告，并链接至第三方网站。我们对任何广告的内容和准确度概不负责。任何第三方网站链接仅用于为您提供方便，且我们不对此类第三方网站内容进行担保。如果您访问任何第三方网站链接或广告，那么您完全自行承担风险。我们不为您与任何广告商或第三方网站之间的任何交易承担责任。</p>
      <p>&nbsp;</p>
      <h4>&nbsp;</h4>
      <h4>8. 赔偿</h4>
      <p>您同意您应保护、赔偿并支持我们、我们的附属公司、我们的许可人、以及我们每一个和他们各自的管理人员、董事、其他用户、员工、律师和代理人，使其免受任何和所有索赔、成本、损害、损失、责任和开支（包括律师费和诉讼费）。这些费用可能由于以下原因产生或与此有关：(a)您违反或违背本条款或任何适用法律或法规中的任何一条规定（无论是否在此引用）；(b)您触犯任何第三方的权利，包括通过应用程序知悉您物流需求的相关承运人；或(c)您使用或误用应用程序或服务，或获取服务。</p>
      <p>&nbsp;</p>
      <h4>9. 免责声明</h4>
      <ul>
      <li><strong>a.我们基于 </strong><strong>&ldquo;现有状况&rdquo;向您提供应用程序。我们不保证该应用程序与您的移动设备相互兼容，亦不保证我们的应用程序（内容）和我们的网站没有错误、缺陷、恶意软件和病毒，或应用程序及我们的网站完全正确、最新且精确。</strong></li>
      </ul>
      <ul>
      <li><strong>b.我们不保证或承担任何与服务的可用性、承运人所提供物流服务的可用性、服务中所提供信息或数据的准确性、承运人所提供服务的质量、持续性和及时性相关的任何责任。</strong></li>
      </ul>
      <ul>
      <li><strong>c.任何宣传的接货或旅程时间仅为最佳估计，并且如果接货时间或旅程时间超过任何给定的估计或低于您的期望（无论什么出于原因），我们不承担任何责任，并且我们不应承担任何与承运人运抵物品时间或无法到达目的地相关的其他责任。</strong></li>
      </ul>
      <ul>
      <li><strong>d.应用程序登记的承运人车辆可能配备GPS</strong><strong>跟踪设备和/</strong><strong>或其他位置跟踪软件或技术。对这些车辆使用GPS</strong><strong>或其他位置跟踪技术进行追踪，仅用于促进和改善路线规划。您承认并同意位置跟踪功能可能存在误差，并且其所提供的信息可能不准确。您使用位置跟踪功能时完全由您自己承担风险，对于您使用和/</strong><strong>或依赖的此类位置跟踪信息所造成的损失，我们不承担任何责任。</strong></li>
      </ul>
      <ul>
      <li><strong>e.您应自行购买恰当的保险，对贵重的、罕见的、或任何其他物品进行投保。如果在运输期间，物品在承运人所提供车辆内丢失，我们将尽合理努力联络相关承运人，以找到此类物品。但在任何情况下，我们都不应负责或承担任何此类物品丢失造成的损失或损害。</strong></li>
      </ul>
      <ul>
      <li><strong>f.由于互联网及移动网服务的特殊性（如计算机病毒、黑客攻击、通信线路故障、网络维护等原因），我们的服务可能随时被变更、终止或中断。由此导致的任何损害，除非此等损害由我们故意或重大疏忽直接造成，我们概不负责。 </strong><strong>您应自行承担使用应用程序及其服务的风险。在适用法律允许的最大范围内，我们不负责承担任何由于（或关于）使用或无法使用快狗速运或其服务所造成的损害（包括任何直接、间接、偶然造成的损害或任何利润损失或对您移动设备造成的损害）。在不影响前述内容且在适用法律许可的范围内，我们的责任总额不应超过人民币500</strong><strong>元。</strong></li>
      </ul>
      <p>&nbsp;</p>
      <h4>10.&nbsp;<strong>条款和服务的修改</strong></h4>
      <p>我们可随时自行决定修改、修正或更换本条款中的任何部分，我们可以自行选择通过应用程序或通过在我们的网站www.kuaigou.co或您提供的其他联系方式发出告示向您发送关于变更、暂停或中断应用程序或其服务的通知（包括但不限于任何特性或内容的可用性），这些通知或告示一经发出即对您生效且具有约束力。如果不同意我们对相关条款的修改，您应该停止使用应用程序和服务。<strong>如果您继续使用应用程序和服务的，则视为您接受我们对相关条款的修改。我们有权单方在应用程序的特定特性和服务上施加限制，或限制您对部分或所有应用程序和服务的访问，而无需通知您或向您承担责任。</strong></p>
      <h4>&nbsp;</h4>
      <h4>11. 个人数据和隐私</h4>
      <p>我们依照我们的隐私政策和个人信息收集声明对您个人数据进行收集、使用、存储和移交。隐私政策最新版刊登于www.kuaigou.co网站上。<strong>我们可自行决定对我们的隐私政策进行修改和更新，并通过引用构成本条款的一部分。</strong></p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <h4>12. 其他</h4>
      <ul>
      <li>a.如果没有我们的事先书面同意，您不得向任何人员分派或转让任何您在这些条款下的权利或义务。</li>
      </ul>
      <ul>
      <li>b.我们可以通过在应用程序上发布一般通知，或通过向您电子邮件地址（记录在我们帐户信息中的）发送电子邮件，或通过向您登记于我们帐户信息中的地址邮寄书面快递的方式进行通知。</li>
      </ul>
      <ul>
      <li>c.如果依照任何相关适用法律，本条款中的任何规定作废、非法或不能执行，那么其余规定的有效性、合法性和可执行性不得以任何方式受到其影响，并应继续适用。</li>
      </ul>
      <ul>
      <li>d.如果您就使用应用程序及服务与我们签订了书面合同的，则该书面合同对您和我们具有法律约束力，如该书面合同中关于使用应用程序及服务的内容与本条款内容不一致的，以书面合同的内容为准。</li>
      </ul>
      <p>&nbsp;</p>
      <h4>13. 适用法律及管<strong>辖权</strong></h4>
      <p>本条款和条件应受中国法律管辖，并按中国法律解释。您和我们均同意就任何本条款引起的争议或事项通过诉讼方式解决，由高高信息科技（上海）有限公司住所地人民法院管辖。但如果您与我们签订了包含使用应用程序及服务内容的书面合同的，则任何本条款引起的争议或事项通过诉讼方式解决，由该书面合同中约定的管辖法院管辖。</p>
      <p>&nbsp;</p>
      <p>更新日期：2016年7月7日</p>
      <p>&nbsp;</p>
`,
      contentkr0: '',
      contentkr1: '',
      contentkr2: '',
      next: '下一页',
      previous: '上一页',
      proceed: '提交',
      title: '使用条款',
    }
  },
  images: {
    logo: 'general_3/kuaigou',
  },
  notification_centre: {
    drawerTitle: {
      notification: '通知',
    },
    message: {
      todayAt: (options) => `今天@${options.time}`,
    },
    messagesCentre: {
      loadMore: '加载更多通知',
      prefs: '通知偏好设定',
    },
    preferencesCentre: {
      byEmail: '把通知发送到我的邮箱',
      prefs: '个人设置',
    }
  },
  orders: {
    dialog: {
      badAttitude: '服务态度差',
      branch: '分店：',
      cancel: '取消订单',
      cbm: '立方米',
      confirmOrderComplete: '司机已经完成订单。请您确认订单已完成。',
      copy: '复制',
      copyThis: '复制此链接以分享',
      driver: '司机：',
      duration: '时长：',
      email: '电邮',
      emailBody: '感谢使用快狗速运。您可以通过点击以下链接查看订单状态：',
      emailSubject: '您在快狗速运的订单状态-订单编号#',
      enterEmailHere: '输入电子邮件',
      feeIssue: '价格问题',
      goodsInfo: '货物信息',
      help: '帮助',
      images: '图片',
      item: '货物',
      licensePlate: '车牌号码：',
      longLoadingTime: '上货时间太长',
      noGoodsInfo: '无货物信息',
      notApplicable: 'N/A',
      notOnTime: '司机未能按时到达',
      openLink: '在新页面打开链接',
      orderNumber: (options) => `订单 #${options.id}`,
      other: '其它',
      phoneNumber: '电话号码＃',
      pickupTime: '上货时间',
      priceBreakdown: '价格明细',
      quantity: '数量',
      rateAndConfirmCompletion: '确认订单完成及为司机评分',
      reachingOut: (options) => (options.count === 0 || !options.count) ? '与司机联系中' : (options.count === 1) ? '与1个司机联系中' : '与' + options.count + '个司机联系中',
      remarks: '备注',
      routeChanged: '路线不符',
      routes: '路线',
      send: '发送',
      previewSignature: '',
      parcelNumber: '',
      previewImage: '',
      noimages: '',
      nosignature: '',
      sendViaEmail: '发送电子邮件（用顿号分开多个电子邮件）',
      share: '分享',
      sizeOfGoods: '货物尺寸',
      sms: '短信',
      smsSent: '短信已发送',
      totalFee: '订单总价格',
      url: '超链接',
      vehicle: '车型',
      weight: '重量',
      whatWasTheProblem: '有什么问题吗',
      orderCompletionConfirmed: '订单已确认完成',
    },
    filter: {
      branch: '分店：',
      ordersFrom: '订单从：',
      pickupDate: '上货日期',
      queryPlaceholder: '司机或者客户姓名/电话号码等',
      search: '搜索',
      showAll: '显示全部',
      status: '订单状态',
      to: '到',
      vehicle: '车型选择',
      parcelStatus: '',
    },
    new: {
      actionBar: {
        anOrderMustHaveAtLeastOneWaypoint: '一个订单至少要有一个中途点',
        backToEdit: '返回编辑',
        bookingMustBeMadeInTheFuture: '叫车时间一定要在未来',
        calculateRoute: '计算路线',
        details: '订单详情',
        moreVehiclesThanWaypoints: '您请求的车辆比送货点多',
        routeOptimizationHelp: '如果您有多个送货点但又不知道如何安排优先顺序，勾选「路线优化」可为您提供最佳配送方案。',
        runRouteOptimization: '开启路线优化？',
        sameRouteStatement: (options) => `将由<span class="bold">${options.count}</span>辆车完成<span class="bold">${options.count}</span>条线路相同的运输`,
        seeDetails: '查看详情',
        shareTheSameRoute: '使用同一条路线',
        splitRoute: '拆分路线',
        splitRouteStatement: (options) => `将由<span class="bold">${options.count}</span>辆车完成<span class="bold">${options.count}</span>条线路的运输`,
        totalFee: '订单总价格',
        totalFeeStatement: '*不包含桥费、停车费及搬运费等费用',
      },
      basicInfo: {
        addInstructions: '添加备注',
        edit: '编辑',
        email: '电邮',
        goodsAndServiceSetting: '货物信息及服务设置',
        instructions: '备注',
        phone: '电话',
        pickupDate: '上货日期',
        pickupPoint: '发货点',
        pickupTime: '用车时间',
        sender: '发货人',
      },
      basicInfoSplitOptions: {
        mudou9: '9吨货车',
        mudou9Description: '',
        sedan: '',
        sedanDescription: '',
        damas: '',
        damasDescription: '',
        labo: '',
        laboDescription: '',
        lorry10: '',
        lorry10Description: '',
        lorry14: '',
        lorry14Description: '',
        lorry24: '',
        lorry24Description: '',
        motorcycle: '',
        motorcycleDescription: '',
        numberOfVehicle: '用车数量',
        sameRouteStatement: '所有车辆都走同一条路线',
        shareTheSameRoute: '使用同一条路线',
        mudou: '5.5吨货车',
        mudouDescription: '',
        splitRoute: '分配路线',
        splitRouteStatement: '自动优化并拆分路线',
        ton1: '',
        ton1_2_and_ton1_4: '',
        ton1_2_and_ton1_4Description: '',
        ton1Description: '',
        van: '',
        vanDescription: '',
        vehicleType: '车型',
        sbread: '小型面包车',
        mbread: '中型面包车',
        lbread: '大型面包车',
        struck: '小型货车',
        mtruck: '中型货车',
        ltruck: '大型货车',
        sltruck: '超大型货车',
        sbreadDescription: '载重: 0.6吨 体积(米): 1.7长/1.1宽/1.1高',
        mbreadDescription: '载重: 0.8吨 体积(米): 2.0长/1.3宽/1.4高',
        lbreadDescription: '载重: 1.2吨 体积(米): 2.6长/1.6宽/1.6高',
        struckDescription: '载重: 1.5吨 体积(米): 2.8长/1.6宽/1.6高',
        mtruckDescription: '载重: 3吨 体积(米): 4.2长/2.0宽/2.0高',
        ltruckDescription: '载重: 7吨 体积(米): 6.8长/2.3宽/2.3高',
        sltruckDescription: '载重: 15吨 体积(米): 9.6长/2.5宽/2.6高',
      },
      confirm: {
        cancel: '取消',
        cbm: '立方米',
        distance: '距离',
        editOrder: '编辑订单',
        extraServices: '额外服务',
        feeStatement: '此价格并未包括高速费、路桥费、停车费及其他费用，请于上车前与司机确认收费。',
        newOrder: '新订单',
        numberOfVehicle: '用车数量',
        pickupTime: '用车时间',
        placeOrder: '下单',
        quantity: '数量',
        routeSummary: '订单详情',
        sizeOfGoods: '货物尺寸',
        tapHereForFeeDetails: '按此了解更多详情',
        totalFee: '订单总价格',
        totalFeeOfThisRoute: '此路线的总价格',
        totalTravelTime: '总行车时间',
        typesOfGoods: '货物类型',
        vehicleType: '车型',
        weight: '重量',
      },
      destination: {
        addALocation: '添加多个目的地',
        clickToEdit: '点击编辑',
        pickupInformation: '发货点信息',
        saveSetting: '保存设置',
      },
      displayField: {
        meter: '米',
      },
      extra: {
        newOrder: '新订单',
        saveSetting: '保存设置',
      },
      goodsRequirements: {
        addImages: '添加照片',
        cbm: '立方米',
        cubicMetre: '立方米',
        defineItem: '货物类型',
        depthInM: '长（米）',
        extraServices: '额外服务',
        heightInM: '高（米）',
        hourlyRental: '包钟',
        hours: '小时',
        itemPcs: '货物 (件)',
        noHourlyRental: '无包钟服务',
        quantity: '数量',
        remark: '备注',
        sizeOfGoods: '货物尺寸',
        specialInstructions: '给司机的特别提醒或该配送的特殊备注',
        weight: '重量',
        weightInKg: '重量 (公斤)',
        widthInM: '宽（米）',
      },
      index: {
        newOrder: '新订单',
      },
      pickup: {
        newOrder: '新订单',
        pageHeader: '下单>编辑发货点',
      },
      reorder: {
        dragAndDrop: '拖放重新排列地址',
        editOrder: '编辑订单',
        reviewOrder: '检查订单',
        route: (options) => `路线 ${options.number}`,
        splitRoute: '拆分路线',
        splitRouteStatement: (options) => `你已经选择了<span class="bold">${options.count}台车辆</span> 并分配成 <span class="bold">${options.count}</span> 条路线.`,
        totalFee: '订单总价格',
        totalFeeOfThisRoute: '此路线的总价格',
        totalFeeStatement: '*不包含桥费、停车费及搬运费等费用',
      }
    },
    view: {
      sender: '用户信息',
      detail: '详情',
      driverInfo: '司机信息',
      eta: '预计到达时间',
      exportThisReport: '导出报表',
      extraDropoffPoints: (options) => `${options.count}送货点`,
      mapDetail: '地图|详细',
      mapView: '地图',
      next: '下一页',
      pageHeader: '订单管理',
      pickupTime: '用车时间',
      plusReceivers: (options) => `增加 ${options.count}个收件人`,
      previous: '上一页',
      priceColumn: '价格',
      receiverInfo: '收件人信息',
      receivers: (options) => `${options.count}收件人`,
      route: '路线',
      status: '订单状态',
      tableView: '查看列表',
      todayStatus: (options) => `今日订单汇总：${options.active} 单进行中 ; ${options.pending} 单匹配司机中; ${options.completed} 单已完成; ${options.cancelled} 单已取消`,
      totalAmount: '总金额',
      totalOrders: (options) => `总订单量：${options.count}`,
      totalParcels: '',
      vehicle: '车型选择',
      parcelView: '',
      parcelId: '',
      address: '',
      timestamp: '',
      statusReason: '',
      updateInfo: '',
      nosignatureorimages: '',
      parcelNumber: '',
      showingPage: (options) => `第${options.currentPage}页／共${options.totalPages}页`,
      orderNumber: '订单编号＃',
    },
    waypointStatus: {
      arrivedAt: (options) => `已到达 ${options.time}`,
      deliveredAt: (options) => `已配送成功 ${options.time}`,
      eta: (options) => `预计完成时间 ${options.eta}`,
      findingDriver: '匹配司机中',
      pending: '等待中',
    }
  },
  organizations: {
    addressEdit: {
      destination: '目的地*',
      detailAddress: '楼层／房号',
      editMyOrgAddress: '编辑我的公司地址',
      pageHeader: '公司资料>编辑资料>更改地址',
    },
    edit: {
      add: '添加',
      addABranch: '添加您的分店',
      branchAddress: '分店地址',
      branches: '分店',
      branchName: '分店名称',
      cannotRemoveBranchErr: '对不起，这个分店不能移除，因为它已存在用户。',
      companyWebsite: '公司官方网页',
      contactPerson: '联系人名称',
      contactPersonPhone: '联系人电话号码',
      corporateName: '公司名称',
      corporateProfileImage: '公司账户照片',
      detailAddress: '楼层/房号',
      editAddress: '编辑地址',
      editMyOrg: '编辑我的公司',
      email: '常用电子邮件',
      industry: '行业',
      mapAddress: '公司地址',
      pageHeader: '公司资料>编辑资料',
    },
    show: {
      branches: '分店',
      companyWebsite: '公司官方网页',
      contactPerson: '联系人名称',
      contactPersonPhone: '联系人电话#',
      detailAddress: '楼层／房号',
      editProfile: '修改账户',
      email: '常用电子邮件',
      industry: '行业',
      mapAddress: '公司地址',
      myOrg: '我的公司',
      pageHeader: '公司账户信息',
      salesRepresentative: '销售代表',
      unassigned: '未指派',
    }
  },
  popup: {
    merge: {
      dismissAll: '全部关闭',
      notifStatement: (options) => `你有 ${options.count} 个新通知`,
      seeAll: '显示全部',
    },
    message: {
      dismiss: '关闭',
      todayAt: (options) => `今天@${options.time}`,
    }
  },
  session: {
    dialog: {
      multiSessionTitle: '账号已被登出',
      multiSessionBody: '您的账号在其它地方登入，现在账号已被登出，请检查。',
    }
  },
  users: {
    login: {
      appStore: '',
      customerHotline: '客服热线',
      customerHotlineNumber: '4006-800-877',
      emailPlaceholder: '您的电子邮件',
      enterprise: '企业',
      fb: '',
      ggv: '快狗速运',
      gPlus: '',
      instagram: '',
      languageToggle: '',
      linkedin: 'https://www.linkedin.com/company/3787021?trk=tyah&trkInfo=tarId%3A1418799557253%2Ctas%3Agogovan%2Cidx%3A1-1-1',
      login: '登陆',
      openingHours: '09:00-21:00',
      passwordPlaceholder: '您的登录密码',
      phonePlaceholder: '您的电话号码',
      playStore: 'http://goo.gl/dkQvCj',
      rememberMe: '记住密码',
      sevenDaysAWeek: '每周7天',
      signIn: '注册',
      slogan: '为您的日常业务提供高级的物流解决方案',
      youtube: '',
    },
    profile: {
      accessLevel: '用户权限',
      accMgmt: '账户管理',
      address: '地址',
      branch: '分店',
      detailAddress: '楼层／房号',
      editCorporateProfile: '编辑公司账户资料',
      editMyProfile: '编辑个人资料',
      email: '电邮',
      myAcc: '我的帐户',
      notApplicable: 'N/A',
      pageHeader: '我的帐户',
      phoneNumber: '电话号码',
    },
    profileEdit: {
      accessLevel: '用户权限',
      branch: '分店#',
      branchUser: '分店用户',
      changePassword: '修改密码',
      confirmPassword: '确认密码',
      currentPassword: '当前密码',
      detailAddress: '楼层/房号',
      editMyAcc: '编辑我的账户',
      email: '电邮',
      master: '管理员',
      name: '姓名',
      newPassword: '新密码',
      pageHeader: '账户管理>编辑资料',
      passwordMismatch: '新密码和确认密码不一致',
      phone: '电话',
      streetAddress: '街道地址',
      subUser: '子用户',
    },
    resetPassword: {
      setPassword: '设置密码',
      pageHeader: '用户密码设置',
      passwordPlaceholder: '新密码',
      passwordConfirmationPlaceholder: '确认密码',
    }
  },
  utils: {
    time: {
      hours: '小时',
      minutes: '分钟',
      seconds: '秒',
    }
  },
  validations: {
    errors: {
      failedToComputeLatLon: (options) => `无法计算${options.field}的经/纬度`,
      invalidEmailFormat: '无效的电子邮件格式',
      invalidFields: '无效的字段',
      invalidNumberFormat: '无效的号码格式',
      invalidOrder: '无效的订单，请检查您所输入的资料',
      invalidPassword: '密码错误',
      invalidPhoneNumber: '无效的电话号码',
      invalidUsernameOrPassword: '用户名或密码错误',
      missingField: '字段缺失',
      passwordMismatch: '密码不一致',
    },
    fields: {
      address: '地址',
      contactName: '联系人姓名',
    },
    phoneRegexp: /^[0-9]{8,12}$/,
  }
}