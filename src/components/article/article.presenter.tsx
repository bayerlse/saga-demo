import * as React from 'react';

export interface Article {
	id: number;
	name: string;
	quantitiy: number;
}

interface Props extends Article {
	onDelete: (id: number) => void;
	onQuantityChange: (quantity: string) => void;
}

const Article: React.SFC<Props> = ({ name, id, quantitiy, onDelete, onQuantityChange }) => (
	<li>
		<span>
			{id} - {name}
		</span>
		<input
			type="text"
			onChange={(e) => {
				onQuantityChange(e.currentTarget.value);
			}}
			defaultValue={String(quantitiy)}
		/>
		<button onClick={() => onDelete(id)}>Delete Article</button>
	</li>
);

export default Article;
