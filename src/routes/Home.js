import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

export default function Home(){
  const navigate = useNavigate();
  return (
    <S.Box>
      <S.TitleBox>
        1. 외식소비의도 상세분석
      </S.TitleBox>
      <S.TextBox>
        이 페이지에서는 각 기준별 외식소비의도를 분석합니다. 기준은 크게 세 가지로, 행정구역, 키워드상권, 그리고 음식점별입니다. <br/>
        모든 탭에서, 우측 아래의 csv 다운받기 버튼을 누르시면 현재 표의 모든 페이지에 있는 데이터를 csv로 변환하여 다운로드합니다. 
      </S.TextBox>
      <S.SmallTitleBox>
        1-1. 행정구역 기준
      </S.SmallTitleBox>
      <S.TextBox>
        행정구역 기준은 크게 네 가지 수준이 있습니다. 중복 선택은 같은 수준에서만 가능합니다. 즉 서울특별시와 부산광역시는 동시선택이 가능하나, 종로구와 부산광역시는 불가합니다.
      </S.TextBox>
      <S.SmallTitleBox>
        1-2. 키워드 상권 기준
      </S.SmallTitleBox>
      <S.TextBox>
        키워드 상권을 기준으로 보기 위해서는 우선 분석하고자 하는 키워드를 검색해야 합니다. <br/>
        예를 들어 '홍대'라는 키워드를 포함하는 상권을 분석하고 싶다면, '홍대'를 검색한 뒤 나오는
        결과에서 분석하고자 하는 상권들을 선택하시면 됩니다. 이는 키워드에 관계없이 중복선택 가능합니다. '홍대'를 검색하여 '홍대입구역 맛집'을 선택한 뒤 다시 '연남'을 검색하여 '연남동 맛집'
        도 선택 가능합니다.
      </S.TextBox>
      <S.SmallTitleBox>
        1-3. 음식점 기준
      </S.SmallTitleBox>
      <S.TextBox>
        원하는 키워드를 음식점 탭에서 검색하면, 해당 키워드를 포함한 음식점들의 외식소비의도가 나옵니다. 3글자 이상만 검색 가능합니다.
      </S.TextBox>
      <S.TitleBox>
        2. 키워드 상권분석
      </S.TitleBox>
      <S.TextBox>
        지도를 보며 키워드 상권을 중심으로 외식소비의도를 분석합니다. 기본적으로 지도에는 행정구역과 키워드상권이 표시됩니다. <br/>
        키워드 상권이란, 해당 키워드를 검색하는 사람들이 해당 키워드라고 인식하는 지역의 범위입니다. <br/>
      </S.TextBox>
      <S.Image w="580px"src="img/kw_left_panel.png"/>
      <S.TextBox>
        지도는 크게 네 부분으로 이루어져 있습니다. 좌측 메인 패널과 조작 버튼, 지도, 그리고 우측 보조패널입니다.
        좌측 패널에서는 해당하는 행정구역에서 분석된 외식소비의도를 표기합니다. 지도의 한 부분을 클릭할 경우 지도의 현재 레벨에서 선택된 행정구역의 구체적인 정보를 좌측에 표시합니다. <br/>
        메인 패널의 하단에 있는 주요 상권, 업종, 상위 20개 점포를 선택하면 우측 보조패널에 구체적인 정보가 표시됩니다. <br/>
      </S.TextBox>
      <S.Image src="img/kw_button.png"/>
      <S.TextBox>
        좌측 패널 옆에 있는 필터 버튼은 조작버튼 중 지역 필터입니다. 검색할 때 결과의 지역을 제한시켜 줍니다.<br/>
        포크와 나이프 버튼은 전국 상위 20개 점포를 보여줍니다.<br/>
        비율 버튼은 메인 패널의 지역을 전국으로 설정합니다.<br/>
        마지막 설정 버튼은 지도의 지역 경계 수준을 설정합니다. 평소에는 현재 지도의 줌 레벨에 따라 표시하지만, 이 버튼으로 경계 수준을 임의로 설정할 수 있습니다.<br/>
      </S.TextBox>
      <S.Image w="200px" src="img/kw_search.png"/>
      <S.TextBox>
        좌측에서 키워드를 검색하면 해당 키워드를 포함하는 지역, 상권, 업종, 점포를 모두 보여줍니다. <br/>
        지역을 선택하면 해당 지역으로 지도가 이동하고, 좌측 메인패널에 지역이 활성화됩니다.<br/>
        상권을 선택하면 해당 상권 정보가 보조패널에 활성화되고, 해당 키워드 상권의 경계가 지도에 표시됩니다.<br/>
        업종을 선택하면 해당 업종 정보가 보조패널에 활성화됩니다.
        점포를 선택하면 해당 점포로 지도가 이동하고, 지도의 식당 표시에서 우측 하단의 아이콘을 클릭하면 해당 점포의 우측 보조패널이 활성화됩니다.<br/>
      </S.TextBox>
      <S.TitleBox>
        3. 급등락 키워드
      </S.TitleBox>
      <S.TextBox>
        키워드 검색량의 급격한 변화를 감지하기 위한 페이지입니다. <br/>
        검색량의 추세 단위기간을 먼저 설정합니다. 일, 주, 월, 년이 있습니다.<br/>
        그 후 관찰하고자 하는 키워드의 카테고리를 설정합니다. 키워드, 업종, 행정구역, 음식점이 있습니다.<br/>
        검색을 클릭하면 상승률과 하락률의 크기가 큰 순서대로 표에 표시합니다. 나머지 사용방법은 외식소비의도 상세분석 페이지와 동일합니다.
      </S.TextBox>
    </S.Box>
  );
}

const S = {};

S.Image = styled.img`
  display: flex;
  width: ${props=>props.w};
  height: ${props=>props.h};
  border-radius: 15px;
  margin-left: 10px;
`;

S.TitleBox = styled.div`
  display: flex;
  font-size: 23px;
  font-weight: 700;
  margin-top: 25px;
`;

S.SmallTitleBox = styled.div`
  display: flex;
  font-size: 20px;
  font-weight: 600;
  margin-top: 12px;
`;

S.TextBox = styled.p`
  margin-top: 10px;
  line-height: 180%;
  display: flex;
  font-size: 17px;
  font-weight: 500;
  margin-left: 10px;
`;

S.Box = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  justify-content: start;
  align-items: start;
  height: 100%;
  padding: 20px 0;
`;