import { sortComma } from '@functions';
import Loading from '@/components/Loading';

//contract
export const contractText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin dapibus elit a suscipit. Pellentesque volutpat suscipit tincidunt. Donec vitae elit id metus consequat posuere. Maecenas vitae arcu et lorem tristique porttitor. Praesent non arcu sit amet ligula fringilla auctor sed in metus. Duis mattis lorem velit, ut congue nibh sagittis non. In vestibulum turpis ac sapien faucibus, sed tincidunt dui semper. Proin sed erat sed tellus blandit tempor. Etiam sed eleifend augue, at consequat neque. Duis ullamcorper eros vel purus faucibus varius. Curabitur dictum purus id sapien faucibus lacinia. Fusce eu lobortis metus, id gravida ligula. Quisque laoreet velit eros, eget dignissim leo volutpat eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin dapibus elit a suscipit. Pellentesque volutpat suscipit tincidunt. Donec vitae elit id metus consequat posuere. Maecenas vitae arcu et lorem tristique porttitor. Praesent non arcu sit amet ligula fringilla auctor sed in metus. Duis mattis lorem velit, ut congue nibh sagittis non. In vestibulum turpis ac sapien faucibus, sed tincidunt dui semper. Proin sed erat sed tellus blandit tempor. Etiam sed eleifend augue, at consequat neque. Duis ullamcorper eros vel purus faucibus varius. Curabitur dictum purus id sapien faucibus lacinia. Fusce eu lobortis metus, id gravida ligula. Quisque laoreet velit eros, eget dignissim leo volutpat eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin dapibus elit a suscipit. Pellentesque volutpat suscipit tincidunt. Donec vitae elit id metus consequat posuere. Maecenas vitae arcu et lorem tristique porttitor. Praesent non arcu sit amet ligula fringilla auctor sed in metus. Duis mattis lorem velit, ut congue nibh sagittis non. In vestibulum turpis ac sapien faucibus, sed tincidunt dui semper. Proin sed erat sed tellus blandit tempor. Etiam sed eleifend augue, at consequat neque. Duis ullamcorper eros vel purus faucibus varius. Curabitur dictum purus id sapien faucibus lacinia. Fusce eu lobortis metus, id gravida ligula. Quisque laoreet velit eros, eget dignissim leo volutpat eget."

// iterable arrays

export const menuList = [
  {title: '키워드 분석', url: '/keyword-analysis'},
  {title: '검색 노출도', url: '/vp-rank'},
  {title: '키워드 평가', url: '/keyword-score'},
  {title: '매출액 분석', url: '/sales-analysis'},
  // {title: '트렌드 분석', url: '/'},
  // {title: '키워드 매출 연관성', url: '/'},
  {title: '음식점 순위', url: '/rank'},
  {title: '커뮤니티', url: '/community/board=information'},
];

export const subMenuUrlList = [
  ['/keyword-analysis/search-qty', '/', '/', '/', '/'],
  ['/', '/', '/', '/', '/'],
  ['/', '/', '/', '/', '/'],
  ['/', '/', '/', '/', '/', '/'],
  ['/', '/', '/', '/', '/'],
  ['/', '/', '/', '/', '/'],
];

export const subMenuList = [
  ['키워드 검색량 및 추세', '콘텐츠 발행량 및 추세', '검색자 특성', '온라인 마케팅 정보', '검색량 현황 및 추세 분석'],
  ['매출액 현황', '결제단가 현황', '결제건수 현황', '재방문 고객 현황', '신규 고객 현황'],
  ['최석우', '주형진', '이상현'],
  ['검색량', '요일별 검색 비율', '평일/주말 검색 비율', '연령별 검색 비율', '성별 검색 비율', '기기별 검색 비율'],
  ['내 순위', '상권별 순위', '업종별 순위'],
  ['커뮤니티']
]

export const keywordCommentList = [
  {
    title: '검색량 현황',
    details: [
      '키워드 조회수 증감은 시장 수요의 증감으로 연결됩니다.',
      '지속적으로 소비자들이 자사 관련 키워드를 검색할 수 있도록 온라인 마케팅 활동을 해야 합니다.'
    ]
  },
  {
    title: '검색량 단기 추세',
    details: [
      '일반적으로 단기 추세는 점포, 업종, 상권의 도입기와 성장기 단계로 볼 수 있습니다. ',
      '정상적으로 도입기를 지나 성장기로 진입하고 있는지 판단하여 성장세로 진입할 수 있는 전략을 수립해야 합니다.'
    ]
  },
  {
    title: '검색량 중기 추세',
    details: [
      '일반적으로 중기 추세는 점포, 업종, 상권의 성장기와 성숙기 단계로 볼 수 있습니다. ',
      '정상적으로 성장세를 이어가고 있는지, 아니면 이미 성숙기를 넘어서고 있는지 판단하여 전략을 수립해야 합니다.'
    ]
  },
  {
    title: '검색량 장기 추세',
    details: [
      '일반적으로 장기 추세는 점포, 업종, 상권의 성숙기에서 쇠퇴기로 넘어갈 수 있는 단계로 볼 수 있습니다.',
      '점포, 업종, 상권이 쇠퇴기로 접어드는 증상이 나타나고 있다면 새롭게 상승세를 유지할 수 있는 전략을 수립해야 합니다.'
    ]
  },
]

