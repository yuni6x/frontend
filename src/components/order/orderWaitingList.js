import React from "react";

function OrderWaitingList({order}){
    return (
        
            order.length > 0 ? <h2>Waiting List Order</h2> : ''
        
        
    )
}

export default OrderWaitingList