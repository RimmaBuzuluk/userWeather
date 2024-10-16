import React from 'react';
import Modal from 'react-modal';
// import closeIcon from '../../img/636011-200.png';
import './Modal.scss';

export const CustomerModal = ({ isOpen, onClose, children }) => {
	return (
		<Modal isOpen={isOpen} onRequestClose={() => onClose()} overlayClassName={'modal-overlay'} closeTimeoutMS={300} className={'modal-content'} ariaHideApp={false}>
			<button className='modal__closeButton' onClick={() => onClose()}></button>
			{children}
			{/* <button className='modal__closeButton' onClick={() => onClose()}>
				Thanks
			</button> */}
		</Modal>
	);
};
