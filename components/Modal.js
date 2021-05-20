import React from 'react';
import styles from './Modal.module.css';

function Modal(props) {
  let {children, showIf} = props;
  
  if(!showIf)
    return null;

  return (
    <div className={styles.modal}>
      {children}
    </div>
  )
}

export default Modal;