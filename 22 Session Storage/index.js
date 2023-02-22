function setLocalStorage(key,value){
    sessionStorage.setItem(key,value);
}

function getLocalStorage(key)
{
   alert( sessionStorage.getItem(key));
}

function removeLocalStorage(key)
{
    sessionStorage.removeItem(key);
}

function clearLocalStorage()
{
    sessionStorage.clearItem();
}