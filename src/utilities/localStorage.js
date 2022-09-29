const addLocalStorage = id =>{
    const breakTime = {id};
    localStorage.setItem('break-time', JSON.stringify(breakTime));
}
const getStorage = () =>{
    let breakTime = {};
    const storage = localStorage.getItem('break-time');
    if(storage){
        breakTime = JSON.parse(storage);
    }
    return breakTime;
}
export {addLocalStorage, getStorage}