import React from 'react';
import styles from './Block.module.css';

const Block = {};

Block.Participant = function(props) {
  let {name, category} = props;

  let categorys = {
    route: 'Bicicleta de ruta',
    mountain: 'Bicicleta de montaña'
  }

  return (
    <div className={styles.participant} {...props}>
      <div className={styles.left}>
        <img src={`/image/cat-${category}.svg`}/>
      </div>
      <div className={styles.right}>
        <p className={styles.name}>{name}</p>
        <p className={styles.cat}>{categorys[category]}</p>
      </div>
    </div>
  )
}

Block.Report = function(props) {
  let {label, value} = props;

  return (
    <div className={styles.report} {...props}>
      <div className={styles.left}>
        <p className={styles.value}>{value}</p>
      </div>
      <div className={styles.right}>
        <p className={styles.label}>{label}</p>
      </div>
    </div>
  )
}

Block.Category = function(props) {
  let {category} = props;

  let categorys = {
    route: 'Bicicleta de ruta',
    mountain: 'Bicicleta de montaña'
  }
  
  return (
    <div className={styles.category} {...props}>
      <div className={styles.left}>
        <img src={`/image/cat-${category}.svg`}/>
      </div>
      <div className={styles.right}>
        <p className={styles.label}>{categorys[category]}</p>
      </div>
    </div>
  )
}

export default Block;