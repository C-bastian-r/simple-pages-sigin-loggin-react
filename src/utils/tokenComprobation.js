
export const tokenComprobation = ()=>{
  const expirationDate = localStorage.getItem('expirationToken');
  if(!expirationDate){
    return false;
  }

  const actualTime = new Date().getTime();
  if(actualTime > parseInt(expirationDate)){
    console.log('entro')
    localStorage.removeItem('token');
    localStorage.removeItem('expirationToken');
    console.log('Token expirado, se ha eliminado el token');
    return false;
  }
  return true;
};