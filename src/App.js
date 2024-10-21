import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header/Header.jsx';
import UserPage from './page/UserPage/UserPage';
import SavedUserPage from './page/SavedPage/SavedPage.jsx';
function App() {
	return (
		<div className='App'>
			<Header />
			<Routes>
				<Route path='/' element={<UserPage />} />
				<Route path='/saved' element={<SavedUserPage />} />
			</Routes>
		</div>
	);
}

export default App;
