import Box from '@mui/material/Box';
import React from 'react';
import Typography from '@mui/material/Typography';
import { CardItemTypeTwo } from '../Common/CardItemTypeTwo';
import Grid from '@mui/material/Grid';
import Link from 'next/link';
interface IKeystoreFileStepThree {
  handleComplete: any;
  handleBackStepOne: any;
}
export const KeystoreFileStepThree:React.FC<IKeystoreFileStepThree> = ({handleBackStepOne, handleComplete}) => {
  return (
    <>
      <Box
        sx={{ display: 'flex', flexDirection: 'column'}}
      >
        <Typography sx={{ color: '#9e9e9e', fontSize: '14px', fontWeight: '600' }}>
          STEP 3.
        </Typography>
        <Typography sx={{ fontSize: '16px', fontWeight: '600' }}>Download keystore file</Typography>
        <Grid container>
          <Grid item xs={6}>
            <Box>
              <Typography sx={{ fontSize: '14px', fontWeight: '400' }}>
                You are now ready to take advantage of all that Ethereum has to offer! Access with
                keystore file should only be used in an offline setting.
              </Typography>

             <Link href="/wallet/access">
             <button
                style={{
                  width: '100%',
                  borderRadius: '10px',
                  border: '1px solid var(--green-primary-base)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'var(--green-primary-base)',
                  padding: '25px 46px 25px 46px',
                  color: '#fff',
                  marginTop: '20px',
                  fontWeight: '400',
                  fontSize: '14px'
                }}
              >
                Access Wallet
              </button></Link>
              <button
                style={{
                  width: '100%',
                  borderRadius: '5px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#fff',
                  padding: '18px 46px 18px 46px',
                  color: 'var(--green-primary-base)',
                  marginRight: '5px',
                  marginTop: '10px',
                  fontWeight: '400',
                  fontSize: '14px'
                }}
                onClick={handleBackStepOne}
              >
                Create Another Wallet
              </button>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <img src="https://www.myetherwallet.com/img/icon-keystore-mew.b4b1615e.png"></img>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
