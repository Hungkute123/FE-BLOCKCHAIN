import { Visibility, VisibilityOff } from '@mui/icons-material'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import InputLabel from '@mui/material/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput'
import Typography from '@mui/material/Typography'
import React from 'react'
import { CardItemTypeTwo } from '../Common/CardItemTypeTwo'
interface IKeystoreFileStepTwo {
  handleComplete: any
  handleBack: any
  handleAccess:any
}
const information = [
  {
    id: '1',
    title: `Don't lose it`,
    subscript: 'Be careful, it can not be recovered if you lose it.',
    icon: '',
    img: `data:image/svg+xml,%3c%3fxml version='1.0' encoding='UTF-8'%3f%3e%3csvg width='64px' height='64px' viewBox='0 0 64 64' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e %3c!-- Generator: Sketch 55.2 (78181) - https://sketchapp.com --%3e %3ctitle%3eicon%5c%3c/title%3e %3cdesc%3eCreated with Sketch.%3c/desc%3e %3cg id='icon%5c' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3e %3cg id='paper-plane' transform='translate(4.000000%2c 3.000000)'%3e %3cg transform='translate(2.806452%2c 0.000000)' fill-rule='nonzero' id='Path'%3e %3cpath d='M17.1034693%2c32.0737327 L17.1034693%2c40.400254 C17.1034693%2c41.1014823 17.5064341%2c41.7303258 18.1193647%2c41.9814108 C18.306001%2c42.0583197 18.5011208%2c42.0967742 18.6941197%2c42.0967742 C19.1331393%2c42.0967742 19.5636753%2c41.9022399 19.8712011%2c41.5403156 L25.1521607%2c35.3400997 L17.1034693%2c32.0737327 Z' fill='%235D7BEF'%3e%3c/path%3e %3cpath d='M51.0514028%2c0.111110507 L1.0620057%2c19.1991836 C0.419919663%2c19.4435109 -0.00221302316%2c20.0521478 -8.6595499e-06%2c20.7305924 C0.0022304788%2c21.4090371 0.428806667%2c22.0133109 1.07311445%2c22.2532753 L14.8546358%2c27.3994198 L44.803839%2c8.54476657 L20.0979681%2c29.35622 L40.5091944%2c36.9783602 C40.7002649%2c37.0481681 40.9024443%2c37.0852535 41.1024019%2c37.0852535 C41.3534597%2c37.0852535 41.6045176%2c37.0307161 41.8355797%2c36.9194599 C42.2510471%2c36.7187625 42.5620923%2c36.3609974 42.6976191%2c35.9290616 L53.2509362%2c2.11590355 C53.4353416%2c1.51599269 53.2576015%2c0.86372596 52.788812%2c0.436153123 C52.3222443%2c0.0107617798 51.646832%2c-0.115764876 51.0514028%2c0.111110507 Z' fill='%23CDF4EE'%3e%3c/path%3e %3c/g%3e %3cpath d='M19.6451613%2c58 C19.0085833%2c51.9193548 11.0511362%2c48.8023875 10.7159401%2c53.0394199 C10.380744%2c57.2764524 21.6028414%2c54.7572795 19.0085833%2c49.8393852 C16.4143252%2c44.921491 4.5187978%2c44.1044323 0%2c49.8393852' id='Path-2' stroke='%2305C0A5' stroke-width='2' stroke-linecap='round' transform='translate(9.822581%2c 51.919355) scale(1%2c -1) translate(-9.822581%2c -51.919355) '%3e%3c/path%3e %3c/g%3e %3c/g%3e%3c/svg%3e`
  },
  {
    id: '2',
    title: `Don't share it`,
    subscript: 'Your funds will be stolen if you use this file on a malicious phishing site.',
    icon: '',
    img: `data:image/svg+xml,%3c%3fxml version='1.0' encoding='UTF-8'%3f%3e%3csvg width='64px' height='64px' viewBox='0 0 64 64' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e %3c!-- Generator: Sketch 55.2 (78181) - https://sketchapp.com --%3e %3ctitle%3eicon%5c%3c/title%3e %3cdesc%3eCreated with Sketch.%3c/desc%3e %3cg id='icon%5c' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3e %3cg id='thief' transform='translate(8.000000%2c 2.000000)'%3e %3cpath d='M24.5016196%2c9.84445798 C13.1522772%2c14.0988396 2.78596004%2c7.90777452 0.254597096%2c21.6032113 C-2.27676585%2c35.298648 14.7965791%2c35.7802799 19.2046844%2c28.7992853 C20.3841522%2c26.6855477 24.4905559%2c20.8320762 27.2161801%2c13.3772591 C27.5198484%2c12.5467 27.5746148%2c12.0594538 26.7130889%2c11.1990327 C25.8515629%2c10.3386116 25.3922286%2c9.51604375 24.5016196%2c9.84445798 Z' id='Path-6' fill='%2305C0A5'%3e%3c/path%3e %3ctext id='%24' font-family='Menlo-Regular%2c Menlo' font-size='15' font-weight='normal' fill='white'%3e %3ctspan x='7.68361582' y='26.1101695'%3e%24%3c/tspan%3e %3c/text%3e %3cpath d='M25.9918833%2c37.3765554 C25.2441687%2c38.349525 24.161669%2c39.5025826 22.7443841%2c40.8357283 C19.9817734%2c43.4343327 16.8816954%2c44.0030376 13.4441501%2c42.5418428 C10.3096428%2c40.7442022 8.40607957%2c39.4819883 7.73346041%2c38.7552014 C6.72453168%2c37.6650209 7.3358515%2c34.5619407 10.4483368%2c35.6621464 C13.5608221%2c36.7623522 16.5076049%2c40.0684306 18.8187742%2c35.7735889 C19.7187093%2c34.1012411 20.503801%2c32.5345825 21.1740492%2c31.0736131 C21.1593596%2c31.0547946 21.1446577%2c31.0359633 21.1299435%2c31.0171192 L22.335102%2c28.3596163 C22.3675792%2c28.2771076 22.3996101%2c28.1950095 22.4311947%2c28.1133221 L22.440584%2c28.1270172 L27.5551122%2c16.8489378 C28.1801911%2c15.4705722 29.7340875%2c14.7736663 31.1791416%2c15.223593 C31.6862739%2c15.3814947 32.1593316%2c15.4604456 32.5983146%2c15.4604456 C34.0624107%2c15.4604456 35.42641%2c16.1466434 36.3004017%2c17.2881356 L38.9319731%2c17.2881356 C39.992859%2c17.2881356 40.852877%2c18.1481536 40.852877%2c19.2090395 C40.852877%2c20.2699255 39.992859%2c21.1299435 38.9319731%2c21.1299435 L38.4679338%2c21.1299435 L39.5225604%2c23.0535672 C39.9934173%2c23.9124033 41.0169699%2c24.3038872 41.940773%2c23.9784743 L43.6120353%2c23.3897665 C45.3849677%2c22.9557208 46.477976%2c23.3400354 46.8910603%2c24.5427104 C47.3041446%2c25.7453853 46.7563443%2c26.7756893 45.2476595%2c27.6336225 L39.3834265%2c29.5874339 C38.4777205%2c29.8891918 37.4850131%2c29.5087741 37.0129146%2c28.6790245 L34.8888516%2c24.9458194 C34.7948867%2c24.7806688 34.6558139%2c24.6457078 34.4879185%2c24.5567401 C33.9999226%2c24.2981515 33.3946962%2c24.4841228 33.1360926%2c24.9721108 C32.3393208%2c26.4757397 31.8080853%2c27.6482748 31.5423861%2c28.4897162 C31.0134288%2c30.1648678 30.3730651%2c31.1397157 31.0051428%2c32.885284 C31.6372205%2c34.6308522 34.0386557%2c37.3770229 36.0169492%2c40.8468281 C37.3358114%2c43.1600315 38.9438768%2c46.3824311 40.8411453%2c50.5140269 C41.9169844%2c53.3545336 41.6450174%2c55.1255883 40.0252445%2c55.8271909 C38.4054715%2c56.5287936 37.0693731%2c55.8106092 36.0169492%2c53.6726376 C35.3903377%2c51.8322408 34.0019003%2c49.1962764 31.8516372%2c45.7647443 C30.4787388%2c43.5737823 28.5254875%2c40.7777193 25.9918833%2c37.3765554 Z M35.0564972%2c14.4067797 C31.0781748%2c14.4067797 27.8531073%2c11.1817122 27.8531073%2c7.20338983 C27.8531073%2c3.22506748 31.0781748%2c4.79616347e-14 35.0564972%2c4.79616347e-14 C39.0348195%2c4.79616347e-14 42.259887%2c3.22506748 42.259887%2c7.20338983 C42.259887%2c11.1817122 39.0348195%2c14.4067797 35.0564972%2c14.4067797 Z' id='Combined-Shape' fill='%23CDF4EE'%3e%3c/path%3e %3cellipse id='Oval' fill='%235A78F0' cx='35' cy='58.3333333' rx='8.33333333' ry='1.66666667'%3e%3c/ellipse%3e %3c/g%3e %3c/g%3e%3c/svg%3e`
  },
  {
    id: '3',
    title: 'Make a backup',
    subscript: 'Secure it like the millions of dollars it may one day be worth.',
    icon: '',
    img: `data:image/svg+xml,%3c%3fxml version='1.0' encoding='UTF-8'%3f%3e%3csvg width='64px' height='64px' viewBox='0 0 64 64' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e %3c!-- Generator: Sketch 55.2 (78181) - https://sketchapp.com --%3e %3ctitle%3eicon%5c%3c/title%3e %3cdesc%3eCreated with Sketch.%3c/desc%3e %3cg id='icon%5c' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3e %3cg id='copy' transform='translate(7.000000%2c 4.000000)'%3e %3cg id='Group-18' transform='translate(8.842105%2c 0.000000)'%3e %3cg id='Group-16' fill='%23B2EEE4'%3e %3cpath d='M6%2c0 L31.4779461%2c0 L41.2631579%2c9.62807018 L41.2631579%2c42.1403509 C41.2631579%2c45.4540594 38.5768664%2c48.1403509 35.2631579%2c48.1403509 L6%2c48.1403509 C2.6862915%2c48.1403509 4.05812251e-16%2c45.4540594 0%2c42.1403509 L0%2c6 C-1.29399067e-15%2c2.6862915 2.6862915%2c-2.79460044e-16 6%2c0 Z' id='Rectangle'%3e%3c/path%3e %3c/g%3e %3cpath d='M31.4385965%2c0 L41.2631579%2c9.8245614 L41.2631579%2c1.87270946 C40.9487118%2c0.624236486 40.1535196%2c0 38.8775812%2c0 C37.6016428%2c0 35.1219813%2c0 31.4385965%2c0 Z' id='Path-2' fill='%235A78F0' transform='translate(36.350877%2c 4.912281) scale(-1%2c -1) translate(-36.350877%2c -4.912281) '%3e%3c/path%3e %3c/g%3e %3cg id='Group-19' transform='translate(0.000000%2c 7.859649)'%3e %3cg id='Group-18'%3e %3cg id='Group-16' fill='%23CDF4EE'%3e %3cpath d='M6%2c0 L31.4779461%2c0 L41.2631579%2c9.62807018 L41.2631579%2c42.1403509 C41.2631579%2c45.4540594 38.5768664%2c48.1403509 35.2631579%2c48.1403509 L6%2c48.1403509 C2.6862915%2c48.1403509 4.05812251e-16%2c45.4540594 0%2c42.1403509 L0%2c6 C-4.05812251e-16%2c2.6862915 2.6862915%2c-2.79460044e-16 6%2c0 Z' id='Rectangle'%3e%3c/path%3e %3c/g%3e %3cpath d='M31.4385965%2c0 L41.2631579%2c9.8245614 L41.2631579%2c1.87270946 C40.9487118%2c0.624236486 40.1535196%2c0 38.8775812%2c0 C37.6016428%2c0 35.1219813%2c0 31.4385965%2c0 Z' id='Path-2' fill='%2305C0A5' transform='translate(36.350877%2c 4.912281) scale(-1%2c -1) translate(-36.350877%2c -4.912281) '%3e%3c/path%3e %3c/g%3e %3cpath d='M11.288012%2c17.3241199 C10.9955896%2c17.1729317 10.8069498%2c16.8450818 10.8070176%2c16.4888277 L10.8070176%2c16.422927 C10.8070176%2c16.0661469 10.9957931%2c15.7381467 11.2879441%2c15.5875596 L15.5667659%2c13.3833829 C15.6750931%2c13.3276266 15.7961048%2c13.2982456 15.9167773%2c13.2982456 C16.0767922%2c13.2982456 16.2317876%2c13.3480656 16.3648055%2c13.4422201 C16.6054044%2c13.6119686 16.7491397%2c13.9023973 16.7491397%2c14.2187503 L16.7491397%2c14.242721 C16.7491397%2c14.5996514 16.5602285%2c14.9275014 16.2678062%2c15.0780884 L13.5915077%2c16.4557646 L16.2678062%2c17.8332905 C16.5602285%2c17.9837273 16.7491397%2c18.3116524 16.7491397%2c18.6687331 L16.7491397%2c18.6929292 C16.7491397%2c19.0088314 16.6054044%2c19.2991098 16.3648055%2c19.4694595 C16.230431%2c19.56414 16.0758426%2c19.6140351 15.9172521%2c19.6140351 C15.7954943%2c19.6140351 15.6777385%2c19.5852552 15.5671051%2c19.5285221 L11.288012%2c17.3241199 Z M18.5279526%2c19.791086 C18.3736086%2c19.5725698 18.3288966%2c19.2881584 18.4083176%2c19.0297857 L19.9829572%2c13.3632499 C20.0924547%2c13.0097494 20.4075876%2c12.7719298 20.7670297%2c12.7719298 L20.7881773%2c12.7719298 C21.0499376%2c12.7719298 21.2984052%2c12.9024702 21.4528834%2c13.1211947 C21.6074287%2c13.3402664 21.6518051%2c13.6250944 21.5717799%2c13.8831199 L19.9974088%2c19.5489614 C19.8879112%2c19.9024619 19.5731141%2c20.1403509 19.2138062%2c20.1403509 L19.1925915%2c20.1403509 C18.9308983%2c20.1403509 18.6824308%2c20.0097411 18.5279526%2c19.791086 Z M23.531562%2c14.2426459 L23.531562%2c14.2425707 L23.5317655%2c14.2425707 L23.5317655%2c14.2186752 C23.5317655%2c13.9023221 23.6754975%2c13.6119686 23.9163623%2c13.4419195 C24.0493772%2c13.3479153 24.2045725%2c13.2982456 24.3643124%2c13.2982456 C24.4849822%2c13.2982456 24.6058555%2c13.3276266 24.7137732%2c13.3832326 L28.9924973%2c15.5874093 C29.284913%2c15.7379964 29.4736842%2c16.0659966 29.4736842%2c16.4227768 L29.4736842%2c16.4886774 C29.4736842%2c16.8450818 29.284913%2c17.1729317 28.9927686%2c17.3238945 L24.7140445%2c19.5282215 C24.6026675%2c19.5852552 24.4849822%2c19.6140351 24.3633628%2c19.6140351 C24.2045725%2c19.6140351 24.0499198%2c19.5639897 23.9160232%2c19.4694595 C23.6751584%2c19.2990346 23.531562%2c19.0087563 23.531562%2c18.6927789 L23.531562%2c18.6685828 C23.531562%2c18.3116524 23.7204689%2c17.9837273 24.0128167%2c17.8331403 L26.6890542%2c16.4557646 L24.0128167%2c15.0784642 C23.7203333%2c14.9271257 23.531562%2c14.5992006 23.531562%2c14.2426459 Z' id='Combined-Shape' fill='%2300C0A5' fill-rule='nonzero'%3e%3c/path%3e %3cg id='Group-8' transform='translate(7.859649%2c 26.035088)' fill-rule='nonzero'%3e %3cpath d='M24.6527948%2c4.06665453 L0.891064871%2c4.06665453 C0.398959445%2c4.06665453 0%2c4.43080988 0%2c4.87998543 C0%2c5.32916098 0.398959445%2c5.69331634 0.891064871%2c5.69331634 L24.6527948%2c5.69331634 C25.1449002%2c5.69331634 25.5438596%2c5.32916098 25.5438596%2c4.87998543 C25.5438596%2c4.43080988 25.1449002%2c4.06665453 24.6527948%2c4.06665453 Z' id='Path' fill='%2305C0A5'%3e%3c/path%3e %3cpath d='M24.7198642%2c0 L21.4238823%2c0 C20.9688171%2c0 20.5998868%2c0.364155357 20.5998868%2c0.813330905 C20.5998868%2c1.26250645 20.9688171%2c1.62666181 21.4238823%2c1.62666181 L24.7198642%2c1.62666181 C25.1749294%2c1.62666181 25.5438596%2c1.26250645 25.5438596%2c0.813330905 C25.5438596%2c0.364155357 25.1749294%2c0 24.7198642%2c0 Z' id='Path' fill='%235A78F0'%3e%3c/path%3e %3cpath d='M0.877156471%2c1.62666181 L17.2507439%2c1.62666181 C17.7351682%2c1.62666181 18.1279004%2c1.26250645 18.1279004%2c0.813330905 C18.1279004%2c0.364155357 17.7351682%2c0 17.2507439%2c0 L0.877156471%2c0 C0.392732191%2c0 0%2c0.364155357 0%2c0.813330905 C0%2c1.26250645 0.392732191%2c1.62666181 0.877156471%2c1.62666181 Z' id='Path' fill='%2305C0A5'%3e%3c/path%3e %3cg id='Group-10' transform='translate(12.771930%2c 9.115765) scale(-1%2c 1) translate(-12.771930%2c -9.115765) translate(0.000000%2c 8.133309)'%3e %3cpath d='M24.7198642%2c0 L21.4238823%2c0 C20.9688171%2c0 20.5998868%2c0.364155357 20.5998868%2c0.813330905 C20.5998868%2c1.26250645 20.9688171%2c1.62666181 21.4238823%2c1.62666181 L24.7198642%2c1.62666181 C25.1749294%2c1.62666181 25.5438596%2c1.26250645 25.5438596%2c0.813330905 C25.5438596%2c0.364155357 25.1749294%2c0 24.7198642%2c0 Z' id='Path' fill='%235A78F0'%3e%3c/path%3e %3cpath d='M0.877156471%2c1.62666181 L17.2507439%2c1.62666181 C17.7351682%2c1.62666181 18.1279004%2c1.26250645 18.1279004%2c0.813330905 C18.1279004%2c0.364155357 17.7351682%2c0 17.2507439%2c0 L0.877156471%2c0 C0.392732191%2c0 0%2c0.364155357 0%2c0.813330905 C0%2c1.26250645 0.392732191%2c1.62666181 0.877156471%2c1.62666181 Z' id='Path' fill='%2305C0A5'%3e%3c/path%3e %3c/g%3e %3c/g%3e %3c/g%3e %3c/g%3e %3c/g%3e%3c/svg%3e`
  }
]
export const KeystoreFileStepTwo: React.FC<IKeystoreFileStepTwo> = ({ handleComplete, handleBack,handleAccess }) => {
  const handleMouseDownPassword = (event: any) => {
    event.preventDefault()
  }
  const [values, setValues] = React.useState({
    password: '',
    isPassword: true,
    showPassword: false
  })

  const handleChange = (prop: any) => (event: any) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword
    })
  }
  
  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography sx={{ color: '#9e9e9e', fontSize: '14px', fontWeight: '600' }}>STEP 2.</Typography>
        <Typography sx={{ fontSize: '16px', fontWeight: '600' }}>Enter Password</Typography>
        <Typography sx={{ fontSize: '14px', fontWeight: '400' }}>Enter your password to unlock your wallet.</Typography>
        <FormControl sx={{ width: '100%', marginTop: '20px' }}>
          <InputLabel htmlFor='outlined-adornment-password' error={!values.isPassword && values.password === ''}>
            Password
          </InputLabel>
          <OutlinedInput
            id='outlined-adornment-password'
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            error={values.isPassword === false && values.password === ''}
            endAdornment={
              <InputAdornment position='end'>
                <IconButton
                  aria-label='toggle password visibility'
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge='end'
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label='Password'
          />
          {!values.isPassword && values.password === '' && (
            <FormHelperText error id='outlined-adornment-password'>
              Vui l??ng nh???p m???t kh???u
            </FormHelperText>
          )}
        </FormControl>
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: ' 40px', marginBottom: '20px' }}>
          <button
            style={{
              borderRadius: '5px',
              border: '1px solid var(--green-primary-base)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#fff',
              padding: '18px 46px 18px 46px',
              color: 'var(--green-primary-base)',
              marginRight: '5px'
            }}
            onClick={handleBack}
          >
            Back
          </button>
          <button
            style={{
              borderRadius: '5px',
              border: '1px solid var(--green-primary-base)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'var(--green-primary-base)',
              padding: '18px 46px 18px 46px',
              color: '#fff'
            }}
            onClick={(e:any)=>handleAccess(e,values.password)}
          >
            Access Wallet
          </button>
        </Box>
      </Box>
    </>
  )
}
