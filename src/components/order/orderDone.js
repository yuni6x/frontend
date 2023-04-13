import React from "react";
import { FaStar } from "react-icons/fa";
import { rupiah } from "../../utils/apis";
import { v4 as uuidv4 } from "uuid";

function OrderDone({ orders }) {
  return orders.length > 0 ? (
    <>
      <h1>Done Order</h1>
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
              <h1>DONE</h1>
              {order.rating ? (
                <>
                  <h2>
                    Rating: {order.rating}{" "}
                    {[
                      Array(order.rating)
                        .fill()
                        .map(() => {
                          return (
                            <FaStar
                              size={24}
                              key={uuidv4()}
                              style={{ color: "gold" }}
                            />
                          );
                        }),
                    ]}
                  </h2>
                  <div className="border border-dark rounded">
                    {order.imageReview ? (
                      <img
                        src={`http://localhost:3005/` + order.imageReview}
                        className="mb-2 p-2"
                        alt="repair result"
                        width={240}
                      ></img>
                    ) : (
                      ""
                    )}

                    <p
                      className="fs-6 m-0 p-2"
                      style={{ backgroundColor: "rgba(170,170,170,0.5)" }}
                    >
                      {order.review}
                    </p>
                  </div>
                </>
              ) : (
                ""
              )}
            </div>
            
          </div>
        ))}
      </div>
    </>
  ) : (
    ""
  );
}

export default OrderDone;
