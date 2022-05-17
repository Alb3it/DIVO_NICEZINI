import styled from 'styled-components';
import Picker from '@/components/Picker';

export default function RangePicker({ scale = 0, startDate, endDate, setStartDate, setEndDate, minDate, maxDate }){
  return (
    <S.Flex>
      <Picker
        scale={scale}
        date={startDate}
        setDate={setStartDate}
        maxDate={endDate}
        minDate={minDate}
      />
      <S.Border>|</S.Border>
      <Picker
        scale={scale}
        date={endDate}
        setDate={setEndDate}
        minDate={startDate}
        maxDate={maxDate}
      />
    </S.Flex>
  )
}

const S = {};

S.Flex = styled.div`
  display: flex;
  align-items: center;
  font-weight: normal;
`;

S.Line = styled.div`
  margin: 0 5px;
  border-right: 1px solid #1d1d1f;
`;

S.Border = styled.div`
  color: #515154;
  margin: 0 3px;
`;