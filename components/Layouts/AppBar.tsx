// ** React Imports
import { ReactNode } from 'react'

// ** MUI Imports
import { styled, useTheme } from '@mui/material/styles'
import MuiAppBar, { AppBarProps } from '@mui/material/AppBar'
import MuiToolbar, { ToolbarProps } from '@mui/material/Toolbar'

// ** Type Import
import { Settings } from '../../context/settingsContext'
import { Button, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
interface Props {
  hidden: boolean
  settings: Settings
  toggleNavVisibility: () => void
  saveSettings: (values: Settings) => void
  verticalAppBarContent?: (props?: any) => ReactNode
}

const AppBar = styled(MuiAppBar)<AppBarProps>(({ theme }) => ({
  transition: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'var(--gray-primary-base)',
  color: theme.palette.text.primary,
  minHeight: theme.mixins.toolbar.minHeight
}))

const Toolbar = styled(MuiToolbar)<ToolbarProps>(({ theme }) => ({
  width: '100%',
  borderBottomLeftRadius: 10,
  borderBottomRightRadius: 10,
  padding: `${theme.spacing(0)} !important`,
  minHeight: `${theme.mixins.toolbar.minHeight}px !important`,
  transition:
    'padding .25s ease-in-out, box-shadow .25s ease-in-out, backdrop-filter .25s ease-in-out, background-color .25s ease-in-out'
}))

const LayoutAppBar = (props: Props) => {
  // ** Props
  const { settings, verticalAppBarContent: userVerticalAppBarContent } = props

  // ** Hooks
  const theme = useTheme()

  // ** Vars
  const { contentWidth } = settings

  return (
    <AppBar elevation={0} className='layout-navbar' position='static'>
      <Toolbar
        className='navbar-content-container'
        sx={{
          ...(contentWidth === 'boxed' && {
            '@media (min-width:1440px)': { maxWidth: `calc(1440px - ${theme.spacing(6)} * 2)` }
          })
        }}
      >
        <Grid container sx={{ padding: '20px 15px' }}>
          <Grid item xs={6}>
            <Box>
              <Grid container sx={{ display: 'flex', alignItems: 'center' }} spacing={4}>
                <Grid item>
                  <AccountBalanceIcon />
                </Grid>
                <Grid item>
                  <Typography sx={{ fontSize: '14px', fontWeight: 600 }}>
                    You can now Buy crypto with low fees
                  </Typography>
                  <Typography sx={{ fontSize: '14px' }}>
                    Enjoy 0.7% fee when you select ‘Bank account’ as payment method.
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={5}>
            <Button
              sx={{
                backgroundColor: 'var(--green-primary-base)',
                color: '#fff',
                textTransform: 'capitalize',
                height: '35px',
                marginLeft: '45px'
              }}
            >
              Buy Crypto Now
            </Button>
          </Grid>
          <Grid item xs={1}>
            <div style={{ float: 'right', marginRight: '25px' }}>
              <Button sx={{color: '#000', borderRadius: '50%'}}><NotificationsNoneIcon /></Button>
            </div>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default LayoutAppBar
