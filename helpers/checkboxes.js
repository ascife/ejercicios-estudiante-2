import React from 'react';

module.exports = function(method) {
  return function(props) {
    let {children} = props;

    if(!Array.isArray(children))
      children = [children];

    let [checked, setChecked] = React.useState({
      id: 'initial',
      value: children[0]?.props.children,
    })

    if(!Array.isArray(children))
      children = [children];

    children = children.map((child, key)=> {
      let defaultActive = false;

      if(checked.id === 'initial' && key === 0) 
        defaultActive = true;
  
      return React.cloneElement(child, {
        key,
        checked, 
        setChecked,
        defaultActive,
      })
    })

    props = {
      ...props,
      children,
      checked
    }

    let Component = React.cloneElement(method(props));
    return Component;
  }
}