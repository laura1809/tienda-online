import axiosInstance from './axiosConfig'

const getProducts = async () => {
    try {
      const response = await axiosInstance.get('/uploadProducts');
      return response.data;
    } catch (error) {
      throw error; // Puedes manejar el error aquí o lanzarlo para que se maneje en otro lugar
    }
  };


export default getProducts;
