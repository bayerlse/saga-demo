import { Article } from '../../components/article/article.presenter';
import { generateName } from '../random/random';

export const articleMocks: Article[] = [
	{
		id: 12345,
		name: 'TestArticle',
		quantitiy: 1
	}
];

export const generateArticle = (): Article => ({
	id: Math.floor(Math.random() * 1000000000),
	name: generateName(),
	quantitiy: 1
});
