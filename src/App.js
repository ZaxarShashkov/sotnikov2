import React, { lazy, Suspense, useState, useEffect } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import MySpinner from './components/MySpinner/MySpinner';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchPosts } from './store/reducers/ActionCreators';
// import PostsPage from './pages/PostsPage';

const PostsPage = lazy(() => import('./pages/PostsPage'));
const PhotosPages = lazy(() => import('./pages/PhotosPages'));

function App() {
	const [postsLocal, setPostsLocal] = useState([]);

	const dispatch = useAppDispatch();

	const { posts, isLoading, error } = useAppSelector((state) => state.postReducer);
	useEffect(() => {
		dispatch(fetchPosts());
	}, []);

	console.log(posts);

	useEffect(() => {
		setPostsLocal(posts);
	}, [isLoading]);

	return (
		<BrowserRouter>
			<div className='App'>
				<Header />
				<Suspense fallback={<MySpinner />}>
					<Routes>
						<Route path={'/sotnikov2'} element={<WelcomePage />} />
						<Route
							path={'/posts'}
							element={
								<PostsPage
									postsLocal={postsLocal}
									setPostsLocal={setPostsLocal}
									isLoading={isLoading}
									posts={posts}
								/>
							}
						/>
						<Route path={'/photos'} element={<PhotosPages />} />
					</Routes>
				</Suspense>
			</div>
		</BrowserRouter>
	);
}

export default App;
