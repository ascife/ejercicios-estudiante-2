import React from 'react';

function Map(props) {
  let {children, data} = props;
  
  if(!Array.isArray(children))
    children = [children];

  if(typeof children === "object" &&
    !Array.isArray(data))
    data = Object.values(data);

  if(!Array.isArray(data))
    data = [data];

  children = data.map((data, key)=> 
    children.map((Component, key)=> {

      let props = Component.props;
      let events = {};

      Object.keys(props).forEach((key)=> {
        
        if(key.startsWith('on'))
          events[key] = (ev)=> {

            ev.map = {data}
            props[key](ev);
          }
      })

      return React.cloneElement(Component, {
        ...data,
        ...events,
        key
      })
    })
  )

  return (
    <>
      {children}
    </>
  )
}

export default Map;