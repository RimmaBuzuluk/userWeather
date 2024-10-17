import { useDispatch, useSelector } from 'react-redux';
import RandomUsers from '../../component/RandomUsers/RandomUsers';
import './UserPage.scss';
import { fetchUsers } from '../../redux/slices/userSlice';
import { useEffect } from 'react';

const UserPage = () => {
	const dispatch = useDispatch();
	const { users, status, error, page } = useSelector(state => state.users);

	useEffect(() => {
		if (status === 'idle' || status === 'succeeded') {
			dispatch(fetchUsers(page));
		}
	}, [dispatch, page]);
	return (
		<>
			<RandomUsers users={users} isSaved={false} status={status} error={error} page={page} />
		</>
	);
};

export default UserPage;
