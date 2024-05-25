import React from 'react';
import './dashboard.css';

const dashboard = () => {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="logo">LOGO</div>
        <nav className="nav-menu">
          <ul>
            <li>Dashboard</li>
            <li>Add Worker</li>
            <li>Remove Worker</li>
            <li>View Worker</li>
            <li>Inventory</li>
            <li>Payment</li>
            <li>Customer</li>
            <li>Revenue</li>
            <li>Setting</li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <header className="header">
          <h1>Overview</h1>
          <input type="text" placeholder="search" />
        </header>
        <section className="stats">
          <div className="stat-item">Total Orders<br/><span>1000</span></div>
          <div className="stat-item">Total Sale<br/><span>500</span></div>
          <div className="stat-item">Total User<br/><span>1500</span></div>
          <div className="stat-item">Total Product<br/><span>2500</span></div>
        </section>
        <section className="analytics">
          <h2>Sales Analytics</h2>
          <div className="chart">
            {/* Placeholder for chart */}
          </div>
        </section>
        <section className="top-selling">
          <h2>Top selling product</h2>
          <div className="product-placeholder">
            {/* Placeholder for top selling product */}
          </div>
        </section>
        <section className="recent-orders">
          <h2>Recent Orders</h2>
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
  );
};

export default dashboard;
