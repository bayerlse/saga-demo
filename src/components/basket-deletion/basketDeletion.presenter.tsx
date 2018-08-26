import * as React from 'react';

export interface Props {
	onClick: () => {};
}
const BasketDelete: React.SFC<Props> = ({ onClick }) => <button onClick={() => onClick()}>Delete Basket</button>;
export default BasketDelete;
