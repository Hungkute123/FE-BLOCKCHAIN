import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Grid,
  MenuItem,
  TextField,
  Typography
} from '@mui/material'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred'
import WarningAmberIcon from '@mui/icons-material/WarningAmber'
import { TokenValue } from '../../components/Info/TokenValue'
import { Network } from '../../components/Info/Network'
const currencies = [
  {
    value: 'USD',
    label: '$'
  },
  {
    value: 'EUR',
    label: '€'
  },
  {
    value: 'BTC',
    label: '฿'
  },
  {
    value: 'JPY',
    label: '¥'
  }
]
const SendTX = () => {
  const [currency, setCurrency] = React.useState('EUR')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrency(event.target.value)
  }
  return (
    <div style={{ backgroundColor: 'var(--gray-primary-base)', width: '100%' }}>
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
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id='outlined-select-currency'
                      select
                      label='Amount'
                      value={currency}
                      onChange={handleChange}
                      helperText='Not enough balance to send! Buy more.'
                      sx={{ width: '100%' }}
                    >
                      {currencies.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                </Grid>
                <Paper sx={{ padding: '12px', backgroundColor: '#F8F9FB', marginTop: '15px' }}>
                  <Grid container spacing={5}>
                    <Grid item xs={6}>
                      <Typography sx={{ fontWeight: 600, fontSize: '13px', display: 'flex', color: '#000' }}>
                        <ReportGmailerrorredIcon fontSize='small' />
                        Your ETH balance is too low
                      </Typography>
                      <Typography sx={{ fontSize: '13px', marginTop: '5px' }}>
                        Every transaction requires a small amount of ETH to execute. Even if you have tokens to swap,
                        when your ETH balance is close to zero, you won't be able to send anything until you fund your
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
                          fontSize: '13px'
                        }}
                      >
                        Transfer ETH from another account
                      </Button>
                      <Button
                        sx={{
                          textTransform: 'capitalize',
                          color: 'var(--green-primary-base)',
                          fontWeight: 600,
                          fontSize: '13px'
                        }}
                      >
                        Buy ETH
                      </Button>
                    </Grid>
                  </Grid>
                </Paper>
                <TextField
                  id='outlined-select-currency'
                  select
                  label='Select'
                  value={currency}
                  onChange={handleChange}
                  sx={{ marginTop: '20px', width: '100%' }}
                >
                  {currencies.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <Typography sx={{ fontWeight: 600, fontSize: '13px', marginTop: '30px' }}>Transaction fee</Typography>
                <Grid container sx={{ marginTop: '10px' }}>
                  <Grid item sx={{ fontSize: '13px' }} xs={8}>
                    <Button sx={{ color: 'var(--green-primary-base)', backgroundColor: '#F8F9FB' }}>
                      ~$4.10 - 15min
                    </Button>
                    0.00145
                    <Typography sx={{ fontSize: '13px' }}>Not enough ETH to cover network fee. Buy more ETH</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography sx={{ fontSize: '13px', float: 'right' }}>Total: 0.001445 ETH</Typography>
                    <Typography
                      sx={{ fontSize: '13px', color: 'var(--green-primary-base)', float: 'right', marginTop: '15px' }}
                    >
                      How are fees determind?
                    </Typography>
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
                    <TextField label='Size' id='outlined-size-normal' defaultValue='Normal' sx={{ width: '100%' }} />
                    <TextField
                      label='Size'
                      id='outlined-size-normal'
                      defaultValue='Normal'
                      sx={{ width: '100%', marginTop: '17px' }}
                    />
                  </AccordionDetails>
                </Accordion>
                <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '30px', alignItems: 'center' }}>
                  <Button
                    sx={{
                      backgroundColor: '#ccc',
                      width: '90px',
                      minHeight: '50px',
                      color: '#fff',
                      textTransform: 'capitalize'
                    }}
                  >
                    Next
                  </Button>
                  <Button sx={{ color: 'var(--green-primary-base)', textTransform: 'capitalize', marginTop: '15px' }}>
                    Clear All
                  </Button>
                </Box>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Network />
            <Box sx={{marginTop: '20px'}}>
            <TokenValue />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default SendTX
