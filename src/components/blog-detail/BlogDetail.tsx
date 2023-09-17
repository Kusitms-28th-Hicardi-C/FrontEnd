import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import { post } from '../../interfaces/post';
import blogList from '../../data/blog.json';

const BlogDetailBlock = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 3rem;

  h1 {
    margin-bottom: 0.5rem;
    font-size: 2rem;
    text-align: center;

    @media screen and (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  h5 {
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.gray4};
    font-size: 1rem;
    font-weight: 500;
    text-align: center;
  }

  img {
    width: 100%;
    border-radius: 8px;
    margin-bottom: 2rem;
  }

  h2 {
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
    font-weight: 600;
  }

  p {
    text-align: start;
    margin-bottom: 1.5rem;
  }

  @media screen and (max-width: 992px) {
    padding-right: 2rem;
    padding-left: 2rem;
  }
`;

const SmallTextAndLink = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  small {
    color: ${({ theme }) => theme.colors.gray5};
  }

  a {
    background-color: ${({ theme }) => theme.colors.blue4};
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
  }
`;

const BlogDetail = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<post | null>(null);

  useEffect(() => {
    if (postId === '') {
      navigate(-1);
    } else {
      const foundedPost: post = blogList.filter((post) => post.id === Number(postId))[0];
      setPost(foundedPost);
    }
  }, []);

  return (
    <BlogDetailBlock>
      <h1>{post?.title}</h1>
      <h5>{post?.category}</h5>
      <SmallTextAndLink>
        <small>4분 전 | {post?.date}</small>
        <Link to="/blog">블로그 목록 보기</Link>
      </SmallTextAndLink>
      <img src={post?.imageUrl} alt="블로그 이미지" />
      <p>
        14일 업계에 따르면 동아에스티는 의료기기업체 제이에스온과 고주파 온열 장비 ‘Hiper 330’의 국내 독점판매 계약을
        체결했다. 제이에스온은 고주파 RF 특화기술을 기반으로 한 고주파 의료 장비 전문기업이다. 고주파 자극기는 10만Hz
        이상의 고주파 파동 에너지를 인체에 가해 각종 근골격계 염증과 통증을 완화시키는 의료기기다.고주파 온열 장비 Hiper
        330은 기존 제품들과 다르게 가변 주파수를 적용했다는 점이 가장 큰 차이다. 인체의 정상조직과 비정상조직 간 서로
        다른 저항값에 따라 주파수가 자동으로 변조되면서 출력도 자동 가변되며 통증 치료에 효과적이라는 평가다. 고주파
        자극기의 화상 및 스파크 발생 부작용도 개선한 첨단 의료기기다.최근 들어 동아에스티는 의료기기 전문 업체와 제휴를
        통한 신제품 도입에 적극적인 행보를 나타내고 있다. 동아에스티는 지난 7월 메쥬와 심전도 원격 모니터링 플랫폼
        ‘하이카디’ 국내 판권 계약을 맺었다. 메쥬는 웨어러블 심전도 패치와 다중 환자를 실시간 모니터링 할 수 있는
        플랫폼을 개발하고 있는 디지털 헬스케어 기업이다. 이 계약으로 동아에스티는 메쥬서 공급받은 심전도 원격 플랫폼
        ‘하이카디’ ‘하이카디플러스’ ‘라이브스튜디오’ 등을 의료기관에 판매한다. 동아에스티는 7월 메디튤립과 내시경용
        자동봉합기 국내 독점 판매 계약도 체결했다. 이 계약으로 메디튤립은 내시경용 자동봉합기 ‘Endo Blossom과 ‘Endo
        Stem’을 동아에스티에게 독점적으로 공급한다. 동아에스티는 이들 제품의 허가 이후 국내 판매와 마케팅 활동을
        담당한다.지난 두 달 동안 의료기기 업체 3곳과 제휴를 통해 다양한 신제품을 확보한 셈이다. 지난해 11월에는
        넥스트바이오메디컬과 손 잡고 내시경용 지혈제 판매도 나섰다.의료기기 사업을 주력사업으로 육성하겠다는 강력한
        의지로 풀이된다. 동아에스티는 지난 1982년 의료기기 사업부를 설립했다. 글로벌 의료기기 제조사들과 파트너십을 맺고
        다양한 의료기기 제품을 국내로 수입해 판매하고 있다. 동아에스티는 지난 2013년 3월 옛 동아제약이 분할되면서 신설된
        법인이다. 전문의약품, 의료기기·진단, 해외 사업 등을 담당한다. 지난해 동아에스티의 의료기기·진단 사업 매출은
        625억원을 기록했다. 이 중 의료기기 사업 매출은 131억원이다.
      </p>
    </BlogDetailBlock>
  );
};

export default BlogDetail;
