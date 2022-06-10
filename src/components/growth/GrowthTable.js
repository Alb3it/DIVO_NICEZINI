import { useMemo } from "react";
import { useSortBy, useTable } from "react-table";
import { Table } from "react-bootstrap";
import styled from 'styled-components';
import { CSVLink } from "react-csv";
import { growthCols, growthCSVHeader, subjectName } from "@constants";

export default function GrowthTable({ subject, data, start, setStart, display, setDisplay, maxPage }){
  const columns = useMemo(
    () => growthCols(subject),
  [subject]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    rows
  } = useTable({ columns, data }, useSortBy);

  return (
    <S.Table>
      <Table hover striped {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </Table>
      <S.BottomBar>
        <div>
          <button onClick={() => setStart(0)} disabled={!start}>
            {'<<'}
          </button>{' '}
          <button onClick={() => setStart(s => s-1)} disabled={!start}>
            {'<'}
          </button>{' '}
          <button onClick={() => setStart(s => s+1)} disabled={start==maxPage}>
            {'>'}
          </button>{' '}
          <button onClick={() => setStart(maxPage)} disabled={start==maxPage}>
            {'>>'}
          </button>{'  '}
          <S.Page>
            <strong>
              {start + 1} / {maxPage} 페이지
            </strong>{' '}
          </S.Page>
          <span>
            | {' '}
            <S.PageInput
              type="number"
              defaultValue={start + 1}
              onChange={e => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0
                setStart(page)
              }}
            />
            {' '}페이지로 이동
          </span>{' '} | {' '}
          <select
            value={display}
            onChange={e => {
              setDisplay(Number(e.target.value))
            }}
          >
            {[10, 20, 30, 40, 50].map(pageSize => (
              <option key={pageSize} value={pageSize}>
                {pageSize}개씩 보기
              </option>
            ))}
          </select>
        </div>
        <CSVLink data={data} headers={growthCSVHeader(subject)} filename={`${subjectName[subject]}변화(${1+start*display}-${(start+1)*display}위).csv`}><button>CSV 다운받기</button></CSVLink>
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
    text-align: center;

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