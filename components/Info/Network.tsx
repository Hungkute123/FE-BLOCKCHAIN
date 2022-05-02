import { Button, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
export const Network = () => {
  return (
    <>
      <Paper sx={{ width: '371px', padding: '25px' }}>
        <Grid container>
          <Grid item xs={8}>
            <Typography sx={{ fontWeight: 600, fontSize: '18px' }}>
              Network
              <Button
                sx={{
                  backgroundColor: 'var(--gray-primary-base)',
                  height: '25px',
                  minWidth: '25px',
                  width: '25px',
                  marginLeft: '10px'
                }}
              >
                <ArrowForwardIosIcon fontSize='small' sx={{color: '#000'}} />
              </Button>
            </Typography>

            <Typography sx={{fontSize: '13px', color: '#000', marginTop: '10px'}}>ETH - Ethereum</Typography>
            <Typography sx={{fontSize: '13px', color: '#000'}}>Last Block: 14,696,141</Typography>
          </Grid>
          <Grid item xs={4}>
            <div style={{float: 'right', marginRight: '15px'}}>
            <img
              src='https://www.myetherwallet.com/img/eth.e74e2c69.svg'
              alt=''
              style={{ height: '65px', width: '45px' }}
            />
            </div>
          </Grid>
        </Grid>
      </Paper>
    </>
  )
}
