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
import Modal from '../components/Modal/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Form from 'react-bootstrap/Form';
import NumberOfPages from '../components/NumberOfPages/NumberOfPages';




const PostsPage = () => {
	const [limit, setLimit] = useState(100);
	const [comment, setComment] = useState(0)
	const [postsLocal, setPostsLocal] = useState([])
	const [contentEditable, setContentEditable] = useState(false)
	const [pages, setPages] = useState(1)
	const [countPosts, setCountPosts] = useState(0)
	const [filter, setFilter] = useState(null)

	const { posts, isLoading, error } = useAppSelector((state) => state.postReducer);
	const { users } = useAppSelector((state) => state.userReducer);
	const { comments } = useAppSelector((state) => state.commentsReducer);
	const dispatch = useAppDispatch();


	useEffect(() => {
		dispatch(fetchPosts());
		dispatch(fetchUsers());
		setLimit(Number(localStorage.getItem('limit')));
		setFilter(Number(localStorage.getItem('filter')))
	}, []);


	useEffect(() => {
		if (!isLoading) {
			setPostsLocal(posts)
		}
	}, [isLoading])

	useEffect(() => {
		dispatch(fetchComments(comment));
	}, [comment])

	const handleClick = (e) => {
		const value = e.target.value;
		setLimit(value);
		setFilter(value)
		localStorage.setItem('limit', value);
		localStorage.setItem('filter', value);
	};

	const onRemove = (e) => {
		setPostsLocal(postsLocal.filter((post) => post.id !== +e.currentTarget.dataset.id))
	}

	const editable = () => {
		setContentEditable(contentEditable => !contentEditable)
	}

	useEffect(() => {
		const value = posts.length / Number(limit)
		console.log(value, 'value')
		setPages(value)
	}, [posts, limit])

	const handleClick2 = (e) => {
		const value = e.currentTarget.dataset.id
		setCountPosts(e.currentTarget.dataset.id)
		setFilter(+ limit * Number((+value + +limit) / limit))

	}

	const renderContent = () => {
		const content = postsLocal ? users.slice(Number(countPosts) / 10, Number(filter) / 10).map((user) => {
			const userPosts = postsLocal.slice(Number(countPosts), Number(filter)).filter((post) => post.userId === user.id);
			return (
				<div key={user.id}>
					<Card.Title className='mb-3 mt-3'><span contentEditable={contentEditable}>Username: {user.name}</span></Card.Title>
					{userPosts.map((post) => {
						const postComments = comments.filter((comment) => comment.postId === post.id)
						return (
							<Accordion defaultActiveKey="0" key={post.id}>
								<Card key={post.id} className='mt-3'>
									<Card.Body>
										<Card.Title><span contentEditable={contentEditable}>{post.id}. {post.title}</span></Card.Title>
										<Card.Text><span contentEditable={contentEditable}>Text: {post.body}</span></Card.Text>
										<div style={{ display: 'flex', gap: '1rem' }}>
											<CustomToggle eventKey={post.id} id={post.id} setComment={setComment}>Comments</CustomToggle>
											<Button variant="secondary" onClick={editable}>Edit</Button>
											<Modal id={post.id} onRemove={onRemove}></Modal>
											<Button variant="secondary" data-id={post.id} >
												<FontAwesomeIcon icon={faStar} style={{ color: "#ffffff" }} />
											</Button>
											<Form.Check aria-label="option 1" className='mt-2' />
										</div>
									</Card.Body>
									{postComments.map((comment) => (
										<Accordion.Collapse eventKey={post.id} key={comment.id}>
											<Card.Body>Name: {comment.name}<br />Email: {comment.email}<br />Text: {comment.body}</Card.Body>
										</Accordion.Collapse>
									))}
								</Card>
							</Accordion>
						)

					})}
				</div>
			);
		}) : null;
		return <>{content}</>
	}

	const content = renderContent()


	return (
		<Container>
			<h2 style={{ textAlign: 'center' }}>Number of posts</h2>
			<ButtonGroup handleClick={handleClick} />
			<NumberOfPages postsLocal={postsLocal} limit={limit} pages={pages} setPages={setPages} countPosts={countPosts} setCountPosts={setCountPosts} setLimit={setLimit} handleClick2={handleClick2} />
			<CardGroup >
				<>
					{content}
				</>

			</CardGroup>
		</Container >
	);
};

export default PostsPage;
