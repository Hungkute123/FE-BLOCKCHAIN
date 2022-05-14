// ** React Import
import { ReactNode, useContext, useEffect, useState } from 'react'

// ** Next Import
import Link from 'next/link'
import Router from 'next/router'
// ** MUI Imports
import Box, { BoxProps } from '@mui/material/Box'
import { styled, useTheme } from '@mui/material/styles'
import Typography, { TypographyProps } from '@mui/material/Typography'
import QrCode2Icon from '@mui/icons-material/QrCode2'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import SwapHorizIcon from '@mui/icons-material/SwapHoriz'
import IosShareIcon from '@mui/icons-material/IosShare'
import LocalMallIcon from '@mui/icons-material/LocalMall'
// ** Type Import
import { Settings } from '../../context/settingsContext'

// ** Configs
import themeConfig from '../../configs/themeConfig'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import { Tooltip } from '@mui/material'
import axios from 'axios'
import { WalletContext } from '../../context/walletContext'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert, { AlertProps } from '@mui/material/Alert'
import React from 'react'

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />
})
interface Props {
  hidden: boolean
  settings: Settings
  toggleNavVisibility: () => void
  saveSettings: (values: Settings) => void
  verticalNavMenuBranding?: (props?: any) => ReactNode
}

// ** Styled Components
const MenuHeaderWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingRight: theme.spacing(2),
  paddingLeft: '0.6rem !important',
  paddingBottom: '1rem !important',
  transition: 'padding .25s ease-in-out',
  backgroundColor: '#071e40',
  flexDirection: 'column'
}))

const HeaderTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontWeight: 600,
  lineHeight: 'normal',
  textTransform: 'uppercase',
  color: theme.palette.text.primary,
  transition: 'opacity .25s ease-in-out, margin .25s ease-in-out'
}))

