import * as React from 'react';
import { Article } from '../article/article.presenter';

interface Props {
	article: Article;
	onAddToBasket: (article: Article) => {};
}

const ArticleRecommendation: React.SFC<Props> = ({ article, onAddToBasket }) => (
	<div>
		<span>Check out this awesome Product:</span>
		<span>
			{article.id} - {article.name}
		</span>
		<button onClick={() => onAddToBasket(article)}>Delete Article</button>
	</div>
);

export default ArticleRecommendation;
