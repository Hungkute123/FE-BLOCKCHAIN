// ** Icon imports
import Login from 'mdi-material-ui/Login'
import Table from 'mdi-material-ui/Table'
import CubeOutline from 'mdi-material-ui/CubeOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'
import WidgetsIcon from '@mui/icons-material/Widgets';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import LogoutIcon from '@mui/icons-material/Logout';
// ** Type import
import { VerticalNavItemsType } from '../types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/wallet/dashboard'
    },
    {
      title: 'Transaction',
      icon: HomeOutline,
      path: '/wallet/transaction'
    },
    {
      title: 'NFT Manager',
      icon: HomeOutline,
      path: '/wallet/nft'
    },
    {
      title: 'DApps',
      icon: WidgetsIcon,
      path: '/wallet/dapps'
    },
    {
      title: 'Contract',
      icon: SettingsEthernetIcon,
      path: '/wallet/deploy'
    },
    // {
    //   title: 'Deploy Contract',
    //   icon: SettingsEthernetIcon,
    //   path: '/wallet/deploy'
    // },
    // {
    //   title: 'Interact with Contract',
    //   icon: SettingsEthernetIcon,
    //   path: '/wallet/interact'
    // },
    {
      title: 'Message',
      icon: ChatBubbleOutlineIcon,
      path: '/wallet/sign'
    },
    // {
    //   title: 'Sign Message',
    //   icon: HomeOutline,
    //   path: '/wallet/sign'
    // },
    // {
    //   title: 'Verify Message',
    //   icon: HomeOutline,
    //   path: '/wallet/verify'
    // },
    {
      title: 'Settings',
      icon: AccountCogOutline,
      path: '/wallet/settings'
    },
    // {
    //   sectionTitle: 'Pages'
    // },
    {
      title: 'Logout',
      icon: LogoutIcon,
      path: '/wallet/logout',
      openInNewTab: true
    },

  ]
}

export default navigation
