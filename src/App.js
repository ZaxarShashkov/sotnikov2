import React, { lazy, Suspense } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import MySpinner from './components/MySpinner/MySpinner';

const PostsPage = lazy(() => import('./pages/PostsPage'));
const PhotosPages = lazy(() => import('./pages/PhotosPages'));

function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<Header />
				<Suspense fallback={<MySpinner />}>
					<Routes>
						<Route path={'/'} element={<WelcomePage />} />
						<Route path={'/posts'} element={<PostsPage />} />
						<Route path={'/photos'} element={<PhotosPages />} />
					</Routes>
				</Suspense>
			</div>
		</BrowserRouter>
	);
}

export default App;
