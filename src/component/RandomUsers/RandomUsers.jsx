import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, incrementPage } from '../../redux/slices/userSlice';
import './RandomUsers.scss';
import { getWeatherIcon } from '../../utils/weatherIcon';
import { addSavedUser } from '../../redux/slices/savedUserSlice';
import classNames from 'classnames';

const RandomUsers = () => {
	const dispatch = useDispatch();
	const { users, status, error, page } = useSelector(state => state.users);
	const savedUsers = useSelector(state => state.savedUsers.savedUsers);

	useEffect(() => {
		if (status === 'idle' || status === 'succeeded') {
			dispatch(fetchUsers(page));
		}
	}, [dispatch, page]);

	const handleLoadMore = () => {
		dispatch(incrementPage());
	};

	const handlSaveUser = user => {
		dispatch(addSavedUser(user));
	};

	if (status === 'loading' && users.length === 0) return <p>Loading users...</p>;
	if (status === 'failed') return <p>Error: {error}</p>;

	return (
		<div className='randomUsers'>
			{users.map(user => (
				<div key={user.login.uuid} className='randomUsers__item'>
					{user.weather && (
						<div className='randomUsers__item__weather'>
							<div>Current temperature: {user.weather.current_weather.temperature}</div>
							<div>Max temperature: {Math.max(...user.weather.hourly.temperature_2m)}</div>
							<div>Min temperature: {Math.min(...user.weather.hourly.temperature_2m)}</div>
						</div>
					)}
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
						<button
							className={classNames({
								randomUsers__item__button_unsave: savedUsers.some(savedUser => savedUser.login.uuid === user.login.uuid),
								randomUsers__item__button: !savedUsers.some(savedUser => savedUser.login.uuid === user.login.uuid),
							})}
							onClick={() => handlSaveUser(user)}
						>
							{savedUsers.some(savedUser => savedUser.login.uuid === user.login.uuid) ? 'Unsave' : 'Save'}
						</button>
						<button className='randomUsers__item__button'>Weather</button>
					</div>
					{user.weather ? <p className='randomUsers__item__weatherIcon'> {getWeatherIcon(user.weather.current_weather.weathercode)}</p> : <p>No weather data available</p>}
				</div>
			))}
			<button className='randomUsers__button' onClick={handleLoadMore}>
				Load more users
			</button>
		</div>
	);
};

export default RandomUsers;