const StyledLink = styled('a')({
  display: 'flex',
  alignSelf: 'flex-start',
  textDecoration: 'none',
  margin: '15px 0 0 0'
})
const CardInformation = styled('div')({
  margin: '15px 0',
  backgroundColor: '#ccc',
  borderRadius: '10px',
  border: '1px solid #ccc',
  minHeight: '140px',
  minWidth: '270px',
  display: 'block',
  backgroundImage: 'url(https://mewcard.mewapi.io/?address=0x17ec911bf41234ae7297e1407f1e1a958a37d3c2)'
})
const VerticalNavHeader = (props: Props) => {
  const wallet: any = useContext(WalletContext)
  const [open, setOpen] = React.useState(false)
  // ** Props
  const { verticalNavMenuBranding: userVerticalNavMenuBranding } = props

  // ** Hooks
  const theme = useTheme()
  const [publicKey, setPublicKey] = useState('0000000000000000000000000000000')
  const [headKey, setHeadKey] = useState('000000')
  const [tailKey, setTailKey] = useState('0000')
  const [balance, setBalance] = useState(0)

  useEffect(() => {
    console.log(wallet.publicKey)
    setPublicKey(String(wallet.publicKey))
    setBalance(wallet.balance)
    const length = publicKey.length
    const head = publicKey.slice(0, 6)
    const tail = publicKey.slice(length - 5, length - 1)
    setHeadKey(head)
    setTailKey(tail)
  }, [wallet.publicKey.length, publicKey, wallet.balance])

  const handleClickCopy = () => {
    navigator.clipboard.writeText(publicKey)
    setOpen(true)
  }

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }
  
  return (
    <MenuHeaderWrapper className='nav-header' sx={{ pl: 6, width: '296px' }}>
      {userVerticalNavMenuBranding ? (
        userVerticalNavMenuBranding(props)
      ) : (
        <Link href='/wallet/transaction' passHref>
          <StyledLink>
            <img
              src='https://www.myetherwallet.com/img/logo-mew.f6482e98.svg'
              alt='MEW'
              style={{ width: '140px', height: '40px' }}
            />
            {/* <HeaderTitle variant='h6' sx={{ ml: 3 }}>
              {themeConfig.templateName}
            </HeaderTitle> */}
          </StyledLink>
        </Link>
      )}
      <CardInformation>
        <Typography sx={{ color: '#fff', fontSize: '14px', margin: '12px 10px 10px 15px', fontWeight: 500 }}>
          MY PERSONAL ACCOUNT
        </Typography>
        <Tooltip title={`${publicKey}`} placement='top' sx={{ backgroundColor: '#fff' }}>
          <Typography sx={{ color: '#fff', fontSize: '12px', marginLeft: '15px' }}>
            {headKey}...{tailKey}
          </Typography>
        </Tooltip>
        <Typography sx={{ color: '#fff', fontSize: '30px', margin: '20px 10px 10px 15px', fontWeight: 600 ,textOverflow: 'ellipsis', overflow: 'hidden', width: '200px',whiteSpace: 'nowrap'}}>
          {balance} MC
        </Typography>
        <Grid container sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <Grid item xs={6}>
            <Typography sx={{ color: '#fff', fontSize: '15px', marginLeft: '15px',textOverflow: 'ellipsis', overflow: 'hidden', width: '150px',whiteSpace: 'nowrap' }}>{balance} MC</Typography>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ float: 'right', marginRight: '15px' }}>
              <Button
                sx={{
                  color: '#fff',
                  borderRadius: '10px',
                  backgroundColor: '#ede6e69e',
                  height: '32px',
                  minWidth: '32px',
                  fontSize: '18px',
                  marginRight: '8px',
                  width: '32px'
                }}
              >
                <QrCode2Icon sx={{ fontSize: '18px' }} />
              </Button>
              <Button
                sx={{
                  color: '#fff',
                  borderRadius: '10px',
                  backgroundColor: '#ede6e69e',
                  height: '32px',
                  minWidth: '32px',
                  width: '32px'
                }}
                onClick={handleClickCopy}
              >
                <ContentCopyIcon sx={{ fontSize: '18px' }} />
              </Button>
              <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
                <Alert onClose={handleClose} severity='success' sx={{ width: '100%' }}>
                Copy your address successfully
                </Alert>
              </Snackbar>
            </Box>
          </Grid>
        </Grid>
      </CardInformation>
      <Grid container sx={{ display: 'flex', minHeight: '40px', justifyContent: 'center' }}>
        <Grid item>
          <Box sx={{ display: 'flex', borderRight: '1px solid #ccc', padding: '0 10px' }}>
            <Button sx={{ textTransform: 'capitalize', display: 'flex', flexDirection: 'column' }}>
              <i>
                <LocalMallIcon sx={{ color: 'var(--green-primary-base)' }} />
              </i>
              <Typography sx={{ color: '#fff' }}>Buy/Sell</Typography>
            </Button>
          </Box>
        </Grid>
        <Grid item>
          <Box sx={{ display: 'flex', borderRight: '1px solid #ccc', padding: '0 10px' }}>
            <Button
              sx={{ textTransform: 'capitalize', display: 'flex', flexDirection: 'column' }}
              onClick={() => {
                Router.push('/wallet/send-tx')
              }}
            >
              <i>
                <IosShareIcon sx={{ color: 'var(--green-primary-base)' }} />
              </i>
              <Typography sx={{ color: '#fff' }}>Send</Typography>
            </Button>
          </Box>
        </Grid>
        <Grid item>
          <Box sx={{ display: 'flex', padding: '0 10px' }}>
            <Button sx={{ textTransform: 'capitalize', display: 'flex', flexDirection: 'column' }}>
              <i>
                <SwapHorizIcon sx={{ color: 'var(--green-primary-base)' }} />
              </i>
              <Typography sx={{ color: '#fff' }}>Swap</Typography>
            </Button>
          </Box>
        </Grid>
      </Grid>
    </MenuHeaderWrapper>
  )
}

export default VerticalNavHeader
