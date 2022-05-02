import React from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import {
  Avatar,
  FormControlLabel,
  FormGroup,
  Grid,
  ListItemIcon,
  Switch,
  SwitchProps,
  Typography,
} from '@mui/material';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import RedditIcon from '@mui/icons-material/Reddit';
import YouTubeIcon from '@mui/icons-material/YouTube';
import NearMeIcon from '@mui/icons-material/NearMe';
import { styled } from '@mui/material/styles';
const hardware = [
  { id: 1, name: 'Ledger' },
  { id: 2, name: 'BitBox02' },
  { id: 3, name: 'Ether Cards' },
  { id: 4, name: 'Trezor' },
  { id: 5, name: 'KeepKey' },
  { id: 6, name: 'Finney' },
  { id: 7, name: 'CoolWallet' },
  { id: 8, name: 'Billfodl' },
];
const MEW = [
  { id: 1, name: 'About us' },
  { id: 2, name: 'Careers' },
  { id: 3, name: 'How it works' },
  { id: 4, name: 'Team' },
  { id: 5, name: 'Help center' },
  { id: 6, name: 'Customer support' },
  { id: 7, name: 'MEWtopia' },
  { id: 8, name: 'Press Kit' },
  { id: 9, name: 'Security Policy' },
  { id: 10, name: 'Submit DApp' },
];
const tools = [
  { id: 1, name: 'MEW wallet' },
  { id: 2, name: 'MEW CX' },
  { id: 3, name: 'Verify message' },
  { id: 4, name: 'Convert units' },
  { id: 5, name: 'Generate keystore file' },
];
const MaterialUISwitch = styled(Switch)(({ theme }:any) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
    width: 32,
    height: 32,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));
const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color: theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
  },
}));

export const Footer = () => {
  return (
    <>
      <Box sx={{ clear: 'both', position: 'relative', marginTop: '0px' }}>
        <Grid container sx={{ padding: '40px 20px 10px 20px', justifyContent: 'space-around' }}>
          <Grid item>
            <ListItem
              component="div"
              disablePadding
              sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}
            >
              <Typography
                sx={{
                  paddingLeft: '15px',
                  fontWeight: 700,
                  fontSize: '14px',
                  paddingBottom: '10px',
                }}
              >
                Affiliate Hardware Wallets
              </Typography>
              {hardware.map((item: any, index: number) => {
                return (
                  <ListItemButton key={index} sx={{ paddingTop: '5px' }}>
                    <Typography sx={{ fontSize: '14px' }}>{item.name}</Typography>
                  </ListItemButton>
                );
              })}
            </ListItem>
          </Grid>
          <Grid item>
            <ListItem
              component="div"
              disablePadding
              sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}
            >
              <Typography
                sx={{
                  paddingLeft: '15px',
                  fontWeight: 700,
                  fontSize: '14px',
                  paddingBottom: '10px',
                }}
              >
                MEW
              </Typography>
              {MEW.map((item: any, index: number) => {
                return (
                  <ListItemButton key={index} sx={{ paddingTop: '5px' }}>
                    <Typography sx={{ fontSize: '14px' }}>{item.name}</Typography>
                  </ListItemButton>
                );
              })}
            </ListItem>
          </Grid>
          <Grid item>
            <ListItem
              component="div"
              disablePadding
              sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}
            >
              <Typography
                sx={{
                  paddingLeft: '15px',
                  fontWeight: 700,
                  fontSize: '14px',
                  paddingBottom: '10px',
                }}
              >
                Tools
              </Typography>
              {tools.map((item: any, index: number) => {
                return (
                  <ListItemButton key={index} sx={{ paddingTop: '5px' }}>
                    <Typography sx={{ fontSize: '14px' }}>{item.name}</Typography>
                  </ListItemButton>
                );
              })}
            </ListItem>
          </Grid>
          <Grid item>
            <ListItem
              component="div"
              disablePadding
              sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}
            >
              <Typography
                sx={{
                  paddingLeft: '15px',
                  fontWeight: 700,
                  fontSize: '14px',
                  paddingBottom: '10px',
                }}
              >
                Love MEW?
              </Typography>
              <Typography sx={{ paddingLeft: '15px', fontSize: '14px', width: '290px' }}>
                Help us keep MEW free and open-source, your donations go a long way towards making
                that possible.
              </Typography>

              <ListItemButton sx={{ paddingTop: '5px' }}>
                <ListItemIcon>
                  <Avatar
                    sx={{ width: 30, height: 30 }}
                    alt="Remy Sharp"
                    src="data:image/png;base64,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"
                  />
                </ListItemIcon>
                <Typography sx={{ fontSize: '14px' }}>Ethereum Donation</Typography>
              </ListItemButton>
              <ListItemButton sx={{ paddingTop: '5px' }}>
                <ListItemIcon>
                  <Avatar
                    sx={{ width: 30, height: 30 }}
                    src="data:image/png;base64,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"
                    alt="BTC IMAGE"
                  />
                </ListItemIcon>
                <Typography sx={{ fontSize: '14px' }}>BTC Donation</Typography>
              </ListItemButton>
            </ListItem>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{ padding: '10px 100px 25px 100px', justifyContent: 'space-between', width: '100%' }}
        >
          <Grid item sx={{ display: 'flex' }}>
            <Typography sx={{ fontSize: '14px', paddingRight: '10px' }}>Feedback</Typography>
            <Typography sx={{ fontSize: '14px', paddingRight: '10px' }}>|</Typography>
            <Typography sx={{ fontSize: '14px', paddingRight: '10px' }}>Privacy</Typography>
            <Typography sx={{ fontSize: '14px', paddingRight: '10px' }}>|</Typography>
            <Typography sx={{ fontSize: '14px' }}>Terms</Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" sx={{ fontSize: '14px' }}>
              <FormGroup>
                <FormControlLabel
                  control={<IOSSwitch sx={{marginRight: '8px', color: '#fff'}} defaultChecked />}
                  label="Data Tracking On"
                />
              </FormGroup>
             
            </Typography>
          </Grid>
          <Grid item>
            <button>
              <FacebookOutlinedIcon />
            </button>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            padding: '10px 100px 10px 100px',
            justifyContent: 'space-between',
            width: '100%',
            backgroundColor: 'var(--text-dark-base)',
            height: '52px',
            color: 'var(--cyan-primary-base)',
            fontSize: '14px',
            alignItems: 'center',
          }}
        >
          <Grid item>v7.0</Grid>
          <Grid item>
            © 2022 MyEtherWallet. All rights reserved. Developed by Nguyễn Đình Hùng.
          </Grid>
          <Grid item>English</Grid>
        </Grid>
      </Box>
    </>
  );
};
