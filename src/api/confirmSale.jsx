import axiosInstance from './axiosConfig'

const corfimSale = async (idCustomer, nameCustomer, total, requestBody) => {
    try {
        const response = await axiosInstance.post('/confirmSale', requestBody, {
            params: {
                idCustomer: idCustomer,
                nameCustomer: nameCustomer,
                total: total
            }
        });
        alert('Compra realizada')
        return response;
    } catch (error) {
        console.log('Código de estado:', error.response.status);
        console.log(idCustomer);
        console.log(nameCustomer);
        console.log('Request:', requestBody); // Estado HTTP
        console.log('Datos de la respuesta:', error.response.data);
        alert(error)
    }
};


export default corfimSale;
