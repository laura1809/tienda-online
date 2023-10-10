import axiosInstance from './axiosConfig'

const corfimSale = async (idCustomer, nameCustomer, total, requestBody) => {
    try {
        const response = await axiosInstance.post('/corfimSale', requestBody, {
            params: {
                idCustomer: idCustomer,
                nameCustomer: nameCustomer,
                total: total
            }
        });
        alert('Compra realizada')
        return response;
    } catch (error) {
        alert(error)
    }
};


export default corfimSale;
