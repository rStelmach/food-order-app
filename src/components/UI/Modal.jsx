import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = ({ onHide }) => (
  <div
    className={classes.backdrop}
    onClick={onHide}
    aria-hidden="true"
  />
);

const ModalOverlay = ({ children }) => (
  <div className={classes.modal}>
    <div className={classes.content}>{children} </div>
  </div>
);

// eslint-disable-next-line no-undef
const portalLocation = document.getElementById('overlays');

const Modal = ({ children, onHide }) => (
  <>
    {ReactDOM.createPortal(
      <Backdrop onHide={onHide} />,
      portalLocation,
    )}
    {ReactDOM.createPortal(
      <ModalOverlay>{children}</ModalOverlay>,
      portalLocation,
    )}
  </>
);

export default Modal;
