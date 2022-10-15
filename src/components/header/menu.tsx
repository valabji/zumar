import DropDown from './dropDown'

export default function ({ menuOpen }: { menuOpen: boolean }) {
  return (
    <div className={`menu ${menuOpen ? 'open' : ''}`}>
      <form action="/search" style={{ width: 605 }}>
        <DropDown />
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 47,
            width: 433,
          }}
        >
          <img
            src="/imgs/Search.svg"
            className="btn"
            style={{ width: 24, marginRight: 10, height: 24 }}
          />
          <input name="query" placeholder="Search by product name or seller" />
        </div>
      </form>
      <hr />
      <a className="menu-link" href="/services">
        Services
      </a>
      <a className="menu-link" href="/orders">
        Orders
      </a>
      <a className="menu-link" href="/account">
        Account
      </a>
      <hr />

      <a className="menu-link" href="/services">
        Services
      </a>
      <a className="menu-link" href="/orders">
        Orders
      </a>
      <a className="menu-link" href="/account">
        Account
      </a>
      <hr />

      <a className="menu-link" href="/services">
        Services
      </a>
      <a className="menu-link" href="/orders">
        Orders
      </a>
      <a className="menu-link" href="/account">
        Account
      </a>
    </div>
  )
}
