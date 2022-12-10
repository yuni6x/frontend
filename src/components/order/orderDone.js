import React from "react"; 

function OrderDone({order}) {
    return(
        order.length > 0 ? <h2>Order done</h2> : ''
    )
}

export default OrderDone