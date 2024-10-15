import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, incrementPage } from '../../redux/slices/userSlice';
import './RandomUsers.scss';

const RandomUsers = () => {
	const dispatch = useDispatch();
	const { users, status, error, page } = useSelector(state => state.users);

	useEffect(() => {
		if (status === 'idle' || status === 'succeeded') {
			dispatch(fetchUsers(page));
		}
	}, [dispatch, page]);

	const handleLoadMore = () => {
		dispatch(incrementPage());
	};

	console.log(users);

	if (status === 'loading' && users.length === 0) return <p>Loading users...</p>;
	if (status === 'failed') return <p>Error: {error}</p>;

	return (
		<div className='randomUsers'>
			{users.map(user => (
				<div key={user.login.uuid} className='randomUsers__item'>
					<img className='randomUsers__item__photo' src={user.picture.thumbnail} alt={`${user.name.first} ${user.name.last}`} />
					<div className='randomUsers__item__name'>
						{user.name.first} {user.name.last}
					</div>
					<div className='randomUsers__item__email'>{user.email}</div>
					<div className='randomUsers__item__sex'>{user.gender}</div>

					<div className='randomUsers__item__location'>
						{user.location.city}, {user.location.country}
					</div>
					<div className='randomUsers__item__buttons'>
						<button className='randomUsers__item__button'>Save</button>
						<button className='randomUsers__item__button'>Weather</button>
					</div>
				</div>
			))}
			<button className='randomUsers__button' onClick={handleLoadMore}>
				Load more users
			</button>
		</div>
	);
};

export default RandomUsers;
