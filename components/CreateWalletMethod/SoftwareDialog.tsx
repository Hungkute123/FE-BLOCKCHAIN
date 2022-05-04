import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Slide from '@mui/material/Slide'
import Toolbar from '@mui/material/Toolbar'
import CloseIcon from '@mui/icons-material/Close'
import { TransitionProps } from '@mui/material/transitions'
import Typography from '@mui/material/Typography'
import React from 'react'
import { Box } from '@mui/system'
import { Paper } from '@mui/material'
import { CardItem } from '../Common/CardItem'
import { KeystoreFile } from './KeystoreFile'
interface ISoftwareDialog {
  open: any
  handleClose: any
}
const methodCreateWallet = [
  {
    id: 'app',
    title: 'Keystore File',
    subscript:
      ' Using a keystore file online makes your wallet more vulnerable to loss of funds. We don’t recommend this method of wallet creation. ',
    icon: '',
    img: 'https://www.myetherwallet.com/img/icon-keystore-file.956cbf72.svg'
  },
  {
    id: 'hardware',
    title: ' Mnemonic Phrase ',
    subscript:
      ' Using a Mnemonic Phrase online makes your wallet more vulnerable to loss of funds. We don’t recommend this method of wallet creation. ',
    icon: '',
    img: 'https://www.myetherwallet.com/img/icon-mnemonic.7c3d34fc.svg'
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
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction='up' ref={ref} {...props} />
})
export const SoftwareDialog: React.FC<ISoftwareDialog> = ({ open, handleClose }) => {
  const [openCreateWithKeystoreFile, setOpenCreateWithKeystoreFile] = React.useState(false)

  const handleClickOpenCreateWithKeystoreFile = () => {
    setOpenCreateWithKeystoreFile(true)
  }

  const handleCloseCreateWithKeystoreFile = () => {
    setOpenCreateWithKeystoreFile(false)
  }

  return (
    <>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <KeystoreFile open={openCreateWithKeystoreFile} handleClose={handleCloseCreateWithKeystoreFile} />
        <Box
          sx={{
            backgroundColor: '#F2FAFA',
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
          }}
        >
          <div style={{ width: '100%' }}>
            <Button
              sx={{
                float: 'right',
                borderRadius: '50%',
                width: '56px',
                height: '56px',
                top: 0,
                right: '0',
                position: 'fixed'
              }}
              onClick={handleClose}
            >
              <CloseIcon sx={{ color: '#706666' }} />
            </Button>
          </div>
          <div style={{ display: 'block' }}>
            <Paper
              sx={{
                minHeight: '300px',
                width: '650px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                borderRadius: '10px',
                paddingBottom: '15px'
              }}
            >
              <Typography variant='h5' sx={{ fontWeight: '700', marginTop: '20px', marginBottom: '20px' }}>
                Create wallet using software
              </Typography>
              <Box sx={{ display: 'block' }}>
                {methodCreateWallet.map((item: any, index: number) => {
                  switch (index) {
                    case 0:
                      return (
                        <CardItem
                          item={item}
                          borderColor='#ccc'
                          onClick={handleClickOpenCreateWithKeystoreFile}
                          key={index}
                        />
                      )
                    default:
                      return <CardItem item={item} borderColor='#ccc' key={index} />
                  }
                })}
              </Box>
            </Paper>
          </div>
          <Typography variant='subtitle1' sx={{ fontSize: '12px', margin: ' 20px 0 20px 0' }}>
            Need help? Contact support
          </Typography>
        </Box>
      </Dialog>
    </>
  )
}
