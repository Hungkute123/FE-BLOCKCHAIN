import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import React, { useContext, useEffect, useState } from 'react'
import { Network } from '../../components/Info/Network'
import { TokenValue } from '../../components/Info/TokenValue'
import { alpha } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import TableSortLabel from '@mui/material/TableSortLabel'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import DeleteIcon from '@mui/icons-material/Delete'
import FilterListIcon from '@mui/icons-material/FilterList'
import { visuallyHidden } from '@mui/utils'
import Checkbox from '@mui/material/Checkbox'
import axios from 'axios'
import { WalletContext } from '../../context/walletContext'
import TimeAgo from 'javascript-time-ago'

// English.
import en from 'javascript-time-ago/locale/en.json'

TimeAgo.addLocale(en)
const timeAgo = new TimeAgo('en-US')
interface Transaction {
  fromAddress: string
  toAddress: string
  amount: number
  txFee: number
  timestamp: string
  txHash: string
  signature: string
}

function createData(
  fromAddress: string,
  toAddress: string,
  amount: number,
  txFee: number,
  timestamp: string,
  txHash: string,
  signature: string
): Transaction {
  return {
    fromAddress,
    toAddress,
    amount,
    txFee,
    timestamp,
    txHash,
    signature
  }
}

// const rows = [createData('Cupcake', 'sâs', 305, 3.7, 'sa', 'dá', 'hjng')]

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1
  }
  if (b[orderBy] > a[orderBy]) {
    return 1
  }
  return 0
}

type Order = 'asc' | 'desc'

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy)
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number])
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0])
    if (order !== 0) {
      return order
    }
    return a[1] - b[1]
  })
  return stabilizedThis.map(el => el[0])
}

interface HeadCell {
  disablePadding: boolean
  id: keyof Transaction
  label: string
  numeric: boolean
}

const headCells: readonly HeadCell[] = [
  {
    id: 'txHash',
    numeric: false,
    disablePadding: true,
    label: 'Txn Hash'
  },
  {
    id: 'signature',
    numeric: false,
    disablePadding: false,
    label: 'Block'
  },
  {
    id: 'timestamp',
    numeric: false,
    disablePadding: false,
    label: 'Age'
  },
  {
    id: 'fromAddress',
    numeric: false,
    disablePadding: false,
    label: 'From'
  },
  {
    id: 'toAddress',
    numeric: false,
    disablePadding: false,
    label: 'To'
  },
  {
    id: 'amount',
    numeric: false,
    disablePadding: false,
    label: 'Value'
  },
  {
    id: 'txFee',
    numeric: false,
    disablePadding: false,
    label: 'Txn Fee'
  }
]

