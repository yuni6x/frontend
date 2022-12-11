import React from "react";

function OrderOnProgress({orders}) {
    return (
        orders.length > 0 ? 
            <h3>Order on Progress</h3> 
        : ''
        
    )
}

export default OrderOnProgress