export const userStatComment = [
  '검색자들이 이용하는 키워드 유형과 연령, 성별에 따라 기기의 비중이 달라집니다.',
  '일반적으로 검색자 중 여성이 비중이 높을수록 매출이 높은 경향이 있습니다.',
  '검색자의 요일별 비중이 실제 매장을 이용하는 고객의 요일별 비중과 유사한지 확인해야 합니다.',
  '월별 멘트',
  '검색자의 연령별 비중이 실제 매장을 이용하는 고객의 연령별 비중과 유사한지 확인해야 합니다.'
]

export const marketIndexComment = {
  title: '마케팅 데이터',
  details: [
    '네이버 색션 배치 순서, View 검색결과, 연관검색어 등 키워드 마케팅에 필요한 정보를 제공합니다'
  ]
};

export const compareMenuList = [
  ['일 매출액', '결제단가', '일 결제건수', '재방문자 매출 비율'],
  ['일 매출액', '결제단가', '일 결제건수', '저녁 매출 비율', '재방문자 매출 비율'],
  ['일 매출액', '결제단가', '일 결제건수']
]

export const maxChartTab = [3, 4, 2]; //for SalesCompare.js

export const compareChartUnit = ['원', '원', '건', '%', '%'];

export const statBoxTemplate = (stats, loading) => ({ // for StatBox.js
  catsec: [
    [
      {
        statName: 'View 순위',
        pop: '키워드 검색 시 View 탭에서 내 브랜드 노출 순위로 30위까지 집계됩니다.',
        index: loading ? <Loading size={16} align='left' /> : stats?.score?.view?.rank===31 ? '30+위' : stats?.score?.view?.rank + '위'
      },
      {
        statName: 'View DPR',
        pop: 'View DPR(Delta Per Rank)은 해당 키워드에서 View 순위가 각각 1위 상승·하락했을 때 예상되는 주 매출액 변화량입니다.',
        index: loading ? <Loading size={16} align='left' /> : stats?.score?.view?.efficiency[0] + '원 / ' + stats?.score?.view?.efficiency[1] + '원'
      },
      {
        statName: 'View CPR',
        pop: 'View CPR(Cost Per Rank)은 해당 키워드에서 View 상위노출 난이도를 나타내는 지표로 값이 클수록 상위노출이 어려운 키워드임을 뜻합니다.',
        index: loading ? <Loading size={16} align='left' /> : stats?.cost?.viewCPR
      },
      {
        statName: 'View RI',
        pop: 'View RI(Recommendation Index)는 해당 키워드의 View DPR·CPR로 계산된 마케팅 효율 지표입니다. 값이 클수록 View 마케팅에 추천되는 키워드입니다.',
        index: loading ? <Loading size={16} align='left' /> : stats?.difficulty?.viewRI
      },
    ],
    [
      {
        statName: 'Place 순위',
        pop: '키워드 검색 시 Place 탭에서 내 브랜드 노출 순위로 50위까지 집계됩니다.',
        index: loading ? <Loading size={16} align='left' /> : stats?.score?.place?.rank === 51 ? '51+위' : stats?.score?.place?.rank + '위'
      },
      {
        statName: 'Place DPR',
        pop: 'Place DPR(Delta Per Rank)은 해당 키워드에서 Place 순위가 각각 1위 상승·하락했을 때 예상되는 주 매출액 변화량입니다.',
        index: loading ? <Loading size={16} align='left' /> : stats?.score?.place?.efficiency[0] + '원 / ' + stats?.score?.place?.efficiency[1] + '원'
      },
      {
        statName: 'Place CPR',
        pop: 'Place CPR(Cost Per Rank)은 해당 키워드에서 Place 상위노출 난이도를 나타내는 지표로 값이 클수록 상위노출이 어려운 키워드임을 뜻합니다.',
        index: loading ? <Loading size={16} align='left' /> : stats?.cost?.placeCPR
      },
      {
        statName: 'Place RI',
        pop: 'Place RI(Recommendation Index)는 해당 키워드의 Place DPR·CPR로 계산된 마케팅 효율 지표입니다. 값이 클수록 Place 마케팅에 추천되는 키워드입니다.',
        index: loading ? <Loading size={16} align='left' /> : stats?.difficulty?.placeRI
      },
    ]
  ],
  brand: [
    [
      {
        statName: '평균 검색량',
        pop: '최근 6개월간 해당 키워드의 일평균 검색량입니다.',
        index: loading ? <Loading size={16} align='left' /> : (stats?.score?.avgSearch + '건')
      },
      {
        statName: '컨텐츠 포화도',
        pop: '컨텐츠 포화도는 해당 키워드의 검색량 대비 발행되는 컨텐츠 수를 나타낸 지표입니다.',
        index: loading ? <Loading size={16} align='left' /> : Math.round(stats?.score?.contentSaturation*100) + '%'
      },
      {
        statName: 'Brand EPS',
        pop: 'Brand EPS(Earning Per Search)는 해당 키워드 검색량이 1건 증가할 때 주 매출액 예상 증가량입니다.',
        index: loading ? <Loading size={16} align='left' /> : stats?.score?.EPS + '원'
      },
      {
        statName: 'Brand VPS',
        pop: 'Brand VPS(Visit Per Search)는 해당 키워드 검색량이 1건 증가할 때 예상되는 추가 방문자 수입니다.',
        index: loading ? <Loading size={16} align='left' /> : stats?.score?.VPS + '팀'
      },
    ]
  ]
});

