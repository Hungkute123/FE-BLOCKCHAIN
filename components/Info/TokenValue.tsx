import { Paper, Typography } from '@mui/material'
import React from 'react'

export const TokenValue = () => {
  return (
    <>
      <Paper sx={{ width: '371px', padding: '25px' }}>
        <Typography sx={{ fontWeight: 600, fontSize: '18px' }}>My Token Value</Typography>
        <Typography sx={{ fontWeight: 600, marginTop: '15px' }}>$0.00</Typography>
        <img
          src='https://img.mewapi.io/?image=https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880'
          alt='hinh'
          style={{height:'32px', width: '32px', marginTop: '10px'}}
        />
      </Paper>
    </>
  )
}
