import React, { useEffect } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import PostsPage from './pages/PostsPage';

function App() {
	return (
		<div className='App'>
			<Header />
			<PostsPage />
		</div>
	);
}

export default App;
