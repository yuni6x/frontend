import React from "react";
import UserComment from "./UserComment";
import WorkerOrder from "./WorkerOrder";

import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

function WorkerDetail({
  id,
  fullName,
  phoneNumber,
  img,
  kecamatan,
  kelurahan,
  kota,
  provinsi,
  keahlian,
  rating,
  orders,
}) {
  return (
    <>
      <div className="worker-detail card mx-4">
        <div className="card-header">
          <img
            src={
              img
                ? `http://localhost:3005/` + img
                : "https://www.kindpng.com/picc/m/105-1055656_account-user-profile-avatar-avatar-user-profile-icon.png"
            }
            alt={fullName}
          ></img>
          <h1 className="card-header__name">{fullName}</h1>
          <p className="card-header__skill">Skill: {keahlian}</p>
          <p className="card-header__address">
            Address:{" "}
            <span className="fw-normal">
              {kecamatan}, {kelurahan}, {kota}, {provinsi}
            </span>
          </p>
          <p className="card-header__phone">
            phoneNumber: <span className="fw-normal">{phoneNumber}</span>
          </p>
        </div>
        <div className="card-body">
          <h2 className="card-body__rating">
            {"Rating "+ parseFloat(rating)+ "  "}
            {[
              Array(rating)
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
          <div className="card-body__button">
            <a href={`https://wa.me/${phoneNumber}`} target="blank">
              <button className="card-body__button__chat">Chat me</button>
            </a>
            <Link to={`/order/${id}`}>
              <button className="card-body__button__order">Order me</button>
            </Link>
          </div>
          <div className="card-body__history-order mt-5">
            <h3 className="text-center mb-3">History Order</h3>
            {
              orders.length > 0 ? (
                <table className="table">
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Permintaan</th>
                      <th>Pendapatan</th>
                      <th>Pengerjaan</th>
                      <th>Tanggal Selesai</th>
                    </tr>
                    
                  </thead>
                  <tbody>
                    {
                      orders.map((order,index) => (
                        <WorkerOrder key={uuidv4()} order={order} index={index} />
                      ))
                    }
                  </tbody>
                </table>
              ) : <h3 className="text-danger">No order history yet</h3>
            }
          </div>
        </div>
      </div>
      <section className="comment mx-4" style={{ backgroundColor: '#cfcfcf' }}>
        <h1 className="mb-3">Comment section</h1>
        {orders.length > 0
          ? orders.map((order) => (
              <UserComment
                key={order.id}
                image={img}
                {...order}
                order={order}
              />
            ))
          : ""}
      </section>
    </>
  );
}

export default WorkerDetail;