//chart options

export const mapLineOptions = (unit = '', reverse = false, isWhite = false) => {
  let options = {
    responsive: true,
    interaction: {
      intersect: false,
      mode: 'index'
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        grid: {
          drawBorder: false
        },
        ticks: {
          font: {
            size: 10
          },
          maxTicksLimit: 7,
          padding: 7,
          callback: (val, index) => val >= 10000 ? (val/10000 + '만') : val >= 1000 ? (val/1000 + '천') : val
        },
        reverse: reverse
      }
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        callbacks: {
          label: tooltipItem => tooltipItem.dataset.label + ': ' + tooltipItem.formattedValue + unit
        }
      }
    },
    elements: {
      line: {
        tension: 0.2
      }
    },
    pointRadius: 0.01,
    pointHoverRadius: 3,
    borderWidth: 2,
    pointHoverBackgroundColor: 'white',
  }

  if(isWhite){
    options = { ...options, 
      scales: {
        ...options.scales,
        y: {
          ...options.scales.y,
          grid: {
            borderColor: 'rgba(245, 245, 247, 0.3)',
            color: 'rgba(245, 245, 247, 0.3)',
            tickColor: 'rgba(245, 245, 247, 0.3)',
            ...options.scales.y.grid
          },
          ticks: {
            color: 'rgba(245, 245, 247, 0.8)',
            ...options.scales.y.ticks
          }
        }
      },
      color: 'rgba(245, 245, 247, 0.8)'
    }
  }

  return options;
};

export const mapBarOptions = (unit, thin = false, isWhite = true) => {
  let options = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        callbacks: {
          label: tooltipItem => tooltipItem.dataset.label + ': ' + tooltipItem.formattedValue + unit
        }
      }
    },
    maxBarThickness: thin ? 7 : 15,
    interaction: {
      intersect: false,
      mode: 'index'
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        grid: {
          drawBorder: false,
        },
        ticks: {
          font: {
            size: 10
          },
          maxTicksLimit: 7,
          padding: 7
        },
      }
    },
  }
  if(isWhite){
    options = {
      ...options,
      scales: {
        ...options.scales,
        y: {
          ...options.scales.y,
          grid: {
            ...options.scales.y.grid,
            borderColor: 'rgba(245, 245, 247, 0.3)',
            color: 'rgba(245, 245, 247, 0.3)',
            tickColor: 'rgba(245, 245, 247, 0.3)',
          },
          ticks: {
            ...options.scales.y.ticks,
            color: 'rgba(245, 245, 247, 0.8)'
          }

        }
      }
    }
  }
  return options;
};

export const mapPieOptions = () => {
  let options = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      datalabels: {
        display: true,
        formatter: (val, ctx) => {
          return val>=3 ? ctx.chart.data.labels[ctx.dataIndex] : null;
        },
        color: '#f5f5f7',
        font:{
          size: 10
        }
      },
      tooltip: {
        callbacks: {
          label: tooltipItem => tooltipItem.label + ': ' + tooltipItem.formattedValue + '%'
        }
      }
    },
  };
  return options;
}

export const lineOptions = (unit, showLegend = true, isWhite = false, maintainAspectRatio = true, forRank = false, multiAxis = false) => {
  let options = {
    maintainAspectRatio: maintainAspectRatio,
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        display: showLegend
      },
      tooltip: {
        callbacks: {
          label: tooltipItem => {
            if(!tooltipItem.dataset.label.includes('추세')) return tooltipItem.dataset.label + ': ' + tooltipItem.formattedValue + (!multiAxis ? unit : tooltipItem.dataset.label==='매출액' ? '원' : unit)
          }
        }
      }
    },
    interaction: {
      intersect: false,
      mode: 'index'
    },
    scales: {
      y: {
        ticks: {
          callback: (val, index) => val >= 10000 ? (val/10000 + '만') : val >= 1000 ? (val/1000 + '천') : val
        }
      }
    }
  };

  if(isWhite){
    options = { ...options, 
      scales: {
        x: {
          grid: {
            borderColor: 'rgba(245, 245, 247, 0.3)',
            color: 'rgba(245, 245, 247, 0.3)',
            tickColor: 'rgba(245, 245, 247, 0.3)'
          },
          ticks: {
            color: 'rgba(245, 245, 247, 0.8)'
          }
        },
        y: {
          grid: {
            borderColor: 'rgba(245, 245, 247, 0.3)',
            color: 'rgba(245, 245, 247, 0.3)',
            tickColor: 'rgba(245, 245, 247, 0.3)'
          },
          ticks: {
            color: 'rgba(245, 245, 247, 0.8)',
            ...options.scales.y.ticks
          }
        }
      },
      color: 'rgba(245, 245, 247, 0.8)'
    }
  }
  
  if(forRank){
    options = { ...options, 
      scales: {
        y: {
          ...options.scales.y,
          reverse: true
        },
      }
    }
  }

  if(multiAxis){
    options = { ...options, 
      scales: {
        ...options.scales,
        y1: {
          type: 'linear',
          display: true,
          position: 'right',
          grid: {
            drawOnChartArea: false
          },
          ticks: {
            callback: (val, index) => val >= 10000 ? (val/10000 + '만') : val >= 1000 ? (val/1000 + '천') : val
          }
        },
        y: {
          ...options.scales?.y,
          beginAtZero: true
        }
      },
    }
  }

  return options;
};

