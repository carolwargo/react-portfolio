import React from "react";
import { Table } from "react-bootstrap";


const TableBasic = () => {
    return (
        <div className="tables" id="tables">
                    <h5 className="fw-light w3-margin-top text-info"><b>Basic Table</b></h5>
                    <Table striped bordered hover>
  <thead>
    <tr>
      <th scope="col"><b>#</b></th>
      <th scope="col"><b>First Name</b></th>
      <th scope="col"><b>Last Name</b></th>
      <th scope="col"><b>Twitter Handle</b></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Abby</td>
      <td>Andrews</td>
      <td>@abby</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Brandy</td>
      <td>Brown</td>
      <td>@brownbrandy</td>
    </tr>
    <tr>
  <th scope="row">3</th>
  <td colSpan="2">Colin Clark</td>
  <td>@clark</td>
</tr>

  </tbody>
</Table>

<h5 className="fw-light w3-margin-top text-info"><b>Dark Striped Variant</b></h5>
<Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th scope="col"><b>#</b></th>
      <th scope="col"><b>First Name</b></th>
      <th scope="col"><b>Last Name</b></th>
      <th scope="col"><b>Twitter Handle</b></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Abby</td>
      <td>Andrews</td>
      <td>@abby</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Brandy</td>
      <td>Brown</td>
      <td>@brownbrandy</td>
    </tr>
    <tr>
  <th scope="row">3</th>
  <td colSpan="2">Colin Clark</td>
  <td>@clark</td>
</tr>

  </tbody>
</Table>
        </div>
    );
    };

export default TableBasic;