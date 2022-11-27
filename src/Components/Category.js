import React from 'react';
// import Button from '@mui/material/Button';
// import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { FormControl, InputLabel, Select } from '@mui/material';


function Category()
{
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
      };
    // const [anchorEl, setAnchorEl] = React.useState(null);
    // const open = Boolean(anchorEl);
    // const handleClick = (event) => {
    //   setAnchorEl(event.currentTarget);
    // };
    // const handleClose = () => {
    //   setAnchorEl(null);
    // }; 
  return (
    <div>
            
            <FormControl style={{marginTop:"30px" , marginLeft:'50px' , width:'120px'}}>
  <InputLabel id="demo-simple-select-label">Category</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={age}
    label="Category"
    onChange={handleChange}
  >
    <MenuItem value={10}>Grocery</MenuItem>
    <MenuItem value={20}>Butcher</MenuItem>
    <MenuItem value={30}>Chemist</MenuItem>
    <MenuItem value={30}>
Stationery shop</MenuItem>
    <MenuItem value={30}>Jewellery</MenuItem>
    <MenuItem value={30}>Clothing</MenuItem>
    <MenuItem value={30}>Cobbler</MenuItem>
  </Select>
</FormControl>
      {/* <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Dashboard
      </Button> */}
    
    </div>
  )
}

export default Category