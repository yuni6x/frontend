import React from "react";
import { rupiah } from "../../utils/apis";

function OrderWaitingList({ orders, accept, reject }) {
  return orders.length > 0 ? (
    <>
      <h1>Waiting List Order</h1>
      <div className="waiting-list-order">
        {orders.map((order) => (
          <div className="waiting-list-order__card card" key={order.id}>
            <div className="waiting-list-order__card__body">
              <h3>{order.permintaan}</h3>
              <table className="waiting-list-order__card__body__table">
                <tbody>
                  <tr>
                    <td>Renter</td>
                    <td>:</td>
                    <td>{order.Penyewa?.fullName}</td>
                  </tr>
                  <tr>
                    <td>Daily Price</td>
                    <td>:</td>
                    <td>{rupiah(order.biayaHarian)}</td>
                  </tr>
                  <tr>
                    <td>Development Cost</td>
                    <td>:</td>
                    <td>{rupiah(order.biayaPembangunan)}</td>
                  </tr>
                  <tr>
                    <td>Estimated Time</td>
                    <td>:</td>
                    <td>{order.estimasiWaktu} Hari</td>
                  </tr>
                  <tr>
                    <td>Total Price</td>
                    <td>:</td>
                    <td>{rupiah(order.biayaTotal)}</td>
                  </tr>
                </tbody>
              </table>

              <img
                src={`http://localhost:3005/` + order.image}
                alt="repair location"
                width={200}
              ></img>
            </div>
            <div className="waiting-list-order__card__footer">
                <h2>Waiting Your Confirm</h2>
              <div className="col">
                <button
                  id={order.id}
                  onClick={accept}
                  className="btn btn-success"
                >
                  Accept Order
                </button>
                <button
                  id={order.id}
                  onClick={reject}
                  className="btn btn-danger"
                >
                  Reject Order
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  ) : (
    ""
  );
}

export default OrderWaitingList;
