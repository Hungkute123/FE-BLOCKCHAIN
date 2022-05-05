import Router from 'next/router'
import React, { useEffect } from 'react'

const Logout = () => {
  useEffect(() => {
    window.localStorage.clear()
  })
  return <></>
}

export default Logout