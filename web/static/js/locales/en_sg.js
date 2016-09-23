export default {
  accounts: {
    edit: {
      editUser: 'Edit User',
      pageHeader: 'ACCOUNT MANANGEMENT > EDIT USER',
    },
    form: {
      accessLevel: 'ACCESS LEVEL',
      branch: 'BRANCH NO.',
      branchUser: 'Branch User',
      changePassword: 'CHANGE PASSWORD',
      confirmPassword: 'CONFIRM PASSWORD',
      currentPassword: 'CURRENT PASSWORD',
      detailAddress: '#Floor - Unit',
      email: 'EMAIL',
      master: 'MASTER',
      name: 'NAME',
      newPassword: 'NEW PASSWORD',
      pageHeader: 'USER FORM',
      phone: 'CONTACT NUMBER',
      profileForm: 'PROFILE DETAILS',
      profileImage: 'IMAGE',
      streetAddress: 'ADDRESS',
      subUser: 'SUB-USER',
    },
    new: {
      createUser: 'ADD NEW USER ACCOUNT',
      pageHeader: 'ADD NEW USER ACCOUNT',
    },
    view: {
      accessLevel: 'ACCESS LEVEL',
      addNewUser: 'ADD NEW USER',
      branch: 'BRANCH',
      branchUser: 'Branch User',
      reactivate: 'REACTIVATE',
      reactivated: 'REACTIVATED',
      deactivate: 'DEACTIVATE USER',
      deactivated: 'USER DEACTIVATED',
      detailAddress: '#Floor - Unit',
      editProfile: 'EDIT PROFITLE DETAILS',
      email: 'EMAIL',
      false: 'Cancel',
      master: 'MASTER',
      name: 'NAME',
      pageHeader: 'ACCOUNT MANAGEMENT',
      phone: 'CONTACT NUMBER',
      queryPlaceholder: 'Name, branch, email, etc.',
      streetAddress: 'ADDRESS',
      subUser: 'SUB-USER',
      true: 'Submit',
      users: 'USERS',
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
        addALocation: 'Add additional Drop-off point\t',
        address: 'DROP-OFF POINT',
        collectOnDelivery: 'COLLECT ON DELIVERY',
        company: 'COMPANY NAME',
        contactName: 'CONTACT NAME',
        contactPhone: 'CONTACT NUMBER',
        desiredDeliveryTime: 'DESIRED DELIVERY TIME',
        detailAddress: '#Floor - Unit',
        downloadTemplate: 'DOWNLOAD EXCEL TEMPLATE',
        email: 'EMAIL ADDRESS',
        importRoutes: 'IMPORT ROUTES FROM CSV',
        notApplicable: 'N/A',
        remark: 'REMARKS',
        remarkValue: (options) => `Desired delivery time: ${options.desiredDeliveryTime}, Collect on delivery: ${options.collectOnDelivery}, Remark: ${options.remark}`,
        viewAll: 'VIEW ALL',
        parcelIds: 'PARCEL IDs',
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
        blogUrl: 'http://blog.gogovan.sg',
        business: 'BUSINESS',
        careers: 'CAREERS',
        contactUs: 'CONTACT US',
        faq: 'FAQs',
        home: 'HOME',
        legal: 'LEGAL',
        placeOrder: 'PLACE ORDER',
        pricing: 'PRICING',
        privacy: 'PRIVACY POLICY',
        services: 'SERVICES',
      }
    },
    loading: {
      loading: 'Loading...',
    },
    mapView: {
      driver: 'DRIVER',
      eta: 'ETA',
      license: 'LICENSE',
      notApplicable: 'N/A',
      phone: 'CONTACT NUMBER',
      travelTime: 'TRAVEL TIME',
    },
    text: {
      addressNotFound: 'Address not found',
      required: 'Required Field',
    },
    timepicker: {
      cancel: 'Cancel',
      ok: 'OK',
    }
  },
  addresses: {
    edit: {
      editAddress: 'EDIT ADDRESS',
      pageHeader: 'EDIT RECIPIENT',
    },
    index: {
      addNewContact: 'ADD NEW RECIPIENT',
      addresses: 'ADDRESSES',
      company: 'COMPANY NAME',
      delete: 'DELETE',
      detailAddress: '#Floor - Unit',
      edit: 'EDIT',
      email: 'EMAIL',
      filterType: 'Address Type',
      name: 'NAME',
      pageHeader: 'ADDRESS BOOK',
      phone: 'CONTACT NUMBER',
      placeNewOrder: 'PLACE A NEW ORDER',
      queryPlaceholder: 'Contact Name, phone #, email, etc.',
      receiver: 'RECIPIENT',
      search: 'SEARCH:',
      sender: 'SENDER',
      streetAddress: 'ADDRESS',
      type: 'TYPE',
      region: 'Region',
    },
    new: {
      createAddress: 'INSERT ADDRESS',
      pageHeader: 'ADD NEW RECIPIENT',
      save: 'SAVE & CREATE ANOTHER',
      successMessage: 'Address created.',
    }
  },
  constants: {
    addressBoxFields: {
      addressTypeReceiver: 'RECIPIENT',
      addressTypeSender: 'SENDER',
      company: 'COMPANY NAME',
      destination: 'DROP-OFF POINT',
      detailAddress: '#Floor - Unit',
      email: 'EMAIL',
      instructions: 'REMARKS',
      phone: 'CONTACT NUMBER',
      receiver: 'RECIPIENT',
      sender: 'SENDER',
      region: 'REGION*',
      parcelIds: 'PARCEL IDs',
      parcelIdsPlaceholder: 'Parcel IDs separated by semicolons',
      addressType: 'Address Type',
    },
    goodsTypes: {
      constructionMaterials: 'CONSTRUCTION MATERIALS',
      documents: 'DOCUMENTS',
      food: 'FOOD',
      fragile: 'FRAGILE ITEMS',
      groceries: 'GROCERIES',
      others: 'Others',
    },
    industries: {
      accounting: 'Accounting Documents',
      agriculture: 'Agriculture, Forestry, Animal Husbandry, Fishing',
      arts: 'Design Work',
      construction: 'Construction Industry',
      culture: 'Culture, Sports, Media and Entertainment',
      education: 'Education',
      electricity: 'Electricity, Heat, Fuel and Water Production and Supply Industry',
      environment: 'Water Conservancy: Environment and Public Facilities Management',
      financial: 'Financial Industry',
      healthcare: 'Healthcare, Media and Social Work',
      hotels: 'Hotels and Catering Services',
      information: 'Information Transmission, Software, Telecommunication and Information Technology Services',
      international: 'International Business Organisations',
      leasing: 'Leasing and rental Services',
      legal: 'Lawyer',
      manufacturing: 'Manufacturing',
      mining: 'Mining Occupations',
      others: 'Others',
      professional: 'Scientific and Technical Services Chemical',
      publicAdministration: 'Public administration, Social Security and Social Organisations',
      realEstate: 'Real Estate',
      residentServices: 'Resident Services, Repairs and Other Services',
      transport: 'Logistics (Transport, Storage, Postal and Courier Services)',
      wholesale: 'Wholesale and Retail Trade',
    },
    orderRequestStatuses: {
      active: 'ACTIVE',
      cancelled: 'CANCELLED',
      completed: 'COMPLETED',
      pending: 'PENDING',
    },
    extraRequirements: {
      assemble: '',
      borrowCarts: 'TROLLEY REQUIRED',
      dumperOrConstruction: 'WASTE DISPOSAL',
      express: '',
      helpPay: '',
      inputPlaceholder: '',
      loadCargo: '',
      longerThanSixFt: 'GOODS EXCEEDING 6FT',
      longerThanSixFtFull: '???',
      longerThanSixFtHalf: '???',
      manpower: 'Manpower',
      mover: 'Manpower',
      movers: (options) => `${options.count} movers`,
      needCarry: '',
      needCart: 'TROLLEY REQUIRED',
      needCoveredLorry: 'Covered Lorry',
      needQueueing: '',
      needQueueingFalse: '',
      needQueueingTrue: '',
      needReceipt: '',
      needTailgate: 'With Tailgate',
      newCar: '',
      pcs: (options) => options.count === 1 ? '1 PC' : options.count + ' PCs',
      pets: 'Pets',
      raining: '',
      receivePayment: '',
      snowing: '',
      speakEnglish: '',
    },
    vehicles: {
      damas: '',
      damasDescription: '',
      labo: '',
      laboDescription: '',
      lorry10: '10 ft. Lorry',
      lorry10Description: 'Good for 1 bedroom, 1 mattress and 3 seater sofa. Max length of goods: 3m',
      lorry14: '14 ft. Lorry',
      lorry14Description: 'Good for 2 Bedroom, multiple sofas, dining table and chairs. Max length of goods: 4.2m\n',
      lorry24: '24 ft. Lorry',
      lorry24Description: 'Good for 3+ bedroom, office furniture, and boats. Max length of goods: 7.0M',
      motorcycle: 'Motorcycle',
      motorcycleDescription: 'Good for small parcels and documents, Max weight: 3kg, Max dimensions: 30x20x20cm (1 parcel unit)',
      mudou: '',
      mudouDescription: '',
      mudou9: '',
      mudou9Description: '',
      sedan: 'Sedan',
      sedanDescription: 'Good for multiple small-sized parcels including flowers, food and gifts. Max weight: 3kg, Max dimensions: 20x20x30cm (1 parcel unit)',
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
      van: 'VAN',
      vanDescription: 'Good for large quantity of small parcels, boxes, small furniture and pets. Max length of goods: 2.4m',
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
      assigned: 'ASSIGNED',
      delivered: 'SUCCESSFUL',
      failedToDeliver: 'FAILED DELIVERY',
      reassigned: 'REASSIGNED',
      pending: 'PENDING',
      pickedUp: 'ON ITS WAY',
    }
  },
  errors: {
    auth: {
      restricted: 'RESTRICTED ACCESS',
    },
    page_not_found: {
      oops: 'Oops!',
      status: '404 Not Found',
      message: 'Sorry, an error has occured, requested page not found!',
      home: 'HOME',
    }
  },
  faq: {
    contactUs: 'If you have further enquiries, please email us at cs@gogovan.sg or call GoGoVan at 6836 1110.',
    header: 'FAQs',
    questions: [
      {
        answer: 'GoGoVan is a web and mobile app-based platform for transporting goods in Asia. We aim to redefine the everyday logistics experience by providing a convenient and efficient service.',
        question: 'What is GoGoEnterprise?',
      },
      {
        answer: 'GoGoVan Enterprise is built for any business that has a high demand and need for logistics services. If you are interested, do contact sales@gogovan.sg for more information.',
        question: 'Who is GoGoVan Enterprise for?',
      },
      {
        answer: 'Yes, you can. If you think that the vehicle may not be able to fit all your goods, you may request for more vehicles. Simply click the drop down menu under “NUMBER OF VEHICLE” and indicate the number of vehicles. To optimise your order route, you may also select between “share route” and “split route”.',
        question: 'Can I request for more than one vehicle when I place an order?',
      },
      {
        answer: [
          "You may have multiple drop-off locations and are unsure on how to prioritise them. This is when route optimisation can help you maximise your order.",
          "",
          ""
        ],
        question: 'What does route optimisation mean?',
      },
      {
        answer: 'If you are unsure of the ideal vehicle type for your delivery, look for the “?” icon and learn more.',
        question: 'I\'m not sure if my goods exceed the weight or dimension limits?',
      },
      {
        answer: '',
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
        answer: 'Yes, please type in your special requests and requirements in the “Remarks” section.',
        question: 'Can I leave instructions to the driver?',
      },
      {
        answer: 'You will have to wait for another driver to pick up your order. When a driver releases an order, it will automatically be available for other drivers to pick up.',
        question: 'What should I do if the driver released my order?',
      },
      {
        answer: 'No, they are not included.',
        question: 'Are ERP and Parking Charges included in the quote?',
      },
      {
        answer: 'Manpower charges defer from the types of vehicles requested. Please visit xxx.com for more information.',
        question: 'What are the charges for manpower?',
      },
      {
        answer: 'Please call our customer service hotline at 68361110 (available from 9am to 6pm daily) to report this issue. Our customer service officer will assist you in the matter.',
        question: 'My driver is late, or has not appeared for the delivery without any prior notice. What should I do?',
      },
      {
        answer: 'You will receive an email for every completed order. Alternatively, you are able to track your order on the Enterprise page.',
        question: 'How can I confirm that the delivery orders have been completed?',
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
      switchChineseEnglish: '',
    },
    orderMgmt: 'ORDER MANAGEMENT',
    placeOrder: 'PLACE A ORDER',
    tnc: {
      agree: 'I agree and accept all the terms and conditions mentioned above.',
      content: `<p style="text-align:center"><strong>STANDARD TERMS &amp; CONDITIONS</strong></p>

  	<p style="text-align:center"><strong>(&ldquo;Terms and Conditions&rdquo;)</strong></p>

  	<p>&nbsp;</p>

  	<p style="text-align:center"><strong>IMPORTANT NOTICE</strong></p>

  	<p><br />
  	<strong>When ordering the services of GoGoVan Singapore Pte. Ltd. (&ldquo;GoGoVan&rdquo;) you, as &ldquo;Customer&rdquo;, are agreeing, on your behalf and on behalf of anyone else with an interest in the Shipment, that you or such person shall be bound by the Terms and Conditions from the time that GoGoVan accepts the Shipment unless otherwise agreed in writing by an authorised officer of GoGoVan.&nbsp; GoGoVan reserves the right to amend the Terms and Conditions and any change will be updated without prior notice.</strong></p>

  	<p><strong>GoGoVan may engage subcontractors to perform services and contracts both on its behalf and on behalf of agents or subcontractors, each of whom shall have the benefit of the Terms and Conditions.&nbsp; No such party has the authority to waive or vary any of the Terms and Conditions.</strong></p>

  	<p><strong>&ldquo;Shipment&rdquo; means all packages, parcels, delivery items or any part of the articles therein or contents thereof that travel under one GoGoVan waybill, consignment note and/or invoice and which may be carried by any means GoGoVan chooses, including by land transportation or any other carrier.&nbsp; Unless otherwise agreed in writing prior to the tender of the Shipment, the service to be provided by GoGoVan is limited to the pickup, transportation and delivery of the Shipment.&nbsp; Customer acknowledges that Shipments may be consolidated with those of other shippers.&nbsp; Every Shipment is transported on a limited liability basis as provided herein.&nbsp; &nbsp;</strong></p>

  	<h4>1. Shipment Packaging and Labelling</h4>

  	<ol type="a">
    	<p><li>Customer shall ensure that the Shipment is packed in a case, wrapper or container appropriate to the nature and weight of the Shipment such that no part of the Shipment may be removed without the case, wrapper or container being torn or broken, a seal being broken or two adhesive surfaces being forced apart.&nbsp; In the event that packing of the Shipment is deemed by GoGoVan to be unsuitable for transportation, Customer shall, upon notification by GoGoVan, re-pack the Shipment in a suitable case, wrapper or container, failing which GoGoVan will re-pack the Shipment at Customer&rsquo;s expense.&nbsp;</li></p>
    	<p><li>Customer shall ensure that the Shipment is properly packaged so as to protect against damage to the Shipment during the course of delivery, and:</li></p>

  	<ol type="i">

    	<p><li>in the case of a Shipment of a fragile nature, that Shipment shall be packaged in a case or container of sufficient durability and strength and shall be encased in or surrounded by sufficient and suitable protective material inside that case or container such that the Shipment is guarded against damage that may result from any force, pressure or blows to which delivery items are ordinarily subject during the course of delivery and that such Shipment shall bear the words &ldquo;FRAGILE&rdquo; prominently displayed in capital letters on the face of the case or container and above the address of the named addressee; and</li></p>
    	<p><li>in the case of a Shipment which is susceptible to damage by bending, that the Shipment shall be packed in a case or container of sufficient durability and strength to prevent the Shipment from being bent or otherwise damaged during the course of delivery and such case or container shall bear the words &ldquo;DO NOT BEND&rdquo; prominently displayed in capital letters on the face of the case or container and above the address of the named addressee.</li></p>


  	</ol>

    	<p><li>GoGoVan shall not be responsible to provide a protective service for the transportation of perishable commodities or commodities requiring protection from heat or cold.&nbsp; Such commodities will be accepted for transportation solely at the Customer&rsquo;s risk for any damages arising from the transportation.</li></p>
    	<p><li>Customer shall be responsible for the accuracy and completeness of the particulars inserted in the address label, consignment note, waybill and/or invoice In respect of each Shipment and for ensuring that each Shipment set out adequate contact details of the Customer and receiver of the Shipment clearly and each Shipment is properly packed, marked and labeled and its contents are described and classified and are accompanied by the documentation as may (in each case) be necessary to make them suitable for transportation and to comply with the requirements of the Terms and Conditions of and applicable law.</li></p>
    	<p><li>Customer shall state all such information required on the address label, consignment note, waybill and/or invoice In respect of each Shipment, including but not limited to:</li></p>

  	<ol type="i">

    	<p><li>name, address (including postal code) and telephone number of Customer;</li></p>
    	<p><li>name, address (including postal code) and telephone number of the receiver of the Shipment;</li></p>
    	<p><li>the preferred delivery date and time;</li></p>
    	<p><li>description of the Shipment contents; and</li></p>
    	<p><li>any special delivery and/or care instructions in respect of the Shipment.</li></p>


  	</ol>

  	<h4>2. Unacceptable Shipments</h4>

  	<ol type="a">
    	<p><li>GoGoVan may refuse to render its services in the transportation of any unacceptable Shipment and, if carriage is in progress, GoGoVan may suspend carriage and hold the Shipment.&nbsp; Customer guarantees that its Shipment is acceptable for transportation.&nbsp; A Shipment is deemed unacceptable for transportation if:</li></p>

  	<ol type="i">

    	<p><li>it is classified as hazardous material, dangerous goods, prohibited or restricted articles by any applicable government department or other relevant organisation or under any applicable laws of any relevant jurisdiction;</li></p>
    	<p><li>it contains counterfeit goods, animals, bullion, currency, bearer form negotiable instruments, precious metals and stones; real or imitation firearms, parts thereof, weapons, explosives and ammunition; human or animal remains, pornography or illegal narcotics/drugs or substances,&nbsp;</li></p>
    	<p><li>it contains any other item which GoGoVan decides cannot be carried safely or legally, or</li></p>
    	<p><li>its packaging is defective or inadequate.</li></p>
    	<p><li>Customer&rsquo;s application or order for delivery service does not comply with the Terms and Conditions;</li></p>
    	<p><li>Customer fails to accurately describe and declare the contents of the Shipment;</li></p>
    	<p><li>delivery is prevented, impeded or otherwise made unsafe or difficult by reason of unforeseen events such as an act of God or other event of force majeure;</li></p>
    	<p><li>Customer requests any change to the scope of GoGoVan&rsquo;s services to which GoGoVan does not agree in writing; or</li></p>
    	<p><li>it (or parts or contents thereof) is of a value exceeding SGD[250].</li></p>


  	</ol>
    	<p><li>GoGoVan shall not be liable for loss of, damage to or delay in delivery of any item that is included in any Shipment that is unacceptable for transportation, whether or not Customer has informed GoGoVan of any such items.&nbsp; If GoGoVan suspends or decline to provide its service in respect of any Shipment which is deemed unacceptable for transportation, then Customer shall not be entitled to any refund of transportation fee paid by Customer to GoGoVan in respect of such Shipment.&nbsp;</li></p>
    	<p><li>GoGoVan also reserves the right to refuse to provide service, among other reasons, for any Shipment which by reason of the dangerous or other character of its contents may, in the sole judgment of GoGoVan, soil, taint or otherwise damage other packages or GoGoVan&rsquo;s equipment, or which is improperly or insecurely packed or wrapped. In addition, GoGoVan reserves the right either to refuse to provide service for any Shipment or to or from any location, or to provide alternative service arrangements, when, among other reasons, GoGoVan, in its sole discretion, deems that it is unsafe or economically or operationally impracticable to provide service.</li></p>
    	<p><li>GoGoVan may at its option suspend transportation of any Shipment if goods are found not to be acceptable for transportation for any of the above reason whatsoever, if GoGoVan cannot effect delivery at the second attempt to do so, if the addressee refuses to accept delivery, or if it cannot collect amounts due from the receiver on delivery.&nbsp; Customer will be responsible for payment of all charges, calculated in accordance with the then current GoGoVan rates, caused by such suspension of transportation, including, but not limited to, forwarding, disposal, or return of transportation charges as well as any duty or tax, if applicable.</li></p>
    	<p><li>Customer shall be responsible for the reasonable costs and expenses of GoGoVan (including storage), for such losses, taxes and any other duties as GoGoVan may suffer and for all claims made against GoGoVan because a Shipment is unacceptable for transportation or because of any refusal or suspension of carriage or return of a Shipment by GoGoVan pursuant to these terms.&nbsp; GoGoVan shall not be liable or responsible for the loss of or damage to any Shipment, the contents of which GoGoVan is not authorized to accept, which GoGoVan states it will not accept, or which GoGoVan has a right to refuse.&nbsp; If GoGoVan suspends service as set forth in these terms, the payer of any transportation charges shall not be entitled to a refund.&nbsp; Acceptance for carriage of any Shipment that GoGoVan does not accept for transportation or which Customer is prohibited from shipping does not constitute a waiver of any provisions of these terms or any other applicable terms.</li></p>
  	</ol>

  	<h4>3. Deliveries and Undeliverables</h4>

  	<p style="margin-left:40px">Shipments cannot be delivered to PO boxes or postal codes.&nbsp; Shipments are delivered to the receiver&rsquo;s address given by Customer but not necessarily to the named receiver personally.&nbsp; Shipments to addresses with a central receiving area will be delivered to that area.&nbsp; If the Shipment is deemed to be unacceptable, or the receiver cannot be reasonably identified or located, or the receiver refuses delivery or to pay for delivery, or GoGoVan is unable to deliver the Shipment for any reason whatsoever, GoGoVan shall use reasonable efforts to return the Shipment to Customer at Customer&rsquo;s cost, failing which the Shipment may be released, disposed of or sold by GoGoVan without incurring any liability whatsoever to Customer or anyone else, with the proceeds applied against service charges and related administrative costs and the balance of the proceeds of a sale (if any) to be returned to Customer.</p>

  	<h4>4. Inspection</h4>

  	<p style="margin-left:40px">GoGoVan has the right, but not the obligation, to open and inspect any Shipment tendered to it for transportation without notice.&nbsp;</p>

  	<h4>5. Shipment Charges</h4>

  	<p style="margin-left:40px">Shipment charges are as determined by GoGoVan upon your application for use of its services and written confirmation of acceptance by GoGoVan to provide its services.&nbsp; Customer shall also pay any additional charges or rates for non-standard service, additional or non-standard usage and any other additional charges referenced in the effective GoGoVan additional charge guide, or those applicable additional rates set out in any customised contracts.&nbsp; Customer shall pay or reimburse GoGoVan for all Shipment charges, ancillary charges, storage charges, duties and taxes owed for services provided by GoGoVan or incurred by GoGoVan on Customer&rsquo;s or Shipment receiver&rsquo;s or any third party&rsquo;s behalf and all claims, damages, fines and expenses incurred if the Shipment is deemed unacceptable for transport as described in Section 2. &nbsp;</p>

  	<h4>6. GoGoVan&rsquo;s Liability</h4>

  	<ol type="a">
    	<p><li>Customer agrees that GoGoVan&rsquo;s liability in respect of the Shipment is strictly limited to direct loss only.&nbsp; All other types of loss or damage are excluded (including but not limited to loss of profits, income, interest, future business, or loss of revenue resulting from loss of use), whether such loss or damage is special or indirect, and even if the risk of such loss or damage was brought to GoGoVan&rsquo;s attention before or after acceptance of the Shipment.&nbsp; Customer shall insure at its own costs against any risks in respect of the Shipment. &nbsp;</li></p>
    	<p><li>Without prejudice to Sections 2, 3, 6, 7, 8 and 9 below, GoGoVan&rsquo;s total liability in respect of any Shipment shall be limited to its actual cash value but in any event shall not exceed SGD[250] (whichever is the lower).&nbsp; Customer shall not raise more than one claim for each Shipment and settlement of such claim shall be full and final settlement for all loss or damage in connection with such Shipment.&nbsp; If Customer considers these limits as insufficient to protect itself or the Shipment, then it must make its own insurance arrangements, failing which Customer shall assume all risks of loss or damage in respect of the Shipment. GoGoVan shall not be under any liability to offer Customer&rsquo;s cargo insurance or to buy any insurance in respect of the Shipment.&nbsp; Customer who needs cargo insurance or all risk insurance should purchase those insurances from third parties.&nbsp;</li></p>
  	</ol>

  	<h4>7. Time Limits for Claims</h4>

  	<ol type="a">
    	<p><li>All claims against GoGoVan must be submitted in writing to GoGoVan as soon as reasonably practicable and in any event within [7] days from the date that GoGoVan accepted the Shipment, failing which GoGoVan shall have no liability whatsoever.&nbsp;</li></p>
    	<p><li>All claims must be made in writing, accompanied by the original waybill, consignment note, relevant invoices and receipts and other supporting documents as may be requested by GoGoVan and submitted to the following address:</li></p>
  	</ol>

  	<p style="margin-left:40px"><strong>GoGoVan Singapore Pte. Ltd.</strong><br />
  	18 New Industrial Road, #05-17, Singapore 536205</p>

  	<h4>8. Delayed Shipments</h4>

  	<ol type="a">
    	<p><li>GoGoVan will make every reasonable effort to deliver the Shipment according to GoGoVan&rsquo;s delivery schedules prevailing from time to time, but these schedules are not binding and do not form part of the contract. &nbsp; GoGoVan is not liable for any damages or loss caused by delays.&nbsp;</li></p>
    	<p><li>GoGoVan shall make reasonable efforts to deliver the Shipment to the addressee by the preferred delivery date and time indicated by Customer on the consignment note, waybill and/or invoice and in accordance with GoGoVan&rsquo;s delivery schedule prevailing from time to time.&nbsp; If Customer fails to indicate a preferred delivery date and time on the consignment note, waybill and/or invoice, the Shipment will be delivered in accordance with GoGoVan&rsquo;s delivery service schedule prevailing from time to time. Notwithstanding the foregoing, Customer agrees and acknowledges that all deliveries are subject to potential delays including but not limited to delays resulting from adverse traffic conditions.&nbsp; In the event that GoGoVan is unable to deliver the Shipment by the indicated preferred delivery date and/or time, GoGoVan shall make every reasonable effort to deliver the Shipment on the day after the indicated preferred delivery date.&nbsp;</li></p>
    	<p><li>Customer may instruct GoGoVan to discontinue delivery of a Shipment, send the Shipment back to Customer, forward the Shipment to another addressee or to dispose of the Shipment, provided that the Shipment is still in GoGoVan&rsquo;s possession and has not been delivered to the addressee.&nbsp; All costs arising from the aforesaid instructions shall be borne by Customer. Notwithstanding the foregoing, GoGoVan reserves the right to decline to accept such instructions for any reason whatsoever.&nbsp; Customer will be notified in the event that GoGoVan declines to accept such instructions.</li></p>
  	</ol>

  	<h4>9. Circumstances Beyond GoGoVan&rsquo;s Control</h4>

  	<p style="margin-left:40px">GoGoVan is not liable for any loss or damage arising out of circumstances beyond GoGoVan&rsquo;s control.&nbsp; These include but are not limited to: electrical or magnetic damage to, or erasure of, electronic or photographic images, data or recordings; any defect or characteristic related to the nature of the Shipment, even if known to GoGoVan; any act or omission by a person not employed or contracted by GoGoVan (including but not limited to Customer, receiver of Shipment, any other third party, customs or other government official); and earthquake, cyclone, storm, flood, fog, war, plane crash or embargo, riot or civil commotion, industrial action, any act of government, accidents, traffic obstruction or congestion, mechanical breakdown or other events of force majeure. &nbsp;</p>

  	<h4>10. Customer&rsquo;s Warranties and Indemnity</h4>

  	<p style="margin-left:40px">Customer shall indemnify and hold GoGoVan harmless for any loss or damage arising out of Customer&rsquo;s failure to comply with any applicable laws or regulations and for Customer&rsquo;s breach of the following warranties and representations:</p>

  	<ol type="a">
    	<p><li>all information provided by Customer or its representatives is complete and accurate;</li></p>
    	<p><li>the Shipment was prepared in secure premises by Customer&rsquo;s employees;</li></p>
    	<p><li>Customer employed reliable staff to prepare the Shipment;</li></p>
    	<p><li>Customer protected the Shipment against unauthorised interference during preparation, storage and transportation to GoGoVan;</li></p>
    	<p><li>the Shipment is properly marked and addressed and packed to ensure safe transportation with ordinary care in handling;&nbsp;</li></p>
    	<p><li>all applicable laws and regulations have been complied with; and</li></p>
    	<p><li>the waybill, consignment note and/or invoice has been signed by Customer&rsquo;s authorised representative and the Terms and Conditions constitute binding and enforceable obligations of Customer.</li></p>
  	</ol>

  	<h4>11. Routing</h4>

  	<p style="margin-left:40px">Customer agrees to all routing and diversion, including the possibility that the Shipment may be carried via intermediate stopping places.</p>

  	<h4>12. Personal Data and Privacy</h4>

  	<p style="margin-left:40px">The collection, use, storage and transfer of Customer&rsquo;s personal data are generally subject to GoGoVan&rsquo;s privacy policy and personal information collection statement, the latest version of which is at www.gogovan.sg/privacy.&nbsp; GoGoVan&rsquo;s privacy policy, as may be amended and updated from time to time at its sole discretion, is incorporated by reference into these Terms and Conditions.</p>

  	<h4>13. Miscellaneous</h4>

  	<ol type="a">
    	<p><li>Customer may not assign or transfer any of Customer&rsquo;s rights or obligations under the Terms and Conditions to any person without GoGoVan&rsquo;s prior written approval.&nbsp; GoGoVan may assign and transfer any of its rights and obligations under the Terms and Conditions to any person.</li></p>
    	<p><li>GoGoVan may give notice to Customer by electronic mail to Customer&rsquo;s email address on record in GoGoVan&rsquo;s account information, or by written communication sent by regular mail to Customer&rsquo;s address on record in GoGoVan&rsquo;s account information</li></p>
    	<p><li>The invalidity or unenforceability of any provision shall not affect any other part of these Terms and Conditions.</li></p>
    	<p><li>The original text of the Terms and Conditions is in English.&nbsp; In the event of any inconsistency between the English text and any foreign language translation, the English text shall prevail.</li></p>
  	</ol>

  	<p><strong>14. Governing Law</strong></p>

  	<p style="margin-left:40px">The Terms and Conditions shall be governed by and construed in accordance with the laws of Singapore.&nbsp; Customer irrevocably submits to the non-exclusive jurisdiction of the courts of Singapore as regards any dispute or matter arising under the Terms and Conditions.</p>

`,
      contentkr0: '',
      contentkr1: '',
      contentkr2: '',
      next: 'NEXT',
      previous: 'PREVIOUS',
      proceed: 'PROCEED',
      title: 'Terms ＆ Conditions',
    }
  },
  images: {
    logo: 'general_3/logo',
  },
  notification_centre: {
    drawerTitle: {
      notification: 'NOTIFICATIONS',
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
      longLoadingTime: 'Exceed Loading Time',
      noGoodsInfo: 'No goods information.',
      notApplicable: 'N/A',
      notOnTime: 'Driver was not on time',
      openLink: 'Open link in new window',
      orderNumber: (options) => `ORDER #${options.id}`,
      other: 'Other',
      phoneNumber: 'CONTACT NUMBER',
      pickupTime: 'PICK-UP TIME:',
      priceBreakdown: 'PRICE BREAKDOWN:',
      quantity: 'QUANTITY',
      rateAndConfirmCompletion: 'RATE & CONFIRM COMPLETION',
      reachingOut: (options) => (options.count === 0 || !options.count) ? 'Seaching drivers' : (options.count === 1) ? 'Searching 1 driver' : 'Reaching out to ' + options.count + ' drivers',
      remarks: 'REMARKS',
      routeChanged: 'Route was changed',
      routes: 'Routes',
      send: 'SEND',
      previewSignature: 'Preview Signature',
      parcelNumber: 'Parcel ID',
      previewImage: 'Preview Image',
      noimages: 'No Images',
      nosignature: 'No Signature',
      sendViaEmail: 'SEND VIA EMAIL (Separate multiple entries with commas)',
      share: 'SHARE',
      sizeOfGoods: 'SIZE OF GOODS',
      sms: 'SMS',
      smsSent: 'SMS is sent.',
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
      pickupDate: 'Pick-Up Date',
      queryPlaceholder: 'Driver or client\'s name / phone, etc',
      search: 'SEARCH:',
      showAll: 'Show all',
      status: 'ORDER STATUS:',
      to: 'To',
      vehicle: 'VEHICLE:',
      parcelStatus: 'PARCEL STATUS:',
    },
    new: {
      actionBar: {
        anOrderMustHaveAtLeastOneWaypoint: 'An order must have at least one way-point.',
        backToEdit: 'BACK TO EDIT',
        bookingMustBeMadeInTheFuture: 'Booking must be made in the future.',
        calculateRoute: 'CALCULATE ROUTE',
        details: 'DETAILS',
        moreVehiclesThanWaypoints: 'You requested more vehicles than way-points.',
        routeOptimizationHelp: 'You may have multiple drop-off points and are unsure on how to prioritise them. This is when route optimisation can help you maximise your order',
        runRouteOptimization: 'Run route optimisation?',
        sameRouteStatement: (options) => `You have ordered <span class="bold">${options.count} vehicle(s)</span> for the same route (amounted <span class="bold">${options.total}</span>) for each.`,
        seeDetails: 'SEE DETAILS',
        shareTheSameRoute: 'SHARE THE SAME ROUTE',
        splitRoute: 'SPLIT ROUTE',
        splitRouteStatement: (options) => `You have ordered <span class="bold">${options.count} vehicle(s)</span> and split to <span class="bold">${options.count}</span> route(s).`,
        totalFee: 'TOTAL FEE:',
        totalFeeStatement: '*ERP, manpower and parking fees are not included',
      },
      basicInfo: {
        addInstructions: 'ADD INSTRUCTIONS',
        edit: 'EDIT',
        email: 'EMAIL',
        goodsAndServiceSetting: 'GOODS & SERVICE SETTING',
        instructions: 'INSTRUCTIONS',
        phone: 'CONTACT NUMBER',
        pickupDate: 'PICK-UP DATE',
        pickupPoint: 'PICK-UP POINT',
        pickupTime: 'PICK-UP TIME',
        sender: 'SENDER',
      },
      basicInfoSplitOptions: {
        mudou9: '',
        mudou9Description: '',
        sedan: 'Sedan',
        sedanDescription: 'Good for multiple small-sized parcels including flowers, food and gifts. Max weight: 3kg, Max dimensions: 20x20x30cm (1 parcel unit)',
        damas: '',
        damasDescription: '',
        labo: '',
        laboDescription: '',
        lorry10: '10 ft. Lorry',
        lorry10Description: 'Good for 1 bedroom, 1 mattress and 3 seater sofa. Max length of goods: 3m',
        lorry14: '14 ft. Lorry',
        lorry14Description: 'Good for 2 Bedroom, multiple sofas, dining table and chairs. Max length of goods: 4.2m\n',
        lorry24: '24 ft. Lorry',
        lorry24Description: 'Good for 3+ bedroom, office furniture, and boats. Max length of goods: 7.0M',
        motorcycle: 'Motorcycle',
        motorcycleDescription: 'Good for small parcels and documents, Max weight: 3kg, Max dimensions: 30x20x20cm (1 parcel unit)',
        numberOfVehicle: 'NUMBER OF VEHICLE',
        sameRouteStatement: 'Every vehicle follows the same route and locations',
        shareTheSameRoute: 'SHARE THE SAME ROUTE',
        mudou: '',
        mudouDescription: '',
        splitRoute: 'SPLIT ROUTE',
        splitRouteStatement: 'Automatically optimise and split routes',
        ton1: '',
        ton1_2_and_ton1_4: '',
        ton1_2_and_ton1_4Description: '',
        ton1Description: '',
        van: 'VAN',
        vanDescription: 'Good for large quantity of small parcels, boxes, small furniture and pets. Max length of goods: 2.4m',
        vehicleType: 'VEHICLE TYPE',
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
        cancel: 'CANCEL',
        cbm: 'DIMENSION',
        distance: 'DISTANCE',
        editOrder: 'EDIT ORDER',
        extraServices: 'EXTRA SERVICES',
        feeStatement: 'The above fees do not include manpower, ERP, parking fees and all other misc. fees. Please confirm with GoGoVan Account Manager.',
        newOrder: 'New Order',
        numberOfVehicle: 'NUMBER OF VEHICLE',
        pickupTime: 'PICK-UP TIME',
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
        addALocation: 'Add additional Drop-off point\t',
        clickToEdit: 'CLICK TO EDIT',
        pickupInformation: 'PICK-UP INFORMATION',
        saveSetting: 'SAVE SETTING',
      },
      displayField: {
        meter: 'm',
      },
      extra: {
        newOrder: 'New Order',
        saveSetting: 'SAVE SETTING',
      },
      goodsRequirements: {
        addImages: 'ADD IMAGES',
        cbm: 'CBM',
        cubicMetre: 'Cubic metre',
        defineItem: 'DEFINE ITEM',
        depthInM: 'Depth (m)',
        extraServices: 'EXTRA SERVICES',
        heightInM: 'Height (m)',
        hourlyRental: 'HOURLY RENTAL',
        hours: 'Hours',
        itemPcs: 'Item (pcs)',
        noHourlyRental: 'No Hourly Rental',
        quantity: 'QUANTITY',
        remark: 'Remarks',
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
        pageHeader: 'PLACE ORDER > EDIT PICK-UP POINT',
      },
      reorder: {
        dragAndDrop: 'DRAG and DROP to rearrange locations.',
        editOrder: 'EDIT ORDER',
        reviewOrder: 'REVIEW ORDER',
        route: (options) => `ROUTE ${options.number}`,
        splitRoute: 'SPLIT ROUTE',
        splitRouteStatement: (options) => `You have requested <span class="bold">${options.count} vehicles</span> and split into <span class="bold">${options.count}</span> routes.`,
        totalFee: 'TOTAL FEE',
        totalFeeOfThisRoute: 'TOTAL FEE OF THIS ROUTE',
        totalFeeStatement: '*ERP, manpower and parking fees are not included',
      }
    },
    view: {
      sender: 'SENDER INFO',
      detail: 'Detail',
      driverInfo: 'DRIVER INFO',
      eta: 'ETA',
      exportThisReport: 'EXPORT THIS REPORT',
      extraDropoffPoints: (options) => options.count === 1 ? '+1 Drop-off point' : '+' + options.count + ' Drop-off points',
      mapDetail: 'Map | Detail',
      mapView: 'Map View',
      next: 'NEXT',
      pageHeader: 'Order Management',
      pickupTime: 'PICK-UP TIME',
      plusReceivers: (options) => options.count === 1 ? '+1 receiver' : '+' + options.count + ' receivers',
      previous: 'PREVIOUS',
      priceColumn: 'PRICE',
      receiverInfo: 'RECEIVER INFO',
      receivers: (options) => `${options.count} receivers`,
      route: 'ROUTE',
      status: 'STATUS',
      tableView: 'BY ORDER',
      todayStatus: (options) => `hi ${options.org}! You have: ${options.active} active, ${options.pending} pending, ${options.completed} completed and ${options.cancelled} cancelled orders today`,
      totalAmount: 'TOTAL AMOUNT:',
      totalOrders: (options) => `TOTAL ORDERS: ${options.count}`,
      totalParcels: (options) => `TOTAL PARCELS: ${options.count}`,
      vehicle: 'VEHICLE',
      parcelView: 'By Parcel',
      parcelId: 'PARCEL ID',
      address: 'ADDRESS',
      timestamp: 'TIMESTAMP',
      statusReason: 'STATUS REASON',
      updateInfo: 'UPLOADED INFO',
      nosignatureorimages: 'NO IMAGES OR SIGNATURE',
      parcelNumber: 'Parcel ID',
      showingPage: (options) => `SHOWING PAGE ${options.currentPage} OF ${options.totalPages}`,
      orderNumber: 'ORDER #',
    },
    waypointStatus: {
      arrivedAt: (options) => `ARRIVED @ ${options.time}`,
      deliveredAt: (options) => `ARRIVED @ ${options.time}`,
      eta: (options) => `ETA ${options.eta}`,
      findingDriver: 'FINDING DRIVER',
      pending: 'PENDING',
    }
  },
  organizations: {
    addressEdit: {
      destination: 'DESTINATION*',
      detailAddress: '#Floor - Unit',
      editMyOrgAddress: 'Edit My Organisation Address',
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
      contactPersonPhone: 'CONTACT NUMBER',
      corporateName: 'CORPORATE NAME',
      corporateProfileImage: 'CORPORATE PROFILE IMAGE',
      detailAddress: '#Floor - Unit',
      editAddress: 'EDIT ADDRESS',
      editMyOrg: 'Edit My Organisation',
      email: 'GENERAL EMAIL ADDRESS',
      industry: 'INDUSTRY',
      mapAddress: 'MAP ADDRESS',
      pageHeader: 'CORPORATE PROFILE > EDIT PROFILE',
    },
    show: {
      branches: 'BRANCHES',
      companyWebsite: 'COMPANY WEBSITE',
      contactPerson: 'CONTACT PERSON',
      contactPersonPhone: 'CONTACT NUMBER',
      detailAddress: 'DETAIL ADDRESS',
      editProfile: 'EDIT PROFILE',
      email: 'GENERAL EMAIL ADDRESS',
      industry: 'INDUSTRY',
      mapAddress: 'MAP ADDRESS',
      myOrg: 'My Organisation',
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
      appStore: 'https://itunes.apple.com/sg/app/gogovan/id708390467?mt=8&ign-mpt=uo%3D4',
      customerHotline: 'CUSTOMER HOTLINE',
      customerHotlineNumber: '68361110',
      emailPlaceholder: 'Your email',
      enterprise: 'Enterprise',
      fb: 'https://www.facebook.com/gogovansg',
      ggv: 'GoGo',
      gPlus: 'https://plus.google.com/+GogovanHk/posts',
      instagram: 'https://instagram.com/gogovansg',
      languageToggle: '',
      linkedin: 'https://www.linkedin.com/company/3787021?trk=tyah&trkInfo=tarId%3A1418799557253%2Ctas%3Agogovan%2Cidx%3A1-1-1',
      login: 'LOGIN',
      openingHours: '09:00-18:00',
      passwordPlaceholder: 'Your password',
      phonePlaceholder: 'Your phone number',
      playStore: 'http://goo.gl/dkQvCj',
      rememberMe: 'Remember me',
      sevenDaysAWeek: '7 DAYS A WEEK',
      signIn: 'Sign in',
      slogan: 'Same Day logistics solution for your everyday business needs',
      youtube: 'http://www.youtube.com/user/MyGoGoVan',
    },
    profile: {
      accessLevel: 'ACCESS LEVEL',
      accMgmt: 'ACCOUNT MANAGEMENT',
      address: 'ADDRESS',
      branch: 'BRANCH',
      detailAddress: '#Floor - Unit',
      editCorporateProfile: 'EDIT CORPORATE PROFILE',
      editMyProfile: 'EDIT MY PROFILE',
      email: 'EMAIL',
      myAcc: 'My Account',
      notApplicable: 'N/A',
      pageHeader: 'MY ACCOUNT',
      phoneNumber: 'Contact Number',
    },
    profileEdit: {
      accessLevel: 'ACCESS LEVEL',
      branch: 'Branch Number',
      branchUser: 'Branch User',
      changePassword: 'CHANGE PASSWORD',
      confirmPassword: 'CONFIRM PASSWORD',
      currentPassword: 'CURRENT PASSWORD',
      detailAddress: '#Floor - Unit',
      editMyAcc: 'Edit My Account',
      email: 'EMAIL',
      master: 'MASTER',
      name: 'NAME',
      newPassword: 'NEW PASSWORD',
      pageHeader: 'ACCOUNT MANAGEMENT > EDIT PROFILE',
      passwordMismatch: 'Your new password and password confirmation must match.',
      phone: 'Contact Number',
      streetAddress: 'STREET ADDRESS',
      subUser: 'SUB-USER',
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
      hours: 'Hour',
      minutes: 'Min',
      seconds: 'Sec',
    }
  },
  validations: {
    errors: {
      failedToComputeLatLon: (options) => `Failed to compute the latitude/longitude of ${options.field}.`,
      invalidEmailFormat: 'Invalid email format.',
      invalidFields: 'Invalid fields.',
      invalidNumberFormat: 'Invalid number format.',
      invalidOrder: 'Invalid order. Please check your data.',
      invalidPassword: 'Password is invalid.',
      invalidPhoneNumber: 'Invalid phone number.',
      invalidUsernameOrPassword: 'Username or password is invalid.',
      missingField: 'Missing field',
      passwordMismatch: 'Password mismatch.',
    },
    fields: {
      address: 'Address',
      contactName: 'Contact name',
    },
    phoneRegexp: /^([36][0-9]{7}|[78][1-9][0-9]{6}|[9][0-8][0-9]{6})$/,
  }
}