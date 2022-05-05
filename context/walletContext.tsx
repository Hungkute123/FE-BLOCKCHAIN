import axios from 'axios'
import React, { useEffect, useState } from 'react'
export const WalletContext = React.createContext({})

export const WalletProvider = ({ children }) => {
  const [publicKey, setPublicKey] = useState('0000000000000000000000000000000')
  const [privateKey, setPrivateKey] = useState('0000000000000000000000000000000')
  const [balance, setBalance] = useState(0)
  useEffect(() => {
    const keystoreFile: any = JSON.parse(localStorage.getItem('keystoreFile'))
    if (keystoreFile.keyPair != undefined && keystoreFile.keyPair.publicKey != undefined) {
      setPublicKey(keystoreFile.keyPair.publicKey)
      setPrivateKey(keystoreFile.keyPair.privateKey)
      if (publicKey != '0000000000000000000000000000000') {
        axios
          .get(`${process.env.URL_MY_API}wallet/balance?publickey=${publicKey}`)
          .then(function (response: any) {
              console.log("hung", response.data)
            setBalance(response.data.data)
          })
          .catch(function (error: any) {
            console.log(error)
          })
      }
    }
  }, [publicKey])
  
  
  return (
    <WalletContext.Provider
      value={{
        publicKey: publicKey,
        privateKey: privateKey,
        balance: balance
      }}
    >
      {children}
    </WalletContext.Provider>
  )
}
