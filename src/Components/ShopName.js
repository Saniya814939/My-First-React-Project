import React from 'react'
import TextField from '@mui/material/TextField';

function ShopName() {
  return (
    <div style={{marginLeft:'50px', marginTop:'20px'}}> 
        
    
      <TextField required id="outlined-basic" label="ShopName" variant="outlined" />
    </div>
  )
}

export default ShopName