export const barOptions = unit => ({
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
    },
    tooltip: {
      callbacks: {
        label: tooltipItem => tooltipItem.dataset.label + ': ' + tooltipItem.formattedValue + unit
      }
    }
  },
  maxBarThickness: 80,
  interaction: {
    intersect: false,
    mode: 'index'
  }
});

export const radarOptions = (unit='', isWhite = false) => {
  let options = {
    responsive: true,
    aspectRatio: 1.5,
    plugins: {
      legend: {
        position: 'bottom',
      },
      tooltip: {
        callbacks: {
          label: tooltipItem => tooltipItem.dataset.label + ': ' + tooltipItem.formattedValue + unit
        }
      }
    },
    elements: {
      point:{
        pointRadius: 1,
        pointHoverRadius: 2
      },
      line: {
        borderWidth: 1.5
      }
    },
    interaction: {
      intersect: false,
      mode: 'index'
    },
    scales: {
      r: {
        min: 0,
        pointLabels: {
          font: {
            size: 11
          }
        },
        ticks: {
          showLabelBackdrop: false,
          stepSize: 1,
          font: {
            weight: 'bold'
          }
        },
      }
    }
  };

  if(isWhite){
    options = { ...options, 
      color: '#f5f5f7',
      scales: {
        r: {
          min: 0,
          pointLabels: {
            color: '#f5f5f7',
            font: {
              size: 12
            }
          },
          ticks: {
            showLabelBackdrop: false,
            stepSize: 1,
            color: '#f5f5f7',
            font: {
              weight: 'bold'
            }
          },
          grid: {
            color: 'rgba(245, 245, 247, 0.3)'
          },
          angleLines: {
            color: 'rgba(245, 245, 247, 0.3)'
          }
        }
      }
    }
  }

  return options;
};

//chart data

export const lineData = [
  {
    labels: ['2021.02', '2021.03', '2021.04', '2021.05',' 2021.06', '2021.07', '2021.08', '2021.09', '2021.10', '2021.11', '2021.12', '2022.01'],
    datasets: [
      {
        label: 'PC',
        data: [10, 20, 30, 40, 50, 40, 30, 20, 10, 20, 30, 40],
        borderColor: '#0063b2', 
        backgroundColor: 'rgba(0, 99, 178, 0.5)',
        fill: 'origin'
      },
      {
        label: '모바일',
        data: [90, 80, 70, 60, 50, 60, 70, 80, 90, 80, 70, 60],
        borderColor: '#9cc3d5',
        backgroundColor: 'rgba(156, 195, 213, 0.5)',
        fill: 'origin'
      },
    ]
  },
  {
    labels: ['2021.02', '2021.03', '2021.04', '2021.05',' 2021.06', '2021.07', '2021.08', '2021.09', '2021.10', '2021.11', '2021.12', '2022.01'],
    datasets: [
      {
        label: '남성',
        data: [40, 20, 30, 40, 50, 20, 30, 20, 10, 30, 30, 40],
        borderColor: '#0063b2', 
        backgroundColor: '#0063b2'
      },
      {
        label: '여성',
        data: [10, 80, 70, 60, 40, 60, 70, 80, 50, 80, 70, 60],
        borderColor: '#9cc3d5',
        backgroundColor: '#9cc3d5',
        type: 'bar',
      },
    ]
  },
  {
    labels: ['1월 1주차', '1월 2주차', '1월 3주차', '1월 4주차', '1월 5주차', '2월 1주차', '2월 2주차', '2월 3주차', '2월 4주차', '3월 1주차', '3월 2주차', '3월 3주차'],
    datasets: [
      {
        label: '평일',
        data: [10, 90, 30, 40, 30, 20, 30, 50, 10, 20, 30, 40],
        borderColor: '#0063b2', 
        backgroundColor: '#0063b2'
      },
      {
        label: '주말',
        data: [90, 10, 70, 60, 30, 60, 40, 80, 90, 80, 30, 60],
        borderColor: '#9cc3d5',
        backgroundColor: '#9cc3d5'
      },
    ]
  },
  {
    labels: ['2017', '2018', '2019', '2020',' 2021'],
    datasets: [
      {
        label: '1월',
        data: [1, 1, 1, 1, 1],
        borderColor: '#0063b2', 
        backgroundColor: '#0063b2'
      },
      {
        label: '2월',
        data: [2, 2, 2, 2, 2],
        borderColor: '#9cc3d5',
        backgroundColor: '#9cc3d5'
      },
      {
        label: '3월',
        data: [3, 3, 3, 3, 3]
      },
      {
        label: '4월',
        data: [4, 4, 4, 4, 4]
      }
    ]
  },
  {
    labels: ['2021.02', '2021.03', '2021.04', '2021.05',' 2021.06', '2021.07', '2021.08', '2021.09', '2021.10', '2021.11', '2021.12', '2022.01'],
    datasets: [
      {
        label: '10대',
        data: [10, 20, 30, 40, 50, 40, 30, 20, 10, 20, 30, 40],
        borderColor: '#0063b2', 
        backgroundColor: '#0063b2'
      },
      {
        label: '20대',
        data: [90, 80, 70, 60, 50, 60, 70, 80, 90, 80, 70, 60],
        borderColor: '#9cc3d5',
        backgroundColor: '#9cc3d5'
      },
      {
        label: '30대',
        data: [10, 80, 70, 60, 50, 60, 70, 80, 90, 80, 70, 60],
      },
      {
        label: '40대',
        data: [20, 80, 70, 60, 50, 60, 70, 80, 90, 80, 70, 60],
      },
      {
        label: '50대 이상',
        data: [30, 80, 70, 60, 50, 60, 70, 80, 90, 80, 70, 60],
      },
    ]
  },
];

