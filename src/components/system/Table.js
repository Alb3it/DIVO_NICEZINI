import { useMemo } from "react";
import { usePagination, useSortBy, useTable } from "react-table";
import styled from 'styled-components';
import { csvHeader } from "@constants";
import { CSVLink } from "react-csv";

export default function Table({ column, data, csvHeaders = csvHeader, setPopupCode = () => {}, csvTitle = "상권통계" }){
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
    <S.Table>
      <table {...getTableProps()}>
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
                  console.log(cell);
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
        <div>
          <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            {'<<'}
          </button>{' '}
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            {'<'}
          </button>{' '}
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            {'>'}
          </button>{' '}
          <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
            {'>>'}
          </button>{'  '}
          <S.Page>
            <strong>
              {pageIndex + 1} / {pageOptions.length} 페이지
            </strong>{' '}
          </S.Page>
          <span>
            | {' '}
            <S.PageInput
              type="number"
              defaultValue={pageIndex + 1}
              onChange={e => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0
                gotoPage(page)
              }}
            />
            {' '}페이지로 이동
          </span>{' '} | {' '}
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
        </div>
        <CSVLink data={data} headers={csvHeaders} filename={csvTitle}><button>CSV 다운받기</button></CSVLink>
      </S.BottomBar>
     
    </S.Table>
  );
}

const S = {};

S.Sort = styled.span`
  margin-left: 5px;
`;

S.BottomBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`;

S.PageInput = styled.input`
  width: 50px;
`;

S.Page = styled.span`
  margin: 0 10px;
`;

S.Table = styled.div`
  font-size: 12px;
  overflow-y: auto;

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