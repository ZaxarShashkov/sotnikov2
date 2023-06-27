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
			<ButtonGroup handleClick={handleClick} />
			<CardGroup >
				<>
					{users.slice(0, limit / 10).map((user) => {
						const userPosts = posts.slice(0, limit).filter((post) => post.userId === user.id);
						return (
							<div key={user.id}>
								<Card.Title className='mb-3 mt-3'>Username: {user.name}</Card.Title>
								{userPosts.map((post) => (
									<Accordion defaultActiveKey="0" key={post.id}>
										<Card key={post.id} className='mt-3'>
											<Card.Body>
												<Card.Title>{post.id}. {post.title}</Card.Title>
												<Card.Text>Text: {post.body}</Card.Text>
												<div style={{ display: 'flex', gap: '1rem' }}>
													<CustomToggle eventKey={post.id} postId={post.id}>Comments</CustomToggle>
													<Button variant="secondary">Edit</Button>
													<Button variant="secondary">Remove</Button>
												</div>
											</Card.Body>
											<Accordion.Collapse eventKey={post.id}>
												<Card.Body>asdas</Card.Body>
											</Accordion.Collapse>
										</Card>
									</Accordion>
								))}
							</div>
						);
					})}
				</>

			</CardGroup>
		</Container >
	);
};

export default PostsPage;
