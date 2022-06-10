import { useMemo } from "react";
import { usePagination, useSortBy, useTable } from "react-table";
import styled from 'styled-components';
import { csvHeader } from "@constants";
import { CSVLink } from "react-csv";
import { faPiggyBank } from "@fortawesome/free-solid-svg-icons";

export default function STable({ column, data, csvHeaders, setPopupCode = () => {}, csvTitle, fixed = false }){
  const columns = useMemo(
    () => column
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,

    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize }
  } = useTable({ columns, data, initialState: { pageIndex: 0 } }, useSortBy, usePagination);

  return (
    <S.Table fixed={fixed}>
      <table hover {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <S.Sort>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? <i className="fas fa-sort-down"></i>
                        : <i className="fas fa-sort-up"></i>
                      : ''}
                  </S.Sort>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()} onClick={
                      () => {
                        if(cell.column.id === 'region') setPopupCode(cell.row.original.regionCode || cell.row.original.region);
                        if(cell.column.id === 'restaurant') window.open(cell.row.original.url);
                      }
                    }>
                      {cell.render('Cell')}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      <S.BottomBar>
        <S.Left>
          <S.Left>
            {' '}
            <S.TextCenter>
              <S.PageInput
                type="number"
                defaultValue={pageIndex + 1}
                onChange={e => {
                  const page = e.target.value ? Number(e.target.value) - 1 : 0
                  gotoPage(page)
                }}
              />
            </S.TextCenter>
            <S.Text>페이지로 이동</S.Text>
          </S.Left>
          <select
            value={pageSize}
            onChange={e => {
              setPageSize(Number(e.target.value))
            }}
          >
            {[10, 20, 30, 40, 50].map(pageSize => (
              <option key={pageSize} value={pageSize}>
                {pageSize}개씩 보기
              </option>
            ))}
          </select>
        </S.Left>
        <S.Middle>
          <S.LButton onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            {'<<'}
          </S.LButton>
          <S.RButton onClick={() => previousPage()} disabled={!canPreviousPage}>
            {'<'}
          </S.RButton>
          <S.PageButton onClick={() => {gotoPage(pageIndex<3 ? 0 : pageIndex<pageCount-3 ? pageIndex-2 : pageCount-5)}}
          active={pageIndex===0 ? true : false} >{pageIndex<3 ? 1 : pageIndex<pageCount-3 ? pageIndex-1 : pageCount-4}</S.PageButton>
          {pageCount>2&&<S.PageButton onClick={()=>{gotoPage(pageIndex<3 ? 1 : pageIndex<pageCount-3 ? pageIndex-1 : pageCount-4)}}
          active={pageIndex===1 ? true : false}>{pageIndex<3 ? 2 : pageIndex<pageCount-3 ? pageIndex : pageCount-3}</S.PageButton>}
          {pageCount>3&&<S.PageButton onClick={()=>{gotoPage(pageIndex<3 ? 2 : pageIndex<pageCount-3 ? pageIndex : pageCount-3)}}
          active={pageIndex>1&&pageIndex<pageOptions.length-2 ? true : false}>{pageIndex<3 ? 3 : pageIndex<pageCount-3 ? pageIndex+1 : pageCount-2}</S.PageButton>}
          {pageCount>4&&<S.PageButton onClick={()=>{gotoPage(pageIndex<3 ? 3 : pageIndex<pageCount-3 ? pageIndex+1 : pageCount-2)}}
          active={pageIndex===pageOptions.length-2}>{pageIndex<3 ? 4 : pageIndex<pageCount-3 ? pageIndex+2 : pageCount-1}</S.PageButton>}
          {pageCount>5&&<S.PageButton onClick={()=>{gotoPage(pageIndex<3 ? 4 : pageIndex<pageCount-3 ? pageIndex+2 : pageCount-1)}}
          active={pageIndex===pageOptions.length-1}>{pageIndex<3 ? 5 : pageIndex<pageCount-3 ? pageIndex+3 : pageCount}</S.PageButton>}
          {pageIndex<pageOptions.length-3&&<S.Text>···</S.Text>}
          {pageIndex<pageOptions.length-3&&<S.PageButton onClick={()=>{gotoPage(pageCount-1)}} >{pageOptions.length}</S.PageButton>}
          <S.LButton onClick={() => nextPage()} disabled={!canNextPage}>
            {'>'}
          </S.LButton>
          <S.RButton onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
            {'>>'}
          </S.RButton>
        </S.Middle>
        <CSVLink data={data} headers={csvHeaders} filename={csvTitle}><S.CSVButton >CSV 다운받기</S.CSVButton></CSVLink>
      </S.BottomBar>
    </S.Table>
  );
}

const S = {};

S.CSVButton = styled.button`
  background-color: white;
  border: 1.5px #6C757D solid;
  border-radius: 5px;
  width: 120px;
  margin-left: 90px;
  height: 40px;
  color: #6C757D;
  font-weight: 700;
  font-size: 15px;
  &:hover{
    cursor: pointer;
    background-color: #6C757D;
    color: white;
    transition: .15s;
  }
`;

S.PageButton = styled.button`
  height: 27px;
  display: flex;
  font-size: 15px;
  color: #444444;
  justify-content: center;
  align-items: center;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: ${props => props.active ? "1px #444444 solid" : "none"};
  background-color: white;
  margin: 0 3px;
  &:hover{
    cursor: pointer;
    border-bottom: 1px #6C757D solid;
  }
`;

S.Middle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
`;

S.RButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 27px;
  color: #6C757D;
  background-color: white;
  font-weight: 700;
  border-radius: 0 5px 5px 0 / 0 5px 5px 0;
  border: none;
  &:hover{
    cursor: pointer;
    background-color: #6C757D;
    color: white;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  }
`;

S.LButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 27px;
  color: #6C757D;
  background-color: white;
  font-weight: 700;
  border-radius: 5px 0 0 5px / 5px 0 0 5px;
  border: none;
  &:hover{
    cursor: pointer;
    background-color: #6C757D;
    color: white;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  }
`;

S.Text = styled.div`
  font-size: 13px;
  margin-left: 3px;
  margin-right: 5px;
`;

S.Left = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 210px;
`;

S.TextCenter = styled.div`
  text-align: center;
`;

S.Sort = styled.span`
  margin-left: 5px;
`;

S.BottomBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`;

S.PageInput = styled.input`
  width: 40px;
  text-align: center;
  &::-webkit-outer-spin-button, &::-webkit-inner-spin-button {-webkit-appearance: none; margin: 0;}
`;

S.Page = styled.span`
  margin: 0 10px;
`;

S.Table = styled.div`
  font-size: 12px;
  overflow-y: auto;
  ${props => props.fixed && 'width: 1700px;'}
  table {
    border-spacing: 0;
    width: 100%;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem 0.7rem;
      border-bottom: 1px solid #d2d2d7;
    }

    thead{
      color: #1d1d1f;
      font-weight: bold;
      background: #f5f5f7;
    }

    td{
      color: #515154;
      font-weight: 500;
    }
  }
`;