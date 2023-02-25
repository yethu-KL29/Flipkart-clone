import { Dialog } from '@mui/material'
import React from 'react'

const LoginDialog = ({open,setopen}) => {
  const handleClose = () => {
    setopen(false)
  }
  return (
    <div>
        <Dialog open={open} onClose={handleClose}>Hello</Dialog>
    </div>
  )
}

export default LoginDialog