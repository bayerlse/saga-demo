import * as React from 'react';
import ArticleItem, { Article } from '../article/article.presenter';

export interface Props {
	articles: Article[];
	onDeleteArticle: (id: number) => void;
	onArticleQuantityChange: (id: number, quantity: number) => void;
}
const BasketList: React.SFC<Props> = ({ articles, onDeleteArticle, onArticleQuantityChange }) => (
	<div>
		<ul>
			{articles.map((article, index) => (
				<ArticleItem
					key={article.id}
					{...article}
					id={article.id}
					onDelete={() => onDeleteArticle(article.id)}
					onQuantityChange={(qty) => onArticleQuantityChange(article.id, Number(qty))}
				/>
			))}
		</ul>
	</div>
);
export default BasketList;
