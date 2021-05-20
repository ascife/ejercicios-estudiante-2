import React from 'react';
import styles from './Form.module.css';
import DataName from '../helpers/dataname';
import Verifier from '../helpers/verifier';
import CheckBox from '../helpers/checkbox';
import CheckBoxes from '../helpers/checkboxes';

const Form = {};

Form.Center = function(props) {
  let {children} = props;
  return (
    <div className={styles.center}>
      {children}
    </div>
  )
}

Form.Header = function(props) {
  let {label, onClose} = props;
  return (
    <div className={styles.header}>
      {label}
      <button type='button' className={styles.close} onClick={onClose}>
        <i className='material-icons'>close</i>
      </button>
    </div>
  )
}

Form.Body = function(props) {
  let {children} = props;
  return (
    <div className={styles.body}>
      {children}
    </div>
  )
}

Form.Footer = function(props) {
  let {children} = props;
  return (
    <div className={styles.footer}>
      {children}
    </div>
  )
}

Form.Field = Verifier(function(props) {
  let {name, verify} = props;
  let [error, setError] = React.useState();

  function onBlur(ev) {
    let value = ev.currentTarget.value;
    verify(value)
    .then( _ => {
      setError(null);
      return;
    })
    .catch(error=> {
      setError(error);
      return;
    })
  }

  return (
    <div className={styles.field}>
      <input type='text' name={name} onBlur={onBlur}/>
      <span>{error}</span>
    </div>
  )
})

Form.FieldDisabled = function(props) {
  let {name, value} = props;
  return (
    <div className={styles.field_disabled}>
      <input type='text' name={name} value={value} disabled/>
    </div>
  )
}

Form.Label = function(props) {
  let {children} = props;
  return (
    <p className={styles.label}>
      {children}
    </p>
  )
}

Form.CheckBoxes = CheckBoxes(function(props) {
  let {children, name, checked} = props;
  return (
    <div className={styles.checkBoxes} name={name} value={checked?.value}>
      {children}
    </div>
  )
})

Form.CheckBox = CheckBox(function(props) {
  let {children, active} = props;
  return (
    <div className={active ? styles.checkBox_active : styles.checkBox}>
      {children}
    </div>
  )
})

Form.Variable = function(props) {
  let {name, value} = props;
  return (
    <div name={name} value={value} className={styles.variable}>
      {/* nothing */}
    </div>
  )
}

export default Object.assign(class extends React.Component {
  constructor(props) {super(props)}

  render = (props = this.props)=> {
    let {children, onSubmit} = props;

    function handlerOnSubmit(ev) {
      ev.preventDefault();  
      let data = {};
      const current = ev.currentTarget;

      current.querySelectorAll('[name]').forEach(el=> {

        let name = el.getAttribute('name');
        let value = el.getAttribute('value') || el.value;

        let isNumber = /^[0-9]+$/.test(value);
        
        if(isNumber)
          value = parseFloat(value);

        data[name] = value;
      })

      let continuer = true;

      current.querySelectorAll('span').forEach(el=> {
        let content = el.innerText;
        if(content.toString().length)
          continuer = false;
      })
      
      if(continuer)
      onSubmit(data);
      return data;
    }

    return (
      <form className={styles.form} onSubmit={handlerOnSubmit}>
        {children}
      </form>
    )
  }
}, Form);