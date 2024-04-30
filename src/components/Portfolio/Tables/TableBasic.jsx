import React from "react";
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const TableBasic = () => {
  return (
   <div className="tables" id="tables">

        <div className="row justify-content-center align-items-center">
        <div className="card shadow w3-white">
        <h5 className="fw-light w3-margin-top  text-center" style={{color:'#FF385C'}}><b>Basic Table</b></h5>
                  <Table striped bordered hover className="w3-padding-small">
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

              <div className="card shadow w3-white w3-margin">   
              <h5 className="fw-light w3-margin-top text-center" style={{color:'#FF385C'}}><b>Light Striped with Hover</b></h5>
        <div className="row justify-content-center">
          <Table striped bordered hover variant="light">
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
              </div>
              <div className="card shadow w3-dark-gray">
   <h5 className="fw-light w3-margin-top text-center" style={{color:'#FF385C'}}><b>Dark Striped with Hover</b></h5>
        <div className="row justify-content-center">
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
              </div>
          </div>
      </div>
  );
};

export default TableBasic;
