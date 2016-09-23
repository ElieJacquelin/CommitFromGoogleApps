export default {
  accounts: {
    edit: {
      editUser: 'Edit User',
      pageHeader: 'ACCOUNT MANANGEMENT > EDIT USER',
    },
    form: {
      accessLevel: 'ACCESS LEVEL',
      branch: 'BRANCH #',
      changePassword: 'CHANGE PASSWORD',
      confirmPassword: 'CONFIRM PASSWORD',
      currentPassword: 'CURRENT PASSWORD',
      detailAddress: 'FLOOR / ROOM',
      email: 'EMAIL',
      master: 'Master',
      name: 'NAME',
      newPassword: 'NEW PASSWORD',
      pageHeader: 'ACCOUNT MANAGEMENT > USER FORM',
      phone: 'PHONE',
      profileForm: 'Profile form',
      profileImage: 'PROFILE IMAGE',
      streetAddress: 'STREET ADDRESS',
      subUser: 'Sub User',
    },
    new: {
      createUser: 'Create User',
      pageHeader: 'ACCOUNT MANAGEMENT > CREATE NEW USER',
    },
    view: {
      accessLevel: 'ACCESS LEVEL',
      addNewUser: 'ADD NEW USER',
      branch: 'BRANCH',
      reactivate: 'REACTIVATE',
      reactivated: 'REACTIVATED',
      deactivate: 'DEACTIVATE',
      deactivated: 'DEACTIVATED',
      detailAddress: 'FLOOR / ROOM',
      editProfile: 'EDIT PROFILE',
      email: 'EMAIL',
      "false": false,
      master: 'Master',
      name: 'NAME',
      pageHeader: 'ACCOUNT MANAGEMENT',
      phone: 'PHONE',
      queryPlaceholder: 'Name, branch, email, etc.',
      streetAddress: 'STREET ADDRESS',
      subUser: 'Sub User',
      "true": true,
      users: 'Users',
      showAll: 'Show all',
      search: 'SEARCH:',
    }
  },
  helpers: {
    button: {
      chooseFromComputer: 'CHOOSE FROM COMPUTER',
      cancel: 'CANCEL',
      saveAndExit: 'SAVE & EXIT',
      search: 'SEARCH',
    },
    accordion: {
      collapsePriceDetails: 'COLLAPSE PRICE DETAILS',
      expandPriceDetails: 'EXPAND PRICE DETAILS',
    },
    addressBox: {
      autocompletePopover: {
        locationSuggestion: 'LOCATION SUGGESTION',
      },
      index: {
        addALocation: 'ADD A LOCATION',
        address: 'ADDRESS',
        collectOnDelivery: 'COLLECT ON DELIVERY',
        company: 'COMPANY NAME',
        contactName: 'CONTACT NAME',
        contactPhone: 'CONTACT PHONE NUMBER',
        desiredDeliveryTime: 'DESIRED DELIVERY TIME',
        detailAddress: 'FLOOR / ROOM',
        downloadTemplate: 'DOWNLOAD EXCEL TEMPLATE',
        email: 'EMAIL ADDRESS',
        importRoutes: 'IMPORT ROUTES FROM CSV',
        notApplicable: 'N/A',
        remark: 'REMARK',
        remarkValue: (options) => `Desired delivery time: ${options.desiredDeliveryTime}, Collect on delivery: ${options.collectOnDelivery}, Remark: ${options.remark}`,
        viewAll: 'VIEW ALL',
        region: 'REGION',
      }
    },
    datepicker: {
      date: 'Date',
      cancel: 'Cancel',
      ok: 'OK',
    },
    dialog: {
      cancel: 'CANCEL',
      submit: 'SUBMIT',
    },
    footer: {
      linkList: {
        aboutUs: 'ABOUT US',
        blog: 'BLOG',
        blogUrl: 'http://blog.gogovan.com.hk',
        business: 'BUSINESS',
        careers: 'CAREERS',
        contactUs: 'CONTACT US',
        faq: 'FAQ',
        home: 'HOME',
        legal: 'LEGAL',
        placeOrder: 'PLACE ORDER',
        pricing: 'PRICING',
        privacy: 'PRIVACY',
        services: 'SERVICES',
      }
    },
    loading: {
      loading: 'Loading...',
    },
    mapView: {
      driver: 'DRIVER',
      eta: 'ETA',
      license: 'LICENSE PLATE',
      notApplicable: 'N/A',
      phone: 'PHONE',
    },
    text: {
      addressNotFound: 'Address not found',
      required: 'Field can\'t be empty.',
    },
    timepicker: {
      cancel: 'Cancel',
      ok: 'OK',
    }
  },
  addresses: {
    edit: {
      editAddress: 'Edit Address',
      pageHeader: 'ADDRESS BOOK > EDIT CONTACT',
    },
    index: {
      addNewContact: 'ADD NEW CONTACT',
      addresses: 'Addresses',
      company: 'COMPANY',
      delete: 'DELETE',
      detailAddress: 'FLOOR / ROOM',
      edit: 'EDIT',
      email: 'EMAIL',
      filterType: 'FILTER TYPE:',
      name: 'NAME',
      pageHeader: 'ADDRESS BOOK',
      phone: 'PHONE #',
      placeNewOrder: 'PLACE NEW ORDER',
      queryPlaceholder: 'Contact Name, phone #, email, etc.',
      receiver: 'Receiver',
      search: 'SEARCH:',
      sender: 'Sender',
      streetAddress: 'STREET ADDRESS',
      type: 'TYPE',
      region: 'Region',
    },
    new: {
      createAddress: 'Create Address',
      pageHeader: 'ADDRESS BOOK > CREATE NEW CONTACT',
      save: 'SAVE & CREATE ANOTHER',
    }
  },
  constants: {
    addressBoxFields: {
      addressTypeReceiver: 'Receiver',
      addressTypeSender: 'Sender',
      company: 'COMPANY',
      destination: 'DESTINATION*',
      detailAddress: 'FLOOR / ROOM',
      email: 'EMAIL',
      instructions: 'INSTRUCTIONS',
      phone: 'PHONE',
      receiver: 'RECEIVER',
      sender: 'SENDER*',
      region: 'REGION*',
      parcelId: 'PARCEL ID',
      addressType: 'Address Type',
    },
    goodsTypes: {
      constructionMaterials: 'Construction Materials',
      documents: 'Documents',
      food: 'Food',
      fragile: 'Fragile',
      groceries: 'Groceries',
      others: 'Others',
    },
    industries: {
      accounting: 'Accounting and Administration',
      agriculture: 'Agriculture, Forestry, Animal Husbandry, Fishing Occupations',
      arts: 'Arts and Design',
      construction: 'Construction Industry',
      culture: 'Culture, Sports, Media and Entertainment',
      education: 'Education',
      electricity: 'Electricity, Heat, Fuel and Water Production and Supply Industry',
      environment: 'Environment and Public Facilities Management',
      financial: 'Financial and Insurance Industry',
      healthcare: 'Healthcare and Social Work',
      hotels: 'Hotels, Tourism and Catering Services',
      information: 'Information and Communications Services',
      international: 'International Organizations',
      leasing: 'Leasing and Business Services',
      legal: 'Legal Services',
      manufacturing: 'Manufacturing',
      mining: 'Mining and Quarrying Occupations',
      others: 'Others',
      professional: 'Professional, Scientific and Technical Services',
      publicAdministration: 'Public administration, Social Security and Social Organizations',
      realEstate: 'Real Estate',
      residentServices: 'Resident Services, Repairs and Other Services',
      transport: 'Transport, Storage, Postal and Courier Services',
      wholesale: 'Wholesale and Retail Trade',
    },
    orderRequestStatuses: {
      active: 'Active',
      cancelled: 'Cancelled',
      completed: 'Completed',
      pending: 'Pending',
    },
    services: {
      assemble: '',
      borrowCarts: 'Borrow Cart(s)',
      dumperOrConstruction: 'Dumper / Construction',
      express: '',
      helpPay: '',
      loadCargo: '',
      longerThanSixFt: 'Goods longer than 6ft',
      longerThanSixFtFull: 'Goods longer than 6 feet and height taller than 2 feet',
      longerThanSixFtHalf: 'Goods longer than 6 feet',
      manpower: '',
      mover: 'Mover',
      needCarry: '',
      needCart: 'Borrow Cart(s)',
      needCoveredLorry: '',
      needQueueing: '',
      needReceipt: '',
      needTailgate: '',
      newCar: 'New Car',
      pcs: (options) => options.count === 1 ? '1 PC' : options.count + ' PCs',
      pets: 'Pets',
      raining: '',
      receivePayment: '',
      snowing: '',
      speakEnglish: 'Speak English',
    },
    vehicles: {
      damas: '',
      labo: '',
      lorry10: '',
      lorry14: '',
      lorry24: '',
      motorcycle: '',
      mudou: '5.5 ton truck',
      mudou9: '9 ton truck',
      sedan: '',
      ton1: '',
      ton1_2_and_ton1_4: '',
      van: 'Van',
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
      restricted: 'Access to this page is restricted.',
    }
  },
  faq: {
    contactUs: 'Please email us or call GoGoVan at 3952 7111 to inquire about any questions you may have that are not mentioned above.',
    header: 'FAQs',
    questions: [
      {
        answer: 'GoGoEnterprise is a brand new service that is tailor made for corporate customers. You will have a new experience on making orders in few simple steps with its special features. A more efficient way of ordering vehicles, effortless management in all orders, and an economic solution for you.\n\nGoGoEnterprise allows you to request multiple vehicles in one go, without limiting the vehicle type and route options. We go one step further for you, a better service for your business. It enhances your car hailing experience and saves your costs by providing Route Optimization. You have the authority to plan the whole route with open options to multiple stops and tunnels being used. Now, you could even provide a more detailed stock information, such as quantity, size and images to drivers for a better preparation. \n\nGoGoEnterprise, the ultimate worry-free logistics solution, is making a big leap forward to your business.',
        question: 'What is GoGoEnterprise?',
      },
      {
        answer: 'GoGoEnterprise is tailor made for any business with high demand for logistics services.',
        question: 'Am I suitable for GoGoEnterprise?',
      },
      {
        answer: 'Yes, you can! If you think one vehicle may not be able to carry all your goods, you may request for more. Simply click the drop down menu and choose the number of vehicles you need under “NUMBER OF VEHICLE”. You may also select “share route” and “split route” to optimise the delivery route. ',
        question: 'Can I request more than one vehicle when I place an order? ',
      },
      {
        answer: [
          "You may have multiple drop-off locations yet don’t know how to prioritise them. Route optimisation suggests the best route automatically to minimize the delivery time. ",
          "",
          ""
        ],
        question: 'What does route optimisation mean? ',
      },
      {
        answer: 'If you are unsure of the ideal vehicle type for your delivery, look for the “?” icon and learn more.  You could even state your stock details (e.g. volume, weight and size) in “Goods and Service Setting” for drivers’ better preparation and evaluation.',
        question: 'I\'m not sure if my goods exceed the weight or dimension limits?',
      },
      {
        answer: 'You may import your routes from MS Excel or CSV. Please check the [instructions for importing routes] [download the excel template].',
        question: 'I have an excel sheet that contains all the delivery points, can I import it to the route?',
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
        answer: 'Yes, you may enter your special requests in the “Remarks” section.',
        question: 'Can I leave special requests to the driver in advance?',
      },
      {
        answer: 'You will have to wait for another driver to receive the order. When a driver releases an order, it will automatically be available for other drivers to receive the order. ',
        question: 'What should I do if the driver released the order? ',
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
        answer: 'Please call our customer service hotline at 3952 7111 and report this issue. We will assign a new vehicle and driver for you.',
        question: 'My driver is severely late, or has not appeared at all, without any prior notice. What should I do?',
      },
      {
        answer: 'You will receive an email for each completed order. Alternatively, on the page, you can track your order.',
        question: 'How can I confirm that the deliveries have been completed?',
      }
    ]
  },
  header: {
    addressBook: 'ADDRESS BOOK',
    dropdown: {
      aboutGGV: 'ABOUT GOGOVAN',
      accountMgmt: 'ACCOUNT MANAGEMENT',
      contactUs: 'CONTACT US',
      corporateProfile: 'CORPORATE PROFILE',
      help: 'HELP',
      logout: 'LOGOUT',
      tnc: 'TERMS AND CONDITIONS',
    },
    orderMgmt: 'ORDER MANAGEMENT',
    placeOrder: 'PLACE ORDER',
    tnc: {
      agree: 'I agree and accept the terms and conditions mentioned above',
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
      proceed: 'PROCEED',
      title: 'Terms ＆ Conditions',
    }
  },
  images: {
    logo: 'general_3/logo',
  },
  notification_centre: {
    drawerTitle: {
      notification: 'NOTIFICATION',
    },
    message: {
      todayAt: (options) => `TODAY @ ${options.time}`,
    },
    messagesCentre: {
      loadMore: 'LOAD MORE NOTIFICATIONS',
      prefs: 'NOTIFICATION PREFERENCES',
    },
    preferencesCentre: {
      byEmail: 'Receive Notification by email',
      prefs: 'PREFERENCES',
    }
  },
  orders: {
    dialog: {
      badAttitude: 'Bad attitude',
      branch: 'BRANCH:',
      cancel: 'CANCEL ORDER',
      cbm: 'CBM',
      confirmOrderComplete: 'Driver report that he has completed the order. Please confirm.',
      copy: 'COPY',
      copyThis: 'COPY THIS TO SHARE',
      driver: 'DRIVER:',
      duration: 'DURATION:',
      email: 'EMAIL',
      emailBody: (options) => `Thank you for using GoGoVan. You may check the order status by clicking the link below:%0D%0A${options.url}`,
      emailSubject: (options) => `Your order status from GoGoVan - Order #${options.id}`,
      enterEmailHere: 'Enter email address here',
      feeIssue: 'Fee issue',
      goodsInfo: 'Goods Info',
      help: 'HELP',
      images: 'IMAGES',
      item: 'ITEM',
      licensePlate: 'LICENSE PLATE:',
      longLoadingTime: 'Long loading time',
      noGoodsInfo: 'No goods information.',
      notApplicable: 'N/A',
      notOnTime: 'Driver was not on time',
      openLink: 'Open link in new window',
      orderNumber: (options) => `ORDER #${options.id}`,
      other: 'Other',
      phoneNumber: 'PHONE #:',
      pickupTime: 'PICK UP TIME:',
      priceBreakdown: 'PRICE BREAKDOWN:',
      quantity: 'QUANTITY',
      rateAndConfirmCompletion: 'RATE & CONFIRM COMPLETION',
      reachingOut: (options) => (options.count === 0 || !options.count) ? 'Reaching out to drivers' : (options.count === 1) ? 'Reaching out to 1 driver' : 'Reaching out to ' + options.count + ' drivers',
      remarks: 'REMARKs',
      routeChanged: 'Route was changed',
      routes: 'Routes',
      send: 'SEND',
      sendViaEmail: 'SEND VIA EMAIL (Separate multiple entries with commas)',
      share: 'SHARE',
      sizeOfGoods: 'SIZE OF GOODS',
      sms: 'SMS',
      totalFee: 'TOTAL FEE:',
      url: 'URL',
      vehicle: 'VEHICLE:',
      weight: 'WEIGHT',
      whatWasTheProblem: 'What was the problem?',
      orderCompletionConfirmed: 'Order completion confirmed',
    },
    filter: {
      branch: 'BRANCH:',
      ordersFrom: 'ORDERS FROM:',
      pickupDate: 'Pickup Date',
      queryPlaceholder: 'Driver or client\'s name / phone, etc',
      search: 'SEARCH:',
      showAll: 'Show all',
      status: 'STATUS:',
      to: 'To',
      vehicle: 'VEHICLE',
    },
    new: {
      actionBar: {
        anOrderMustHaveAtLeastOneWaypoint: 'You are not allowed to leave only one destination of this route.',
        backToEdit: 'BACK TO EDIT',
        bookingMustBeMadeInTheFuture: 'Booking must be made in the future.',
        calculateRoute: 'CALCULATE ROUTE',
        details: 'DETAILS',
        moreVehiclesThanWaypoints: 'You requested more vehicles than waypoints.',
        routeOptimizationHelp: 'You may have multiple drop-off locations and are unsure on how to prioritise them. This is when route optimisation can help you maximise your order',
        runRouteOptimization: 'Run route optimization?',
        sameRouteStatement: (options) => `You have ordered <span class="bold">${options.count} vehicle(s)</span> for the same route (amounted <span class="bold">${options.total}</span>) for each.`,
        seeDetails: 'SEE DETAILS',
        shareTheSameRoute: 'SHARE THE SAME ROUTE',
        splitRoute: 'SPLIT ROUTE',
        splitRouteStatement: (options) => `You have ordered <span class="bold">${options.count} vehicle(s)</span> and splitted to <span class="bold">${options.count}</span> route(s).`,
        totalFee: 'TOTAL FEE',
        totalFeeStatement: '*Toll, labour and parking fees are not included',
      },
      basicInfo: {
        addInstructions: 'ADD INSTRUCTIONS',
        edit: 'EDIT',
        email: 'EMAIL',
        goodsAndServiceSetting: 'GOODS & SERVICE SETTING',
        instructions: 'INSTRUCTIONS',
        phone: 'PHONE',
        pickupDate: 'PICK UP DATE',
        pickupPoint: 'PICK UP POINT',
        pickupTime: 'PICK UP TIME',
        sender: 'SENDER',
      },
      basicInfoSplitOptions: {
        mudou9: '9 TON TRUCK',
        mudou9Description: 'Carries max. 5 passengers; max. load 3-3.5 tons; available storage space dimensions: 19’-21’ length, 6’ height, 6’ width.',
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
        numberOfVehicle: 'NUMBER OF VEHICLE',
        sameRouteStatement: 'Every vehicle follows the same route and locations',
        shareTheSameRoute: 'SHARE THE SAME ROUTE',
        mudou: '5.5 TON TRUCK',
        mudouDescription: 'Carries max. 5 passengers; max. load 1-1.5 tons; available storage space dimensions: 17’-19’ length, 6’ height, 6’ width.',
        splitRoute: 'SPLIT ROUTE',
        splitRouteStatement: 'Automatically optimize and split routes',
        ton1: '',
        ton1_2_and_ton1_4: '',
        ton1_2_and_ton1_4Description: '',
        ton1Description: '',
        van: 'VAN',
        vanDescription: 'Carries max. 5 passengers; max. load 700kg ; available storage space dimensions: 6’ length, 4’ height, and 4’ width.',
        vehicleType: 'VEHICLE TYPE',
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
        cancel: 'CANCEL',
        cbm: 'CBM',
        distance: 'DISTANCE',
        editOrder: 'EDIT ORDER',
        extraServices: 'EXTRA SERVICES',
        feeStatement: 'The above fees do not include tunnel fees, bridge fees, parking fees and all other misc. fees. Please confirm with driver the total price on borading.',
        newOrder: 'New Order',
        numberOfVehicle: 'NUMBER OF VEHICLE',
        pickupTime: 'PICK UP TIME',
        placeOrder: 'PLACE ORDER',
        quantity: 'QUANTITY',
        routeSummary: 'ROUTE SUMMARY',
        sizeOfGoods: 'SIZE OF GOODS',
        tapHereForFeeDetails: 'Tap here for fee details',
        totalFee: 'TOTAL FEE',
        totalFeeOfThisRoute: 'TOTAL FEE OF THIS ROUTE',
        totalTravelTime: 'TOTAL TRAVEL TIME',
        typesOfGoods: 'TYPES OF GOODS',
        vehicleType: 'VEHICLE TYPE',
        weight: 'WEIGHT',
      },
      destination: {
        addALocation: 'Add a location',
        clickToEdit: 'CLICK TO EDIT',
        pickupInformation: 'PICK UP INFORMATION',
        saveSetting: 'SAVE SETTING',
      },
      displayField: {
        meter: 'm',
      },
      extra: {
        newOrder: 'New Order',
        saveSetting: 'SAVE SETTING',
      },
      goodsServices: {
        addImages: 'ADD IMAGES',
        cbm: 'CBM',
        cubicMetre: 'Cubic metre',
        defineItem: 'DEFINE ITEM',
        depthInM: 'Depth (m)',
        extraServices: 'EXTRA SERVICES',
        heightInM: 'Height (m)',
        hourlyRental: 'HOURLY RENTAL',
        hours: 'hrs',
        itemPcs: 'Item (pcs)',
        noHourlyRental: 'No Hourly Rental',
        quantity: 'QUANTITY',
        remark: 'REMARK',
        sizeOfGoods: 'SIZE OF GOODS',
        specialInstructions: 'e.g. Special instructions for drivers, delivery item ID, etc',
        weight: 'Weight',
        weightInKg: 'Weight (kg)',
        widthInM: 'Width (m)',
      },
      index: {
        newOrder: 'New Order',
      },
      pickup: {
        newOrder: 'New Order',
        pageHeader: 'PLACE ORDER > EDIT PICK UP POINT',
      },
      reorder: {
        dragAndDrop: 'DRAG and DROP to rearrange locations.',
        editOrder: 'EDIT ORDER',
        reviewOrder: 'REVIEW ORDER',
        route: (options) => `ROUTE ${options.number}`,
        splitRoute: 'SPLIT ROUTE',
        splitRouteStatement: (options) => `You have requested <span class="bold">${options.count} vehicles</span> and splitted into <span class="bold">${options.count}</span> routes.`,
        totalFee: 'TOTAL FEE',
        totalFeeOfThisRoute: 'TOTAL FEE OF THIS ROUTE',
        totalFeeStatement: '*Toll, labour and parking fees are not included',
      }
    },
    view: {
      sender: 'SENDER',
      detail: 'Detail',
      driverInfo: 'DRIVER INFO',
      eta: 'ETA',
      exportThisReport: 'EXPORT THIS REPORT',
      extraDropoffPoints: (options) => options.count === 1 ? '+1 Dropoff point' : '+' + options.count + ' Dropoff points',
      mapDetail: 'Map | Detail',
      mapView: 'Map View',
      next: 'NEXT',
      pageHeader: 'Order Management',
      pickupTime: 'PICK UP TIME',
      plusReceivers: (options) => options.count === 1 ? '+1 receiver' : '+' + options.count + ' receivers',
      previous: 'PREVIOUS',
      priceColumn: 'PRICE',
      receiverInfo: 'RECEIVER INFO',
      receivers: (options) => `${options.count} receivers`,
      route: 'ROUTE',
      status: 'STATUS',
      tableView: 'Table View',
      todayStatus: (options) => `hi ${options.org}! You have: ${options.active} active, ${options.pending} pending, ${options.completed} completed and ${options.cancelled} cancelled orders today`,
      totalAmount: 'TOTAL AMOUNT:',
      totalOrders: (options) => `TOTAL ORDERS: ${options.count}`,
      vehicle: 'VEHICLE',
      showingPage: (options) => `SHOWING PAGE ${options.currentPage} OF ${options.totalPages}`,
      orderNumber: 'ORDER #',
    },
    waypointStatus: {
      arrivedAt: (options) => `ARRIVED @ ${options.time}`,
      deliveredAt: (options) => `DELIVERED @ ${options.time}`,
      eta: (options) => `ETA ${options.eta}`,
      findingDriver: 'FINDING DRIVER',
      pending: 'PENDING',
    }
  },
  organizations: {
    addressEdit: {
      destination: 'DESTINATION*',
      detailAddress: 'FLOOR / ROOM',
      editMyOrgAddress: 'Edit My Organization Address',
      pageHeader: 'CORPORATE PROFILE > EDIT PROFILE > CHANGE ADDRESS',
    },
    edit: {
      add: 'Add',
      addABranch: 'ADD A BRANCH',
      branchAddress: 'Branch Address',
      branches: 'BRANCHES',
      branchName: 'Branch Name',
      cannotRemoveBranchErr: 'Sorry, this branch cannot be removed because it has existing users.',
      companyWebsite: 'COMPANY WEBSITE',
      contactPerson: 'CONTACT PERSON',
      contactPersonPhone: 'CONTACT PERSON PHONE #',
      corporateName: 'CORPORATE NAME',
      corporateProfileImage: 'CORPORATE PROFILE IMAGE',
      detailAddress: 'FLOOR # / ROOM',
      editAddress: 'EDIT ADDRESS',
      editMyOrg: 'Edit My Organization',
      email: 'GENERAL EMAIL ADDRESS',
      industry: 'INDUSTRY',
      mapAddress: 'MAP ADDRESS',
      pageHeader: 'CORPORATE PROFILE > EDIT PROFILE',
    },
    show: {
      branches: 'BRANCHES',
      companyWebsite: 'COMPANY WEBSITE',
      contactPerson: 'CONTACT PERSON',
      contactPersonPhone: 'CONTACT PERSON PHONE #',
      detailAddress: 'DETAIL ADDRESS',
      editProfile: 'EDIT PROFILE',
      email: 'GENERAL EMAIL ADDRESS',
      industry: 'INDUSTRY',
      mapAddress: 'MAP ADDRESS',
      myOrg: 'My Organization',
      pageHeader: 'CORPORATE PROFILE',
      salesRepresentative: '',
      unassigned: '',
    }
  },
  popup: {
    merge: {
      dismissAll: 'DISMISS ALL',
      notifStatement: (options) => `There are ${options.count} more new notifications`,
      seeAll: 'SEE ALL',
    },
    message: {
      dismiss: 'DISMISS',
      todayAt: (options) => `TODAY @ ${options.time}`,
    }
  },
  session: {
    dialog: {
      multiSessionTitle: 'Multiple Sessions Detected',
      multiSessionBody: 'You are being logged out',
    }
  },
  users: {
    login: {
      appStore: 'https://itunes.apple.com/hk/app/gogovan/id708390467?mt=8&ign-mpt=uo%3D4',
      customerHotline: 'CUSTOMER HOTLINE',
      "customerHotlineNumber": 39527111,
      emailPlaceholder: 'Your email',
      enterprise: 'Enterprise',
      fb: 'https://www.facebook.com/gogovanhk',
      ggv: 'GoGoVan',
      gPlus: 'https://plus.google.com/+GogovanHk/posts',
      instagram: 'https://instagram.com/gogovan_hk',
      linkedin: 'https://www.linkedin.com/company/3787021?trk=tyah&trkInfo=tarId%3A1418799557253%2Ctas%3Agogovan%2Cidx%3A1-1-1',
      login: 'LOGIN',
      openingHours: '07:00-24:00',
      passwordPlaceholder: 'Your password',
      phonePlaceholder: 'Your phone number',
      playStore: 'http://goo.gl/dkQvCj',
      rememberMe: 'Remember me',
      sevenDaysAWeek: '7 DAYS A WEEK',
      signIn: 'Sign in',
      slogan: 'Premium logistics solution for your everyday business needs',
      youtube: 'http://www.youtube.com/user/MyGoGoVan',
    },
    profile: {
      accessLevel: 'ACCESS LEVEL',
      accMgmt: 'ACCOUNT MANAGEMENT',
      address: 'ADDRESS',
      branch: 'BRANCH',
      detailAddress: 'FLOOR # / ROOM',
      editCorporateProfile: 'EDIT CORPORATE PROFILE',
      editMyProfile: 'EDIT MY PROFILE',
      email: 'EMAIL',
      myAcc: 'My Account',
      notApplicable: 'N/A',
      pageHeader: 'MY ACCOUNT',
      phoneNumber: 'PHONE #',
    },
    profileEdit: {
      accessLevel: 'ACCESS LEVEL',
      branch: 'BRANCH #',
      changePassword: 'CHANGE PASSWORD',
      confirmPassword: 'CONFIRM PASSWORD',
      currentPassword: 'CURRENT PASSWORD',
      detailAddress: 'FLOOR / ROOM',
      editMyAcc: 'Edit My Account',
      email: 'EMAIL',
      master: 'Master',
      name: 'NAME',
      newPassword: 'NEW PASSWORD',
      pageHeader: 'ACCOUNT MANAGEMENT > EDIT PROFILE',
      passwordMismatch: 'Your new password and password confirmation must match.',
      phone: 'PHONE',
      streetAddress: 'STREET ADDRESS',
      subUser: 'Sub User',
    },
    resetPassword: {
      setPassword: 'SET PASSWORD',
      pageHeader: 'NEW USER > SET PASSWORD',
      passwordPlaceholder: 'NEW PASSWORD',
      passwordConfirmationPlaceholder: 'CONFIRM PASSWORD',
    }
  },
  utils: {
    time: {
      hours: 'hr',
      minutes: 'min',
      seconds: 's',
    }
  },
  validations: {
    errors: {
      failedToComputeLatLon: (options) => `Failed to compute the latitude/longitude of ${options.field}.`,
      invalidEmailFormat: 'Invalid email format.',
      invalidFields: 'Invalid fields.',
      invalidNumberFormat: 'Invalid number format.',
      invalidOrder: 'Invalid order. Please check your data.',
      invalidPhoneNumber: 'Invalid phone number.',
      invalidUsernameOrPassword: 'Username or password is invalid.',
      missingField: 'Missing field',
      passwordMismatch: 'Password mismatch.',
    },
    fields: {
      address: 'Address',
      contactName: 'Contact name',
    },
    phoneRegexp: /^[0-9]{8}$/,
  }
}