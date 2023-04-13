import React from "react";
import { rupiah } from "../../utils/apis";

function OrderOnProgress({ orders, done }) {
  return orders.length > 0 ? (
    <>
      <h1>On Progress Order</h1>
      <div className="on-progress-order">
        {orders.map((order) => (
          <div className="on-progress-order__card card" key={order.id}>
            <div className="on-progress-order__card__body">
              <h3>{order.permintaan}</h3>
              <table className="on-progress-order__card__body__table">
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

            <div className="on-progress-order__card__footer">
              <div className="col">
                {order.status === "on progress" ? (
                  <>
                    <h2 className="mb-3">End Your Order</h2>
                    <button
                      id={order.id}
                      onClick={done}
                      className="btn btn-primary"
                    >
                      End Order
                    </button>
                  </>
                ) : (
                  <h2>Waiting Customer to confirm</h2>
                )}
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

export default OrderOnProgress;
