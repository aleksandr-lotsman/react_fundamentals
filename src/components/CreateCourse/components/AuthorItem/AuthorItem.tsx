import React from 'react';
import { Author } from '../../../../types/Author';
import { Button } from '../../../../common/Button';

import AddAuthorIcon from './addAuthor.svg';
import DeleteAuthorIcon from './deleteAuthor.svg';

const AuthorItem = ({
	author,
	isAddedToCourse,
	setAuthors,
	setAddedAuthors,
}) => {
	const handleMoveAuthor = (e, isAddedToCourse: boolean) => {
		e.preventDefault();
		if (isAddedToCourse) {
			setAddedAuthors((currentAuthors: Author[]) =>
				currentAuthors.filter((a) => a.id !== author.id)
			);
			setAuthors((currentAuthors: Author[]) => [...currentAuthors, author]);
		} else {
			setAuthors((currentAuthors: Author[]) =>
				currentAuthors.filter((a) => a.id !== author.id)
			);
			setAddedAuthors((currentAuthors: Author[]) => [
				...currentAuthors,
				author,
			]);
		}
	};
	return (
		<div className={'author-item'}>
			<p>{author.name}</p>
			{isAddedToCourse ? (
				<Button
					icon={DeleteAuthorIcon}
					onClick={(e) => handleMoveAuthor(e, true)}
				/>
			) : (
				<Button
					icon={AddAuthorIcon}
					onClick={(e) => handleMoveAuthor(e, false)}
				/>
			)}
		</div>
	);
};

export default AuthorItem;
