import React, { useEffect, useMemo } from 'react';
import { createPortal }              from 'react-dom';

const Modal = props => {
  const { children, on, toggle = () => {} } = props;

  const element = useMemo(() => document.createElement('div'), []);

  useEffect(() => {
    document.body.appendChild(element);
    return () => {
      document.body.removeChild(element);
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
