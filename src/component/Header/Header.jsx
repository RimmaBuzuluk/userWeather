import { NavLink } from 'react-router-dom';
import './Header.scss';
import classNames from 'classnames/bind';

const Header = () => {
	return (
		<div className='header'>
			<div className='header__logo'>Weather</div>
			<div className='header__menu'>
				<NavLink to='/' className={({ isActive }) => classNames('header__navbar-item', { 'is-active': isActive })}>
					Users
				</NavLink>
				<NavLink to='/saved' className={({ isActive }) => classNames('header__navbar-item', { 'is-active': isActive })}>
					Saved Users
				</NavLink>
			</div>
		</div>
	);
};

export default Header;
