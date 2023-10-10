import React from 'react'

const CostomerForm = () => {
    return (
        <form>
           
            <div className="form-outline mb-4">
                <input type="text" id="form5Example1" className="form-control" />
                <label className="form-label" for="form5Example1">Nombre</label>
            </div>

            
            <div className="form-outline mb-4">
                <input type="text" id="form5Example2" className="form-control" />
                <label className="form-label" for="form5Example2">Cedula</label>
            </div>

          
            <div className="form-check d-flex justify-content-center mb-4">
                <input className="form-check-input me-2" type="checkbox" value="" id="form5Example3" checked />
                <label className="form-check-label" for="form5Example3">
                    I have read and agree to the terms
                </label>
            </div>

            
            <button type="submit" className="btn btn-primary btn-block mb-4">Subscribe</button>
        </form>
    )
}

export default CostomerForm