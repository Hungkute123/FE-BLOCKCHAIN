import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
interface ICardItemTypeTwo {
  item: any;
  onClick?: any;
  borderColor?: string;
  backgroundColor?: string;
  warningPosition?: string;
}
export const CardItemTypeTwo: React.FC<ICardItemTypeTwo> = ({
  item,
  onClick,
  borderColor = '#fff',
  backgroundColor = '#fff',
  warningPosition,
}) => {
  return (
    <>
      <button
        onClick={onClick}
        style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
      >
        <Box
          sx={{
            backgroundColor: `${backgroundColor}`,
            border: `1px solid ${borderColor}`,
            borderRadius: '7px',
            padding: '20px 14px 20px 14px',
            maxWidth: '150px',
            minWidth: '100px',
            margin: '10px 0 10px 0',
            minHeight: '250px',
          }}
        >
          <Grid container spacing={2}>
            {item.img ? (
              <>
              <Grid item xs={12}>
                  <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
                    <img
                      src={item.img}
                      alt={item.title}
                      style={{ maxWidth: '60px', maxHeight: '60px' }}
                    />
                    {item.img2 ? (
                      <img
                        src={item.img2}
                        alt={item.title}
                        style={{ maxWidth: '70px', maxHeight: '70px' }}
                      />
                    ) : (
                      <></>
                    )}
                  </div>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sx={{
                    textAlign: 'left',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}
                >
                  <Typography sx={{ fontWeight: '600' }}>{item.title}</Typography>
                  <Typography sx={{ fontSize: '14px' }}>{item.subscript}</Typography>
                </Grid>
                
              </>
            ) : (
              <Grid
                item
                xs={12}
                sx={{
                  textAlign: 'left',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <Typography
                  sx={{ color: 'var(--orange-primary-base)', textAlign: 'right', fontSize: '12px' }}
                >
                  {item.warning}
                </Typography>
                <Typography sx={{ fontWeight: '600' }}>{item.title}</Typography>
                <Typography sx={{ fontSize: '14px' }}>{item.subscript}</Typography>
              </Grid>
            )}
          </Grid>
        </Box>
      </button>
    </>
  );
};
