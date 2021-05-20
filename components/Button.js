import React from 'react';
import styles from './Button.module.css';

const Button = {};

Button.Icon = function(props) {
  let {label, icon} = props;

  return (
    <button className={styles.b_icon} {...props}>
      <i className='material-icons'>{icon}</i>
      {label}      
    </button>
  )
}

Button.Fill = function(props) {
  let {children, color} = props;

  let style = {
    color: color,
    backgroundColor: color + '11',
  }

  return (
    <button className={styles.b_fill} style={style} {...props}>
      {children}
    </button>
  )
}

export default Button;