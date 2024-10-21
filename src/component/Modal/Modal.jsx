import React from 'react';
import Modal from 'react-modal';
import './Modal.scss';
import { Temperature } from '../Temperature/Temperature';

export const CustomerModal = ({ isOpen, onClose, children, longitude, latitude, dates, temperatures }) => {
	return (
		<Modal isOpen={isOpen} onRequestClose={onClose} overlayClassName={'modal-overlay'} className={'modal-content'} closeTimeoutMS={300} ariaHideApp={false}>
			<button className='modal__closeButton' onClick={onClose}></button>
			{children}
			<Temperature temperatures={temperatures} dates={dates} />
		</Modal>
	);
};
