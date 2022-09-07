export const validateRequire = (imputValue: any, inputRef: any) => {
  let result;
  let arr = [];
  console.log(imputValue);
  
  /* if (imputValue && imputValue.lenght > 0) {
    const arr = inputRef.current.className.split(' ')
    inputRef.current.classList.remove(`${arr[1]}`);
    result = true
  } else {
    inputRef.current.classList.add(`${inputRef.current.className}--warning`);
    result = false;
  } */
  if(!imputValue) {
    inputRef.current.classList.add(`${inputRef.current.className}--warning`);
    result = true;
  } else {
    arr = inputRef.current.className.split(' ')
    inputRef.current.classList.remove(`${arr[1]}`);
    result = false
  }
  return result
}