import React, { useEffect, useState, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchPosts, fetchUsers, fetchComments } from '../store/reducers/ActionCreators';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import CardGroup from 'react-bootstrap/CardGroup';
import Accordion from 'react-bootstrap/Accordion';
import ButtonGroup from '../components/ButtonGroup/ButtonGroup';
import CustomToggle from '../components/CustomToggle/CustomToggle';

const PostsPage = () => {
	const [limit, setLimit] = useState(100);
	const [comment, setComment] = useState(0)

	const { posts, isLoading, error } = useAppSelector((state) => state.postReducer);
	const { users } = useAppSelector((state) => state.userReducer);
	const { comments } = useAppSelector((state) => state.commentsReducer);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchPosts());
		dispatch(fetchUsers());
		setLimit(Number(localStorage.getItem('limit')));
	}, []);

	useEffect(() => {
		dispatch(fetchComments(comment));
	}, [comment])


	const handleClick = (e) => {
		const value = e.target.value;
		setLimit(value);
		localStorage.setItem('limit', value);
	};



	return (
		<Container>
			<ButtonGroup handleClick={handleClick} />
			<CardGroup >
				<>
					{users.slice(0, limit / 10).map((user) => {
						const userPosts = posts.slice(0, limit).filter((post) => post.userId === user.id);
						return (
							<div key={user.id}>
								<Card.Title className='mb-3 mt-3'>Username: {user.name}</Card.Title>
								{userPosts.map((post) => {
									const postComments = comments.filter((comment) => comment.postId === post.id)
									return (
										<Accordion defaultActiveKey="0" key={post.id}>
											<Card key={post.id} className='mt-3'>
												<Card.Body>
													<Card.Title>{post.id}. {post.title}</Card.Title>
													<Card.Text>Text: {post.body}</Card.Text>
													<div style={{ display: 'flex', gap: '1rem' }}>
														<CustomToggle eventKey={post.id} id={post.id} setComment={setComment}>Comments</CustomToggle>
														<Button variant="secondary">Edit</Button>
														<Button variant="secondary">Remove</Button>
													</div>
												</Card.Body>
												{postComments.map((comment) => (
													<Accordion.Collapse eventKey={post.id} key={comment.id}>
														<Card.Body>{comment.name}</Card.Body>
													</Accordion.Collapse>
												))}
											</Card>
										</Accordion>
									)

								})}
							</div>
						);
					})}
				</>

			</CardGroup>
		</Container >
	);
};

export default PostsPage;