export const barData = {
  labels: ['10대', '20대', '30대', '40대', '50대'],
  datasets: [
    {
      label: '검색비율',
      data: [40, 10, 15, 20, 15],
      backgroundColor: '#f5f5f7b3',
      borderColor: '#f5f5f7b3',
      borderRadius: 2
    },
  ]
}

export const radarData = {
  labels: ['일 검색량', '주말 검색 비율', 'MZ 검색 비율', '여성 검색 비율', '모바일 검색 비율'],
  datasets: [
    {
      label: '당산오돌 본점',
      data: [1, 4, 2, 5, 4],
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      borderColor: 'white',
      borderWidth: 2
    },
    {
      label: '평균',
      data: [3, 2, 1, 4, 5],
      backgroundColor: 'rgba(18, 31, 17, 0.2)',
      borderColor: 'rgba(18, 31, 17)',
      borderWidth: 2
    },
  ]
}

export const salesRadarData = {
  labels: ['매출액', '주말 매출 비율', '저녁 매출 비율', '결제단가', '결제건수', '재방문 매출 비율'],
  datasets: [
    {
      label: '당산오돌 본점',
      data: [3, 2, 1, 4, 5, 1],
      backgroundColor: 'rgba(0, 99, 178, 0.5)',
      borderColor: 'rgba(0, 99, 178)',
      borderWidth: 2
    },
    {
      label: '과거 1개월',
      data: [1, 5, 2, 4, 4, 3],
      backgroundColor: 'rgba(156, 195, 213, 0.5)',
      borderColor: 'rgba(156, 195, 213)',
      borderWidth: 2
    },
    {
      label: '평균',
      data: [1, 4, 2, 5, 4, 5],
      backgroundColor: 'rgba(221, 221, 224, 0.2)',
      borderColor: '#dddde0',
      borderWidth: 2
    },
  ]
}

export const mapLineData = {
  labels: ['1월 1주차', '1월 2주차', '1월 3주차', '1월 4주차', '1월 5주차', '2월 1주차', '2월 2주차', '2월 3주차', '2월 4주차', '3월 1주차', '3월 2주차', '3월 3주차'],
  datasets: [
    {
      label: '매출액',
      data: [10, 90, 30, 40, 30, 20, 30, 50, 10, 20, 30, 40],
      borderColor: 'rgba(38, 59, 77)', 
      backgroundColor: context => {
        const chart = context.chart;
        const { ctx } = chart;
        const gradient = ctx.createLinearGradient(0, 0, 0, 135);
        gradient.addColorStop(0, 'rgba(38, 59, 77, 1)');
        gradient.addColorStop(1, 'rgba(38, 59, 77, 0)');
        return gradient;
      },
      fill: 'start'
    },
  ]
};

export const salesCompareTitle = [
  ['점심', '저녁'],
  ['평일', '주말'],
  ['재방문', '신규']
]

