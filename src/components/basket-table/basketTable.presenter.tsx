import * as React from 'react';
import ArticleItem, { Article } from '../article/article.presenter';

interface Props {
	articles: Article[];
	onDeleteArticle: (id: number) => {};
	onArticleQuantityChange: (id: number, quantity: string) => {};
}
const BasketList: React.SFC<Props> = ({ articles, onDeleteArticle, onArticleQuantityChange }) => (
	<div>
		<ul>
			{articles.map((article, index) => (
				<ArticleItem
					key={article.id}
					{...article}
					id={index}
					onDelete={() => onDeleteArticle(article.id)}
					onQuantityChange={(qty) => onArticleQuantityChange(article.id, qty)}
				/>
			))}
		</ul>
	</div>
);
export default BasketList;
