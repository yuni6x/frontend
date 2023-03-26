import React from "react";
import { rupiah } from "../../utils/apis";
function WorkerOrder({ order, index }) {
  console.log(order);
  return (
    <tr>
      <td>{index+1}</td>
      <td>{order.permintaan}</td>
      <td>{rupiah(order.biayaTotal)}</td>
      <td>{order.estimasiWaktu} Hari</td>
      <td>{new Date(order.updatedAt).toISOString().slice(0, 10)}</td>
    </tr>
  );
}

export default WorkerOrder;
