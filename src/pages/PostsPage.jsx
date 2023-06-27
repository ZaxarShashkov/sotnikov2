import React, { useEffect, useState, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchPosts, fetchUsers, fetchComments } from '../store/reducers/ActionCreators';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import CardGroup from 'react-bootstrap/CardGroup';
import InputGroup from 'react-bootstrap/InputGroup';

const PostsPage = () => {
	const [limit, setLimit] = useState(100);

	const { posts, isLoading, error } = useAppSelector((state) => state.postReducer);
	const { users } = useAppSelector((state) => state.userReducer);
	const { comments } = useAppSelector((state) => state.commentsReducer);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchPosts());
		dispatch(fetchUsers());
		dispatch(fetchComments());
		setLimit(Number(localStorage.getItem('limit')));
	}, []);

	console.log(comments)

	const handleClick = (e) => {
		const value = e.target.value;
		setLimit(value);
		localStorage.setItem('limit', value);
	};


	return (
		<Container>
			<InputGroup className='mt-3' style={{ justifyContent: 'center' }}>
				<Button variant='outline-secondary' value={10} onClick={(e) => handleClick(e)}>
					10
				</Button>
				<Button variant='outline-secondary' value={20} onClick={(e) => handleClick(e)}>
					20
				</Button>
				<Button variant='outline-secondary' value={50} onClick={(e) => handleClick(e)}>
					50
				</Button>
				<Button variant='outline-secondary' value={100} onClick={(e) => handleClick(e)}>
					100
				</Button>
				<Button variant='outline-secondary' value={100} onClick={(e) => handleClick(e)}>
					All
				</Button>
			</InputGroup>
			<CardGroup >
				<>
					{users.map((user) => {
						const userPosts = posts.slice(0, limit).filter((post) => post.userId === user.id);
						return (
							<div key={user.id}>
								<Card.Title className='mb-3 mt-3'>Username: {user.name}</Card.Title>
								{userPosts.map((post) => (
									<Card key={post.id}>
										<Card.Body>
											<Card.Title> {post.title}</Card.Title>
											<Card.Text>Text: {post.body}</Card.Text>
											<div style={{ display: 'flex', gap: '1rem' }}>
												<Button variant="secondary">Comments</Button>
												<Button variant="secondary">Edit</Button>
												<Button variant="secondary">Remove</Button>
											</div>

										</Card.Body>
									</Card>
								))}
							</div>
						);
					})}
				</>

			</CardGroup>
		</Container>
	);
};

export default PostsPage;
