/* global kakao */
import { chartPalette } from "@/styles/Colors";
import { addDays } from 'date-fns';

//chart functions
export const applyStyleToChart = (chartData, mode) => {
  chartData?.datasets?.forEach((element, index) => {
    element.borderColor = chartPalette[mode][index] + 'ff';
    element.backgroundColor = chartPalette[mode][index] + '33';
    if(mode === 'trend'){
      if(index%2 === 1) element.borderDash = [10, 5];
    }
  })
  return chartData;
}

export const applyStyleToMapChart = (chartData, isWhite = false, isBar = false) => {
  chartData?.datasets?.forEach((element, index) => {
    element.borderColor = isBar ? '#f5f5f7b3' : isWhite ? '#f5f5f7' : 'rgb(38, 59, 77)';
    element.backgroundColor = context => {
      if(isBar){
        return isWhite ? '#f5f5f7b3' : '#263b4d93';
      }
      const chart = context.chart;
      const { ctx } = chart;
      const gradient = ctx.createLinearGradient(0, 0, 0, 120);
      gradient.addColorStop(0, isWhite ? 'rgba(245, 245, 247, 0.8)' : 'rgba(38, 59, 77, 0.8)');
      gradient.addColorStop(1, isWhite ? 'rgba(245, 245, 247, 0)' : 'rgba(38, 59, 77, 0)');
      return gradient;
    };
    element.fill = 'start';
    if(isBar) element.borderRadius = 2;
  })
  return chartData;
}

export const applyStyleToPieChart = (chartData) => {
  chartData?.datasets?.forEach((element, index) => {
    element.backgroundColor = chartPalette['map'];
    element.borderColor = '#f5f5f733';
  })
  return chartData;
}

export const applyMultiAxisToChart = (chartData) => {
  chartData.datasets[0].yAxisID = 'y';
  chartData.datasets[1].yAxisID = 'y1';
  chartData.datasets[1].type = 'bar';
  return chartData;
}

//date functions
const toThursday = (date) => {
  return addDays(date, date.getDay() ? 4-date.getDay() : -3)
}

const getMonthWeek = (date) => {
  const thursday = toThursday(date)
  var [ day, month, year ] = [ thursday.getDate(), thursday.getMonth()+1, thursday.getFullYear() ]
  if(month < 10){
    month = '0' + month;
  }
  return `${year}-${month} ${Math.floor((day+6)/7)}주차`
}

export const dateToString = (date, scale = 0) => {
  let [ year, month, day ] = [ date.getFullYear(), date.getMonth()+1, date.getDate() ]
  if(month < 10){
    month = '0' + month;
  }
  if(day < 10){
    day = '0' + day;
  }
  switch(scale){
    case 0:
      return `${year}-${month}-${day}`;
    case 1:
      return getMonthWeek(date);
    case 2:
      return `${year}-${month}`;
    case 3:
      return year;
    default:
      break;
  }
}

export const lastMonthDay = () => {
  let today = new Date();
  today.setDate(0);
  return today;
}

//section order
export const createSectionOrderString = (orderList) => {
  let string = '';
  for(var i=0; i<orderList.slice(0, 10).length; i++){
    string += orderList[i];
    if(i < Math.min(orderList.length-1, 9)) string += ' > ';
  }
  return string;
}

//table
export const sortComma = (rowA, rowB, id, desc) => {
  let a = rowA.values[id].replaceAll(',', '');
  let b = rowB.values[id].replaceAll(',', '');
  if(a === '< 10') a = 9;
  if(b === '< 10') b = 9;
  if(Number(a) > Number(b)) return 1;
  if(Number(a) < Number(b)) return -1;
  return 0;
};


export const showPopup = (map, popup, marker) => {
  popup.open(map, marker);
  let popupList = document.querySelectorAll('.popup');
  for(const popupElement of popupList){
    popupElement.parentElement.previousSibling.style.display = "none";
    popupElement.parentElement.parentElement.style.border = 'none';
    popupElement.parentElement.parentElement.style.background = 'unset';
    popupElement.parentElement.style.left = "50%";
    popupElement.parentElement.style.marginLeft = "20px";
    popupElement.parentElement.style.top = "40px";
  }
  marker.setZIndex(2);
};

export const showArea = (map, polygon, area, move = false) => {
  polygon.setMap(null);
  let path = [];
  area.convex.forEach(point => {
    path.push(new kakao.maps.LatLng(point[0], point[1]));
  });
  polygon.setPath(path);
  polygon.setMap(map);
  if(move) map.panTo(new kakao.maps.LatLng(area.center.lat, area.center.lon));
}