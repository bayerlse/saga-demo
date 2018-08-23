import * as React from 'react';
import './basketInfo.css';

interface Props {
	onClose: () => {};
}

const BasketInfo: React.SFC<Props> = ({ onClose }) => (
	<div className="modal basket-info">
		<h1>Basket Info</h1>
		<span>You successfully deleted your Basket...</span>
		<button onClick={() => onClose()}>Got it!</button>
	</div>
);

export default BasketInfo;
