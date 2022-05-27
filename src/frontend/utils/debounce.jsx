const debounce = (fun,delay=400) => {
  console.log(fun,"hoho")
 let timerId;
  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      console.log("coming")
      fun(...args);
    },delay);
  };
};
export { debounce };

