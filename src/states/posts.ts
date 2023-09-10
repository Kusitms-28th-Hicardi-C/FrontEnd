import { atom } from 'recoil';

export const postListState = atom({
  key: 'postListState',
  default: [
    {
      id: 1,
      name: '하이카디플러스 HiCardi+',
      description: '편리하게 심전도 측정, 전송 및 분석. 더 나은 삶을 위한 스마트한 솔루션 HiCardi+',
      price: 2046000,
      category: '기기 본체',
    },
    {
      id: 2,
      name: '하이카디플러스 HiCardi+ H100',
      description:
        '메모리 내장형 제품편리하게 심전도 측정, 전송 및 분석. 더 나은 삶을 위한 스마트한 솔루션HiCardi+ H100',
      price: 1320000,
      category: '기기 본체',
    },
    {
      id: 3,
      name: '하이카디 HiCardi',
      description: '편리하게 심전도 측정, 전송 및 분석. 더 나은 삶을 위한 스마트한 솔루션 HiCardi+',
      price: 2046000,
      category: '기기 본체',
    },
    {
      id: 4,
      name: '부정맥 전문의 원격 판독 서비스',
      description: '임상병리사와 부정맥 전문의가 부정맥 진단 및 레포트 발행을 대행',
      price: 27500,
      category: '추가 서비스',
    },
    {
      id: 5,
      name: '심전도 전극 리필, 대형 20매',
      description: '하이카디플러스 H100, 하이카디플러스 전용 리필 전극',
      price: 22000,
      category: '추가 용품',
    },
    {
      id: 6,
      name: '심전도 전극 리필, 소형 20매',
      description: '하이카디 전용 리필 전극',
      price: 16500,
      category: '추가 용품',
    },
    {
      id: 7,
      name: '노닌 펄스옥시미터 3150',
      description: '하이카디 플러스와 연동이 가능한 손목밴드형 산소포화도 측정 장비',
      price: 1540000,
      category: '추가 용품',
    },
    {
      id: 8,
      name: '노닌 펄스옥시미터 3230',
      description: '하이카디 플러스와 연동이 가능한 클립형 산소포화도 측정 장비',
      price: 550000,
      category: '추가 용품',
    },
    {
      id: 9,
      name: '갤럭시A13',
      description: '하이카디 서비스에 필요한 스마트폰(미개통)',
      price: 275000,
      category: '추가 용품',
    },
  ],
});
