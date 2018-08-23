import * as React from 'react';
import './header.css';
interface Props {}

const Header: React.SFC<Props> = () => (
	<header className="header">
		<img className="logo" alt="logo" />
		<h1 className="title">Saga React Demo</h1>
	</header>
);

export default Header;
