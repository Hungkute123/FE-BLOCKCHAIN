import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  MenuItem,
  Slide,
  TextField,
  Typography
} from '@mui/material'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import React, { useContext, useEffect, useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred'
import WarningAmberIcon from '@mui/icons-material/WarningAmber'
import { TokenValue } from '../../components/Info/TokenValue'
import { Network } from '../../components/Info/Network'
import { TransitionProps } from '@mui/material/transitions'
import { WalletContext } from '../../context/walletContext'
import axios from 'axios'
import Router from 'next/router'
const currencies = [
  {
    value: 'MC',
    label: 'https://img.mewapi.io/?image=https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880'
  }
]
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction='up' ref={ref} {...props} />
})
const SendTx = () => {
  const wallet: any = useContext(WalletContext)
  const [balance, setBalance] = useState(0)
  const [publicKey, setPublicKey] = useState('0000000000000000000000000000000')
  const [privateKey, setPrivateKey] = useState('0000000000000000000000000000000')
  const [currency, setCurrency] = useState('MC')
  const [values, setValues] = useState({
    amount: 0,
    toAddress: ''
  })
  useEffect(() => {
    console.log(wallet.publicKey)
    setPublicKey(String(wallet.publicKey))
    setPrivateKey(String(wallet.privateKey))
    setBalance(wallet.balance)
  }, [wallet.publicKey.length, publicKey, wallet.balance, privateKey])
  const [openDialogOne, setOpenDialogOne] = useState(false)

  const handleClickOpenDialogOne = () => {
    setOpenDialogOne(true)
  }

  const handleCloseDialogOne = () => {
    setOpenDialogOne(false)
  }
  const [openDialogTwo, setOpenDialogTwo] = useState(false)

  const handleClickOpenDialogTwo = () => {
    setOpenDialogTwo(true)
  }

  const handleCloseDialogTwo = () => {
    setOpenDialogTwo(false)
  }
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrency(event.target.value)
  }
  const handleChangeValues = (prop: any) => (event: any) => {
    setValues({ ...values, [prop]: event.target.value })
  }
  const handleSend = async (e: any) => {
    e.preventDefault()

    axios
      .post(`${process.env.URL_MY_API}wallet/tx/send-mc`, {
        privateKey: privateKey,
        toAddress: values.toAddress,
        fromAddress: publicKey,
        amount: values.amount,
        txFee: values.amount * 0.0142
      })
      .then(function (response: any) {
        axios
          .get(`${process.env.URL_MY_API}wallet/tx/mining?wallet=${publicKey}`)
          .then(function (response: any) {})
          .catch(function (error: any) {})
        Router.push('/wallet/transactions')
      })
      .catch(function (error: any) {})
  }
  return (
    <div style={{ backgroundColor: 'var(--gray-primary-base)', width: '100%' }}>
      <Dialog
        open={openDialogOne}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseDialogOne}
        aria-describedby='alert-dialog-slide-description'
      >
        <DialogContent>
          <Typography sx={{ fontWeight: 600, fontSize: '22px', color: '#000' }}>How are fees determined?</Typography>
          <DialogContentText id='alert-dialog-slide-description' sx={{ fontSize: '14px', marginTop: '15px' }}>
            Transaction fees are charged by MyCoin miners, not MEW. We can't influence them and we don't receive any
            part of the transaction fees that you pay.
          </DialogContentText>
          <Typography sx={{ fontWeight: 600, fontSize: '22px', color: '#000', marginTop: '15px' }}>
            What should I do?
          </Typography>
          <DialogContentText id='alert-dialog-slide-description' sx={{ fontSize: '14px', marginTop: '15px' }}>
            Good news! You have options! If you’re not in a hurry, you can use the “Normal” setting and your transaction
            will be mined at a later time. MEW supports MyCoin scaling solutions Polygon and Binance Smart Chain
            (accessible on MEW web and Android). Consider using these chains to avoid congestion and save on fees. Learn
            how here.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialogOne}>I know</Button>
        </DialogActions>
      </Dialog>
      <Box>
        <Grid container>
          <Grid item xs={8}>
            <Paper
              sx={{
                border: '1px solid #ccc',
                width: '776px',
                padding: '50px 0',
                marginLeft: '1rem',
                marginBottom: '1rem'
              }}
            >
              <Typography
                sx={{ fontWeight: 600, borderLeft: '4px solid var(--green-primary-base)', paddingLeft: '50px' }}
              >
                Send
              </Typography>
              <div style={{ width: '776px', minHeight: '300px', padding: '0 50px' }}>
                <Grid container sx={{ marginTop: '30px' }} spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      id='outlined-select-currency'
                      select
                      label='Token'
                      value={currency}
                      onChange={handleChange}
                      helperText='Please select your currency'
                      sx={{ width: '100%' }}
                    >
                      {currencies.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <img
                              src={option.label}
                              alt='anh'
                              style={{
                                height: '20px',
                                width: '20px',
                                border: '1px solid #ccc',
                                borderRadius: '50%',
                                marginRight: '10px'
                              }}
                            />
                            <Typography sx={{ fontSize: '14px' }}>{option.value}</Typography>
                            <Typography sx={{ fontSize: '14px', color: '#ccc' }}>-{option.value}</Typography>
                          </Box>
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id='outlined-number'
                      label='Amount'
                      type='number'
                      value={values.amount}
                      onChange={handleChangeValues('amount')}
                      helperText={`${values.amount < 0 || values.amount > balance ? 'Invalid amount' : ''} `}
                      InputLabelProps={{
                        shrink: true
                      }}
                      sx={{ width: '100%' }}
                    />
                  </Grid>
                </Grid>
                <Paper sx={{ padding: '12px', backgroundColor: '#F8F9FB', marginTop: '15px' }}>
                  <Grid container spacing={5}>
                    <Grid item xs={6}>
                      <Typography sx={{ fontWeight: 600, fontSize: '14px', display: 'flex', color: '#000' }}>
                        <ReportGmailerrorredIcon fontSize='small' />
                        Your MC balance is too low
                      </Typography>
                      <Typography sx={{ fontSize: '14px', marginTop: '5px' }}>
                        Every transaction requires a small amount of MC to execute. Even if you have tokens to swap,
                        when your MC balance is close to zero, you won't be able to send anything until you fund your
                        account.
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Button
                        sx={{
                          textTransform: 'capitalize',
                          color: 'var(--green-primary-base)',
                          marginTop: '17px',
                          fontWeight: 600,
                          fontSize: '14px'
                        }}
                      >
                        Transfer MC from another account
                      </Button>
                      <Button
                        sx={{
                          textTransform: 'capitalize',
                          color: 'var(--green-primary-base)',
                          fontWeight: 600,
                          fontSize: '14px'
                        }}
                      >
                        Buy MC
                      </Button>
                    </Grid>
                  </Grid>
                </Paper>
                <TextField
                  id='outlined-search'
                  label='To address'
                  placeholder='Enter address'
                  value={values.toAddress}
                  onChange={handleChangeValues('toAddress')}
                  type='search'
                  sx={{ marginTop: '20px', width: '100%' }}
                />
                <Typography sx={{ fontWeight: 600, fontSize: '14px', marginTop: '30px' }}>Transaction fee</Typography>
                <Grid container sx={{ marginTop: '10px' }}>
                  <Grid item sx={{ fontSize: '14px' }} xs={8}>
                    <Button
                      sx={{ color: 'var(--green-primary-base)', backgroundColor: '#F8F9FB', marginRight: '10px' }}
                    >
                      ~${values.amount * 1046 * 0.0142} - 15min
                    </Button>
                    {values.amount * 0.0142}
                    {/* <Typography sx={{ fontSize: '14px' }}>Not enough MC to cover network fee. Buy more MC</Typography> */}
                  </Grid>
                  <Grid item xs={4}>
                    <Typography sx={{ fontSize: '14px', float: 'right' }}>
                      Total: {values.amount * 0.0142} MC
                    </Typography>
                    <button
                      style={{
                        fontSize: '14px',
                        color: 'var(--green-primary-base)',
                        float: 'right',
                        marginTop: '15px'
                      }}
                      onClick={handleClickOpenDialogOne}
                    >
                      How are fees determind?
                    </button>
                  </Grid>
                </Grid>
                <Accordion sx={{ marginTop: '30px' }}>
                  <AccordionSummary
                    expandIcon={
                      <span style={{ fontSize: '13px', display: 'flex', alignItems: 'center' }}>
                        Gas Limit & Data
                        <ExpandMoreIcon />
                      </span>
                    }
                    aria-controls='panel1a-content'
                    id='panel1a-header'
                  >
                    <Typography sx={{ fontWeight: 600, fontSize: '13px' }}>Advanced</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Paper sx={{ backgroundColor: '#FFF2DC', padding: '15px 22px 15px 15px' }}>
                      <Typography sx={{ fontSize: '13px', fontWeight: 600, display: 'flex', alignItems: 'center' }}>
                        <WarningAmberIcon fontSize='small' sx={{ marginRight: '5px' }} />
                        For advanced users only
                      </Typography>
                      <Typography sx={{ fontSize: '13px', marginTop: '7px' }}>
                        Please don’t edit these fields unless you are an expert user & know what you’re doing. Entering
                        the wrong information could result in your transaction failing or getting stuck.
                      </Typography>
                    </Paper>
                    <Typography
                      sx={{ float: 'right', color: 'var(--green-primary-base)', fontSize: '13px', margin: ' 10px 0' }}
                    >
                      Reset to default: 21,000
                    </Typography>
                    <TextField
                      id='outlined-search'
                      label='Gas Limit (usually ranges from 21,000 to 500,000)'
                      defaultValue={'21000'}
                      type='search'
                      sx={{ marginTop: '20px', width: '100%' }}
                    />
                    <TextField
                      id='outlined-search'
                      label='Add data'
                      defaultValue={'0x'}
                      type='search'
                      sx={{ marginTop: '20px', width: '100%' }}
                    />
                  </AccordionDetails>
                </Accordion>
                <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '30px', alignItems: 'center' }}>
                  {values.amount != 0 && values.toAddress != '' && values.amount > 0 && values.amount < balance ? (
                    <Button
                      sx={{
                        backgroundColor: 'var(--green-primary-base)',
                        width: '90px',
                        minHeight: '50px',
                        color: '#fff',
                        textTransform: 'capitalize'
                      }}
                      onClick={handleSend}
                    >
                      Send
                    </Button>
                  ) : (
                    <Button
                      sx={{
                        backgroundColor: '#ccc',
                        width: '90px',
                        minHeight: '50px',
                        color: '#fff',
                        textTransform: 'capitalize'
                      }}
                      disabled
                    >
                      Send
                    </Button>
                  )}
                  <Button
                    sx={{ color: 'var(--green-primary-base)', textTransform: 'capitalize', marginTop: '15px' }}
                    onClick={() => setValues({ ...values, ['amount']: 0, ['toAddress']: '' })}
                  >
                    Clear All
                  </Button>
                </Box>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Network />
            <Box sx={{ marginTop: '20px' }}>
              <TokenValue />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default SendTx
