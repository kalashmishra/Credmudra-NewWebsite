import { Button } from '@mui/material'
import React from 'react'

const CommonButton = ({text,font}) => {
  return (
    <Button
            variant="contained" 
            sx={{
             
              background: "#3653a9",
              // padding:"12px 20px",
              textTransform:'none',
              fontSize:font,
              borderRadius:"8px"

            }}
          >
            {text}
          </Button>
  )
}

export default CommonButton
