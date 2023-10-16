const CustomerForm = ({onBuy,idCustomer,nameCustomer, handleIdCustomer ,handleNameCustomer}) => {
    return (
        <div class="container">
            <div class="row justify-content-center">

                <div class="card border border-light-subtle rounded-4">
                    <div class="card-body p-3 p-md-4 p-xl-5">
                        <div class="row">
                            <div class="col-12">
                                <div class="mb-3">
                                    <h4 class="text-center">Por favor confirma tus datos</h4>
                                </div>
                            </div>
                        </div>
                        <form>
                            <div className="form-group p-3">
                                <input type="email" class="form-control rounded-0 border-0 border-bottom border-dark border-1" id="exampleInputEmail1" placeholder="Ingresa tu nombre" value={idCustomer} onChange={handleIdCustomer} />
                            </div>
                            <div className="form-group p-3">
                                <input type="email" class="form-control rounded-0 border-0 border-bottom border-dark border-1" id="exampleInputEmail1" placeholder="Número de documento" value={nameCustomer} onChange={handleNameCustomer} />
                            </div>
                            <div className="form-group p-3 justify-content-center text-center"><button type="button" className="btn btn-success" onClick={onBuy}>Realizar compra</button></div>

                        </form>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default CustomerForm