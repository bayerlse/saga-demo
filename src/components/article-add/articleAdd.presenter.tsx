import * as React from 'react';

interface Props {
	onClick: () => {};
}
const ArticleAdd: React.SFC<Props> = ({ onClick }) => <button onClick={() => onClick()}>Add Article</button>;
export default ArticleAdd;
