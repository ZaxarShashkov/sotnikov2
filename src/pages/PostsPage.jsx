import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchPosts, fetchUsers } from '../store/reducers/ActionCreators';

import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import CardGroup from 'react-bootstrap/CardGroup';
import Accordion from 'react-bootstrap/Accordion';
import ButtonGroup from '../components/ButtonGroup/ButtonGroup';
import NumberOfPages from '../components/NumberOfPages/NumberOfPages';
import MySpinner from '../components/MySpinner/MySpinner';
import MyCard from '../components/MyCard/MyCard';
import MyDropDown from '../components/MyDropDown/MyDropDown';
import NewUserForm from '../components/NewUserForm/NewUserForm';

const PostsPage = () => {
	const [limit, setLimit] = useState(100);

	const [postsLocal, setPostsLocal] = useState([])
	const [usersLocal, setUsersLocal] = useState([])
	const [contentEditable, setContentEditable] = useState(false)
	const [pages, setPages] = useState(1)
	const [countPosts, setCountPosts] = useState(0)
	const [filter, setFilter] = useState(null)
	const [id, setId] = useState([])
	const [remove, setRemove] = useState(false)

	const { comments, isLoadingComments } = useAppSelector((state) => state.commentsReducer);
	const { posts, isLoading, error } = useAppSelector((state) => state.postReducer);
	const { users } = useAppSelector((state) => state.userReducer);

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchPosts());
		dispatch(fetchUsers());
		setPostsLocal(posts)
		setLimit(Number(localStorage.getItem('limit')));
		setFilter(Number(localStorage.getItem('filter')))
	}, []);



	useEffect(() => {
		if (!isLoading) {

			setUsersLocal(users)
		}
	}, [isLoading])


	const handleClick = (e) => {
		const value = e.target.value;
		setLimit(value);
		setFilter(value)
		localStorage.setItem('limit', value);
		localStorage.setItem('filter', value);
	};

	useEffect(() => {
		const value = posts.length / Number(limit)
		setPages(value)
	}, [posts, limit])

	const handleClickLimit = (e) => {
		const value = e.currentTarget.dataset.id
		setCountPosts(e.currentTarget.dataset.id)
		setFilter(+ limit * Number((+value + +limit) / limit))
	}

	const removeGroup = () => {
		const filter = postsLocal.filter((post) =>
			id.every((id) => post.id !== +id))
		if (remove) {
			setRemove(false)
			return setPostsLocal(filter)
		} else {
			return null
		}
	}

	const sortByIdDown = () => {
		setUsersLocal([...usersLocal].sort((a, b) => b.id - a.id))
		setPostsLocal([...postsLocal].sort((a, b) => b.id - a.id))
	}

	const sortByIdUp = () => {
		setUsersLocal([...usersLocal].sort((a, b) => a.id - b.id))
		setPostsLocal([...postsLocal].sort((a, b) => a.id - b.id))
	}

	const sortByUserNameDown = () => {
		setUsersLocal([...usersLocal].sort((a, b) => b.name.localeCompare(a.name)))
	}

	const sortByUserNameUp = () => {
		setUsersLocal([...usersLocal].sort((a, b) => a.name.localeCompare(b.name)))
	}


	return (
		<Container>
			<h2 style={{ textAlign: 'center' }}>Number of posts</h2>
			<ButtonGroup handleClick={handleClick} />
			<NumberOfPages postsLocal={postsLocal} limit={limit} pages={pages} setPages={setPages} countPosts={countPosts} setCountPosts={setCountPosts} setLimit={setLimit} handleClickLimit={handleClickLimit} />
			<MyDropDown className='mt-3' sortByIdDown={sortByIdDown} sortByIdUp={sortByIdUp} postsLocal={postsLocal} sortByUserNameDown={sortByUserNameDown} sortByUserNameUp={sortByUserNameUp}></MyDropDown>
			<NewUserForm usersLocal={usersLocal} setUsersLocal={setUsersLocal} postsLocal={postsLocal} setPostsLocal={setPostsLocal} />
			<CardGroup >
				{isLoadingComments || isLoading ? <MySpinner /> : null}
				<>
					{posts ? usersLocal.slice(Number(countPosts) / 10, Number(filter) / 10).map((user) => {
						const userPosts = postsLocal.slice(Number(countPosts), Number(filter)).filter((post) => post.userId === user.id);
						return (
							<div key={user.id}>
								<Card.Title className='mb-3 mt-3'><span contentEditable={contentEditable}>Username: {user.name}</span></Card.Title>
								{userPosts.map((post) => {
									const postComments = comments.filter((comment) => comment.postId === post.id)
									return (
										<Accordion defaultActiveKey="0" key={post.id}>
											<MyCard postId={post.id}
												userPosts={userPosts}
												postTitle={post.title}
												postComments={postComments}
												postBody={post.body}
												setContentEditable={setContentEditable}
												contentEditable={contentEditable}
												postsLocal={postsLocal}
												setPostsLocal={setPostsLocal}
												id={id}
												setId={setId}
												removeGroup={removeGroup}
												setRemove={setRemove} />
										</Accordion>
									)

								})}
							</div>
						);
					}) : null}

				</>

			</CardGroup>
		</Container >
	);
};

export default PostsPage;
