import * as React from 'react'
import ReactDataGrid, { Column } from 'react-data-grid'
import axios from 'axios'
import { Subscribe, Container } from 'unstated'
import mapValues from 'lodash.mapvalues'
import { Editors } from 'react-data-grid-addons'
import { Entity } from '../../../model'
const { DropDownEditor } = Editors

const BooleanFormatter = ({ value }: any) => {
  return value ? 'yes' : 'no'
}
const defaultColumns: Column<string>[] = [
  { key: 'id', name: 'id', editable: true },
]

const deriveColumnsFromData = (data: Row[]) => {
  const [first] = data

  if (first) {
    const keys = Object.keys(first).filter((key) => key !== 'isSaved')

    const columns = keys.map((key: string) => {
      const value = first[key]
      const isBoolean = typeof value === 'boolean'

      return {
        key,
        name: key,
        editable: true,
        editor: isBoolean ? <DropDownEditor options={['yes', 'no']} /> : null,
        formatter: isBoolean ? BooleanFormatter : null,
      }
    })

    return columns
  }
  return defaultColumns
}

interface IProps {
  title: string
  endpoint: string
}

type Row = Entity & {
  isSaved: boolean
  isAvailable: boolean | string
}

interface IState {
  isFetching: boolean
  rows?: Row[]
  dataIsChanged: boolean
  isPushing: boolean
  columns: Column<string>[]
}

class TableContainer extends Container<IState> {
  state: IState = {
    isFetching: false,
    dataIsChanged: false,
    isPushing: false,
    columns: defaultColumns,
  }

  onGridRowsUpdated = ({
    fromRow,
    toRow,
    updated,
  }: {
    fromRow: number
    toRow: number
    updated: Row
  }) => {
    this.setState((state) => {
      const rows: Row[] = state.rows.slice()
      for (let i = fromRow; i <= toRow; i++) {
        rows[i] = {
          ...rows[i],
          ...updated,
          isSaved: false,
          isAvailable: updated.isAvailable === 'yes' ? true : false,
        }
      }
      return { rows, dataIsChanged: true }
    })
  }
  addIsSaved = (rows: Row[]) => rows.map((row) => ({ ...row, isSaved: true }))
  setRows = (rows: Row[]) => this.setState({ rows })
  fetchRows = async (endpoint: string) => {
    this.setState({ isFetching: true })
    const { data } = await axios.get(endpoint)

    const dataWithIsSaved = this.addIsSaved(data)

    this.setState({
      rows: dataWithIsSaved,
      isFetching: false,
      columns: deriveColumnsFromData(data),
    })
  }
  saveRows = async (endpoint: string, rows = this.state.rows) => {
    if (rows && this.state.rows) {
      this.setState({ isPushing: true })
      await axios.put(endpoint, rows)

      const rowIDs = rows.map(({ id }) => id)

      const dataWithIsSaved = this.state.rows.map((row) =>
        rowIDs.includes(row.id) ? { ...row, isSaved: true } : row,
      )
      this.setState({ isPushing: false, rows: dataWithIsSaved })
    }
  }
  deleteAll = async (endpoint: string) => {
    this.setState({ isFetching: true })
    const { data } = await axios.delete(`${endpoint}/all`)
    this.setState({ rows: this.addIsSaved(data), isFetching: false })
  }

  deleteRow = async (endpoint: string, rowToDelete: Row) => {
    this.setState({ isFetching: true })
    await axios.delete(endpoint, {
      data: [rowToDelete],
    })

    this.setState({
      rows: this.state.rows.filter(({ id }) => id !== rowToDelete.id),
      isFetching: false,
    })
  }
}

const addEmptyRow = (rows: Row[] | undefined) => {
  let emptyRow
  if (rows && rows.length) {
    emptyRow = { ...mapValues(rows[0], (v) => ''), isSaved: true }

    return [...rows, emptyRow]
  }
  return rows
}

const getCellActions = (
  deleteRow: (row: Row) => void,
  saveRow: (row: Row) => void,
) => (column: Column<string>, row: Row) => {
  if (column.key === 'id' && row.id) {
    return [
      {
        icon: (
          <button
            type="button"
            className="btn btn-outline-danger btn-sm"
            style={{ margin: 2 }}
          >
            {'Delete'}
          </button>
        ),
        callback: async () => {
          await deleteRow(row)
        },
      },
      !row.isSaved && {
        icon: (
          <button
            type="button"
            className="btn btn-outline-success btn-sm"
            style={{ margin: 2 }}
          >
            {'Save'}
          </button>
        ),
        callback: async () => {
          await saveRow(row)
        },
      },
    ]
  }
}

const Table = ({ endpoint, title }: IProps) => {
  return (
    <Subscribe to={[new TableContainer()]}>
      {({
        state,
        onGridRowsUpdated,
        fetchRows,
        deleteAll,
        saveRows,
        deleteRow,
      }: TableContainer) => {
        if (!state.rows && !state.isFetching) {
          fetchRows(endpoint)
        }

        const rows = addEmptyRow(state.rows) || []
        return (
          <div className=" col-xs-6 " style={{ padding: 5 }}>
            <h1 className="display-7 text-center">{title}</h1>
            <ReactDataGrid
              minWidth={0}
              minColumnWidth={200}
              columns={state.columns}
              rowGetter={(i) => rows[i]}
              rowsCount={rows.length}
              onGridRowsUpdated={onGridRowsUpdated}
              enableCellSelect={true}
              getCellActions={getCellActions(
                (row) => deleteRow(endpoint, row),
                (row) => saveRows(endpoint, [row]),
              )}
            />
            <br />
            <div
              style={{
                minWidth: 700,
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ flex: 2 }}>
                <button
                  disabled={state.isFetching}
                  type="button"
                  className="btn btn-secondary"
                  onClick={async () => await fetchRows(endpoint)}
                >
                  {state.isFetching
                    ? 'Fetching...'
                    : `Reload data from ${endpoint}`}
                </button>
              </div>
              <div style={{ flex: 1 }}>
                <button
                  disabled={state.isFetching}
                  type="button"
                  className="btn btn-danger"
                  onClick={() => deleteAll(endpoint)}
                >
                  {'Delete All'}
                </button>
              </div>
              <button
                style={{ flex: 1 }}
                disabled={state.isFetching || state.isPushing}
                type="button"
                className="btn btn-success"
                onClick={async () => await saveRows(endpoint)}
              >
                {state.isPushing ? 'Saving...' : 'Save Changes'}
              </button>
            </div>
          </div>
        )
      }}
    </Subscribe>
  )
}

export default Table
