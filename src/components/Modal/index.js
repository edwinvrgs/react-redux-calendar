import React, { useEffect, useMemo } from 'react';
import { createPortal }              from 'react-dom';

const modalRoot = document.getElementById('modal-root');

const Modal = props => {
  const { children, on, toggle = () => {} } = props;

  const element = useMemo(() => document.createElement('div'), []);

  useEffect(() => {
    modalRoot.appendChild(element);
    return () => {
      modalRoot.removeChild(element);
    };
  }, [element]);

  return (
    createPortal(
      <div className={`modal ${on && 'is-active'}`}>
        <div className="modal-background" onClick={() => toggle()} />
        <div className="modal-content">
          {children}
        </div>
      </div>,
      element,
    )
  );
};

Modal.propTypes = {};

export default Modal;
