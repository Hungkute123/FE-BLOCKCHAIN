import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { ReactNode } from 'react'
import { SoftwareDialog } from '../../components/AccessWalletMethod/SoftwareDialog'
import { CardItem } from '../../components/Common/CardItem'
import { Footer } from '../../components/Common/Footer'
import { Header } from '../../components/Common/Header'
import BlankLayout from '../../components/Layouts/BlankLayout'
import Link from 'next/link'
const methodCreateWallet = [
  {
    id: 'wallet',
    title: 'MEW wallet',
    subscript: ' Connect MEW wallet app to MEW web ',
    icon: '',
    img: 'https://www.myetherwallet.com/img/icon-mew-wallet.f29574d3.png'
  },
  {
    id: 'browser',
    title: 'Browser Extension',
    subscript: ' Use your web3 wallet with MEW. ',
    icon: '',
    img: 'https://www.myetherwallet.com/img/icon-mew-cx.ef0ea222.png'
  },
  {
    id: 'hardware',
    title: 'Hardware Wallets',
    subscript: ' Ledger, Trezor, KeepKey, FINNEY, BitBox ',
    icon: '',
    img: 'https://www.myetherwallet.com/img/icon-hardware-wallet.63f3f69f.png'
  },
  {
    id: 'mobile',
    title: 'Mobile Apps',
    subscript: ' WalletConnect, WalletLink ',
    icon: '',
    img: 'https://www.myetherwallet.com/img/icon-wallet-connect.fde9097f.svg',
    img2: 'https://www.myetherwallet.com/img/icon-wallet-link.af4ad70a.png'
  },
  {
    id: 'software',
    title: 'Software',
    subscript: ' Keystore files, Mnemonic phrase, Private key ',
    icon: '',
    img: '',
    warning: 'NOT RECOMMENDED'
  }
]
const Access = () => {
  const [openSoftwareDialog, setOpenSoftwareDialog] = React.useState(false)

  const handleClickOpenSoftwareDialog = () => {
    setOpenSoftwareDialog(true)
  }

  const handleCloseSoftwareDialog = () => {
    setOpenSoftwareDialog(false)
  }
  return (
    <>
      <Header />
      <SoftwareDialog open={openSoftwareDialog} handleClose={handleCloseSoftwareDialog} />
      <Box
        sx={{
          backgroundColor: 'var(--blue-primary-base)',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          color: '#fff',
          paddingBottom: '70px'
        }}
      >
        <Typography sx={{ fontSize: '2.285rem', fontWeight: 700, color: '#fff' }} gutterBottom>
          Access My Wallet
        </Typography>
        <Typography sx={{ fontSize: '1.143', fontWeight: 400, color: '#fff' }}>
          Please select a method to access your wallet.
        </Typography>
        <Typography sx={{ fontSize: '1.143', fontWeight: 400, marginBottom: '20px', color: '#fff' }}>
          Don't have a wallet?{' '}
          <Link href='/wallet/create'>
            <a style={{ color: 'var(--green-primary-base)' }}> Create Wallet</a>
          </Link>
        </Typography>
        {methodCreateWallet.map((item: any, index: number) => {
          switch (index) {
            case 4:
              return (
                <CardItem
                  key={item.id}
                  item={item}
                  onClick={handleClickOpenSoftwareDialog}
                  backgroundColor='transparent'
                  color='#fff'
                />
              )
            default:
              return <CardItem key={item.id} item={item} />
          }
        })}
      </Box>
      <Footer />
    </>
  )
}
Access.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>
export default Access
