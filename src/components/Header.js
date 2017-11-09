import React from 'react';
import { AppBar, Toolbar, Typography } from 'material-ui';

const Header = () => (
  <AppBar>
    <Toolbar color="primary">
      <Typography type="title" color="inherit">
        Curency converter
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
