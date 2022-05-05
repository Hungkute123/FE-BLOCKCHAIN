import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Slide from '@mui/material/Slide'
import Toolbar from '@mui/material/Toolbar'
import CloseIcon from '@mui/icons-material/Close'
import { TransitionProps } from '@mui/material/transitions'
import Typography from '@mui/material/Typography'
import React, { useState } from 'react'
import { Box } from '@mui/system'
import { Drawer, Paper } from '@mui/material'
import { CardItem } from '../Common/CardItem'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepButton from '@mui/material/StepButton'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { KeystoreFileStepOne } from './KeystoreFileStepOne'
import { KeystoreFileStepTwo } from './KeystoreFileStepTwo'
import Router from 'next/router'
import axios from 'axios'
const steps = ['Select File', 'Enter Password']
type Anchor = 'bottom'
interface IKeystoreFile {
  open: any
  handleClose: any
}
const methodCreateWallet = [
  {
    id: 'software',
    title: 'Software',
    subscript:
      ' Software methods like keystore file and mnemonic phrase should only be used in offline settings by experienced users. ',
    icon: '',
    img: '',
    warning: 'NOT RECOMMENDED'
  }
]
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction='up' ref={ref} {...props} />
})
export const KeystoreFile: React.FC<IKeystoreFile> = ({ open, handleClose }) => {
  const [data, setData] = useState<any>({})
  const [activeStep, setActiveStep] = useState(0)
  const [anchor, setAnchor] = useState(false)
  const [completed, setCompleted] = useState<{
    [k: number]: boolean
  }>({})

  const totalSteps = () => {
    return steps.length
  }

  const completedSteps = () => {
    return Object.keys(completed).length
  }

  const isLastStep = () => {
    return activeStep === totalSteps() - 1
  }

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps()
  }

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1
    setActiveStep(newActiveStep)
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  const handleStep = (step: number) => () => {
    setActiveStep(step)
  }

  const handleComplete = () => {
    const newCompleted = completed
    newCompleted[activeStep] = true
    setCompleted(newCompleted)
    handleNext()
  }

  const handleReset = () => {
    setActiveStep(0)
    setCompleted({})
  }
  const readFile = (file: any) => {
    const promise = new Promise((resolve, reject) => {
      const words = file.name.split('--')
      console.log(words)
      if (words[0] !== 'UTC') {
        setAnchor(true)
        return
      }
      const fileReader = new FileReader()
      fileReader.readAsText(file)

      fileReader.onload = (e: any) => {
        const data = e.target.result

        resolve({ createdDate: words[1], id: words[2], content: data })
      }

      fileReader.onerror = error => {
        reject(error)
      }
    })

    promise.then(async (data: any) => {
      console.log(data)
      setData(data)
      handleComplete()
    })
  }
  const renderStep = (activeStep: number, handleComplete) => {
    switch (activeStep + 1) {
      case 1:
        return <KeystoreFileStepOne handleComplete={handleComplete} readFile={readFile} key={'readfile'} />
      case 2:
        return (
          <KeystoreFileStepTwo
            handleComplete={handleComplete}
            handleBack={handleBack}
            handleAccess={handleAccess}
            key={'handleaccess'}
          />
        )
      default:
        return <></>
    }
  }
  const toggleDrawer = (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    setInterval(() => setAnchor(false), 2000)
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return
    }
  }
  const handleAccess = (e: any, password: string) => {
    e.preventDefault()

    axios
      .post(`${process.env.URL_MY_API}wallet/access/keystore`, {
        keystoreFile: { id: data.id, createdDate: data.createdDate, content: data.content },
        password: password
      })
      .then(function (response: any) {
        handleComplete()
        localStorage.setItem('keystoreFile', JSON.stringify(response.data.data))
        Router.push('/wallet/transactions')
      })
      .catch(function (error: any) {
        setAnchor(true)
        return
      })
  }
  return (
    <>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <Drawer anchor='bottom' open={anchor} onClose={()=>setInterval(() => setAnchor(false), 2000)} sx={{ zIndex: '2000' }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              backgroundColor: 'red',
              height: '100px',
              alignItems: 'center'
            }}
          >
            <Typography sx={{ color: '#fff' }}>Unexpected token P in JSON at position 0</Typography>
          </Box>
        </Drawer>
        <Box
          sx={{
            backgroundColor: '#F2FAFA',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            height: '100%'
          }}
        >
          <div style={{ width: '100%' }}>
            <Button
              sx={{
                borderRadius: '50%',
                width: '56px',
                height: '56px',
                top: '0px',
                position: 'fixed',
                left: 0
              }}
              onClick={handleClose}
            >
              <ArrowBackIcon sx={{ color: '#706666' }} />
            </Button>
            <Button
              sx={{
                borderRadius: '50%',
                width: '56px',
                height: '56px',
                top: '0px',
                position: 'fixed',
                right: 0
              }}
              onClick={handleClose}
            >
              <CloseIcon sx={{ color: '#706666' }} />
            </Button>
          </div>
          <div style={{ display: 'block' }}>
            <Paper
              sx={{
                minHeight: '300px',
                width: '650px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                borderRadius: '10px',
                paddingBottom: '15px',
                paddingLeft: '28px',
                paddingRight: '28px',
                marginTop: '20px'
              }}
            >
              <Typography variant='h5' sx={{ fontWeight: '700', marginTop: '20px', marginBottom: '20px' }}>
                Access Wallet with Keystore File
              </Typography>
              <Box sx={{ width: '100%', marginTop: '10px' }}>
                <Stepper nonLinear activeStep={activeStep} alternativeLabel>
                  {steps.map((label, index) => (
                    <Step key={label} completed={completed[index]}>
                      <StepButton color='inherit' onClick={handleStep(index)}>
                        {label}
                      </StepButton>
                    </Step>
                  ))}
                </Stepper>
                <div style={{ marginTop: '15px' }}>
                  {renderStep(activeStep, handleComplete)}
                  {/* {allStepsCompleted() ? (
                  <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>
                      All steps completed - you&apos;re finished
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                      <Box sx={{ flex: '1 1 auto' }} />
                      <Button onClick={handleReset}>Reset</Button>
                    </Box>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                      <Button
                        color="inherit"
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        sx={{ mr: 1 }}
                      >
                        Back
                      </Button>
                      <Box sx={{ flex: '1 1 auto' }} />
                      <Button onClick={handleNext} sx={{ mr: 1 }}>
                        Next
                      </Button>
                      {activeStep !== steps.length &&
                        (completed[activeStep] ? (
                          <Typography variant="caption" sx={{ display: 'inline-block' }}>
                            Step {activeStep + 1} already completed
                          </Typography>
                        ) : (
                          <Button onClick={handleComplete}>
                            {completedSteps() === totalSteps() - 1 ? 'Finish' : 'Complete Step'}
                          </Button>
                        ))}
                    </Box>
                  </React.Fragment>
                )} */}
                </div>
              </Box>

              <div style={{ display: 'block' }}>
                {methodCreateWallet.map((item: any, index: number) => {
                  switch (index) {
                    case 2:
                      return <CardItem item={item} borderColor='#ccc' key={index + 10} />
                    default:
                      return <CardItem item={item} borderColor='#ccc' key={index + 10} />
                  }
                })}
              </div>
            </Paper>
          </div>
          <Typography variant='subtitle1' sx={{ fontSize: '12px', margin: ' 20px 0 20px 0' }}>
            Need help? Contact support
          </Typography>
        </Box>
      </Dialog>
    </>
  )
}
