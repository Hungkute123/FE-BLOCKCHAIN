import { Button, Grid, Menu, MenuItem, Popover, Typography } from '@mui/material';
import { Box, styled } from '@mui/system';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import React from 'react';
export const Header = () => {
  const Header = styled('div')({
    backgroundColor: 'var(--blue-primary-base)',
    height: 94,
    display: 'flex',
    justifyContent: 'center',
  });

  return (
    <>
      <Header>
        <Grid
          container
          sx={{ height: 94, alignItems: 'center', maxWidth: 1184, justifyContent: 'space-between' }}
        >
          <Grid item>
            <img
              src="https://www.myetherwallet.com/img/logo-mew.f6482e98.svg"
              alt="MEW"
              style={{ width: '130px', height: '36px' }}
            />
          </Grid>
          <Grid item>
            <Grid
              container
              sx={{
                height: 94,
                alignItems: 'center',
                justifyContent: 'space-between',
                minWidth: 450,
              }}
            >
              <Grid item>
                <Typography sx={{ color: '#fff', fontSize: '14px' }}>What is MEW</Typography>
              </Grid>
              <Grid item>
                <PopupState variant="popover" popupId="schudule-class">
                  {(popupState) => (
                    <div>
                      <Typography
                        {...bindTrigger(popupState)}
                        sx={{ color: '#fff', fontSize: '14px' }}
                      >
                        Wallet actions
                      </Typography>
                      <Popover
                        {...bindPopover(popupState)}
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'left',
                        }}
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'left',
                        }}
                      ></Popover>
                    </div>
                  )}
                </PopupState>
              </Grid>
              <Grid item>
                <Typography sx={{ color: '#fff', fontSize: '14px' }}>Buy ETH</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <PopupState variant="popover" popupId="schudule-class">
              {(popupState) => (
                <div>
                  <Button
                    {...bindTrigger(popupState)}
                    sx={{ border: '1px solid var(--green-primary-base)' }}
                    startIcon
                  >
                    MEW Hub
                  </Button>
                  <Popover
                    {...bindPopover(popupState)}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'left',
                    }}
                  ></Popover>
                </div>
              )}
            </PopupState>
          </Grid>
        </Grid>
      </Header>
    </>
  );
};
