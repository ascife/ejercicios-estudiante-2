import React from 'react';
import styles from './Container.module.css';

const Container = {};

Container.TitleBold = function(props) {
  let {children} = props;
  return (
    <p className={styles.title_bold}>
      {children}
    </p>
  )
}

Container.Wrap = function(props) {
  let {children} = props;
  return (
    <div className={styles.wrap}>
      {children}
    </div>
  )
}

Container.Row = function(props) {
  let {children} = props;
  return (
    <div className={styles.row}>
      {children}
    </div>
  )
}

export default Object.assign(class extends React.Component {
  constructor(props) {super(props)}

  render = (props = this.props)=> {
    let {children, width, height, my, mx} = props;

    let style = {
      width: width,
      height: height,
      marginTop: `${my || 0}px`,
      marginLeft: `${mx || 0}px`,
      marginRight: `${mx || 0}px`,
      marginBottom: `${my || 32}px`
    }

    return (
      <div className={styles.container} style={style}>
        {children}
      </div>
    )
  }
}, Container);