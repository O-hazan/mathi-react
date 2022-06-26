import React, { Component } from "react";

class Stats extends Component {
  render() {
    return (
      
        <table class="table table-hover ">
          <thead>
            <tr>
              <th scope="col" class="col-2 ">
                Age
              </th>
              <th scope="col" class="col-2">
                Weight
              </th>
              <th scope="col" class="col-2">
                Hight
              </th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>3 Month</td>
              <td>6 KG</td>
              <td>60 CM</td>
              <td>
                <input
                  class="btn btn-primary cust-btn"
                  type="delete"
                  value="Delete"
                />
              </td>
            </tr>
            <tr>
              <td>6 Month</td>
              <td>8 KG</td>
              <td>70 CM</td>
              <td>
                <input
                  class="btn btn-primary cust-btn"
                  type="delete"
                  value="Delete"
                />
              </td>
            </tr>
            <tr>
              <td>9 Month</td>
              <td>9 KG</td>
              <td>70 CM</td>
              <td>
                <input
                  class="btn btn-primary cust-btn"
                  type="delete"
                  value="Delete"
                />
              </td>
            </tr>{" "}
          </tbody>
        </table>
      
    );
  }
}

export default Stats;
