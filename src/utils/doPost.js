import axios from "axios";

export async function doPost(url, data){
  try{
    const response = await axios.post(url, data);
    console.log(response.data);
    return response.data;

  }catch(err){
    console.error('Error en el POST', err)
  }
}