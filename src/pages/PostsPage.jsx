import React, { useEffect, useState, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchPosts, fetchUsers } from '../store/reducers/ActionCreators';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import CardGroup from 'react-bootstrap/CardGroup';
import InputGroup from 'react-bootstrap/InputGroup';

const PostsPage = () => {
	const [limit, setLimit] = useState(100);

	const { posts, isLoading, error } = useAppSelector((state) => state.postReducer);
	const { users } = useAppSelector((state) => state.userReducer);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchPosts());
		dispatch(fetchUsers());
		setLimit(Number(localStorage.getItem('limit')));
	}, []);

	const handleClick = (e) => {
		const value = e.target.value;
		setLimit(value);
		localStorage.setItem('limit', value);
	};


	return (
		<Container>
			<InputGroup className='mb-3 mt-3' style={{ justifyContent: 'center' }}>
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
			{posts.slice(0, limit).map((item) => {
				return (
					<CardGroup key={item.id}>
						<Card
							border='dark'
							style={{ width: '18rem', marginTop: '1rem' }}
							key={item.id}>
							<Card.Header>{item.id}: </Card.Header>
							<Card.Body>
								<Card.Title>{item.title}</Card.Title>
								<Card.Text>{item.body}</Card.Text>
								<Button variant='primary'>Go somewhere</Button>
							</Card.Body>
						</Card>
					</CardGroup>
				);
			})}
		</Container>
	);
};

export default PostsPage;
