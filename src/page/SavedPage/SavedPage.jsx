import { useSelector } from 'react-redux';
import RandomUsers from '../../component/RandomUsers/RandomUsers';

const SavedUserPage = () => {
	const users = useSelector(state => state.savedUsers.savedUsers);

	return (
		<>
			{users.length < 1 && <p>You dont saved any users</p>}
			<RandomUsers users={users} isSaved={true} />
		</>
	);
};

export default SavedUserPage;
