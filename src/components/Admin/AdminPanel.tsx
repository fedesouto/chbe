import React, { FunctionComponent, useState } from 'react'
import ProductForm from './ProductForm'

const AdminPanel:FunctionComponent = () => {
    const [auth, setAuth] = useState<boolean>(false)

    return(
        <div>
            <ProductForm />
        </div>
    )
}

export default AdminPanel;