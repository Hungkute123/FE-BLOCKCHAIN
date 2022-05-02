import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from '@mui/material';
import React, { useState, useEffect } from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import axios from 'axios';
interface IKeystoreFileStepOne {
  handleComplete: any;
}
export const KeystoreFileStepOne: React.FC<IKeystoreFileStepOne> = ({ handleComplete }) => {
  const [isDisable, setIsDisable] = useState(true);
  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };
  const [values, setValues] = React.useState({
    password: '',
    isPassword: true,
    confirmPassword: '',
    isConfirmPassword: true,
    showPassword: false,
    showConfirmPassword: false,
  });
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    handleComplete();
  };

  const handleChange = (prop: any) => (event: any) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleClickShowConfirmPassword = () => {
    setValues({
      ...values,
      showConfirmPassword: !values.showConfirmPassword,
    });
  };
  useEffect(() => {
    if (values.password.length > 7) {
      if (values.password === values.confirmPassword) {
        setIsDisable(false);
      } else {
        setIsDisable(true);
      }
    }
  }, [values.password, values.confirmPassword]);
  return (
    <>
      <Box
        sx={{ display: 'flex', flexDirection: 'column' }}
      >
        <Grid container>
          <Grid item xs={6}>
            <Typography sx={{ color: '#9e9e9e', fontSize: '14px', fontWeight: '600' }}>
              STEP 1.
            </Typography>
            <Typography sx={{ fontSize: '16px', fontWeight: '600' }}>
              Select your Keystore File
            </Typography>
            <Typography sx={{ fontSize: '14px', fontWeight: '400' }}>
              Please select keystore file that unlocks your wallet.
            </Typography>
            <button
              style={{
                width: '100%',
                borderRadius: '10px',
                border: '1px solid var(--green-primary-base)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '25px 46px 25px 46px',
                color: 'var(--green-primary-base)',
                marginTop: '20px',
                fontWeight: '400',
                fontSize: '14px',
              }}
            >
              Access Wallet
            </button>
          </Grid>
          <Grid item xs={6}>
            <div style={{display: 'flex', alignItems: 'flex-end', width: '100%', justifyContent: 'flex-end'}}><img src="https://www.myetherwallet.com/img/keystore-file.cd9a1369.jpg" style={{display: 'flex', height: '150px', width: '150px', alignItems: 'flex-end'}} /></div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
