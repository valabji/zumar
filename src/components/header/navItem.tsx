import React, { ReactElement } from 'react'
export default function navItem ({ name, href = '#' }: Item): ReactElement {
  return <a href={href} className="header-link" style={{ padding: 10, marginRight: 26, fontWeight: 'normal', fontSize: 16 }} >
        {name}
    </a>
}
