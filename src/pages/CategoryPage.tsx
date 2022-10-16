import React, { ReactElement } from 'react';
import { useParams } from 'react-router-dom';

export default function categoryPage(): ReactElement {
  const { id } = useParams();

  return (
    <div className="container">
      <h1>Category Page</h1>
      <p>ID: {id}</p>
    </div>
  );
}
