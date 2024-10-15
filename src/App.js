import './App.css';
import Header from './component/Header/Header.jsx';
import RandomUsers from './component/RandomUsers/RandomUsers.jsx';
import UserPage from './page/UserPage/UserPage';

function App() {
	return (
		<div className='App'>
			<Header />
			{/* <UserPage /> */}
			<RandomUsers />
		</div>
	);
}

export default App;
