import React from "react";

function OrderOnProgress({order}) {
    return (
        order.length > 0 ? 
            <h3>Order on Progress</h3> 
        : ''
        
    )
}

export default OrderOnProgress