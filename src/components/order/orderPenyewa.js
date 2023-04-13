import React from "react";
import { FaStar } from "react-icons/fa";
import { rupiah } from "../../utils/apis";
import StarRating from "./starRating";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function OrderPenyewa({ orders, giveRating, confirm, notConfirm }) {
  return (
    <div className="order-penyewa">
      <h1>Your Order Page</h1>
      {orders.length > 0 ? (
        orders.map((order) => (
          <div className="order-penyewa__card card" key={order.id}>
            <div className="order-penyewa__card__body">
              <h3>{order.permintaan}</h3>
              <table className="order-penyewa__card__body__table">
                <tbody>
                  <tr>
                    <td>Worker</td>
                    <td>:</td>
                    <td>{order.Pekerja?.fullName}</td>
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
            <div className="order-penyewa__card__footer">
              <h3 className="text-capitalize">
                {order.status === null ? "Wait for accept" : order.status}
              </h3>
              <div className="rating-section">
                {order.rating ? (
                  <>
                    <h3>
                      Rating: {order.rating}
                      {[
                        Array(order.rating)
                          .fill()
                          .map(() => {
                            return (
                              <FaStar
                                size={20}
                                key={uuidv4()}
                                style={{ color: "gold" }}
                              />
                            );
                          }),
                      ]}
                    </h3>
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
                  <div>
                    {order.status === "done by worker" ? (
                      <div className="d-inline-flex flex-column">
                        <button
                          id={order.id}
                          className="btn btn-primary mb-3"
                          onClick={confirm}
                        >
                          Confirm Done Order
                        </button>
                        <button
                          id={order.id}
                          className="btn btn-danger"
                          onClick={notConfirm}
                        >
                          Not Confirm Done Order
                        </button>
                      </div>
                    ) : order.status === "confirmed done" ? (
                      <StarRating giveRating={giveRating} orderId={order.id} />
                    ) : (
                      ""
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="text-danger">
          <h2>You have never ordered anything yet</h2>
          <h3>
            Back to <Link to={"/home"}>Home Page</Link> to make an order
          </h3>
        </div>
      )}
    </div>
  );
}

export default OrderPenyewa;
