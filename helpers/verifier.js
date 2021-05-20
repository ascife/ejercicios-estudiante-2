module.exports = function(method) {
  return function(props) {
    //get the verifier, example: verifier = 'Name'
    let {verifier, onError} = props;

    //copy the props
    props = {...props}

    //add the method verify
    props.verify = (value)=> {
      return verify(verifier, value, onError || (()=> 1));
    }

    //get the component and the pass as parameter the props
    let Component = method(props);
    return Component;
  }
}

async function verify(verifier, value, onError) {
  try {
    verifiers[verifier](value);
    
  }catch(error) {

    onError({
      verifier: verifier,
      message: error
    })

    throw error;
  }
  return true;
}

//you can extend these verifiers
const verifiers = {}

verifiers.Name = function(value) {
  let regex, result;

  if(!value.length)
    throw 'Tienes que llenar este campo';

  regex = /^[a-zA-Z ]+$/;
  result = regex.test(value);

  if(!result) 
    throw 'Revisa el nombre, es invalido';

  //if is valid the value
  return true;
}

verifiers.Age = function(value) {
  let regex, result;

  if(!value.length)
    throw 'Tienes que llenar este campo';

  regex = /^([2-9][0-9])+$/;
  result = regex.test(value);

  if(!result) 
    throw 'Debes tener minimo 22 años';

  //if is valid the value
  return true;
}