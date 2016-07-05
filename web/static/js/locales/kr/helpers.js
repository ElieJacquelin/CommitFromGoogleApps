export default {
  button: {
    chooseFromComputer: '내 컴퓨터에서 선택',
    cancel: '취소',
    saveAndExit: '저장 및 닫기',
    search: '검색',
  },
  accordion: {
    collapsePriceDetails: '닫기',
    expandPriceDetails: '운임 상세',
  },
  addressBox: {
    autocompletePopover: {
      locationSuggestion: '추천 주소',
    },
    index: {
      addALocation: '경유지 추가',
      address: '주소',
      collectOnDelivery: '수금',
      company: '회사명',
      contactName: '이름',
      contactPhone: '핸드폰 번호',
      desiredDeliveryTime: '희망 배송 시간',
      detailAddress: '상세 주소',
      downloadTemplate: '.CSV 경로 데이터 양식 다운로드',
      email: '이메일',
      importRoutes: '.CSV 경로 데이터 업로드',
      notApplicable: '해당 없음',
      remark: '특이사항',
      remarkValue: (options) => `배송 희망 시간 : ${options.desiredDeliveryTime}, 수금 : ${options.collectOnDelivery}, 특이사항 : ${options.remark}`,
      viewAll: '모두',
      region: '지역*',
    }
  },
  datepicker: {
    date: '일자',
    cancel: '취소',
    ok: '확인',
  },
  dialog: {
    cancel: '취소',
    submit: '확인',
  },
  footer: {
    linkList: {
      aboutUs: '고고밴 소개',
      blog: '블로그',
      blogUrl: 'http://blog.gogovan.co.kr',
      business: '사업 분야',
      careers: '커리어',
      contactUs: '고객센터',
      faq: '자주 묻는 질문',
      home: '홈',
      legal: '법적 사항',
      placeOrder: '주문하기',
      pricing: '가격 정책',
      privacy: '개인 정보 보호 정책',
      services: '서비스',
    }
  },
  loading: {
    loading: '읽어오는 중...',
  },
  mapView: {
    driver: '기사',
    eta: '예상 시간',
    license: '운전 면허',
    notApplicable: '해당 없음',
    phone: '핸드폰 번호',
  },
  text: {
    addressNotFound: '주소를 찾을 수 없습니다.',
    required: '필수 입력란입니다.',
  },
  timepicker: {
    cancel: '취소',
    ok: '확인',
  }
}