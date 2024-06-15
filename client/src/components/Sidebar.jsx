import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">LOGO</div>
      <nav className="nav-menu">
        <ul>
          <li>
            <Link to="/seller/dashboard">
              {" "}
              {/* Update the link to navigate to the Dashboard */}
              <div className="nav-item">
                <span className="material-symbols-outlined">
                  space_dashboard
                </span>
                Dashboard
                <br />
              </div>
            </Link>
          </li>
          <li>
            <Link to="/seller/add-worker">
              {" "}
              {/* Update the link to navigate to the Add Worker page */}
              <div className="nav-item">
                <span className="material-symbols-outlined">add</span>
                Add Worker
                <br />
              </div>
            </Link>
          </li>
          
          <li>
            <Link to="/seller/view-worker">
              {" "}
              {/* Update the link to navigate to the View Worker page */}
              <div className="nav-item">
                <span className="material-symbols-outlined">visibility</span>
                View Worker
                <br />
              </div>
            </Link>
          </li>
          <li>
            <Link to="/seller/inventory">
              {" "}
              {/* Update the link to navigate to the Inventory page */}
              <div className="nav-item">
                <span className="material-symbols-outlined">inventory</span>
                Inventory
                <br />
              </div>
            </Link>
          </li>
          <Link to="/seller/past_transaction">
            <div className="nav-item">
              <span className="material-symbols-outlined">credit_card</span>
              History
              <br />
            </div>
          </Link>
          <li>
            <Link to="/seller/customer">
              {" "}
              {/* Update the link to navigate to the Customer page */}
              <div className="nav-item">
                <span className="material-symbols-outlined">person</span>
                Customer Details
                <br />
              </div>
            </Link>
          </li>
          <li>
            <Link to="/seller/revenue">
              {" "}
              {/* Update the link to navigate to the Revenue page */}
              <div className="nav-item">
                <span className="material-symbols-outlined">monitoring</span>
                Revenue
                <br />
              </div>
            </Link>
          </li>
          <li>
            <Link to="/seller/settings">
              {" "}
              {/* Update the link to navigate to the Settings page */}
              <div className="nav-item">
                <span className="material-symbols-outlined">
                  manage_accounts
                </span>
                Profile
                <br />
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
