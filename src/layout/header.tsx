import React, { useState, ReactElement } from 'react'
import '../style/components/header.scss'
import { DropDown, Menu, NavItem } from '../components/header'
import { useAppSelector } from '../store/hooks'

export default function header (): ReactElement {
  const cartItems = useAppSelector((state) => state.cart.length)
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div>
      <div className="header-container">
        <div className="header-body">
          <a href="/" className="header-section">
            <img src="/imgs/Zumar.png" style={{ height: 14 }} />
          </a>
          <div style={{ flex: 1 }} />
          <form
            action="/search"
            className="header-section-middle"
            style={{ width: 605 }}
          >
            <DropDown />
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: 47,
                width: 433
              }}
            >
              <img
                src="/imgs/Search.svg"
                className="btn"
                style={{ width: 24, marginRight: 10, height: 24 }}
              />
              <input
                name="query"
                placeholder="Search by product name or seller"
              />
            </div>
          </form>
          <div style={{ flex: 1 }} />
          <div className="header-section">
            <NavItem name="Services" href="/services" />
            <NavItem name="Orders" href="/orders" />
            <NavItem name="Account" href="/account" />
            <a className="btn" href="/cart" style={{ position: 'relative' }}>
              <img
                src="/imgs/Bag.svg"
                style={{ marginRight: 26, marginTop: 2 }}
              />
              <span
                className="bag-badge"
                style={{ display: cartItems > 0 ? 'flex' : 'none' }}
              >
                <span>{cartItems < 10 ? cartItems : '9+'}</span>
              </span>
            </a>
            <img
              onClick={() => {
                setMenuOpen(!menuOpen)
              }}
              src="/imgs/Menu.svg"
              className="btn"
              style={{ paddingBottom: 7, paddingTop: 7 }}
            />
          </div>
        </div>
      </div>
      <div style={{ height: 87 }}></div>
      <div onClick={() => { setMenuOpen(false) }} className={`menu-shade ${menuOpen ? 'open' : ''}`}></div>
      <Menu menuOpen={menuOpen} />
    </div>
  )
}
