import React from 'react';

module.exports = function(method) {
  return function(props) {
    let {checked, setChecked, defaultActive} = props;
    let [checkID, setCheckID] = React.useState();
    let active = false;

    if(defaultActive)
      active = true;

    if(checked.id === checkID)
      active = true;

    function onClick(ev) {
      const current = ev.currentTarget;
      
      let id = Math.random() * 10000;
      let value = current.value || current.innerText;
      
      setCheckID(id);
      setChecked({id, value});
    }

    props = {
      ...props,
      active
    }

    let Component = React.cloneElement(method(props), {
      onClick
    })

    return Component;
  }
}