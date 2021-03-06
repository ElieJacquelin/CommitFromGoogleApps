{
  dialog: {
    badAttitude: '',
    branch: '',
    cancel: '',
    cbm: '',
    confirmOrderComplete: '',
    copy: '',
    copyThis: '????????',
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
    item: '??',
    licensePlate: '',
    longLoadingTime: '??????',
    noGoodsInfo: '',
    notApplicable: 'N/A',
    notOnTime: '',
    openLink: '',
    orderNumber: (options) => `?? #${options.id}`,
    other: '',
    phoneNumber: '',
    pickupTime: '',
    priceBreakdown: '',
    quantity: '',
    rateAndConfirmCompletion: '',
    reachingOut: (options) => (options.count === 0 || !options.count) ? '??????' : (options.count === 1) ? '?1??????' : '?' + options.count + '??????',
    remarks: '',
    routeChanged: '',
    routes: '',
    send: '',
    sendViaEmail: '???????????????????',
    share: '',
    sizeOfGoods: '',
    sms: '',
    totalFee: '',
    url: '???',
    vehicle: '',
    weight: '',
    whatWasTheProblem: '',
    orderCompletionConfirmed: '???????',
  },
  filter: {
    branch: '',
    ordersFrom: '????',
    pickupDate: '',
    queryPlaceholder: '',
    search: '',
    showAll: '????',
    status: '',
    to: '',
    vehicle: '',
  },
  new: {
    actionBar: {
      anOrderMustHaveAtLeastOneWaypoint: '?????????????',
      backToEdit: '????',
      bookingMustBeMadeInTheFuture: '??????????',
      calculateRoute: '',
      details: '????',
      moreVehiclesThanWaypoints: '???????????',
      routeOptimizationHelp: '',
      runRouteOptimization: '???????',
      sameRouteStatement: (options) => `??<span class="bold">${options.count}</span>????<span class="bold">${options.count}</span>????????`,
      seeDetails: '????',
      shareTheSameRoute: '???????',
      splitRoute: '????',
      splitRouteStatement: (options) => `??<span class="bold">${options.count}</span>????<span class="bold">${options.count}</span>??????`,
      totalFee: '?????',
      totalFeeStatement: '*????????????????',
    },
    basicInfo: {
      addInstructions: '',
      edit: '',
      email: '',
      goodsAndServiceSetting: '',
      instructions: '',
      phone: '',
      pickupDate: '????',
      pickupPoint: '',
      pickupTime: '',
      sender: '',
    },
    basicInfoSplitOptions: {
      mudou9: '',
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
      numberOfVehicle: '',
      sameRouteStatement: '',
      shareTheSameRoute: '',
      mudou: '',
      mudouDescription: '',
      splitRoute: '',
      splitRouteStatement: '',
      ton1: '',
      ton1_2_and_ton1_4: '',
      ton1_2_and_ton1_4Description: '',
      ton1Description: '',
      van: '',
      vanDescription: '',
      vehicleType: '',
      sbread: '?????',
      mbread: '?????',
      lbread: '?????',
      struck: '????',
      mtruck: '????',
      ltruck: '????',
      sltruck: '?????',
      tricycle: '???',
      sbreadDescription: '??: 0.6? ??(?): 1.7?/1.1?/1.1?',
      mbreadDescription: '??: 0.8? ??(?): 2.0?/1.3?/1.4?',
      lbreadDescription: '??: 1.2? ??(?): 2.6?/1.6?/1.6?',
      struckDescription: '??: 1.5? ??(?): 2.8?/1.6?/1.6?',
      mtruckDescription: '??: 3? ??(?): 4.2?/2.0?/2.0?',
      ltruckDescription: '??: 7? ??(?): 6.8?/2.3?/2.3?',
      sltruckDescription: '??: 15? ??(?): 9.6?/2.5?/2.6?',
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
      depthInM: '',
      extraServices: '',
      heightInM: '',
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
      widthInM: '',
    },
    index: {
      newOrder: '',
    },
    pickup: {
      newOrder: '???',
      pageHeader: '',
    },
    reorder: {
      dragAndDrop: '????????',
      editOrder: '????',
      reviewOrder: '????',
      route: (options) => `?? ${options.number}`,
      splitRoute: '????',
      splitRouteStatement: (options) => `??????<span class="bold">${options.count}???</span> ???? <span class="bold">${options.count}</span> ???.`,
      totalFee: '?????',
      totalFeeOfThisRoute: '???????',
      totalFeeStatement: '*????????????????',
    }
  },
  view: {
    sender: '?????',
    detail: '??',
    driverInfo: '',
    eta: '',
    exportThisReport: '',
    extraDropoffPoints: (options) => `${options.count}???`,
    mapDetail: '',
    mapView: '',
    next: '???',
    pageHeader: '',
    pickupTime: '',
    plusReceivers: (options) => `?? ${options.count}????`,
    previous: '???',
    priceColumn: '',
    receiverInfo: '',
    receivers: (options) => `${options.count}???`,
    route: '',
    status: '',
    tableView: '',
    todayStatus: (options) => `???????${options.active} ???? ; ${options.pending} ??????; ${options.completed} ????; ${options.cancelled} ????`,
    totalAmount: '',
    totalOrders: (options) => `?????${options.count}`,
    vehicle: '',
    showingPage: (options) => `?${options.currentPage}???${options.totalPages}?`,
    orderNumber: '?????',
  },
  waypointStatus: {
    arrivedAt: (options) => `??? ${options.time}`,
    deliveredAt: (options) => `????? ${options.time}`,
    eta: (options) => `?????? ${options.eta}`,
    findingDriver: '',
    pending: '',
  }
}