import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { ReactNode } from 'react'
import { CardItem } from '../../components/Common/CardItem'
import { SoftwareDialog } from '../../components/CreateWalletMethod/SoftwareDialog'
import { Footer } from '../../components/Common/Footer'
import { Header } from '../../components/Common/Header'
import BlankLayout from '../../components/Layouts/BlankLayout'
import Link from 'next/link'
const methodCreateWallet = [
  {
    id: 'app',
    title: 'Get MEW wallet app',
    subscript:
      ' Download our official app and connect to MEW web using your mobile phone. Available on iOS and Android. ',
    icon: '',
    img: 'https://www.myetherwallet.com/img/bg-mew-wallet.f8ae4bde.png'
  },
  {
    id: 'hardware',
    title: 'Buy a Hardware Wallet',
    subscript: ' For the highest standard of security, buy a hardware wallet and use it with MEW. ',
    icon: '',
    img: 'https://www.myetherwallet.com/img/icon-hardware-wallet.63f3f69f.png'
  },
  {
    id: 'software',
    title: 'Software',
    subscript:
      ' Software methods like keystore file and mnemonic phrase should only be used in offline settings by experienced users. ',
    icon: '',
    img: '',
    warning: 'NOT RECOMMENDED'
  }
]
const Create = () => {
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
          Create a new wallet
        </Typography>
        <Typography sx={{ fontSize: '1.143', fontWeight: 400, color: '#fff' }}>
          Please select a method to create a new wallet
        </Typography>
        <Typography sx={{ fontSize: '1.143', fontWeight: 400, marginBottom: '20px', color: '#fff' }}>
          Already have a wallet? <Link href="/wallet/access"><a style={{color: 'var(--green-primary-base)'}}>Access Wallet</a></Link>
        </Typography>
        {methodCreateWallet.map((item: any, index: number) => {
          switch (index) {
            case 2:
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
Create.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>
export default Create
