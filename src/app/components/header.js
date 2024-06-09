"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { mdiMenu, mdiClose, mdiChevronDown, mdiChevronUp } from '@mdi/js';
import Icon from '@mdi/react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';

import credmudra_logo from '../../../public/assest/credmudra_logo.png';
import credmudra_logo_mobile from '../../../public/assest/mobile_logo.svg'; // Import the new logo for mobile

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [personalLoanAnchorEl, setPersonalLoanAnchorEl] = useState(null);
  const [businessLoanAnchorEl, setBusinessLoanAnchorEl] = useState(null);

  const handlePersonalLoanMenu = (event) => {
    setPersonalLoanAnchorEl(event.currentTarget);
  };

  const handleBusinessLoanMenu = (event) => {
    setBusinessLoanAnchorEl(event.currentTarget);
  };

  const closeMenus = () => {
    setPersonalLoanAnchorEl(null);
    setBusinessLoanAnchorEl(null);
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: ' #3653a9', display: 'flex',  justifyContent:'space-between',paddingX:{xs:'0px',sm:'40px'} }}>
      <Toolbar sx={{ display: 'flex',  justifyContent:'space-between' }}>
        <Box sx={{ display: 'flex'}}>      
          <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleMenuToggle}
          sx={{ display: {xs: 'block', md: 'none' } }}
        >
          <Icon path={menuOpen ? mdiClose : mdiMenu} size={1} />
        </IconButton>

        <Box sx={{  display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <Image src={credmudra_logo} alt="CredMudra Logo" width={150} height={"auto"} />
          </Box>
          <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            <Image src={credmudra_logo_mobile} alt="CredMudra Mobile Logo" width={30} height={"auto"} />
          </Box>
        </Box>
        </Box>

        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center' }}>
          <Button
            color="inherit"
            onClick={handlePersonalLoanMenu}
            endIcon={<Icon path={personalLoanAnchorEl ? mdiChevronUp : mdiChevronDown} size={1} />}
            sx={{ textTransform: 'none' }}
          >
            Personal Loan
          </Button>
          <Menu
            anchorEl={personalLoanAnchorEl}
            open={Boolean(personalLoanAnchorEl)}
            onClose={closeMenus}
          >
            <MenuItem onClick={closeMenus} component={Link} href="#">Option 1</MenuItem>
            <MenuItem onClick={closeMenus} component={Link} href="#">Option 2</MenuItem>
          </Menu>

          <Button
            color="inherit"
            onClick={handleBusinessLoanMenu}
            endIcon={<Icon path={businessLoanAnchorEl ? mdiChevronUp : mdiChevronDown} size={1} />}
            sx={{ textTransform: 'none' }}
          >
            Business Loan
          </Button>
          <Menu
            anchorEl={businessLoanAnchorEl}
            open={Boolean(businessLoanAnchorEl)}
            onClose={closeMenus}
          >
            <MenuItem onClick={closeMenus} component={Link} href="#">Option 1</MenuItem>
            <MenuItem onClick={closeMenus} component={Link} href="#">Option 2</MenuItem>
          </Menu>

          <Button color="inherit" component={Link} href="#" sx={{ textTransform: 'none' }}>Credit Score</Button>
          <Button color="inherit" component={Link} href="#" sx={{ textTransform: 'none' }}>EMI Calculator</Button>
        </Box>

        <Box sx={{ display: 'flex' }}>
          <Button color="inherit" sx={{ textTransform: 'none' }}>English</Button>
          <Button   sx={{ ml: 2, textTransform: 'none',backgroundColor:'#fff', color:' #3653a9' }}>Login</Button>
        </Box>
      </Toolbar>

      {menuOpen && (
        <Box sx={{ display: { md: 'none' }, backgroundColor: ' #3653a9' }}>
          <Button
            color="inherit"
            onClick={handlePersonalLoanMenu}
            endIcon={<Icon path={personalLoanAnchorEl ? mdiChevronUp : mdiChevronDown} size={1} />}
            sx={{ textTransform: 'none', width: '100%' }}
          >
            Personal Loan
          </Button>
          {personalLoanAnchorEl && (
            <Box sx={{ pl: 4 }}>
              <MenuItem onClick={closeMenus} component={Link} href="#" sx={{ textTransform: 'none' }}>Option 1</MenuItem>
              <MenuItem onClick={closeMenus} component={Link} href="#" sx={{ textTransform: 'none' }}>Option 2</MenuItem>
            </Box>
          )}

          <Button
            color="inherit"
            onClick={handleBusinessLoanMenu}
            endIcon={<Icon path={businessLoanAnchorEl ? mdiChevronUp : mdiChevronDown} size={1} />}
            sx={{ textTransform: 'none', width: '100%' }}
          >
            Business Loan
          </Button>
          {businessLoanAnchorEl && (
            <Box sx={{ pl: 4 }}>
              <MenuItem onClick={closeMenus} component={Link} href="#" sx={{ textTransform: 'none' }}>Option 1</MenuItem>
              <MenuItem onClick={closeMenus} component={Link} href="#" sx={{ textTransform: 'none' }}>Option 2</MenuItem>
            </Box>
          )}

          <Button color="inherit" component={Link} href="#" sx={{ textTransform: 'none', width: '100%' }}>Credit Score</Button>
          <Button color="inherit" component={Link} href="#" sx={{ textTransform: 'none', width: '100%' }}>EMI Calculator</Button>
        </Box>
      )}
    </AppBar>
  );
};

export default Header;
