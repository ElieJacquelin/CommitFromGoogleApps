export default {
  accounts: {
    edit: {
      editUser: '',
      pageHeader: '',
    },
    form: {
      accessLevel: '',
      branch: '',
      changePassword: '',
      confirmPassword: '',
      currentPassword: '',
      detailAddress: '',
      email: '',
      master: '',
      name: '',
      newPassword: '',
      pageHeader: '',
      phone: '',
      profileForm: '',
      profileImage: '',
      streetAddress: '',
      subUser: '',
    },
    new: {
      createUser: '',
      pageHeader: '',
    },
    view: {
      accessLevel: '',
      addNewUser: '',
      branch: '',
      reactivate: '重新授權',
      reactivated: '已授權',
      deactivate: '',
      deactivated: '',
      detailAddress: '',
      editProfile: '',
      email: '',
      false: '否',
      master: '管理員',
      name: '',
      pageHeader: '',
      phone: '',
      queryPlaceholder: '',
      streetAddress: '',
      subUser: '用戶',
      true: '是',
      users: '',
      showAll: '顯示全部',
      search: '搜尋:',
    }
  },
  helpers: {
    button: {
      chooseFromComputer: '從電腦中選取',
      cancel: '',
      saveAndExit: '',
      search: '',
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
        addALocation: '',
        address: '',
        collectOnDelivery: '代收貨款',
        company: '',
        contactName: '',
        contactPhone: '聯絡人電話號碼',
        desiredDeliveryTime: '期望送達時間',
        detailAddress: '',
        downloadTemplate: '',
        email: '',
        importRoutes: '',
        notApplicable: 'N/A',
        remark: '備註',
        remarkValue: (options) => `期望送達時間: ${options.desiredDeliveryTime}, 代收貨款: ${options.collectOnDelivery}, 備註: ${options.remark}`,
        viewAll: '',
        region: '路線',
      }
    },
    datepicker: {
      date: '日期',
      cancel: '取消',
      ok: '確認',
    },
    dialog: {
      cancel: '',
      submit: '',
    },
    footer: {
      linkList: {
        aboutUs: '',
        blog: '',
        blogUrl: 'http://blog.gogovan.com.hk',
        business: '',
        careers: '工作機會',
        contactUs: '',
        faq: '',
        home: '',
        legal: '',
        placeOrder: '',
        pricing: '',
        privacy: '',
        services: '',
      }
    },
    loading: {
      loading: '載入中...',
    },
    mapView: {
      driver: '',
      eta: '',
      license: '車牌號碼',
      notApplicable: 'N/A',
      phone: '',
    },
    text: {
      addressNotFound: '無搜尋結果',
      required: '',
    },
    timepicker: {
      cancel: '',
      ok: '',
    }
  },
  addresses: {
    edit: {
      editAddress: '',
      pageHeader: '',
    },
    index: {
      addNewContact: '',
      addresses: '',
      company: '',
      delete: '',
      detailAddress: '',
      edit: '',
      email: '',
      filterType: '過濾類型:',
      name: '',
      pageHeader: '',
      phone: '',
      placeNewOrder: '',
      queryPlaceholder: '',
      receiver: '收件人',
      search: '搜尋',
      sender: '寄件人',
      streetAddress: '',
      type: '',
      region: '路線',
    },
    new: {
      createAddress: '',
      pageHeader: '',
      save: '',
    }
  },
  constants: {
    addressBoxFields: {
      addressTypeReceiver: '',
      addressTypeSender: '',
      company: '',
      destination: '',
      detailAddress: '',
      email: '',
      instructions: '',
      phone: '',
      receiver: '收件者',
      sender: '',
      region: '路線',
      parcelId: '',
      addressType: '地址類型',
    },
    goodsTypes: {
      constructionMaterials: '',
      documents: '',
      food: '',
      fragile: '',
      groceries: '',
      others: '',
    },
    industries: {
      accounting: '',
      agriculture: '',
      arts: '',
      construction: '',
      culture: '',
      education: '',
      electricity: '',
      environment: '',
      financial: '',
      healthcare: '',
      hotels: '',
      information: '',
      international: '',
      leasing: '',
      legal: '',
      manufacturing: '',
      mining: '',
      others: '',
      professional: '',
      publicAdministration: '',
      realEstate: '',
      residentServices: '',
      transport: '',
      wholesale: '',
    },
    orderRequestStatuses: {
      active: '進行中',
      cancelled: '已取消',
      completed: '已完成',
      pending: '配對司機中',
    },
    services: {
      assemble: '',
      borrowCarts: '',
      dumperOrConstruction: '',
      express: '',
      helpPay: '',
      loadCargo: '',
      longerThanSixFt: '',
      longerThanSixFtFull: '',
      longerThanSixFtHalf: '',
      manpower: '',
      mover: '',
      needCarry: '',
      needCart: '租用手推車／板車',
      needCoveredLorry: '',
      needQueueing: '',
      needReceipt: '',
      needTailgate: '',
      newCar: '',
      pcs: (options) => `${options.count}部`,
      pets: '',
      raining: '',
      receivePayment: '',
      snowing: '',
      speakEnglish: '',
    },
    vehicles: {
      damas: '',
      labo: '',
      lorry10: '',
      lorry14: '',
      lorry24: '',
      motorcycle: '',
      mudou: '',
      mudou9: '',
      sedan: '',
      ton1: '',
      ton1_2_and_ton1_4: '',
      van: '',
      sbread: '',
      mbread: '',
      lbread: '',
      struck: '',
      mtruck: '',
      ltruck: '',
      sltruck: '',
      tricycle: '',
    }
  },
  errors: {
    auth: {
      restricted: '',
    }
  },
  faq: {
    contactUs: '',
    header: '',
    questions: [
      {
        answer: 'GoGo企業為最新專為企業用戶打造的叫車服務。它的全新功能將令您享受最方便叫車體驗。您將更有效叫車，輕鬆管理大量柯打，更為您送上最貼心的送貨服務及物流方案。\n\nGoGo企業為您送上最佳的叫車體驗，使您從此可以輕鬆處理多架客貨車之柯打，為您的企業行多一步，再也無懼繁複的送貨路線！當您需要運送大量貨物到不同地方的時候，系統會根據您的地點為您選取最快捷的路線。 從這個途徑叫車更可以為您節省成本和時間；車種、路線、中途站、所用隧道全部由您自訂，提供更個人化的服務。您現在更可以通過平台為司機提供詳盡的貨物資料如其照片和尺寸，讓我們為您作更好的準備。\n\nGoGo企業，不但為您減低運輸成本，令您減輕煩惱，更為您的企業行多一步！',
        question: '甚麼是GoGo企業? ',
      },
      {
        answer: 'GoGo企業是為對物流需求高及需要大量下單的企業度身訂做的平台。',
        question: '我適合使用GoGo企業嗎?',
      },
      {
        answer: '可以的，如果您認為一輛車輛無法滿足您的需求，您可以透過我們的系統要求多架車輛。您只需於“車輛數目”的選單中選取您需要的車輛數目，然後您再選擇“使用相同路線”或“路線分配”，由系統幫您選出最快路線。',
        question: '我可以一次過指定多輛車輛為我服務嗎?',
      },
      {
        answer: [
          "假設您設定了多個送貨點，但您不又知道怎樣安排這幾個送貨點的優先順序。「路線優化」會為你規劃最快捷方便的路線，省時方便。",
          "",
          ""
        ],
        question: '請問甚麼是路線優化的功能?',
      },
      {
        answer: '您可以隨時透過問號圖像 “?” 來查閱每款車輛種類的限制。當然我們也希望您在“貨物及服務” 欄位中輸入貨品的容量、重量及體積以供司機評估能否接收訂單及做作好準備。',
        question: '如何確定我的貨物有沒有超過重量或尺寸的限制?',
      },
      {
        answer: '當然，您可以匯入Excel或是CSV檔來下單。 請參考 [匯入路線說明] [下載CSV範本]',
        question: '我是否可以透過已經標示送貨點的excel檔案匯入來自動下訂單? ',
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
        answer: '若您有特別注意事項想讓司機知道，可以將備註寫在下單頁面的“特別事項說明”欄位中。',
        question: '若我的訂單有特別注意事項，是否有辦法讓司機在接收訂單前知道?',
      },
      {
        answer: '如果司機釋放了訂單，會自動再發送訂單予其他司機。您只需等待其他司機接單。',
        question: '如果司機釋放了我的訂單，我應該怎樣做?',
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
        answer: '請您直接致電GoGoVan客戶服務熱線3952 7111 跟我們聯絡，我們會為您分配新的車輛及司機。',
        question: '司機無故消失及完全聯絡不上，該如何解決?',
      },
      {
        answer: '所有已完成的訂單都會有電郵通知。另外，您亦可以透過頁面追蹤您的訂單。',
        question: '我如何確認配送已完成？',
      }
    ]
  },
  header: {
    addressBook: '',
    dropdown: {
      aboutGGV: '',
      accountMgmt: '',
      contactUs: '',
      corporateProfile: '',
      help: '',
      logout: '',
      tnc: '',
    },
    orderMgmt: '',
    placeOrder: '',
    tnc: {
      agree: '',
      content: `<p>
  	These terms and conditions apply to your use of the GoGoVan mobile application and other related online and offline platform (“<strong>GoGoVan</strong>”), as well as to all information, recommendations and/or Services (defined below) provided to you by means of your use of GoGoVan.
  	</p>
  	<p>
    	GoGoVan is powered and provided by GoGo Tech Limited, a Hong Kong limited liability company (“<strong>we</strong>”, “<strong>us</strong>”, “ <strong>our</strong>” or the “<strong>Company</strong>”).
  	</p>
  	<p>
    	Please review these terms and conditions carefully. By using GoGoVan or the Services, you acknowledge and agree that these terms and conditions and our privacy policy are binding on you. For more information on how we will use your personal data, please see our privacy policy. If you do not agree with these terms and conditions and our privacy policy, do not install the GoGoVan mobile application, delete it and do not use GoGoVan or the Services.
  	</p>
  	<div class="line-separator"></div>
  	<p>
    	<strong>1. </strong>
    	<strong>Definitions and Interpretation</strong>
  	</p>
  	<p>
    	(a) In these terms and conditions, the following definitions and rules of interpretation apply unless otherwise defined or the context requires otherwise:
  	</p>
  	<p>
    	“<strong>Advertisement</strong>” means any promotion messages and information that may appear on your mobile device during the operation of the App;
  	</p>
  	<p>
    	“<strong>Hong Kong</strong>” means Hong Kong Special Administrative Region of the People’s Republic of China;
  	</p>
  	<p>
    	“<strong>Participating Providers</strong>” means the drivers or vehicle operators whose transport and logistics services are offered and may be requested through the use of GoGoVan;
  	</p>
  	<p>
    	“<strong>Services</strong>” means any and all services provided by us to you by means of your use of GoGoVan, which include the services described in clause 3(a);
  	</p>
  	<p>
    	“<strong>App</strong>” means the “GoGoVan” mobile application supplied by us and downloaded and installed by you on your mobile device through which you may obtain the Services; and
  	</p>
  	<p>
    	“<strong>Terms</strong>” means these terms and conditions, which may be amended and supplemented by us from time to time in accordance with clause 10.
  	</p>
  	<p>
    	(b) Headings are for convenience only and do not affect interpretation. The singular includes the plural and the masculine shall include the feminine and neuter and vice versa.
  	</p>
  	<p>
    	(c) A reference to a person, corporation, trust, partnership, unincorporated body or other entity includes any of them.
  	</p>
  	<div class="line-separator"></div>
  	<p>
    	<strong>2. </strong>
    	<strong>License of App</strong>
  	</p>
  	<p>
    	(a) Subject to your compliance with these Terms, we grant you a limited non-exclusive, non-transferable licence to download and install one copy of the App on your mobile device and to run such copy of the App solely for your own personal use.
  	</p>
  	<p>
    	(b) Your use of GoGoVan grants you no rights in relation to our intellectual property rights (including, without limitation, copyright, trade marks, logos, graphics, photographs, animations, videos and text or rights in and to the App and applications) or the intellectual property of our retail or advertising partners, other than the non-transferable, personal right to use and receive the Services in accordance with these Terms.
  	</p>
  	<p>
    	(c) You must not
    	<br>(i) license, sublicense, sell, resell, transfer, assign, distribute or otherwise commercially exploit or make available to any third party the Services or the App in any way;
    	<br>(ii) modify or make derivative works based upon the Services or App;
    	<br>(iii) create Internet “links” to the Services or “frame” or “mirror” any App on any other server or wireless or Internet-based device;
    	<br>(iv) reverse engineer or access the App in order to
    	<br>(1) design or build a competitive product or service,
    	<br>(2) design or build a product using similar ideas, features, functions or graphics of the Services or App, or
    	<br>(3) copy any ideas, features, functions or graphics of the Services or App, or
    	<br>(v) launch an automated program or script, including, but not limited to, web spiders, web crawlers, web robots, web ants, web indexers, bots, viruses or worms, or any program which may make multiple server requests per second, or unduly burdens or hinders the operation and/or performance of the Services or App.
  	</p>
  	<div class="line-separator"></div>
  	<p>
    	<strong>3. </strong>
    	<strong>Services</strong>
  	</p>
  	<p>
    	(a) We offer a technology platform to provide information and a means for you to obtain transport and logistics services from Participating Providers through the use of GoGoVan. GoGoVan allows you to send a request for transport and logistics services (together with details of you and your journey) to Participating Providers and each relevant Participating Provider has the sole discretion to accept or reject each such request. If a Participating Provider accepts a request, GoGoVan will notify you and provide information about the Participating Provider such as the vehicle licence number, contact number and driver rating (if any).
  	</p>
  	<p>
    	(b) You acknowledge and agree that we only act as an intermediary between you and the Participating Providers and we are not your agent or the agent of the Participating Providers. We are not a transportation carrier and do not provide transportation services. We are not responsible for the behaviour, negligence, conduct, actions or inactions on the part of the Participating Providers that you may use (through GoGoVan or otherwise). Any contract for the provision of transport and logistics services is between you and the Participating Providers and not us. We shall never be a party to any agreement (to be) entered into between you and any Participating Providers. If you have any complaint in relation to the transport and logistics service provided then that dispute must be taken up with the Participating Provider directly.
  	</p>
  	<p>
    	(c) You must keep secure and confidential and not disclose to any third party any username or password that we may provide to you in relation to access to GoGoVan and the Services.
  	</p>
  	<p>
    	(d) We shall assume that any person using your mobile device, your username and password is you or a person authorized by you.
  	</p>
  	<div class="line-separator"></div>
  	<p>
    	<strong>4. </strong>
    	<strong>Your use of GoGoVan and the Services</strong>
  	</p>
  	<p>
    	You agree:
  	</p>
  	<p>
    	(a) and warrant that all information and details provided by you to us (including through the App) are true, accurate, complete and up-to-date in all respects and at all times;
  	</p>
  	<p>
    	(b) you will not use GoGoVan or the Services: for any unlawful purpose; in any way that interrupts, damages, impairs or renders GoGoVan or the Services less efficient; to access or attempt to access the accounts of other users or to penetrate or attempt to penetrate any security measures; to advertise or promote third party or your own products or services;
  	</p>
  	<p>
    	(c) to comply with all applicable laws while using GoGoVan or the Services;
  	</p>
  	<p>
    	(d) you will not use the GoGoVan or the Services to cause nuisance, annoyance or inconvenience;
  	</p>
  	<p>
    	(e) to refrain from doing anything which we reasonably believe to be disreputable or capable of damaging our reputation;
  	</p>
  	<p>
    	(f) to provide us with whatever proof of identity we may reasonably request;
  	</p>
  	<p>
    	(g) to treat Participating Providers introduced to you through GoGoVan with respect and not to cause damage to their vehicles or engage in any unlawful, threatening, harassing, abusive behaviour or activity whilst using their vehicles or the Services; and
  	</p>
  	<p>
    	(h) to compensate and defend us fully against any claims or legal proceedings brought against us by any other person as a result of your breach of these Terms.
  	</p>
  	<p>
    	We reserve the right to suspend, restrict or terminate your access to GoGoVan and the Services at any time without advance notice or liability if we have reasonable grounds to believe you have breached any of these Terms or in our opinion you misuse GoGoVan or the Services. This shall not limit our right to take any other action against you that we consider appropriate to defend our rights or those of any other person.
  	</p>
  	<div class="line-separator"></div>
  	<p>
    	<strong>5. </strong>
    	<strong>Charges and Payment</strong>
  	</p>
  	<p>
    	It is free to generally use the App. For details about the cost of the transport and logistics services provided by the Participating Providers, please refer to the latest pricing guidelines posted on <a class="blue" href="http://www.gogovan.com.hk">www.gogovan.com.hk</a> and/or the App, which may be amended and updated at our sole discretion from time to time without prior notice. You agree to make payment in full directly to any Participating Provider introduced to you through GoGoVan for any services provided by such Participating Provider to you.
  	</p>
  	<div class="line-separator"></div>
  	<p>
    	<strong>6. </strong>
    	<strong>Promotions</strong>
  	</p>
  	<p>
    	We may from time to time offer promotions on GoGoVan. We reserve the right to amend, suspend, withdraw or terminate, whether in whole or part, any and all such promotions without prior notice and at our absolute discretion.
  	</p>
  	<div class="line-separator"></div>
  	<p>
    	<strong>7. </strong>
    	<strong>Links and Advertisements</strong>
  	</p>
  	<p>
    	GoGoVan may contain Advertisements and links to third party websites. We shall not be responsible for the contents and accuracy of any Advertisement. Any links to third party websites are provided solely for your convenience and not in any way as an endorsement by us of the contents on such third party websites. If you access any linked third party website or Advertisement, you do so entirely at your own risk. We shall not be responsible for any transactions between you and any advertisers or third party website operators.
  	</p>
  	<div class="line-separator"></div>
  	<p>
    	<strong>8. </strong>
    	<strong>Indemnification</strong>
  	</p>
  	<p>
    	By accepting these Terms and using GoGoVan or the Services, you agree that you shall defend, indemnify and hold us, our affiliates, our licensors, and each of our and their respective officers, directors, other users, employees, attorneys and agents harmless from and against any and all claims, costs, damages, losses, liabilities and expenses (including attorneys' fees and costs) arising out of or in connection with:
    	<br>(a) your violation or breach of any term of these Terms or any applicable law or regulation, whether or not referenced herein;
    	<br>(b) your violation of any rights of any third party, including Participating Providers arranged via GoGoVan, or
    	<br>(c) your use or misuse of GoGoVan or the Services.
  	</p>
  	<div class="line-separator"></div>
  	<p>
    	<strong>9. </strong>
    	<strong>Disclaimers</strong>
  	</p>
  	<p>
    	(a) The App is provided to you on an “as is” basis. We do not guarantee that the App is compatible with your mobile device or that (the contents of) the App and our website are free of errors, defects, malware and viruses or that the App and our website are correct, up to date and accurate.
  	</p>
  	<p>
    	(b) We do not warrant and accept no liability in connection with the availability of the Services, the availability of transport and logistics services from the Participating Providers through the use of the Services, the accuracy of the information or data provided as part of the Services or the quality, suitability and timeliness of the services of the Participating Providers.
  	</p>
  	<p>
    	(c) Any quoted pick-up or journey times are best estimates only and we shall have no liability if a pick-up or journey time exceeds any estimate given or otherwise exceeds your expectations for whatever reason nor shall we have any other liability to you in connection with the time at which you and/or the goods to be transported by the Participating Providers reach or fail to reach the destination.
  	</p>
  	<p>
    	(d) Vehicles of Participating Providers registered with GoGoVan may be installed with GPS tracking device and/or other location tracking software or technology. Such vehicles are tracked using GPS or other location tracking technology to facilitate and improve route planning only. You acknowledge and accept that the location tracking feature is not error-free and the information provided by it may not be accurate. Your use of the location tracking feature is solely at your own risk and we accept no responsibility or liability in connection with any such use of and/or reliance on such location tracking information by you.
  	</p>
  	<p>
    	(e) It shall be your sole responsibility to ensure that valuable, unusual or any other items are covered by appropriate insurance. In case of lost items inside the vehicles of Participating Providers during the journey, we will use reasonable endeavours to liaise with the relevant Participating Provider to locate such items but in no event shall we be responsible or liable for the loss of, or damage to, any such items.
  	</p>
  	<p>
    	(f) The use of GoGoVan and the Services is at your sole risk. To the fullest extent permitted by applicable law, we shall not be liable for any damages resulting from or in connection with the use or inability to use GoGoVan or the Services (including any consequential, indirect, incidental damages or any loss of profit or damages to your mobile device). Without prejudice to the foregoing and insofar as permitted under applicable law, our aggregate liability shall in no event exceed an amount of HKD500.
  	</p>
  	<div class="line-separator"></div>
  	<p>
    	<strong>10. </strong>
    	<strong>Modification of Terms and the Services</strong>
  	</p>
  	<p>
    	We may, at our sole discretion, from time to time amend or otherwise modify or replace any of these Terms, or change, suspend or discontinue GoGoVan or the Services (including but not limited to the availability of any feature or content) by sending you notice through GoGoVan or by posting a notice on our website at <a class="blue" href="http://www.gogovan.com.hk">www.gogovan.com.hk</a>, which shall be effective and binding on you upon notice or posting. We may also impose limits on certain features and services or restrict your access to parts or all of the Services without notice or liability.
  	</p>
  	<div class="line-separator"></div>
  	<p>
    	<strong>11. </strong>
    	<strong>Personal data and privacy</strong>
  	</p>
  	<p>
    	The collection, use, storage and transfer of your personal data are generally subject to our privacy policy and personal information collection statement, the latest version of which is at <a class="blue" href="http://www.gogovan.com.hk">www.gogovan.com.hk</a>. Our privacy policy, as may be amended and updated from time to time at our sole discretion, is incorporated by reference into these Terms.
  	</p>
  	<div class="line-separator"></div>
  	<p>
    	<strong>12. </strong>
    	<strong>Miscellaneous</strong>
  	</p>
  	<p>
    	(a) You may not assign or transfer any of your rights or obligations under these Terms to any person without our prior written approval. We may assign and transfer any of our rights and obligations under these Terms to any person.
  	</p>
  	<p>
    	(b) We may give notice by means of a general notice on GoGoVan, or by electronic mail to your email address on record in our account information, or by written communication sent by regular mail to your address on record in our account information.
  	</p>
  	<p>
    	(c) If any provision under these Terms is rendered void, illegal or unenforceable in any respect under any applicable law, the validity, legality and enforceability of the remaining provisions shall not in any way be affected by it and shall continue to apply.
  	</p>
  	<p>
    	(d) The original text of these Terms is in English. In the event of any inconsistency between the English text and any foreign language translation, the English text shall prevail.
  	</p>
  	<div class="line-separator"></div>
  	<p>
    	<strong>13. </strong>
    	<strong>Governing law and jurisdiction</strong>
  	</p>
  	<p>
    	These Terms shall be governed by and construed in accordance with the laws of Hong Kong. Both you and us agree to submit to the exclusive jurisdiction of the courts of Hong Kong as regards any dispute or matter arising under these Terms.
  	</p>

`,
      proceed: '提交',
      title: '',
    }
  },
  images: {
    logo: '',
  },
  notification_centre: {
    drawerTitle: {
      notification: '',
    },
    message: {
      todayAt: (options) => `今天@${options.time}`,
    },
    messagesCentre: {
      loadMore: '載入更多通知',
      prefs: '',
    },
    preferencesCentre: {
      byEmail: '',
      prefs: '',
    }
  },
  orders: {
    dialog: {
      badAttitude: '',
      branch: '',
      cancel: '',
      cbm: '',
      confirmOrderComplete: '',
      copy: '',
      copyThis: '複製此鏈結以分享',
      driver: '',
      duration: '',
      email: '',
      emailBody: '',
      emailSubject: '',
      enterEmailHere: '',
      feeIssue: '',
      goodsInfo: '',
      help: '',
      images: '',
      item: '貨物類型',
      licensePlate: '',
      longLoadingTime: '',
      noGoodsInfo: '',
      notApplicable: 'N/A',
      notOnTime: '',
      openLink: '',
      orderNumber: (options) => `訂單 #${options.id}`,
      other: '其他',
      phoneNumber: '',
      pickupTime: '',
      priceBreakdown: '',
      quantity: '',
      rateAndConfirmCompletion: '',
      reachingOut: (options) => (options.count === 0 || !options.count) ? '正在指派司機' : (options.count === 1) ? '已聯繫1名司機' : '已聯繫 ' + options.count + ' 司機',
      remarks: '',
      routeChanged: '',
      routes: '',
      send: '',
      sendViaEmail: '透過電子郵件發送給 (以逗號分隔)',
      share: '',
      sizeOfGoods: '',
      sms: '',
      totalFee: '',
      url: '網址',
      vehicle: '',
      weight: '',
      whatWasTheProblem: '有甚麼問題嗎？',
      orderCompletionConfirmed: '柯打已確認完成',
    },
    filter: {
      branch: '',
      ordersFrom: '訂單從:',
      pickupDate: '上貨日期',
      queryPlaceholder: '',
      search: '',
      showAll: '顯示全部',
      status: '',
      to: '',
      vehicle: '',
    },
    new: {
      actionBar: {
        anOrderMustHaveAtLeastOneWaypoint: '此路線不能只有一個地點',
        backToEdit: '返回編輯',
        bookingMustBeMadeInTheFuture: '叫車時間一定要在未來',
        calculateRoute: '',
        details: '詳細資料',
        moreVehiclesThanWaypoints: '您要求的車輛數目多於送貨路線',
        routeOptimizationHelp: '',
        runRouteOptimization: '使用路線優化？',
        sameRouteStatement: (options) => `您已經選擇了 <span class="bold">${options.count}</span>輛車完成<span class="bold">${options.count}</span>條相同路線`,
        seeDetails: '查看詳細資料',
        shareTheSameRoute: '使用相同路線',
        splitRoute: '路線分配',
        splitRouteStatement: (options) => `您已經選擇了 <span class="bold">${options.count} 輛車 </span> 並分拆成 <span class="bold">${options.count}</span> 條路線.`,
        totalFee: '費用總額',
        totalFeeStatement: '*不包隧道，橋，停車場及其他工人雜費',
      },
      basicInfo: {
        addInstructions: '',
        edit: '',
        email: '',
        goodsAndServiceSetting: '',
        instructions: '',
        phone: '',
        pickupDate: '上貨日期',
        pickupPoint: '',
        pickupTime: '',
        sender: '',
      },
      basicInfoSplitOptions: {
        mudou9: '',
        mudou9Description: '最多可載5人 (不包括司機)；載重約3-3.5噸；貨櫃尺寸約為長19-21呎、高6呎、闊6呎。',
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
        numberOfVehicle: '',
        sameRouteStatement: '',
        shareTheSameRoute: '',
        mudou: '',
        mudouDescription: '最多可載5人 (不包括司機)；載重約1-1.5噸；貨櫃尺寸約為長17-19呎、高6呎、闊6呎。',
        splitRoute: '',
        splitRouteStatement: '',
        ton1: '',
        ton1_2_and_ton1_4: '',
        ton1_2_and_ton1_4Description: '',
        ton1Description: '',
        van: 'Van 仔',
        vanDescription: '最多可載5人 (不包括司機)；載重約700公斤；內籠尺寸約為長6呎、高4呎、闊4呎。',
        vehicleType: '',
        sbread: '',
        mbread: '',
        lbread: '',
        struck: '',
        mtruck: '',
        ltruck: '',
        sltruck: '',
        tricycle: '',
        sbreadDescription: '',
        mbreadDescription: '',
        lbreadDescription: '',
        struckDescription: '',
        mtruckDescription: '',
        ltruckDescription: '',
        sltruckDescription: '',
        tricycleDescription: '',
      },
      confirm: {
        cancel: '',
        cbm: '',
        distance: '',
        editOrder: '',
        extraServices: '',
        feeStatement: '',
        newOrder: '',
        numberOfVehicle: '',
        pickupTime: '',
        placeOrder: '',
        quantity: '',
        routeSummary: '',
        sizeOfGoods: '',
        tapHereForFeeDetails: '',
        totalFee: '',
        totalFeeOfThisRoute: '',
        totalTravelTime: '',
        typesOfGoods: '',
        vehicleType: '',
        weight: '',
      },
      destination: {
        addALocation: '',
        clickToEdit: '',
        pickupInformation: '',
        saveSetting: '',
      },
      displayField: {
        meter: '',
      },
      extra: {
        newOrder: '',
        saveSetting: '',
      },
      goodsServices: {
        addImages: '',
        cbm: '',
        cubicMetre: '',
        defineItem: '',
        depthInM: '高 (米)',
        extraServices: '',
        heightInM: '長 (米)',
        hourlyRental: '',
        hours: '',
        itemPcs: '',
        noHourlyRental: '',
        quantity: '',
        remark: '',
        sizeOfGoods: '',
        specialInstructions: '',
        weight: '',
        weightInKg: '',
        widthInM: '闊 (米)',
      },
      index: {
        newOrder: '',
      },
      pickup: {
        newOrder: '新訂單',
        pageHeader: '',
      },
      reorder: {
        dragAndDrop: '您可以拖曳路線上的點來規劃路線',
        editOrder: '編輯訂單',
        reviewOrder: '檢視訂單',
        route: (options) => `路線 ${options.number}`,
        splitRoute: '路線分配',
        splitRouteStatement: (options) => `您已經選擇了 <span class="bold">${options.count} 輛車</span> 並分拆成 <span class="bold">${options.count}</span> 條路線.`,
        totalFee: '費用總額',
        totalFeeOfThisRoute: '此路線總額',
        totalFeeStatement: '*不包隧道，橋，停車場及其他工人雜費',
      }
    },
    view: {
      sender: '寄件人',
      detail: '詳情',
      driverInfo: '',
      eta: '',
      exportThisReport: '',
      extraDropoffPoints: (options) => `${options.count}送貨點`,
      mapDetail: '地圖|詳細',
      mapView: '',
      next: '下一頁',
      pageHeader: '',
      pickupTime: '',
      plusReceivers: (options) => `增加 ${options.count}個收件人`,
      previous: '上一頁',
      priceColumn: '',
      receiverInfo: '',
      receivers: (options) => `${options.count}收件人`,
      route: '',
      status: '',
      tableView: '',
      todayStatus: (options) => `今日訂單：${options.active} 進行中 ; ${options.pending} 匹配司機中; ${options.completed} 已完成; ${options.cancelled} 已取消`,
      totalAmount: '',
      totalOrders: (options) => `總訂單數目：${options.count}`,
      vehicle: '',
      showingPage: (options) => `第${options.currentPage}頁／共${options.totalPages}頁`,
      orderNumber: '訂單編號#',
    },
    waypointStatus: {
      arrivedAt: (options) => `到達 ${options.time}`,
      deliveredAt: (options) => `已配送成功 ${options.time}`,
      eta: (options) => `預估到達 ${options.eta}`,
      findingDriver: '',
      pending: '',
    }
  },
  organizations: {
    addressEdit: {
      destination: '',
      detailAddress: '',
      editMyOrgAddress: '編輯我的公司地址',
      pageHeader: '公司資料>編輯資料>更改地址',
    },
    edit: {
      add: '新增',
      addABranch: '',
      branchAddress: '',
      branches: '',
      branchName: '',
      cannotRemoveBranchErr: '抱歉，這個分店不能被移除，因為有用戶正使用它',
      companyWebsite: '',
      contactPerson: '',
      contactPersonPhone: '',
      corporateName: '',
      corporateProfileImage: '',
      detailAddress: '',
      editAddress: '',
      editMyOrg: '編輯我的公司',
      email: '常用電子郵件',
      industry: '行業',
      mapAddress: '',
      pageHeader: '公司資料>編輯資料',
    },
    show: {
      branches: '',
      companyWebsite: '',
      contactPerson: '',
      contactPersonPhone: '',
      detailAddress: '',
      editProfile: '',
      email: '',
      industry: '',
      mapAddress: '',
      myOrg: '我的公司',
      pageHeader: '',
      salesRepresentative: '',
      unassigned: '',
    }
  },
  popup: {
    merge: {
      dismissAll: '全部關閉',
      notifStatement: (options) => `您有 ${options.count} 個新通知`,
      seeAll: '顯示全部',
    },
    message: {
      dismiss: '關閉',
      todayAt: (options) => `今天@${options.time}`,
    }
  },
  session: {
    dialog: {
      multiSessionTitle: '',
      multiSessionBody: '',
    }
  },
  users: {
    login: {
      appStore: 'https://itunes.apple.com/hk/app/gogovan/id708390467?mt=8&ign-mpt=uo%3D4',
      customerHotline: '',
      "customerHotlineNumber": 39527111,
      emailPlaceholder: '您的電子郵件',
      enterprise: '企業',
      fb: 'https://www.facebook.com/gogovanhk',
      ggv: '',
      gPlus: 'https://plus.google.com/+GogovanHk/posts',
      instagram: 'https://instagram.com/gogovan_hk',
      linkedin: 'https://www.linkedin.com/company/3787021?trk=tyah&trkInfo=tarId%3A1418799557253%2Ctas%3Agogovan%2Cidx%3A1-1-1',
      login: '',
      openingHours: '',
      passwordPlaceholder: '您的登入密碼',
      phonePlaceholder: '',
      playStore: 'http://goo.gl/dkQvCj',
      rememberMe: '',
      sevenDaysAWeek: '週一至週日',
      signIn: '',
      slogan: '提供進階物流解决方案來解決您的業務所需 ',
      youtube: 'http://www.youtube.com/user/MyGoGoVan',
    },
    profile: {
      accessLevel: '',
      accMgmt: '',
      address: '',
      branch: '',
      detailAddress: '',
      editCorporateProfile: '',
      editMyProfile: '',
      email: '',
      myAcc: '',
      notApplicable: 'N/A',
      pageHeader: '',
      phoneNumber: '',
    },
    profileEdit: {
      accessLevel: '',
      branch: '',
      changePassword: '',
      confirmPassword: '',
      currentPassword: '',
      detailAddress: '',
      editMyAcc: '',
      email: '',
      master: '管理員',
      name: '',
      newPassword: '',
      pageHeader: '賬戶管理>編輯賬戶',
      passwordMismatch: '新密碼和確認密碼不一致',
      phone: '',
      streetAddress: '',
      subUser: '用戶',
    },
    resetPassword: {
      setPassword: '設定密碼',
      pageHeader: '新用戶 > 設定密碼',
      passwordPlaceholder: '新密碼',
      passwordConfirmationPlaceholder: '請確認密碼',
    }
  },
  utils: {
    time: {
      hours: '',
      minutes: '',
      seconds: '',
    }
  },
  validations: {
    errors: {
      failedToComputeLatLon: (options) => `無法計算${options.field}的經緯度`,
      invalidEmailFormat: '',
      invalidFields: '無效的輸入',
      invalidNumberFormat: '無效的號碼格式',
      invalidOrder: '無效的訂單，請檢查您所輸入的資料',
      invalidPhoneNumber: '',
      invalidUsernameOrPassword: '用戶名稱或密碼錯誤',
      missingField: '輸入錯誤',
      passwordMismatch: '密碼不一致',
    },
    fields: {
      address: '',
      contactName: '',
    },
    phoneRegexp: /^[0-9]{8}$/,
  }
}