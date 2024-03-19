import React from "react";

const TableBasic = () => {
    return (
        <div className="tables" id="tables">
               <div className="w3-padding-16">
            <div className="w3-container w3-content bg-white shadow">
                <div className="w3-container w3-content w3-padding-16 px-4 border-dark">
                    <h4 className="fw-light w3-margin-top"><b>Basic Table</b></h4>
        <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
  <th scope="row">3</th>
  <td colSpan="2">Larry the Bird</td>
  <td>@twitter</td>
</tr>

  </tbody>
</table>
        </div>
    </div>
</div>
</div>
    );
    };

export default TableBasic;