
const debounce = (func, delay = 1000) =>{
    let timeoutId;
    return (...args) =>{                  //here the ...args is the event object
        if(timeoutId){
            clearTimeout(timeoutId);
        }
        timeoutId= setTimeout(()=>{
            func.apply(null,args);
        },delay);
    };
};

