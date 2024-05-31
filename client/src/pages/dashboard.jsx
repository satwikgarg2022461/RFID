import React from "react";
import "./dashboard.css";
import FooterComponent from './../components/Footer';
import Sidebar from './../components/Sidebar';

const Dashboard = () => {
  return (
    <div>
    <div className="dashboard-container">
        <Sidebar></Sidebar>
      <main className="main-content">
        <header className="header">
          <h1 className="heading">Overview</h1>
          <div className="search-bar">
            {/* <span className="material-symbols-outlined">search</span> */}
            <input type="text" placeholder="search" />
          </div>
        </header>
        <section className="stats">
          <div className="stat-items">
            <div className="stat-item">
              <span className="material-symbols-outlined">shopping_cart</span>
              Total Orders
              <br />
              <span>1000</span>
            </div>
            <div className="stat-item">
              <span className="material-symbols-outlined">attach_money</span>
              Total Sale
              <br />
              <span>500</span>
            </div>
            <div className="stat-item">
              <span className="material-symbols-outlined">people</span>
              Total User
              <br />
              <span>1500</span>
            </div>
            <div className="stat-item">
              <span className="material-symbols-outlined">inventory_2</span>
              Total Product
              <br />
              <span>2500</span>
            </div>
          </div>
        </section>
        <div className="content-wrapper">
          <section className="analytics">
            <h2 className="heading">Sales Analytics</h2>
            <div className="chart">{/* Placeholder for chart */}</div>
          </section>
          <section className="top-selling">
            <h2 className="heading">Top selling product</h2>
            <div className="product-placeholder">
              {/* Placeholder for top selling product */}
            </div>
          </section>
        </div>
        <section className="recent-orders">
          <h2 className="heading">Recent Orders</h2>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Customer Name</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1/03/24</td>
                <td>Mr Akshay</td>
                <td>$200</td>
                <td className="paid">Paid</td>
              </tr>
              <tr>
                <td>1/03/24</td>
                <td>Mr Akshay</td>
                <td>$200</td>
                <td className="cancel">Cancel</td>
              </tr>
              <tr>
                <td>1/03/24</td>
                <td>Mr Akshay</td>
                <td>$200</td>
                <td className="processing">Processing</td>
              </tr>
              <tr>
                <td>1/03/24</td>
                <td>Mr Akshay</td>
                <td>$200</td>
                <td className="paid">Paid</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
      <FooterComponent></FooterComponent>
    </div>
  );
};

export default Dashboard;
