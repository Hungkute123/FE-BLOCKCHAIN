import {
  Box,
  Button,
  FormControl,
  FormHelperText,
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
export const KeystoreFileStepOne:React.FC<IKeystoreFileStepOne> = ({handleComplete}) => {
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
        sx={{ display: 'flex', flexDirection: 'column'}}
      >
        <Typography sx={{ color: '#9e9e9e', fontSize: '14px', fontWeight: '600' }}>
          STEP 1.
        </Typography>
        <Typography sx={{ fontSize: '16px', fontWeight: '600' }}>Create password</Typography>
        <FormControl sx={{ width: '100%', marginTop: '20px' }}>
          <InputLabel
            htmlFor="outlined-adornment-password"
            error={!values.isPassword && values.password === ''}
          >
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            error={values.isPassword === false && values.password === ''}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
          {!values.isPassword && values.password === '' && (
            <FormHelperText error id="outlined-adornment-password">
              Vui lòng nhập mật khẩu
            </FormHelperText>
          )}
        </FormControl>
        <FormControl sx={{ marginTop: '20px' }}>
          <InputLabel
            htmlFor="outlined-adornment-password"
            error={!values.isConfirmPassword && values.confirmPassword === ''}
          >
            Confirm Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showConfirmPassword ? 'text' : 'password'}
            value={values.confirmPassword}
            onChange={handleChange('confirmPassword')}
            error={values.isConfirmPassword === false && values.confirmPassword === ''}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowConfirmPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
          {!values.isConfirmPassword && values.confirmPassword === '' && (
            <FormHelperText error id="outlined-adornment-password">
              Vui lòng nhập mật khẩu
            </FormHelperText>
          )}
        </FormControl>
        {isDisable ? (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '10px',
              backgroundColor: '#e0e0e0',
              width: '192px',
              color: '#fff',
              alignSelf: 'center',
              margin: '25px 0 10px 0',
              height: '62px',
            }}
          >
            Create Wallet
          </div>
        ) : (
          <button onClick={handleSubmit}
            style={{
              borderRadius: '10px',
              backgroundColor: 'var(--green-primary-base)',
              width: '192px',
              color: '#fff',
              alignSelf: 'center',
              margin: '25px 0 10px 0',
              height: '62px',
            }}
          >
            Create Wallet
          </button>
        )}
      </Box>
    </>
  );
};
