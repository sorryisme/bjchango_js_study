export function getConstantName(data, id, name='name') {
    for (let i = 0; i < data.length; i+=1) {
      if (data[i].id === id) {
        return data[i][name];
      }
    };
    return '';
  }
  
  export const DELIVERY_STATE_READY = 0;
  export const DELIVERY_STATE_ING = 1;
  export const DELIVERY_STATE_COMPLETED = 2;
  
  export const DELIVERY_STATE = [{
      id: DELIVERY_STATE_READY,
      name: '대기',
      color: 'success',
    }, {
      id: DELIVERY_STATE_ING,
      name: '배송중',
      color: 'danger',
    }, {
      id: DELIVERY_STATE_COMPLETED,
      name: '완료',
      color: 'primary',
  }];
  
  export const PRODUCT_TYPE_WP = 1;
  export const PRODUCT_TYPE_JP = 2;
  export const PRODUCT_TYPE_DT = 3;
  export const PRODUCT_TYPE_SUB = 10000;
  export const PRODUCT_TYPE = [{
    id: PRODUCT_TYPE_WP,
    name: '벽지',
  }, {
    id: PRODUCT_TYPE_JP,
    name: '장판',
  }, {
    id: PRODUCT_TYPE_DT,
    name: '데코타일',
  }, {
    id: PRODUCT_TYPE_SUB,
    name: '부자재',
  }];
  
  export const SITE_ENV_TYPE_EMPTY = 0;
  export const SITE_ENV_TYPE_RESIDENCE = 1;
  export const SITE_ENV_TYPE_MOVE = 2;
  export const SITE_ENV_TYPE_REGIDENCE_NONE = 3;
  export const SITE_ENV_TYPE = [{
    id: SITE_ENV_TYPE_EMPTY,
    name: '빈집',
  }, {
    id: SITE_ENV_TYPE_RESIDENCE,
    name: '거주중',
  }, {
    id: SITE_ENV_TYPE_MOVE,
    name: '이사당일',
  }, {
    id: SITE_ENV_TYPE_REGIDENCE_NONE,
    name: '거주중(짐없슴)',
  },
  ];
  
  export const SITE_ENTRY_TYPE = [{
    id: -1,
    name: '없슴',
  }, {  
    id: 0,
    name: '출입번호 입력하기.',
  }, {  
    id: 1,
    name: '자재 배송 전 연락주세요.',
  }, {  
    id: 2,
    name: '자재 배송일에 이사나갑니다.',
  }, {
    id: 3,
    name: '부동산 혹은 경비실에 미리 말씀드리겠습니다.',
  }, {
    id: 4,
    name: '열쇠를 지정한 장소에 두겠습니다.',
  }, {
    id: 5,
    name: '문 열어두겠습니다.',
  }, {
    id: 6,
    name: '출입번호를 모릅니다. 집 앞에 보관 부탁드립니다.',
  },
  ];
  
  