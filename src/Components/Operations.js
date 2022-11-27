import React from 'react'

import Button from '@mui/material/Button';




function Operations() {
  
  
  return (
    <div>
        <Button variant="outlined"  style={{marginTop:'20px' , backgroundColor:'red' ,color:'black' ,}}>Add Shop</Button>
        <Button variant ="outlined"  style={{marginTop:'20px', backgroundColor: 'blue' , color:'black' , marginLeft:'20px'}}> Delete Shop</Button>
       

    </div>
  )
}

export default Operations