import React from "react";
import "./past_transaction.css";
import Sidebar from "./../components/Sidebar";

const transactions = [
  {
    date: "12/04/24",
    productImg: "jacket.png",
    barcodeImg: "barcode.png",
    paymentType: "Online Payment",
    customerName: "Mr Sarthak Srivastav",
    amount: "$250",
  },
  {
    date: "12/04/24",
    productImg: "shirt.png",
    barcodeImg: "barcode.png",
    paymentType: "Online Payment",
    customerName: "Mr Sarthak Srivastav",
    amount: "$250",
  },
  {
    date: "12/04/24",
    productImg: "pants.png",
    barcodeImg: "barcode.png",
    paymentType: "Online Payment",
    customerName: "Mr Sarthak Srivastav",
    amount: "$250",
  },
];

const PastTransactionsComponent = () => {
  return (
    <div className="container">
      <div>
        <Sidebar />
      </div>
      <div>
        {/* <div className="content"></div> */}
       
        <div className="box">
          <div>
            <h1 className="heading">Transactions</h1>
          </div>
          {/* <div className="summary">
              <div>Summary 1</div>
              <div>Summary 2</div>
            </div> */}

          <section className="summary">
            <div className="total-orders">
              <h2>Total Orders</h2>
              <p>1000</p>
            </div>
            <div className="total-revenue">
              <h2>Total Revenue</h2>
              <p>$100000</p>
            </div>
          </section>
          <section className="transaction-list">
            <div className="transaction-header">
              <input type="text" placeholder="Search" className="search" />
              <input type="month" value="2024-05" className="date-picker" />
              <button className="manage-transactions">
                Manage Transactions
              </button>
            </div>
            <table className="full-width-table">
              <thead>
                <tr>
                  {[
                    "Date",
                    "Product",
                    "Product Code",
                    "Payment Type",
                    "Customer Name",
                    "Amount",
                  ].map((header) => (
                    <th key={header}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction, index) => (
                  <tr key={index}>
                    <td>{transaction.date}</td>
                    <td>
                      <img src={transaction.productImg} alt="Product" />
                    </td>
                    <td>
                      <img src={transaction.barcodeImg} alt="Barcode" />
                    </td>
                    <td>{transaction.paymentType}</td>
                    <td>{transaction.customerName}</td>
                    <td>{transaction.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="pagination">
              {["1", "2", "3", "4", "...", "Next >"].map((page) => (
                <span key={page}>{page}</span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PastTransactionsComponent;