export const salesCompareData = [
  {
    labels: ['1월 2주차', '1월 3주차', '1월 4주차', '1월 5주차', '2월 1주차', '2월 2주차', '2월 3주차'],
    datasets: [
      {
        label: '점심 매출액',
        data: [40, 30, 40, 50, 30, 20, 40],
        borderColor: 'rgba(142, 202, 230)', 
        backgroundColor: 'rgba(142, 202, 230, 0.1)',
        fill: 'origin'
      },
      {
        label: '저녁 매출액',
        data: [20, 10, 60, 40, 30, 30, 80],
        borderColor: 'rgba(255, 183, 3)', 
        backgroundColor: 'rgba(255, 183, 3, 0.1)',
        fill: 'origin'
      },
    ]
  },
  {
    labels: ['1월 1주차', '1월 2주차', '1월 3주차', '1월 4주차', '1월 5주차', '2월 1주차', '2월 2주차', '2월 3주차', '2월 4주차', '3월 1주차', '3월 2주차', '3월 3주차'],
    datasets: [
      {
        label: '매출액',
        data: [10, 90, 30, 40, 30, 20, 30, 50, 10, 20, 30, 40],
        borderColor: 'rgba(0, 99, 178)', 
        backgroundColor: 'rgba(0, 99, 178, 0.5)',
        fill: 'origin'
      },
    ]
  },
  {
    labels: ['2021.02', '2021.03', '2021.04', '2021.05',' 2021.06', '2021.07', '2021.08', '2021.09', '2021.10', '2021.11', '2021.12', '2022.01'],
    datasets: [
      {
        label: '매출액',
        data: [10, 20, 30, 40, 50, 40, 30, 20, 10, 20, 30, 40],
        borderColor: 'rgba(0, 99, 178)', 
        backgroundColor: 'rgba(0, 99, 178, 0.5)',
        fill: 'origin'
      },
    ]
  },
];

//map dummy objects

export const mapCorpList = [
  {
    lat: 37.36,
    lng: 127.106,
    corpName: '당산오돌 본점',
    inAreaRank: 25,
    rank: '1,541',
    category: '육류·고기요리',
    reviewNum: '153',
    ratio: 11.5,
    delta: 5,
    chart: [],
    inAreaRatio: 5.8,
    inCatRatio: 9.3,
    inAreaCatRatio: 3.2
  },
  {
    lat: 37.358,
    lng: 127.1056,
    corpName: '담양앞집 떡갈비국수전문점',
    inAreaRank: 1,
    rank: '151',
    category: '육류·고기요리',
    reviewNum: '2,154',
    ratio: 9.4,
    delta: -13,
    chart: [],
    inAreaRatio: 4.8,
    inCatRatio: 10.3,
    inAreaCatRatio: 2.2
  },
  {
    lat: 37.361,
    lng: 127.1058,
    corpName: '산내돌짜장',
    inAreaRank: 2,
    rank: '923',
    category: '한식',
    reviewNum: '1,009',
    ratio: 9.6,
    delta: 102,
    chart: [],
    inAreaRatio: 6.1,
    inCatRatio: 9.4,
    inAreaCatRatio: 1.2,
  },
]

//table columns

export const keywordCols = [
  {
    accessor: 'keyword',
    Header: '키워드'
  },
  {
    accessor: 'pcSearch',
    Header: '월간 검색량(PC)',
    sortType: sortComma
  }, 
  {
    accessor: 'mobileSearch',
    Header: '월간 검색량(Mobile)',
    sortType: sortComma
  },
  {
    accessor: 'totalSearch',
    Header: '월간 검색량(전체)',
    sortType: sortComma
  },
  {
    accessor: 'totalBlog',
    Header: '월간 블로그 발행량',
    sortType: sortComma
  },
];

export const viewCols = [
  {
    accessor: 'rank',
    Header: '순위'
  },
  {
    accessor: 'type',
    Header: '유형'
  }, 
  {
    accessor: 'author',
    Header: '작성자'
  },
  {
    accessor: 'title',
    Header: '제목'
  },
  {
    accessor: 'date',
    Header: '콘텐츠 발행일'
  },
  {
    accessor: 'visitor',
    Header: '방문자 수'
  }
];

export const keywordScoreCols = type => 
  type === 'brand' ? 
  [
    {
      accessor: 'keyword',
      Header: '키워드'
    },
    // {
    //   accessor: 'amount',
    //   Header: '월간 검색량'
    // },
    {
      accessor: 'EPS',
      Header: 'Brand EPS',
      sortType: sortComma
    },
    {
      accessor: 'VPS',
      Header: 'Brand VPS'
    }
  ] :
  [
    {
      accessor: 'keyword',
      Header: '키워드'
    },
    // {
    //   accessor: 'amount',
    //   Header: '월간 검색량'
    // },
    {
      accessor: 'viewRI',
      Header: 'View RI'
    },
    {
      accessor: 'placeRI',
      Header: 'Place RI'
    }
  ];

export const sampleQuery = [
  {
      "rank": 3,
      "naverId": 1706029841,
      "name": "선데이 버거 클럽",
      "lng": 127.0367379,
      "lat": 37.5266144,
      "address": "서울 강남구 언주로170길 37 201호",
      "id": 1706029841
  },
  {
      "rank": 4,
      "naverId": 56228015,
      "name": "우와",
      "lng": 126.9222234,
      "lat": 37.5517143,
      "address": "서울 마포구 와우산로21길 21-16 2층",
      "id": 56228015
  },
  {
      "rank": 5,
      "naverId": 1298530125,
      "name": "땀땀",
      "lng": 127.0279819,
      "lat": 37.5003861,
      "address": "서울 강남구 강남대로98길 12-5",
      "id": 1298530125
  },
];

