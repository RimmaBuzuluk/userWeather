import React from 'react';
import Modal from 'react-modal';
import './Modal.scss';

export const CustomerModal = ({ isOpen, onClose, children }) => {
	return (
		<Modal isOpen={isOpen} onRequestClose={onClose} overlayClassName={'modal-overlay'} className={'modal-content'} closeTimeoutMS={300} ariaHideApp={false}>
			<button className='modal__closeButton' onClick={onClose}></button>
			{children}
		</Modal>
	);
};
