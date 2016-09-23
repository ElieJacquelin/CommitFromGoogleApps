export default {
  accounts: {
    edit: {
      editUser: '編輯用戶',
      pageHeader: '帳戶管理 > 編輯用戶',
    },
    form: {
      accessLevel: '存取權限',
      branch: '部門',
      branchUser: '分部使用者',
      changePassword: '更改密碼',
      confirmPassword: '請確認密碼',
      currentPassword: '目前密碼',
      detailAddress: '樓層/室',
      email: '電郵地址',
      master: '管理員',
      name: '姓名',
      newPassword: '新密碼',
      pageHeader: '帳戶管理 > 用戶表格',
      phone: '電話',
      profileForm: '用戶資料表格',
      profileImage: '個人圖片',
      streetAddress: '路名',
      subUser: '用戶',
    },
    new: {
      createUser: '創建用戶',
      pageHeader: '賬戶管理>創建新用戶',
    },
    view: {
      accessLevel: '存取權限',
      addNewUser: '添加新用戶',
      branch: '部門',
      branchUser: '分部使用者',
      reactivate: '重新授權',
      reactivated: '已授權',
      deactivate: '撤銷帳戶權限',
      deactivated: '已撤銷',
      detailAddress: '樓層/房號',
      editProfile: '修改帳戶',
      email: '電郵地址',
      false: '否',
      master: '管理員',
      name: '姓名',
      pageHeader: '賬戶管理',
      phone: '電話',
      queryPlaceholder: '姓名、部門、電子信箱等',
      streetAddress: '路名',
      subUser: '用戶',
      true: '是',
      users: '用戶',
      showAll: '顯示全部',
      search: '搜尋:',
    }
  },
  helpers: {
    button: {
      chooseFromComputer: '從電腦中選取圖檔',
      cancel: '取消',
      saveAndExit: '儲存 & 離開',
      search: '搜尋',
    },
    accordion: {
      collapsePriceDetails: '隱藏',
      expandPriceDetails: '訂單金額明細',
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
        contactPhone: '聯繫人電話號碼',
        desiredDeliveryTime: '期望送達時間',
        detailAddress: '樓層/房號',
        downloadTemplate: '下載CSV樣板',
        email: '電郵地址',
        importRoutes: '使用CSV匯入路線',
        notApplicable: 'N/A',
        remark: '註解',
        remarkValue: (options) => `期望送達時間: ${options.desiredDeliveryTime}, 代收貨款: ${options.collectOnDelivery}, 備註: ${options.remark}`,
        viewAll: '查看全部',
        parcelIds: '',
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
        blogUrl: 'http://blog.gogovan.tw',
        business: '商務合作',
        careers: '工作機會',
        contactUs: '聯繫我們',
        faq: '常見問題',
        home: '主頁',
        legal: '條款及條件',
        placeOrder: '下單',
        pricing: '收費表',
        privacy: '隱私政策',
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
      travelTime: '運輸時間',
    },
    text: {
      addressNotFound: '無搜尋結果',
      required: '字段不能為空',
    },
    timepicker: {
      cancel: '取消',
      ok: '確認',
    }
  },
  addresses: {
    edit: {
      editAddress: '編輯地址',
      pageHeader: '常用聯絡人資訊>編輯聯絡人',
    },
    index: {
      addNewContact: ' 新增聯絡人',
      addresses: '地址',
      company: '公司名稱',
      delete: '刪除',
      detailAddress: '樓層/房號',
      edit: '編輯',
      email: '電郵地址',
      filterType: '過濾類型:',
      name: '姓名',
      pageHeader: '常用聯絡人資訊',
      phone: '電話號碼',
      placeNewOrder: '下單',
      queryPlaceholder: '姓名、電話號碼、電子信箱 等等 ',
      receiver: '收件者',
      search: '搜尋',
      sender: '送件者',
      streetAddress: '路名',
      type: '分類',
      region: '路線',
    },
    new: {
      createAddress: '新增地址',
      pageHeader: '常用聯絡人資訊 > 新增聯絡人',
      save: '儲存 & 繼續新增聯絡人',
      successMessage: '聯絡人已新增',
    }
  },
  constants: {
    addressBoxFields: {
      addressTypeReceiver: '收件者',
      addressTypeSender: '送件者',
      company: '公司名稱',
      destination: '目的地',
      detailAddress: '樓層/室',
      email: '電郵地址',
      instructions: '註解',
      phone: '電話號碼',
      receiver: '收件者',
      sender: '寄件人信息',
      region: '路線',
      parcelIds: '',
      parcelIdsPlaceholder: '',
      addressType: '地址類型',
    },
    goodsTypes: {
      constructionMaterials: '建築材料',
      documents: '文件',
      food: '食用品',
      fragile: '易碎品',
      groceries: '生活用品',
      others: '其他',
    },
    industries: {
      accounting: '會計及行政',
      agriculture: '農、林、漁、牧業',
      arts: '設計',
      construction: '營造業',
      culture: '文化、體育、娛樂業',
      education: '教育業',
      electricity: '電力、火力、燃料及水力供應業',
      environment: '環境保護及管理',
      financial: '金融服務業',
      healthcare: '醫療服務、社會工作業',
      hotels: '住宿及餐飲業',
      information: '資訊及軟體服務業',
      international: '國際組織',
      leasing: '租賃及商務服務業',
      legal: '律師',
      manufacturing: '製造業',
      mining: '採礦業',
      others: '其他',
      professional: '科技服務業',
      publicAdministration: '公共管理、社會安全及其他社會組織',
      realEstate: '房地產',
      residentServices: '居民服務相關',
      transport: '運輸、倉儲、郵政服務業',
      wholesale: '批發及零售業',
    },
    orderRequestStatuses: {
      active: '進行中',
      cancelled: '已取消',
      completed: '已完成',
      pending: '配對司機中',
    },
    extraRequirements: {
      assemble: '',
      borrowCarts: '租用手推車／板車',
      dumperOrConstruction: '',
      express: '',
      helpPay: '需代購/代付款',
      inputPlaceholder: '請輸入金額',
      loadCargo: '',
      longerThanSixFt: '貨物長度超過6呎',
      longerThanSixFtFull: '',
      longerThanSixFtHalf: '',
      manpower: '',
      mover: '上樓搬運',
      movers: '',
      needCarry: '',
      needCart: '租用手推車／板車',
      needCoveredLorry: '',
      needQueueing: '需排隊',
      needQueueingFalse: '不需要排隊',
      needQueueingTrue: '需要排隊: 排隊費毎30分鐘100元(不足時以30分鐘計)',
      needReceipt: '',
      needTailgate: '',
      newCar: '新車',
      pcs: (options) => `${options.count}部`,
      pets: '接載寵物',
      raining: '',
      receivePayment: '收件者付運費',
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
      motorcycle: '機車',
      motorcycleDescription: '載重物品體積限制30公分立方以下\n載重物品重量限制5公斤立方以下',
      mudou: '5.5噸貨車',
      mudouDescription: '',
      mudou9: '9噸貨車',
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
      van: 'Van',
      vanDescription: '',
      sbread: '',
      mbread: '',
      lbread: '',
      struck: '',
      mtruck: '',
      ltruck: '',
      sltruck: '',
      sbreadDescription: '',
      mbreadDescription: '',
      lbreadDescription: '',
      struckDescription: '',
      mtruckDescription: '',
      ltruckDescription: '',
      sltruckDescription: '',
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
      restricted: '限制進入此頁面',
    },
    page_not_found: {
      oops: 'Oops!',
      status: '404 Not Found',
      message: 'Sorry, an error has occured, requested page not found!',
      home: 'HOME',
    }
  },
  faq: {
    contactUs: '若您仍然有其他問題，請撥打客服專線 (02)2502-1000',
    header: '常見問題',
    questions: [
      {
        answer: ' GoGoVan是亞洲一家以app平台為基礎，並提供物流服務的公司。我們提供方便快速及便宜有效率的服務，並致力於顛覆您以往對物流的認知。',
        question: '關於GoGo企業',
      },
      {
        answer: 'GoGoVan企業版是專門為對物流需求高，需要大量下訂單的企業所量身訂做的平台。',
        question: '誰適合使用GoGoVan企業版?',
      },
      {
        answer: '可以的，如果您認為一台車輛無法滿足您的需求，現在您可以透過我們系統要求多台車輛。您只需到“車輛數目”的下拉式選單中選取您需要的車輛數目，然後您可以選擇 “使用相同路線” 或是由系統幫您做 “路線分配”。',
        question: '我可以一次指定多台車輛為我服務嗎?',
      },
      {
        answer: [
          "假設您設定了多個送貨點，但您不又知道怎麼安排這幾個送貨點的優先順序。別擔心！我們可以透過「路線優化」去提供方案。",
          "最快路線 - 透過此功能，我們將幫您找出最省時的路線，來重新安排您的路線 ",
          "最短路線 - 透過此功能，我們將幫您找出最短路徑，來重新安排您的路線"
        ],
        question: '請問什麼是路線優化的功能?',
      },
      {
        answer: '第一，您可以隨時透過問號圖像 “?” 來查詢每台車種的限制。當然，我們鼓勵您在“貨物及服務” 欄位中輸入貨品的型態、重量及體積，因此司機將會由這些資訊評估是否接單',
        question: '如何確定我的貨物有沒有超過最大重量或尺寸的限制?',
      },
      {
        answer: '當然，您可以匯入微軟的Excel或是.csv檔來下訂單。 請參考 [匯入路線說明] [下載csv樣板]',
        question: '我是否可以透過已經標示送貨點的excel檔案匯入, 來自動下訂單?',
      },
      {
        answer: '規劃中',
        question: '是否可以指定司機？',
      },
      {
        answer: '規劃中',
        question: '是否可以指定特定路線給特定司機？',
      },
      {
        answer: '有的，若您有特別說明需要讓司機看到，那麼您可以將說明寫在下單頁面填寫地址資訊的“特別說明事項”欄位中',
        question: '若我的訂單有特別注意事項，需要讓司機在接單前可以知道，是否有辦法?',
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
        answer: '規劃中',
        question: '若需要額外人手，會如何收費？',
      },
      {
        answer: '請您直接跟GoGoVan客服聯繫，我們將會指派新的司機給您。 客服專線：(02)2502-1000',
        question: '若司機無故消失並完全聯絡不上，該如何解決?',
      },
      {
        answer: '訂單完成後, 您將會收到電郵通知。此外，您也可以透過該頁面去追蹤您的訂單狀態。',
        question: '如何確認貨物已被送達？',
      }
    ]
  },
  header: {
    addressBook: '常用聯絡人資訊',
    dropdown: {
      aboutGGV: '關於GoGoVan',
      accountMgmt: '帳戶管理',
      contactUs: '聯絡我們',
      corporateProfile: '企業資料',
      help: '幫助',
      logout: '登出',
      tnc: '條款與細則',
      switchChineseEnglish: '',
    },
    orderMgmt: '訂單管理',
    placeOrder: '下單',
    tnc: {
      agree: '我明白及同意以上條款',
      content: `<p>
本使用者條款（定義如後）適用於您使用 GGV 平台（定義如後），以及透過使用 GGV 平台而取得的所有資料、建議及/或有關服務（定義如後）。
</p>

<p>
  GGV 平台由高高科技有限公司（下稱：高高科技）所提供。
</p>

<p>
  請仔細閱讀本使用者條款與隱私權政策，一旦您使用 GGV 平台或有關服務，即表示您承認並同意受本使用者條款和隱私權政策所拘束。高高科技將依據隱私權政策使用您的個人資料，詳情請參閱隱私權政策。若您不同意本使用者條款與隱私權政策，請勿安裝 GGV 平台以及有關服務，若已開始使用，請停止使用 GGV 平台以及有關服務。
</p>

<div class="line-separator"></div>

<p>
<strong>1. 定義和解釋</strong>
<br>(a) 除非另有定義或文義另有所指，以下的定義和解釋規則適用於本使用者條款：
  <font size="2">
<br>「廣告」指 GGV 平台（定義如下）使用時，可能會出現在您行動裝置上的任何推廣訊息和資料；
<br>「客戶」指通過使用 GGV 平台發出要求或以其他方式獲得參與供應商（定義如下）的運輸和物流服務的任何及所有人士；
<br>「參與供應商」指透過使用 GGV 平台提供或可能被要求提供其運輸和物流服務的司機或車輛運營者；
<br>「有關服務」指透過使用 GGV 平台，由高高科技提供予你的任何及所有服務，包括於第3(a)條中描述的服務；
<br>「 GGV 平台」指由高高科技提供，並由您下載及安裝至你的行動裝置的 GGV 平台行動應用程式，而您可由此得到有關服務；
<br>「本條款」指本使用者條款，我們可根據第10條隨時修改和補充本條款及條件。
<br>「廣告」指該程式使用時，可能會出現在 GGV 平台上的任何推銷訊息和資料；
<br>「GGV 平台」指由我們提供，並由您下載及安裝至您的電腦或行動裝置的網路平台，而您可由此得到有關服務；
<br>「台灣」指台灣、澎湖、金門及馬祖；
<br>「參與供應商」指透過使用 GGV 平台提供或可能被要求提供其運輸和物流服務的司機或車輛運營者；
<br>「隱私權政策」具有第 11 條之意義；
<br>「有關服務」指透過您使用 GGV 平台，由我們提供予您的任何及所有服務，包括於第 3 條中描述的服務；
<br>「本條款」指本條款及條件，我們可根據第 10 條不時修改和補充本條款及條件。
  </font>
<br>(b) 標題僅為方便閱讀，並不影響本條款的闡釋。單數字詞具有複數含義，男性字詞具有女性及中性含義，反之亦然。
<br>(c) 凡提述一個人、法團、信託、合夥公司、不屬法團的團體或其他實體，即包括當中任何一個。
</p>

<div class="line-separator"></div>

<p>
<strong>2. GGV 平台授權</strong>
<br>(a) 在您遵守本條款的前提下，我們授予您有限、非專屬、不可轉讓的許可於您的電腦或行動裝置使用 GGV 平台，並僅可使用該程式作您個人用途。
<br>(b) 除該不可轉讓、須按照本條款使用及接受有關服務的個人權利外，您不因使用 GGV 平台而取得任何關於高高科技之智慧財產權（包括但不限於著作權、商標、標識、圖案、相片、動畫、影片及文字，或在GGV 平台上的權利）或其他高高科技協力廠商或廣告商的智慧財產權。
<br>(c) 您不得就 GGV 平台為以下之行為：
  <font size="2">
<br>(i)   再授權、出售、轉售、轉移、轉讓、散布或以其他商業利用或以任何形式提供有關服務或 GGV 平台予任何第三方；
<br>(ii)  修改或創造有關服務或 GGV 平台的衍生作品；
<br>(iii) 建立網路連線「連接」至有關服務或「嵌入」或「仿製」 GGV 平台到任何其他的伺服器或無線或任何網路連線的設備上；
<br>(iv)  進行逆向工程或使用 GGV 平台而為以下行為：
    <br>(1) 設計或創造一個競爭產品或服務
    <br>(2) 設計或創造一個概念、特性、功能或圖案與有關服務或 GGV 平台相似的產品
    <br>(3) 複製有關服務或 GGV 平台的任何概念、特性、功能或圖案
<br>(v)   啟動一個自動程式或指令碼，包括但不限於網 路 蜘 蛛 （ web spiders）、網路爬蟲（web crawlers）、網路機器人（web robots）、網路螞蟻（web ants）、網頁索引器（web indexers）、機器人程式（bots）、病毒（viruses）或電腦蠕蟲（worms），或任何可以每秒發出多個伺服器請求或過度負擔或阻礙有關服務或 GGV 平台的運作及/或執行的程式。
  </font>
</p>

<div class="line-separator"></div>

<p>
<strong>3. 服務</strong>
<br>(1) 高高科技給予一個技術平台，並提供資料，讓您透過使用 GGV 平台獲取運輸和物流服務。透過使用 GGV 平台，您可以向參與供應商發出運輸和物流服務需求（需載明您的聯絡資訊及運送需求詳細資料）。參與供應商得決定接受或拒絕您發送之運輸與物流需求。如參與供應商接受要求，GGV 平台將通知您並提供有關參與供應商之資料，例如車輛牌照號碼、聯絡電話號碼及司機評分（如有）。
<br>(2) 您承認並同意，高高科技是您和參與供應商之間的媒介，而不是您或參與供應商的代理。高高科技並非運輸人，亦不提供運輸服務。高高科技對任何您透過 GGV 平台或其他途徑可能使用的參與供應商之行為、疏忽、操守、行動或不行動概不負責。任何運輸和物流服務供應的協議僅於您與參與供應商之間訂立，無論於任何情形，高高科技絕不會成為您與參與供應商之間所訂立或將訂立之任何協議的合約方。如您對於提供的運輸和物流服務有任何投訴，您須直接與有關參與供應商自行商討。 然而，於前開情形，高高科技願意協助溝通解決運輸和物流服務相關之爭議。
<br>(3) 您須確保高高科技提供予您用作使用 GGV 平台和有關服務的帳戶或密碼不被洩露予任何第三方。
<br>(4) 任何使用您行動裝置、帳戶和密碼登入 GGV 平台服務之人，視為您本人使用或已取得您的授權而使用。
</p>

<div class="line-separator"></div>

<p>
<strong>4.  GGV 平台及有關服務的使用</strong>
<br>您承諾並保證：：
<br>(a) 您所提供予高高科技，包括但不限於透過 GGV 平台所提供的所有資料及細節均為真實、準確、完整和最新；
<br>(b) 您不會將 GGV 平台或有關服務做以下使用：
  <font size="2">
<br>(1) 作任何非法用途；
<br>(2) 而該使用方式干擾、損害、削弱或使其效率降低；
<br>(3) 登入或企圖登入其他用戶的帳號，或滲透或企圖滲透任何保安措施；
<br>(4) 宣傳或推廣第三方或您的產品或服務；
  </font>
<br>(c) 於使用 GGV 平台或有關服務時遵守所有適用的法律；
<br>(d) 您不會使用 GGV 平台或有關服務造成滋擾、煩擾或不便；
<br>(e) 您不會做任何有損高高科技聲譽的事情；
<br>(f) 提供高高科技合理要求的身份證明；
<br>(g) 以尊重對待經 GGV 平台介紹予您的參與供應商，及不對他們的車輛造成損害或於使用他們的車輛或有關服務時進行任何非法、威脅、騷擾、辱罵的行為或活動；及
<br>(h) 若高高科技因您違反本條款而需面對任何其他人提出的任何申訴或訴訟，您須完全補償，並為高高科技抗辯。
<br>如果高高科技有合理理由相信您違反本條款或高高科技認為您濫用 GGV 平台或有關服務，高高科技得隨時暫停、限制或終止您使用 GGV 平台和有關服務而毋須事先通知您或承擔責任。然而，這並不限制高高科技依據本使用者條款或其他法律有權對您行使的權利。
</p>

<div class="line-separator"></div>

<p>
<strong>5. 費用及付款</strong>
<br>(a) 一般使用 GGV 平台為免費。參與供應商提供運輸和物流服務的收費詳情，請參閱列載於 <a href="http://gogovan.tw/" class="blue" target="_blank">http://gogovan.tw/</a>及/或 GGV 平台的最新收費表，高高科技將隨時更改和更新此等收費詳情，請隨時注意載於上開網址之收費表及報價，高高科技不再另行通知。
<br>(b) 經 GGV 平台介紹之參與供應商所提供之服務，您同意全額支付前開參與供應商，您可以選擇直接支付給參與供應商，也可以選擇透過 GGV 平台支付給高高科技。
</p>

<div class="line-separator"></div>

<p>
<strong>6. 推廣活動</strong>
<br>高高科技將不時於 GGV 平台提供推廣活動。高高科技保留修改、暫停、撤回或終止任何和所有此類推廣活動之權利，且毋須另行通知。
</p>

<div class="line-separator"></div>

<p>
<strong>7. 連結和廣告</strong>
<br> GGV 平台可能包含廣告和第三方網站的連結。高高科技不對第三方網站和廣告的內容、合法性及準確性負任何責任。高高科技提供第三方網站的連結，目的僅為方便您使用，然此不代表該等第三方網站的內容為高高科技所認可與負責。如果您連結至第三方網站或廣告，所有因此而生的風險，應由您自行負責，高高科技不會為您與任何廣告商或第三方網站經營者之間的任何交易承擔任何責任。
</p>

<div class="line-separator"></div>

<p>
<strong>8. 損害賠償約定</strong>
<br>接受本條款並使用 GGV 平台或有關服務，即表示您同意使高高科技、高高科技之關係企業以及以上各方的員工、董事、其他用戶、律師和代理人免於：
<br>(a) 因您違反本條款或任何適用之法規（無論是否於本文提及）所造成之申訴或賠償請求（包括但不限於和解費用、律師費用或訴訟費用）；
<br>(b) 因您侵害任何第三方（包括透過 GGV 平台安排的參與供應商）的任何權利而造成之申訴或賠償請求（包括但不限於和解費用、律師費用或訴訟費用），或
<br>(c) 不當使用 GGV 平台或有關服務而導致或蒙受的所有申訴、費用、損害、損失、責任、開支、賠償（包括但不限於律師費和訴訟費）。
</p>

<div class="line-separator"></div>

<p>
<strong>9. 免責聲明</strong>
<br>(a) GGV 平台係按原樣(as	is)提供予您，高高科技不保證：
  <font size="2">
<br>(1) GGV 平台與您的行動裝置相容；
<br>(2) GGV 平台和高高科技網站沒有錯誤、缺陷、惡意軟體和病毒；
<br>(3) GGV 平台和高高科技網站為正確、最新及準確的。
  </font>
<br>(b) 高高科技不保證可提供有關服務，亦不保證參與供應商會通過使用有關服務提供運輸和物流服務，或作為有關服務的一部分的資料或數據之準確性，或參與供應商所提供服務的質量、適用性和及時性，亦不接受與上述有關的任何責任。
<br>(c) 任何已報價的接載或車程所需時間只是最佳估計，如因任何原因接載或車程所需時間超出任何上述估計或您的預期，高高科技概不負擔任何責任。高高科技亦不會為有關參與供應商接載您及/或貨品到達或未能到達目的地的時間負上任何責任。然而，若有前開情形，高高科技願意協助處理運輸及物流服務所生爭議。
<br>(d) 參與供應商與 GGV 平台註冊的車輛可能安裝了全球定位系統（GPS）追蹤器及/或其他位置追蹤軟體或科技。該等車輛使用全球定位系或其他位置追蹤科技只為便利及改善路線規劃。您承認並接受位置追蹤功能非無錯誤及其提供的資料可能不準確，若您使用位置追蹤功能，您須自行承擔全部風險。高高科技將不會為有關您使用及/或依賴該等位置追蹤資料承擔任何負責。
<br>(e) 若您在車程中於參與供應商的車輛內遺失物品，我們將盡合理努力聯絡有關參與供應商以尋找該等物品。但無論如何，高高科技均不會對該等物品的遺失或損壞承擔任何責任。
<br>(f) 使用 GGV 平台和有關服務的風險自負。在適用法律允許的最大範圍內，我們將不會對於由 GGV 平台及有關服務的使用或不能使用所產生或與之有關的任何損失（包括任何相應、間接、偶然的損失或任何利潤的損失或對您的行動裝置造成的損害）負任何責任。 若因法規要求，高高科技須就前開事項負責，高高科技的總承擔責任上限為新台幣 2,000 元。
</p>

<div class="line-separator"></div>

<p>
<strong>10. 本條款和有關服務的修改</strong>
<br>高高科技有權隨時依據其需求，修改本條款之內容，或更改、暫停或終止 GGV 平台有關服務（包括但不限於任何功能或內容的可用性）。高高科技為前開修改、更改、暫停或終止時，將透過 GGV 平台向您發出通知，或在高高科技的網網站 <a href="http://www.gogovan.tw" class="blue" target="_blank">www.gogovan.tw</a> 張貼公告。此等通知或公告於通知或張貼時生效並對你具有約束力。高高科技亦有權對某些功能或服務施加限制而毋須另行通知。
</p>

<div class="line-separator"></div>

<p>
<strong>11. 個人資料和隱私</strong>
<br>(1) 為使用高高科技提供之服務與提升高高科技之服務品質，在您使用 GGV 平台或有關服務之期間，您同意提供特定的註冊資訊給高高科技，其中包括但不限於個人身分資訊、位置資訊與聯絡人資訊（以下簡稱：個人資料）。
<br>(2) 除上述資料外，您同意高高科技得透過軟體自動收集使用者使用軟體所產生的特定資訊（以下簡稱：技術資訊），並以記錄、保留上述技術資訊。
<br>(3) 您接受高高科技於 <a href="http://www.gogovan.tw" class="blue" target="_blank">www.gogovan.tw</a> 和/或以下所記載之隱私權政策，並同意：無論是否通知，您均同意高高科技得隨時變更或修改之隱私權政策。
<br>(4) 使用 GGV 平台或其他有關服務，即表示您在此明確同意高高科技依據上述隱私權政策，蒐集、處理與跨國傳輸您的個人資料與技術資訊。使用者並同意高高科技若將其公司或服務轉讓與第三人時，得將前揭個人資料與技術資料暨使用者之同意內容一併轉讓與該第三人。如果您出於任何理由反對此類用途，您可隨時通過書面方式請求閱覽、提供複本、補充、更正或刪除個人資料，並請求停止此類應用。前開請求應透過 <a href="mailto:info@gogovan.com" class="blue">info@gogovan.tw</a> 將請求發送給高高科技。
</p>

<div class="line-separator"></div>

<p>
<strong>12. 雜項</strong>
<br>(1) 未經高高科技事先書面同意，您不得轉讓或轉移您依據本條款所生之任何權利和義務予任何第三人。高高科技可轉讓或轉移高高科技依據本條款所生之任何權利和義務予任何第三人。
<br>(2) 高高科技可透過於 GGV 平台張貼一般通知，或發送電子郵件至您記錄在高高科技的帳戶資料內的電子郵件地址，或以平信發送信函至您記錄在高高科技的帳戶資料內的住址來對您發出通知。
<br>(3) 倘若本條款之任何條款在適用法律下於任何方面被定為無效、非法或不可執行的，本條款的其他條款之有效性、合法性及可執行性不應因上述情況而在任何方面受到影響或損害，並將維持有效。
</p>

<div class="line-separator"></div>

<p>
<strong>13. 準據法與管轄</strong>
<br>本條款之準據為臺灣法律，若因本條款而生任何爭執，雙方同意以臺灣臺北地方法院為第一審管轄法院。
</p>
<br>


`,
      contentkr0: '',
      contentkr1: '',
      contentkr2: '',
      next: '下一頁',
      previous: '上一頁',
      proceed: '提交',
      title: '條款及條件',
    }
  },
  images: {
    logo: 'general_3/logo',
  },
  notification_centre: {
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
  },
  orders: {
    dialog: {
      badAttitude: '態度差',
      branch: '部門：',
      cancel: '取消訂單',
      cbm: '立方米',
      confirmOrderComplete: '司機已完成訂單，請您幫忙評分即回饋',
      copy: '複製',
      copyThis: '複製此鏈結以分享',
      driver: '司機:',
      duration: '花費時間:',
      email: '電郵地址',
      emailBody: '首先感謝您使用GoGoVan服務. 司機 XXX (車牌號碼 #) 已經接受您的訂單. 您可以從底下連結查詢訂單狀態:',
      emailSubject: '您的GoGoVan訂單狀態 - 訂單編號 #',
      enterEmailHere: '請輸入電子郵件',
      feeIssue: '金額問題',
      goodsInfo: '貨物資訊',
      help: '幫助',
      images: '圖片',
      item: '貨物類型',
      licensePlate: '車牌號碼:',
      longLoadingTime: '載貨時間太長',
      noGoodsInfo: '無貨物資料',
      notApplicable: 'N/A',
      notOnTime: '司機遲到',
      openLink: '在新視窗開啟連結',
      orderNumber: (options) => `訂單 #${options.id}`,
      other: '其他',
      phoneNumber: '電話號碼#',
      pickupTime: '取貨時間',
      priceBreakdown: '詳細費用',
      quantity: '數量',
      rateAndConfirmCompletion: '司機已完成訂單，請您幫忙評分',
      reachingOut: (options) => (options.count === 0 || !options.count) ? '正在指派司機' : (options.count === 1) ? '已聯繫1名司機' : '已聯繫 ' + options.count + ' 司機',
      remarks: '備註',
      routeChanged: '路線被改變',
      routes: '路線',
      send: '傳送',
      previewSignature: '',
      parcelNumber: '',
      previewImage: '',
      noimages: '',
      nosignature: '',
      sendViaEmail: '透過電子郵件發送給 (以逗號分隔)',
      share: '分享',
      sizeOfGoods: '貨物尺寸',
      sms: '簡訊',
      smsSent: '簡訊已發送',
      totalFee: '總共費用',
      url: '網址',
      vehicle: '車種',
      weight: '重量',
      whatWasTheProblem: '您是否遇到什麼問題？',
      orderCompletionConfirmed: '訂單已確認完成',
    },
    filter: {
      branch: '部門',
      ordersFrom: '自：',
      pickupDate: '收件日期',
      queryPlaceholder: '司機或客戶姓名/電話號碼等',
      search: '搜尋',
      showAll: '顯示全部',
      status: '狀態',
      to: '到',
      vehicle: '車種',
      parcelStatus: '',
    },
    new: {
      actionBar: {
        anOrderMustHaveAtLeastOneWaypoint: '此路線不能只有一個地點',
        backToEdit: '返回編輯',
        bookingMustBeMadeInTheFuture: '叫車時間一定要在未來',
        calculateRoute: '計算路線',
        details: '詳細資料',
        moreVehiclesThanWaypoints: '您要求的車輛數目多於送貨路線',
        routeOptimizationHelp: '假設您設定了多個送貨點，但您不又知道怎麼安排這幾個送貨點的優先順序。別擔心！我們可以透過「路線優化」去提供方案',
        runRouteOptimization: '使用路線優化？',
        sameRouteStatement: (options) => `您已經選擇了 <span class="bold">${options.count}</span>輛車完成<span class="bold">${options.count}</span>條相同路線`,
        seeDetails: '查看詳細資料',
        shareTheSameRoute: '使用相同路線',
        splitRoute: '路線分配',
        splitRouteStatement: (options) => `將由<span class="bold">${options.count}</span>輛車完成<span class="bold">${options.count}</span>條路線的運輸`,
        totalFee: '總共費用',
        totalFeeStatement: '**不包含任何通行及停車所產生之費用',
      },
      basicInfo: {
        addInstructions: '增加特別事項說明',
        edit: '編輯',
        email: '電郵地址',
        goodsAndServiceSetting: '貨物及服務設定',
        instructions: '特別事項說明\n',
        phone: '電話',
        pickupDate: '取貨日期',
        pickupPoint: '取貨點',
        pickupTime: '取貨時間',
        sender: '寄件人',
      },
      basicInfoSplitOptions: {
        mudou9: '9噸貨車',
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
        motorcycle: '機車',
        motorcycleDescription: '載重物品體積限制30公分立方以下\n載重物品重量限制5公斤立方以下',
        numberOfVehicle: '車輛數目',
        sameRouteStatement: '所有車輛將行駛相同的路線\n',
        shareTheSameRoute: '使用相同路線',
        mudou: '5.5噸貨車',
        mudouDescription: '',
        splitRoute: '路線分配',
        splitRouteStatement: '使用路線優化來分配路線',
        ton1: '',
        ton1_2_and_ton1_4: '',
        ton1_2_and_ton1_4Description: '',
        ton1Description: '',
        van: '',
        vanDescription: '',
        vehicleType: '車輛種類',
        sbread: '',
        mbread: '',
        lbread: '',
        struck: '',
        mtruck: '',
        ltruck: '',
        sltruck: '',
        sbreadDescription: '',
        mbreadDescription: '',
        lbreadDescription: '',
        struckDescription: '',
        mtruckDescription: '',
        ltruckDescription: '',
        sltruckDescription: '',
      },
      confirm: {
        cancel: '取消',
        cbm: '立方米',
        distance: '距離',
        editOrder: '編輯訂單',
        extraServices: '額外服務',
        feeStatement: '以上費用未包含任何通行，停車及額外雜項所產生之費用。請於上載貨物前與駕駛確認費用總額。',
        newOrder: '新訂單',
        numberOfVehicle: '車輛數目',
        pickupTime: '取貨時間',
        placeOrder: '下單',
        quantity: '數量',
        routeSummary: '路線資料一覽',
        sizeOfGoods: '貨物尺寸',
        tapHereForFeeDetails: '請點擊此處瞭解更多詳情',
        totalFee: '總額',
        totalFeeOfThisRoute: '此路線總額',
        totalTravelTime: '總共運輸時間',
        typesOfGoods: '貨物類型',
        vehicleType: '車輛種類',
        weight: '重量',
      },
      destination: {
        addALocation: '增加地點',
        clickToEdit: '編輯',
        pickupInformation: '取貨資料',
        saveSetting: '儲存設定',
      },
      displayField: {
        meter: '米',
      },
      extra: {
        newOrder: '新訂單',
        saveSetting: '儲存設定',
      },
      goodsRequirements: {
        addImages: '增加圖片',
        cbm: '立方米',
        cubicMetre: '立方米',
        defineItem: '貨物類型',
        depthInM: '高 (公尺)',
        extraServices: '額外服務',
        heightInM: '長 (公尺)',
        hourlyRental: '包時',
        hours: '小時',
        itemPcs: '件數',
        noHourlyRental: '無包時服務',
        quantity: '數量',
        remark: '註解',
        sizeOfGoods: '貨物尺寸',
        specialInstructions: '要司機特別注意的事項',
        weight: '重量',
        weightInKg: '重量 (公斤)',
        widthInM: '寬 (公尺)',
      },
      index: {
        newOrder: '新訂單',
      },
      pickup: {
        newOrder: '新訂單',
        pageHeader: '下單 > 編輯取貨點',
      },
      reorder: {
        dragAndDrop: '拖放重新排列地址',
        editOrder: '編輯訂單',
        reviewOrder: '檢視訂單',
        route: (options) => `路線 ${options.number}`,
        splitRoute: '路線分配',
        splitRouteStatement: (options) => `您已經選擇了<span class="bold">${options.count}台車輛</span> 並分配成 <span class="bold">${options.count}</span> 條路線.`,
        totalFee: '費用總額',
        totalFeeOfThisRoute: '此路線總額',
        totalFeeStatement: '**不包含任何通行及停車所產生之費用',
      }
    },
    view: {
      sender: '寄件人資訊',
      detail: '詳情',
      driverInfo: '司機資料',
      eta: '預計到達時間',
      exportThisReport: '匯出報告',
      extraDropoffPoints: (options) => `${options.count}送貨點`,
      mapDetail: '地圖|詳細',
      mapView: '地圖',
      next: '下一頁',
      pageHeader: '訂單管理',
      pickupTime: '取貨時間',
      plusReceivers: (options) => `增加 ${options.count}個收件人`,
      previous: '上一頁',
      priceColumn: '費用',
      receiverInfo: '收件人資訊',
      receivers: (options) => `${options.count}收件人`,
      route: '路線',
      status: '狀態',
      tableView: '列表',
      todayStatus: (options) => `今日訂單：${options.active} 進行中 ; ${options.pending} 匹配司機中; ${options.completed} 已完成; ${options.cancelled} 已取消`,
      totalAmount: '總額',
      totalOrders: (options) => `總訂單數目：${options.count}`,
      totalParcels: '',
      vehicle: '車種',
      parcelView: '',
      parcelId: '',
      address: '',
      timestamp: '',
      statusReason: '',
      updateInfo: '',
      nosignatureorimages: '',
      parcelNumber: '',
      showingPage: (options) => `第${options.currentPage}頁／共${options.totalPages}頁`,
      orderNumber: '訂單編號#',
    },
    waypointStatus: {
      arrivedAt: (options) => `到達 ${options.time}`,
      deliveredAt: (options) => `已配送成功 ${options.time}`,
      eta: (options) => `預估到達 ${options.eta}`,
      findingDriver: '尋找司機',
      pending: '配對司機中',
    }
  },
  organizations: {
    addressEdit: {
      destination: '目的地',
      detailAddress: '樓/室',
      editMyOrgAddress: '編輯我的公司地址',
      pageHeader: '公司資料>編輯資料',
    },
    edit: {
      add: '新增',
      addABranch: '新增部門',
      branchAddress: '部門地址',
      branches: '部門',
      branchName: '部門名稱',
      cannotRemoveBranchErr: '抱歉，這個分店不能被移除',
      companyWebsite: '公司網站',
      contactPerson: '聯絡人',
      contactPersonPhone: '聯絡人電話',
      corporateName: '公司名稱',
      corporateProfileImage: '公司帳戶圖片',
      detailAddress: '樓/室',
      editAddress: '編輯地址',
      editMyOrg: '編輯我的公司',
      email: '公司電子郵件',
      industry: '產業',
      mapAddress: '地址 ',
      pageHeader: '公司資料>編輯資料',
    },
    show: {
      branches: '分店',
      companyWebsite: '公司網站',
      contactPerson: '聯絡人',
      contactPersonPhone: '聯絡人電話',
      detailAddress: '樓/室',
      editProfile: '修改帳戶',
      email: '公司電子郵件',
      industry: '產業',
      mapAddress: '地址 ',
      myOrg: '我的公司',
      pageHeader: '企業資料',
      salesRepresentative: '',
      unassigned: '',
    }
  },
  popup: {
    merge: {
      dismissAll: '全部關閉',
      notifStatement: (options) => `您有${options.count}條新通知`,
      seeAll: '顯示全部',
    },
    message: {
      dismiss: '關閉',
      todayAt: (options) => `今天@${options.time}`,
    }
  },
  session: {
    dialog: {
      multiSessionTitle: '賬號已被登出',
      multiSessionBody: '您的賬號在其它地方登入，現在賬號已被登出，請檢查。',
    }
  },
  users: {
    login: {
      appStore: 'https://itunes.apple.com/tw/app/gogovan/id708390467?mt=8&ign-mpt=uo%3D4',
      customerHotline: '客服熱線',
      customerHotlineNumber: '02-2502-1000',
      emailPlaceholder: '您的電子信箱',
      enterprise: '企業',
      fb: 'https://www.facebook.com/gogovan.tw/?fref=ts',
      ggv: 'GoGo',
      gPlus: 'https://plus.google.com/+GoogleTaiwan/posts',
      instagram: 'https://www.instagram.com/gogovan.tw/',
      languageToggle: '',
      linkedin: 'https://www.linkedin.com/company/3787021?trk=tyah&trkInfo=tarId%3A1418799557253%2Ctas%3Agogovan%2Cidx%3A1-1-1',
      login: '登入',
      openingHours: '09:00-18:00',
      passwordPlaceholder: '您的登入密碼',
      phonePlaceholder: '您的電話號碼',
      playStore: 'http://goo.gl/dkQvCj',
      rememberMe: '記住密碼',
      sevenDaysAWeek: '每週七天',
      signIn: '註冊',
      slogan: '提供進階物流解决方案來解決您的業務所需 ',
      youtube: 'https://www.youtube.com/channel/UCjwRT_nO758HyxqUUL3Gq7A',
    },
    profile: {
      accessLevel: '存取權限',
      accMgmt: '帳戶管理',
      address: '地址',
      branch: '部門',
      detailAddress: '樓層/室',
      editCorporateProfile: '編輯企業資料',
      editMyProfile: '編輯個人資料',
      email: '電郵地址',
      myAcc: '我的帳戶',
      notApplicable: 'N/A',
      pageHeader: '我的帳戶',
      phoneNumber: '電話號碼',
    },
    profileEdit: {
      accessLevel: '存取權限',
      branch: '部門#',
      branchUser: '分部使用者',
      changePassword: '更改密碼',
      confirmPassword: '確認密碼',
      currentPassword: '目前密碼',
      detailAddress: '樓層/室',
      editMyAcc: '編輯我的賬戶',
      email: '電郵地址',
      master: '管理員',
      name: '姓名',
      newPassword: '新密碼',
      pageHeader: '帳號管理 > 編輯帳戶',
      passwordMismatch: '新密碼和確認密碼不一致',
      phone: '電話',
      streetAddress: '地址',
      subUser: '用戶',
    },
    resetPassword: {
      setPassword: '設定密碼',
      pageHeader: '新使用者 > 設定密碼',
      passwordPlaceholder: '新密碼',
      passwordConfirmationPlaceholder: '請確認密碼',
    }
  },
  utils: {
    time: {
      hours: '小時',
      minutes: '分鐘',
      seconds: '秒',
    }
  },
  validations: {
    errors: {
      failedToComputeLatLon: (options) => `無法計算${options.field}的經緯度`,
      invalidEmailFormat: '無效的電子郵件格式',
      invalidFields: '無效的輸入',
      invalidNumberFormat: '無效的號碼格式',
      invalidOrder: '無效的訂單，請檢查您所輸入的資料',
      invalidPassword: '密碼錯誤',
      invalidPhoneNumber: '無效的電話號碼格式',
      invalidUsernameOrPassword: '帳號或密碼錯誤',
      missingField: '輸入錯誤',
      passwordMismatch: '密碼不一致',
    },
    fields: {
      address: '地址',
      contactName: '聯絡人姓名',
    },
    phoneRegexp: /^[0-9]{10}$/,
  }
}