export const changeZoom = code => {
  if(code.length === 2) return 11;
  else if(code.length === 5) return 9;
  else return 6;
}

export const getPlaceOverlay = place => {
  return `
    <style>
      #close-overlay:hover{
        cursor: pointer;
      }
      #show-detail:hover{
        cursor: pointer;
        text-decoration: underline;
      }
    </style>
    <div style="display: flex; flex-flow: column; min-width: 240px; color: #263b4d; background: rgba(255, 255, 255, 0.5); padding: 20px 15px; box-shadow: 2px 4px 12px rgb(38 59 77 / 30%); border-radius: 5px; backdrop-filter: saturate(180%) blur(40px); border: 1px solid rgba(255, 255, 255, 0.18); position: relative;">
      <div style="display: flex; justify-content: space-between; margin-bottom: 15px; align-items: start;">
        <div style="display: flex; font-weight: bold; align-items: end;">
          <a href="${place.url}" target="_blank" style="color: inherit; text-decoration: none;">${place.name}</a>
          <div style="margin-left: 5px; font-size: 12px; font-weight: normal;">${place.category}</div>
        </div>
        <div style="font-size: 12px; padding: 0 0 5px 5px;" id="close-overlay"><i class="fas fa-times"></i></div>
      </div>
      <div style="font-size: 12px; color: #3166a1; margin-bottom: 5px;">
        블로그 리뷰 ${place.blogReviewNum}개
      </div>
      <div style="font-size: 12px; color: #3166a1; margin-bottom: 30px;">
        방문자 리뷰 ${place.visitorReviewNum}개
      </div>
      <div style="display: flex; justify-content: space-between; align-items: end;">
        <div style="font-family: 'Montserrat', 'Pretendard'; font-weight: bold; font-size: 18px;">
          ${place.rank}위<span style="font-size: 12px;">(상위 ${place.ratio}%)</span>
        </div>
        <div style="font-size: 12px; color: #3166a1;" id="show-detail"><i class="fas fa-external-link-alt"></i></div>
      </div>
    </div>
    <div style="height: 10px; width: 10px; background: rgba(255, 255, 255, 0.5); margin: 0 auto; transform: translateY(-5px) rotate(45deg); backdrop-filter: blur(12px); border-right: 1px solid rgba(255, 255, 255, 0.18); border-bottom: 1px solid rgba(255, 255, 255, 0.18);"></div>
  `;
};

export const regionType = (code) => {
  if(code === 0) return '전국';
  else if(code.length === 2) return '시·도 ';
  else if(code.length === 5) return '시·군·구 ';
  else if(code.length === 8) return '읍·면·동 ';
  else return '세부 ';
}

export const defaultQuery = {
  type: 'region',
  code: 0,
  name: '전국',
}

export const systemCols = [
  {
    Header: '순위',
    accessor: 'rank'
  },
  {
    Header: '구분',
    accessor: 'region'
  },
  {
    Header: '외식소비의도',
    accessor: 'searchQty'
  },
  {
    Header: '성별 현황',
    columns: [
      {
        Header: '여성',
        accessor: 'female'
      },
      {
        Header: '남성',
        accessor: 'male'
      }
    ]
  },
  {
    Header: '기기별 현황',
    columns: [
      {
        Header: '모바일',
        accessor: 'mobile'
      },
      {
        Header: 'PC',
        accessor: 'pc'
      }
    ]
  },
  {
    Header: '연령별 현황',
    columns: [
      {
        Header: '10대',
        accessor: 'ten'
      },
      {
        Header: '20대',
        accessor: 'twenty'
      },
      {
        Header: '30대',
        accessor: 'thirty'
      },
      {
        Header: '40대',
        accessor: 'forty'
      },
      {
        Header: '50대',
        accessor: 'fifty'
      }
    ]
  },
  {
    Header: '요일별 현황',
    columns: [
      {
        Header: '월',
        accessor: 'mon'
      },
      {
        Header: '화',
        accessor: 'tue'
      },
      {
        Header: '수',
        accessor: 'wed'
      },
      {
        Header: '목',
        accessor: 'thur'
      },
      {
        Header: '금',
        accessor: 'fri'
      },
      {
        Header: '토',
        accessor: 'sat'
      },
      {
        Header: '일',
        accessor: 'sun'
      }
    ]
  },
  {
    Header: '월별 현황',
    columns: [
      {
        Header: '1월',
        accessor: 'jan'
      },
      {
        Header: '2월',
        accessor: 'feb'
      },
      {
        Header: '3월',
        accessor: 'mar'
      },
      {
        Header: '4월',
        accessor: 'apr'
      },
      {
        Header: '5월',
        accessor: 'may'
      },
      {
        Header: '6월',
        accessor: 'jun'
      },
      {
        Header: '7월',
        accessor: 'jul'
      },
      {
        Header: '8월',
        accessor: 'aug'
      },
      {
        Header: '9월',
        accessor: 'sep'
      },
      {
        Header: '10월',
        accessor: 'oct'
      },
      {
        Header: '11월',
        accessor: 'nov'
      },
      {
        Header: '12월',
        accessor: 'dec'
      }
    ]
  }
];

