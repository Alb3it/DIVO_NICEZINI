import styled from 'styled-components';
import { useDetectOutsideClick } from '@hooks';
import { dateToString } from '@functions';
import { useRef } from 'react';
import { Calendar } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import * as locales from 'react-date-range/dist/locale';

export default function Picker({ scale = 0, date, setDate, minDate, maxDate = new Date() }){
  const pickerRef = useRef(null);
  const [ showCalendar, setShowCalendar ] = useDetectOutsideClick(pickerRef, false);
  
  return (
    <S.Flex ref={pickerRef}>
      <S.Date onClick={() => setShowCalendar(s => !s)}>
        {dateToString(date, scale)}
      </S.Date>
      {showCalendar &&
        <div>
          <S.CalStyle>
            <Calendar
              color={'black'} 
              date={date}
              onChange={d => setDate(d)}
              locale={locales['ko']}
              direction="horizontal"
              maxDate={maxDate}
              minDate={minDate}
            />
          </S.CalStyle>
        </div>
      }
    </S.Flex>
  );
}

const S = {};

S.Flex = styled.div`
  display: flex;
  align-items: center;
`;

S.CalStyle = styled.div`
  position: absolute;
  border-radius: 20px;
  z-index: 2;
  transform: translate(-100%, 28.5px);
  display: flex;
  flex-flow: column;
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: saturate(180%) blur(20px);
  box-shadow: 2px 4px 12px rgb(0 0 0 / 8%);

  .rdrCalendarWrapper{
    background: none;
  }

  .rdrDayToday .rdrDayNumber span:after{
    background: #1d1d1f;
  }

  .rdrSelected{
    background: #1d1d1f;
  }

  .rdrDayHovered span{
    border-color: #1d1d1f;
  }

  .rdrPprevButton, .rdrNextButton{
    background: none;
  }

  .rdrMonthPicker select, .rdrMonthPicker select option{
    font-family: 'Pretendard';
    color: #1d1d1f;
  }

  .rdrYearPicker select, .rdrYearPicker select option{
    font-family: 'Pretendard';
    color: #1d1d1f;
  }

  .rdrMonthName{
    color: #1d1d1f;
    font-weight: bold;
  }

  .rdrWeekDay{
    color: #515154;
  }

  .rdrDay span{
    color: #1d1d1f;
  }

  .rdrDayPassive span{
    opacity: .5;
  }

  .rdrMonthPicker select, .rdrYearPicker select{
    font-weight: bold;
  }

  .rdrMonthPicker select option, .rdrYearPicker select option{
    background: #f5f5f7;
  }

  .rdrYearPicker select::-webkit-scrollbar {
    width: 6px;
    height: 8px;
    border-radius: 6px;
    background: rgb(255, 255, 255, 0.4);
  }
  .rdrYearPicker select::-webkit-scrollbar-thumb {
    background-color: rgb(0, 0, 0, 0.2);
    border-radius: 6px;
  }
`;

S.Date = styled.div`
  width: 100px;
  padding: 10px 0;
  display: flex;
  &:hover{
    cursor: pointer;
    opacity: 1;
  }
  align-items: center;
  justify-content: center;
  font-weight: normal;
  font-size: 14px;
  color: #1d1d1f;
  opacity: .8;
`;