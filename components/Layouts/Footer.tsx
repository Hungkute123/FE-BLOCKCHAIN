import { Button, Grid } from '@mui/material'
import React from 'react'

export const Footer = () => {
  return (
    <>
      <Grid container sx={{ height: '60px', padding: '15px', display: 'flex', alignItems: 'center' }}>
        <Grid item xs={8} sx={{ fontSize: '14px', color: '#000' }}>
        © 2022 MyEtherWallet. All rights reserved. Developed by Nguyễn Đình Hùng.
        </Grid>
        <Grid item xs={4}>
          <div style={{ float: 'right', marginRight: '30px' }}>
            <Button sx={{textTransform: 'capitalize', color: '#000'}}>Helper center</Button>
          </div>
        </Grid>
      </Grid>
    </>
  )
}