export const csvHeader = [
  {
    label: '순위',
    key: 'rank'
  },
  {
    label: '구분',
    key: 'region'
  },
  {
    label: '외식소비의도',
    key: 'searchQty'
  },
  {
    label: '여성',
    key: 'female'
  },
  {
    label: '남성',
    key: 'male'
  },
  {
    label: '모바일',
    key: 'mobile'
  },
  {
    label: 'PC',
    key: 'pc'
  },
  {
    label: '10대',
    key: 'ten'
  },
  {
    label: '20대',
    key: 'twenty'
  },
  {
    label: '30대',
    key: 'thirty'
  },
  {
    label: '40대',
    key: 'forty'
  },
  {
    label: '50대',
    key: 'fifty'
  },
  {
    label: '월',
    key: 'mon'
  },
  {
    label: '화',
    key: 'tue'
  },
  {
    label: '수',
    key: 'wed'
  },
  {
    label: '목',
    key: 'thur'
  },
  {
    label: '금',
    key: 'fri'
  },
  {
    label: '토',
    key: 'sat'
  },
  {
    label: '일',
    key: 'sun'
  },
  {
    label: '1월',
    key: 'jan'
  },
  {
    label: '2월',
    key: 'feb'
  },
  {
    label: '3월',
    key: 'mar'
  },
  {
    label: '4월',
    key: 'apr'
  },
  {
    label: '5월',
    key: 'may'
  },
  {
    label: '6월',
    key: 'jun'
  },
  {
    label: '7월',
    key: 'jul'
  },
  {
    label: '8월',
    key: 'aug'
  },
  {
    label: '9월',
    key: 'sep'
  },
  {
    label: '10월',
    key: 'oct'
  },
  {
    label: '11월',
    key: 'nov'
  },
  {
    label: '12월',
    key: 'dec'
  }
];

export const detailCols = [
  [
    {
      Header: '순위',
      accessor: 'rank'
    },
    {
      Header: '업종',
      accessor: 'type'
    },
    {
      Header: '점포',
      accessor: 'restaurant'
    }
  ],
  [
    {
      Header: '순위',
      accessor: 'rank'
    },
    {
      Header: '상권',
      accessor: 'area'
    },
    {
      Header: '업종',
      accessor: 'type'
    },
    {
      Header: '점포',
      accessor: 'restaurant'
    }
  ]
];

export const searchQtyCols = [
  {
    Header: '기간',
    accessor: 'date'
  },
  {
    Header: '검색량',
    accessor: 'searchQty'
  }
];

export const qtyData = [
  {
    date: '2022-01-01',
    searchQty: 123
  },
  {
    date: '2022-01-01',
    searchQty: 123
  },
  {
    date: '2022-01-01',
    searchQty: 123
  },
  {
    date: '2022-01-01',
    searchQty: 123
  },
  {
    date: '2022-01-01',
    searchQty: 123
  },
  {
    date: '2022-01-01',
    searchQty: 123
  },
  {
    date: '2022-01-01',
    searchQty: 123
  },
]

export const detailRankCsvHeader = [
  {
    label: '순위',
    key: 'rank'
  },
  {
    label: '상권',
    key: 'area'
  },
  {
    label: '업종',
    key: 'type'
  },
  {
    label: '점포',
    key: 'restaurant'
  }
];

export const subjectName = {
  area: '행정구역',
  category: '업종',
  omrank: '점포',
  keyword: '키워드'
}

export const growthCols = (subject) => [
  {
    Header: '순위',
    accessor: 'rank'
  },
  {
    Header: '급상승',
    columns: [
      {
        Header: subjectName[subject],
        accessor: 'uname'
      },
      {
        Header: '과거',
        accessor: 'uPrv'
      },
      {
        Header: '현재',
        accessor: 'uNow'
      },
      {
        Header: '상승률',
        accessor: 'ugrowth'
      }
    ]
  },
  {
    Header: '급하락',
    columns: [
      {
        Header: subjectName[subject],
        accessor: 'dname'
      },
      {
        Header: '과거',
        accessor: 'dPrv'
      },
      {
        Header: '현재',
        accessor: 'dNow'
      },
      {
        Header: '하락률',
        accessor: 'dgrowth'
      }
    ]
  }
]

export const growthCSVHeader = (subject) => [
  {
    label: '순위',
    key: 'rank'
  },
  {
    label: '급상승' + subjectName[subject],
    key: 'uname'
  },
  {
    label: '과거',
    key: 'uPrv'
  },
  {
    label: '현재',
    key: 'uNow'
  },
  {
    label: '상승률',
    key: 'ugrowth'
  },
  {
    label: '급하락' + subjectName[subject],
    key: 'dname'
  },
  {
    label: '과거',
    key: 'dPrv'
  },
  {
    label: '현재',
    key: 'dNow'
  },
  {
    label: '하락률',
    key: 'dgrowth'
  }
]