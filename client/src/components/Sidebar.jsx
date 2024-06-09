import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './sidebar.css';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">LOGO</div>
      <nav className="nav-menu">
        <ul>
          <li>
            <Link to="/seller/dashboard"> {/* Update the link to navigate to the Dashboard */}
              <div className="nav-item">
                <span className="material-symbols-outlined">space_dashboard</span>
                Dashboard
                <br />
              </div>
            </Link>
          </li>
          <li>
            <Link to="/seller/add-worker"> {/* Update the link to navigate to the Add Worker page */}
              <div className="nav-item">
                <span className="material-symbols-outlined">add</span>
                Add Worker
                <br />
              </div>
            </Link>
          </li>
          <li>
            <Link to="/seller/remove-worker"> {/* Update the link to navigate to the Remove Worker page */}
              <div className="nav-item">
                <span className="material-symbols-outlined">remove</span>
                Remove Worker
                <br />
              </div>
            </Link>
          </li>
          <li>
            <Link to="/seller/view-worker"> {/* Update the link to navigate to the View Worker page */}
              <div className="nav-item">
                <span className="material-symbols-outlined">visibility</span>
                View Worker
                <br />
              </div>
            </Link>
          </li>
          <li>
            <Link to="/seller/inventory"> {/* Update the link to navigate to the Inventory page */}
              <div className="nav-item">
                <span className="material-symbols-outlined">inventory</span>
                Inventory
                <br />
              </div>
            </Link>
          </li>
          <li>
            <Link to="/seller/add-product"> {/* Update the link to navigate to the Add Product page */}
              <div className="nav-item">
                <span className="material-symbols-outlined">add</span>
                Add Product
                <br />
              </div>
            </Link>
          </li>
          <li>
            <Link to="/seller/payment"> {/* Update the link to navigate to the Payment page */}
              <div className="nav-item">
                <span className="material-symbols-outlined">credit_card</span>
                Payment
                <br />
              </div>
            </Link>
          </li>
          <li>
            <Link to="/seller/customer"> {/* Update the link to navigate to the Customer page */}
              <div className="nav-item">
                <span className="material-symbols-outlined">person</span>
                Customer
                <br />
              </div>
            </Link>
          </li>
          <li>
            <Link to="/seller/revenue"> {/* Update the link to navigate to the Revenue page */}
              <div className="nav-item">
                <span className="material-symbols-outlined">monitoring</span>
                Revenue
                <br />
              </div>
            </Link>
          </li>
          <li>
            <Link to="/seller/settings"> {/* Update the link to navigate to the Settings page */}
              <div className="nav-item">
                <span className="material-symbols-outlined">manage_accounts</span>
                Settings
                <br />
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
