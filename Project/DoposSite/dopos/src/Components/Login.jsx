import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.loginOption}
        onRequestClose={props.handleCloseloginOption}
        contentLabel='Login Form'
        className='modal-content'
    >
        <div className="modal-header">
            <h2>Login</h2>
        </div>
        <div className='modal-body'>
            <input type='text' placeholder='UserName' /> <br/>
            <input type='password' placeholder='Password' />
        </div>
        <div className="modal-footer">
            <button id='loginBTN' onClick={props.handleCloseloginOption}>Log In</button>
        </div>
        
    </Modal>
)

export default OptionModal;