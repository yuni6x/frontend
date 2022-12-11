import React from "react"; 

function OrderDone({orders}) {
    return(
        orders.length > 0 ? <h2>Order done</h2> : ''
    )
}

export default OrderDone