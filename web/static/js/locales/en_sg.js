export default {
  accounts: {
    edit: {
      editUser: 'Edit User',
      pageHeader: 'ACCOUNT MANANGEMENT > EDIT USER',
    },
    form: {
      accessLevel: '',
      branch: '',
      changePassword: '',
      confirmPassword: '',
      currentPassword: '',
      detailAddress: '#Floor - Unit',
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
      reactivate: 'REACTIVATE',
      reactivated: 'REACTIVATED',
      deactivate: '',
      deactivated: '',
      detailAddress: '#Floor - Unit',
      editProfile: '',
      email: '',
      false: 'Cancel',
      master: 'MASTER',
      name: '',
      pageHeader: '',
      phone: '',
      queryPlaceholder: 'Name, branch, email, etc.',
      streetAddress: '',
      subUser: 'SUB-USER',
      true: 'Submit',
      users: '',
      showAll: 'Show all',
      search: 'SEARCH:',
    }
  },
  helpers: {
    button: {
      chooseFromComputer: 'CHOOSE FROM COMPUTER',
      cancel: '',
      saveAndExit: '',
      search: '',
    },
    accordion: {
      collapsePriceDetails: '',
      expandPriceDetails: '',
    },
    addressBox: {
      autocompletePopover: {
        locationSuggestion: '',
      },
      index: {
        addALocation: '',
        address: '',
        collectOnDelivery: '',
        company: '',
        contactName: '',
        contactPhone: '',
        desiredDeliveryTime: '',
        detailAddress: '#Floor - Unit',
        downloadTemplate: '',
        email: '',
        importRoutes: '',
        notApplicable: '',
        remark: '',
        remarkValue: '',
        viewAll: '',
        region: 'REGION',
      }
    },
    datepicker: {
      date: 'Date',
      cancel: 'Cancel',
      ok: 'OK',
    },
    dialog: {
      cancel: '',
      submit: '',
    },
    footer: {
      linkList: {
        aboutUs: '',
        blog: '',
        blogUrl: 'http://blog.gogovan.sg',
        business: '',
        careers: '',
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
      loading: 'Loading...',
    },
    mapView: {
      driver: '',
      eta: '',
      license: '',
      notApplicable: '',
      phone: '',
    },
    text: {
      addressNotFound: 'Address not found',
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
      detailAddress: '#Floor - Unit',
      edit: '',
      email: '',
      filterType: 'Address Type',
      name: '',
      pageHeader: '',
      phone: '',
      placeNewOrder: '',
      queryPlaceholder: 'Contact Name, phone #, email, etc.',
      receiver: 'RECIPIENT',
      search: 'SEARCH:',
      sender: 'SENDER',
      streetAddress: '',
      type: '',
      region: 'Region',
    },
    new: {
      createAddress: '',
      pageHeader: '',
      save: 'SAVE & CREATE ANOTHER',
    }
  },
  constants: {
    addressBoxFields: {
      addressTypeReceiver: '',
      addressTypeSender: '',
      company: '',
      destination: '',
      detailAddress: '#Floor - Unit',
      email: '',
      instructions: '',
      phone: '',
      receiver: '',
      sender: '',
      region: 'REGION*',
      parcelId: 'PARCEL ID',
      addressType: 'Address Type',
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
      accounting: 'Accounting Documents',
      agriculture: 'Agriculture, Forestry, Animal Husbandry, Fishing',
      arts: 'Design Work',
      construction: 'Construction Industry',
      culture: 'Culture, Sports, Media and Entertainment',
      education: 'Education',
      electricity: 'Electricity, Heat, Fuel and Water Production and Supply Industry',
      environment: '',
      financial: '',
      healthcare: '',
      hotels: '',
      information: '',
      international: 'International Business Organisations',
      leasing: '',
      legal: '',
      manufacturing: '',
      mining: '',
      others: '',
      professional: '',
      publicAdministration: 'Public administration, Social Security and Social Organisations',
      realEstate: '',
      residentServices: '',
      transport: 'Logistics (Transport, Storage, Postal and Courier Services)',
      wholesale: '',
    },
    orderRequestStatuses: {
      active: 'ACTIVE',
      cancelled: 'CANCELLED',
      completed: 'COMPLETED',
      pending: 'PENDING',
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
      manpower: 'Manpower',
      mover: 'Manpower',
      needCarry: '',
      needCart: 'TROLLEY REQUIRED',
      needCoveredLorry: '',
      needQueueing: '',
      needReceipt: '',
      needTailgate: '',
      newCar: '',
      pcs: (options) => options.count === 1 ? '1 PC' : options.count + ' PCs',
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
      sedan: 'Sedan',
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
        answer: '',
        question: '',
      },
      {
        answer: 'GoGoVan Enterprise is built for any business that has a high demand and need for logistics services. If you are interested, do contact sales@gogovan.sg for more information.',
        question: '',
      },
      {
        answer: '',
        question: '',
      },
      {
        answer: [
          "You may have multiple drop-off locations and are unsure on how to prioritise them. This is when route optimisation can help you maximise your order.",
          "",
          ""
        ],
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
        answer: '',
        question: '',
      },
      {
        answer: 'No, they are not included.',
        question: 'Are ERP and Parking Charges included in the quote?',
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
      proceed: '',
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
      todayAt: (options) => `TODAY @ ${options.time}`,
    },
    messagesCentre: {
      loadMore: '',
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
      copyThis: 'COPY THIS TO SHARE',
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
      item: '',
      licensePlate: '',
      longLoadingTime: 'Exceed Loading Time',
      noGoodsInfo: '',
      notApplicable: '',
      notOnTime: '',
      openLink: '',
      orderNumber: '',
      other: '',
      phoneNumber: '',
      pickupTime: 'PICK-UP TIME:',
      priceBreakdown: '',
      quantity: '',
      rateAndConfirmCompletion: '',
      reachingOut: (options) => (options.count === 0 || !options.count) ? 'Seaching drivers' : (options.count === 1) ? 'Searching 1 driver' : 'Reaching out to ' + options.count + ' drivers',
      remarks: '',
      routeChanged: '',
      routes: '',
      send: '',
      sendViaEmail: '',
      share: '',
      sizeOfGoods: '',
      sms: '',
      totalFee: '',
      url: 'URL',
      vehicle: '',
      weight: '',
      whatWasTheProblem: '',
      orderCompletionConfirmed: 'Order completion confirmed',
    },
    filter: {
      branch: '',
      ordersFrom: 'ORDERS FROM:',
      pickupDate: '',
      queryPlaceholder: '',
      search: '',
      showAll: 'Show all',
      status: '',
      to: '',
      vehicle: '',
    },
    new: {
      actionBar: {
        anOrderMustHaveAtLeastOneWaypoint: 'An order must have at least one way-point.',
        backToEdit: 'BACK TO EDIT',
        bookingMustBeMadeInTheFuture: 'Booking must be made in the future.',
        calculateRoute: '',
        details: 'DETAILS',
        moreVehiclesThanWaypoints: 'You requested more vehicles than way-points.',
        routeOptimizationHelp: '',
        runRouteOptimization: 'Run route optimisation?',
        sameRouteStatement: (options) => `You have ordered <span class="bold">${options.count} vehicle(s)</span> for the same route (amounted <span class="bold">${options.total}</span>) for each.`,
        seeDetails: 'SEE DETAILS',
        shareTheSameRoute: 'SHARE THE SAME ROUTE',
        splitRoute: 'SPLIT ROUTE',
        splitRouteStatement: (options) => `You have ordered <span class="bold">${options.count} vehicle(s)</span> and splitted to <span class="bold">${options.count}</span> route(s).`,
        totalFee: 'TOTAL FEE:',
        totalFeeStatement: '*ERP, manpower and parking fees are not included',
      },
      basicInfo: {
        addInstructions: '',
        edit: '',
        email: '',
        goodsAndServiceSetting: '',
        instructions: '',
        phone: '',
        pickupDate: '',
        pickupPoint: '',
        pickupTime: '',
        sender: '',
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
        numberOfVehicle: '',
        sameRouteStatement: '',
        shareTheSameRoute: '',
        mudou: '',
        mudouDescription: '',
        splitRoute: '',
        splitRouteStatement: 'Automatically optimise and split routes',
        ton1: '',
        ton1_2_and_ton1_4: '',
        ton1_2_and_ton1_4Description: '',
        ton1Description: '',
        van: '',
        vanDescription: 'Good for large quantity of small parcels, boxes, small furniture and pets. Max length of goods: 2.4m',
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
        feeStatement: 'The above fees do not include manpower, ERP, parking fees and all other misc. fees. Please confirm with GoGoVan Account Manager.',
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
        depthInM: '',
        extraServices: '',
        heightInM: '',
        hourlyRental: '',
        hours: '',
        itemPcs: '',
        noHourlyRental: '',
        quantity: '',
        remark: 'Remarks',
        sizeOfGoods: '',
        specialInstructions: '',
        weight: '',
        weightInKg: '',
        widthInM: '',
      },
      index: {
        newOrder: '',
      },
      pickup: {
        newOrder: 'New Order',
        pageHeader: '',
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
        totalFeeStatement: '*ERP, manpower and parking fees are not included',
      }
    },
    view: {
      sender: 'SENDER INFO',
      detail: 'Detail',
      driverInfo: '',
      eta: '',
      exportThisReport: '',
      extraDropoffPoints: (options) => options.count === 1 ? '+1 Drop-off point' : '+' + options.count + ' Drop-off points',
      mapDetail: '',
      mapView: '',
      next: '',
      pageHeader: '',
      pickupTime: '',
      plusReceivers: (options) => options.count === 1 ? '+1 receiver' : '+' + options.count + ' receivers',
      previous: '',
      priceColumn: '',
      receiverInfo: '',
      receivers: '',
      route: '',
      status: '',
      tableView: '',
      todayStatus: '',
      totalAmount: '',
      totalOrders: '',
      vehicle: '',
      showingPage: (options) => `SHOWING PAGE ${options.currentPage} OF ${options.totalPages}`,
      orderNumber: 'ORDER #',
    },
    waypointStatus: {
      arrivedAt: '',
      deliveredAt: '',
      eta: (options) => `ETA ${options.eta}`,
      findingDriver: '',
      pending: '',
    }
  },
  organizations: {
    addressEdit: {
      destination: '',
      detailAddress: '#Floor - Unit',
      editMyOrgAddress: 'Edit My Organisation Address',
      pageHeader: '',
    },
    edit: {
      add: 'Add',
      addABranch: '',
      branchAddress: '',
      branches: '',
      branchName: '',
      cannotRemoveBranchErr: '',
      companyWebsite: '',
      contactPerson: '',
      contactPersonPhone: 'CONTACT NUMBER',
      corporateName: '',
      corporateProfileImage: '',
      detailAddress: '#Floor - Unit',
      editAddress: '',
      editMyOrg: 'Edit My Organisation',
      email: '',
      industry: '',
      mapAddress: '',
      pageHeader: '',
    },
    show: {
      branches: '',
      companyWebsite: '',
      contactPerson: '',
      contactPersonPhone: 'CONTACT NUMBER',
      detailAddress: '',
      editProfile: '',
      email: '',
      industry: '',
      mapAddress: '',
      myOrg: '',
      pageHeader: '',
      salesRepresentative: '',
      unassigned: '',
    }
  },
  popup: {
    merge: {
      dismissAll: '',
      notifStatement: '',
      seeAll: '',
    },
    message: {
      dismiss: 'DISMISS',
      todayAt: (options) => `TODAY @ ${options.time}`,
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
      appStore: 'https://itunes.apple.com/sg/app/gogovan/id708390467?mt=8&ign-mpt=uo%3D4',
      customerHotline: '',
      customerHotlineNumber: '',
      emailPlaceholder: '',
      enterprise: '',
      fb: '',
      ggv: '',
      gPlus: '',
      instagram: '',
      linkedin: '',
      login: '',
      openingHours: '',
      passwordPlaceholder: '',
      phonePlaceholder: '',
      playStore: '',
      rememberMe: '',
      sevenDaysAWeek: '',
      signIn: '',
      slogan: '',
      youtube: '',
    },
    profile: {
      accessLevel: '',
      accMgmt: '',
      address: '',
      branch: '',
      detailAddress: '#Floor - Unit',
      editCorporateProfile: '',
      editMyProfile: '',
      email: '',
      myAcc: '',
      notApplicable: '',
      pageHeader: '',
      phoneNumber: 'Contact Number',
    },
    profileEdit: {
      accessLevel: '',
      branch: 'Branch Number',
      changePassword: '',
      confirmPassword: '',
      currentPassword: '',
      detailAddress: '#Floor - Unit',
      editMyAcc: '',
      email: '',
      master: 'MASTER',
      name: '',
      newPassword: '',
      pageHeader: '',
      passwordMismatch: '',
      phone: 'Contact Number',
      streetAddress: '',
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
      failedToComputeLatLon: '',
      invalidEmailFormat: '',
      invalidFields: 'Invalid fields.',
      invalidNumberFormat: '',
      invalidOrder: 'Invalid order. Please check your data.',
      invalidPhoneNumber: '',
      invalidUsernameOrPassword: 'Username or password is invalid.',
      missingField: 'Missing field',
      passwordMismatch: 'Password mismatch.',
    },
    fields: {
      address: '',
      contactName: '',
    },
    phoneRegexp: /^([36][0-9]{7}|[78][1-9][0-9]{6}|[9][0-8][0-9]{6})$/,
  }
}