import React from 'react'
import './sidebar.css'

export default function () {
  return (
    <aside className="sidebar">
    <div className="logo">LOGO</div>
    <nav className="nav-menu">
      <ul>
        <li>
          <div className="nav-item">
            <span className="material-symbols-outlined">
              space_dashboard
            </span>
            Dashboard
            <br />
          </div>
        </li>
        <li>
          <div className="nav-item">
            <span className="material-symbols-outlined">add</span>
            Add Worker
            <br />
          </div>
        </li>
        <li>
          <div className="nav-item">
            <span className="material-symbols-outlined">remove</span>
            Remove Worker
            <br />
          </div>
        </li>
        <li>
          <div className="nav-item">
            <span className="material-symbols-outlined">visibility</span>
            View Worker
            <br />
          </div>
        </li>
        <li>
          <div className="nav-item">
            <span className="material-symbols-outlined">inventory</span>
            Inventory
            <br />
          </div>
        </li>
        <li>
          <div className="nav-item">
            <span className="material-symbols-outlined">credit_card</span>
            Payment
            <br />
          </div>
        </li>
        <li>
          <div className="nav-item">
            <span className="material-symbols-outlined">person</span>
            Customer
            <br />
          </div>
        </li>
        <li>
          <div className="nav-item">
            <span className="material-symbols-outlined">monitoring</span>
            Revenue
            <br />
          </div>
        </li>
        <li>
          <div className="nav-item">
            <span className="material-symbols-outlined">
              manage_accounts
            </span>
            Settings
            <br />
          </div>
        </li>
      </ul>
    </nav>
  </aside>
  )
}