interface EnhancedTableProps {
  numSelected: number
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Transaction) => void
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void
  order: Order
  orderBy: string
  rowCount: number
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props
  const createSortHandler = (property: keyof Transaction) => (event: React.MouseEvent<unknown>) => {
    onRequestSort(event, property)
  }

  return (
    <TableHead>
      <TableRow>
        {headCells.map(headCell => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component='span' sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

interface EnhancedTableToolbarProps {
  numSelected: number
}

const EnhancedTableToolbar = (props: EnhancedTableToolbarProps) => {
  const { numSelected } = props

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: theme => alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity)
        })
      }}
    >
      {numSelected > 0 ? (
        <Typography sx={{ flex: '1 1 100%' }} color='inherit' variant='subtitle1' component='div'>
          {numSelected} selected
        </Typography>
      ) : (
        <Typography sx={{ fontWeight: 600 }} id='tableTitle'>
          Transaction
        </Typography>
      )}
    </Toolbar>
  )
}
interface EnhancedTableProps {
  numSelected: number
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Transaction) => void
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void
  order: Order
  orderBy: string
  rowCount: number
}
const Transactions = () => {
  const wallet: any = useContext(WalletContext)
  const [rows, setRows] = useState<Transaction[]>([])
  const [order, setOrder] = React.useState<Order>('asc')
  const [orderBy, setOrderBy] = React.useState<keyof Transaction>('timestamp')
  const [selected, setSelected] = React.useState<readonly string[]>([])
  const [page, setPage] = React.useState(0)
  const [dense, setDense] = React.useState(false)
  const [rowsPerPage, setRowsPerPage] = React.useState(5)
  useEffect(() => {
    axios
      .get(`${process.env.URL_MY_API}wallet/tx/pending-tx?wallet=${wallet.publicKey}`)
      .then(function (response: any) {
        console.log(response.data)
        if (response.data.data.length > 0) {
          response.data.data.map((item: any, index: number) => {
            rows.push(item)
            setRows([...rows])
          })
        }
      })
      .catch(function (error: any) {
        console.log(error)
      })
    axios
      .get(`${process.env.URL_MY_API}wallet/tx/my-transaction?wallet=${wallet.publicKey}`)
      .then(function (response: any) {
        console.log(response.data)
        if (response.data.data.length > 0) {
          response.data.data.map((item: any, index: number) => {
            rows.push(item)
            setRows([...rows])
          })
        }
      })
      .catch(function (error: any) {
        console.log(error)
      })
  }, [wallet.publicKey])
  const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof Transaction) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = rows.map(n => n.toAddress)
      setSelected(newSelecteds)
      return
    }
    setSelected([])
  }

  const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
    const selectedIndex = selected.indexOf(name)
    let newSelected: readonly string[] = []

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1))
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1))
    }

    setSelected(newSelected)
  }

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const isSelected = (name: string) => selected.indexOf(name) !== -1

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0
  return (
    <div style={{ backgroundColor: 'var(--gray-primary-base)', width: '100%' }}>
      <Box>
        <Grid container>
          <Grid item xs={12}>
            <Paper
              sx={{
                border: '1px solid #ccc',
                padding: '50px 0',
                margin: '0 1rem 1rem 1rem',
                minHeight: '78vh'
              }}
            >
              {rows.length > 0 ? (
                <>
                  <EnhancedTableToolbar numSelected={selected.length} />
                  <TableContainer>
                    <Table sx={{ minWidth: 750 }} aria-labelledby='tableTitle' size={dense ? 'small' : 'medium'}>
                      <EnhancedTableHead
                        numSelected={selected.length}
                        order={order}
                        orderBy={orderBy}
                        onSelectAllClick={handleSelectAllClick}
                        onRequestSort={handleRequestSort}
                        rowCount={rows.length}
                      />
                      <TableBody>
                        {/* if you don't need to support IE11, you can replace the `stableSort` call with:
              rows.slice().sort(getComparator(order, orderBy)) */}
                        {stableSort(rows, getComparator(order, orderBy))
                          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                          .map((row, index) => {
                            const labelId = `enhanced-table-checkbox-${index}`

                            return (
                              <TableRow
                                hover
                                onClick={event => handleClick(event, String(row.fromAddress))}
                                role='checkbox'
                                tabIndex={-1}
                              >
                                {rows.length != 0 && (
                                  <>
                                    <TableCell component='th' id={labelId} scope='row' padding='none'>
                                      <Tooltip title={`${row.txHash}`} placement='top'>
                                        <Typography
                                          sx={{
                                            textOverflow: 'ellipsis',
                                            overflow: 'hidden',
                                            width: '200px',
                                            whiteSpace: 'nowrap'
                                          }}
                                        >
                                          {row.txHash}
                                        </Typography>
                                      </Tooltip>
                                    </TableCell>
                                    <TableCell align='left'>
                                      <Tooltip title={`${row.signature}`} placement='top'>
                                        <Typography
                                          sx={{
                                            textOverflow: 'ellipsis',
                                            overflow: 'hidden',
                                            width: '80px',
                                            whiteSpace: 'nowrap'
                                          }}
                                        >
                                          {row.signature}
                                        </Typography>
                                      </Tooltip>
                                    </TableCell>
                                    <TableCell align='left'>
                                      <Typography
                                        sx={{
                                          textOverflow: 'ellipsis',
                                          overflow: 'hidden',
                                          width: '125px',
                                          whiteSpace: 'nowrap'
                                        }}
                                      >
                                        {timeAgo.format(row.timestamp, 'round')}
                                      </Typography>
                                    </TableCell>
                                    <TableCell align='left'>
                                      <Tooltip title={`${row.fromAddress}`} placement='top'>
                                        <Typography
                                          sx={{
                                            textOverflow: 'ellipsis',
                                            overflow: 'hidden',
                                            width: '150px',
                                            whiteSpace: 'nowrap'
                                          }}
                                        >
                                          {row.fromAddress}
                                        </Typography>
                                      </Tooltip>
                                    </TableCell>
                                    <TableCell align='left'>
                                      <Tooltip title={`${row.toAddress}`} placement='top'>
                                        <Typography
                                          sx={{
                                            textOverflow: 'ellipsis',
                                            overflow: 'hidden',
                                            width: '200px',
                                            whiteSpace: 'nowrap'
                                          }}
                                        >
                                          {row.toAddress}
                                        </Typography>
                                      </Tooltip>
                                    </TableCell>
                                    <TableCell align='left'>
                                      <Tooltip title={`${row.amount}`} placement='top'>
                                        <Typography
                                          sx={{
                                            textOverflow: 'ellipsis',
                                            overflow: 'hidden',
                                            width: '25px',
                                            whiteSpace: 'nowrap'
                                          }}
                                        >
                                          {row.amount}
                                        </Typography>
                                      </Tooltip>
                                    </TableCell>
                                    <TableCell align='left'>
                                      <Tooltip title={`${row.txFee}`} placement='top'>
                                        <Typography
                                          sx={{
                                            textOverflow: 'ellipsis',
                                            overflow: 'hidden',
                                            width: '70px',
                                            whiteSpace: 'nowrap'
                                          }}
                                        >
                                          {row.txFee}
                                        </Typography>
                                      </Tooltip>
                                    </TableCell>
                                  </>
                                )}
                              </TableRow>
                            )
                          })}
                        {emptyRows > 0 && (
                          <TableRow
                            style={{
                              height: (dense ? 33 : 53) * emptyRows
                            }}
                          >
                            <TableCell colSpan={6} />
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component='div'
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                  />
                </>
              ) : (
                <Typography
                  sx={{
                    color: '#000',
                    fontSize: '22px',
                    fontWeight: '600',
                    display: 'flex',
                    justifyContent: 'center'
                  }}
                >
                  No transactions yet
                </Typography>
              )}
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default Transactions
