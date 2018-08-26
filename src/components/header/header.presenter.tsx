import * as React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import logo from '../../logo.svg';
import './header.css';

interface Props {}

const Header: React.SFC<Props> = () => (
	<AppBar position="static" className="header">
		<Toolbar variant="dense">
			<img src={logo} width="50px" alt="logo" />
			<Typography variant="title" color="inherit">
				Sample Basket Application
			</Typography>
		</Toolbar>
	</AppBar>
);

export default Header;
