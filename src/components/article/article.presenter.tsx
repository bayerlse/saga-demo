import * as React from 'react';

export interface Article {
    id: number;
    name: string;
    quantitiy: number;
}


interface Props extends Article {
	onDelete: (id: number) => {};
	onQuantityChange: (quantity: string) => {};
}

const Article: React.SFC<Props> = ({ name, id, quantitiy, onDelete, onQuantityChange }) => (
	<li>
		<span>
			{id} - {name}
		</span>
		<input onChange={(e)=>onQuantityChange(e.target.value)}>{quantitiy}</input>
		<button onClick={() => onDelete(id)}>Delete Article</button>
	</li>
);

export default Article;
