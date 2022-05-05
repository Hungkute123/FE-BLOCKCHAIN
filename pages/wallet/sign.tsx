import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import React from 'react'
import { Network } from '../../components/Info/Network'
import { TokenValue } from '../../components/Info/TokenValue'

const Sign = () => {
  return <div style={{ backgroundColor: 'var(--gray-primary-base)', width: '100%' }}>
  <Box>
    <Grid container>
      <Grid item xs={8}>
        <Paper
          sx={{
            border: '1px solid #ccc',
            width: '776px',
            padding: '50px 0',
            marginLeft: '1rem',
            marginBottom: '1rem',
            minHeight: '78vh'
          }}
        >
          <Typography
            sx={{ fontWeight: 600, display: 'flex', justifyContent: 'center', color: 'var(--green-primary-base)' }}
          >
            Functions in development
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Network />
        <Box sx={{ marginTop: '20px' }}>
          <TokenValue />
        </Box>
      </Grid>
    </Grid>
  </Box>
</div>
}

export default Sign
