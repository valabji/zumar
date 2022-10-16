import React, { ReactElement } from 'react';
import getCategoryData from './getCategoryData';
import '../../style/components/breadcrumb.scss';

export default function breadcrumb({ id }: breadcrumb): ReactElement {
  const categoryList: category[] = [];
  const getData = (categoryId: number): void => {
    const data = getCategoryData(categoryId);
    if (data != null) {
      categoryList.push(data);
      if (data.parentID != null) {
        getData(data.parentID);
      }
    }
  };
  getData(id);
  categoryList.reverse();
  return (
    <div className="breadcrumb-container">
      <a href={'/'} className="breadcrumb-item">
        Home
      </a>
      {categoryList.map((category) => {
        return (
          <span key={Math.random()}>
            <span className="breadcrumb-item" style={{ cursor: 'default' }}>
              {'>'}
            </span>
            <a href={'/category/' + category.id.toString()} className="breadcrumb-item">
              {category.name}
            </a>
          </span>
        );
      })}
    </div>
  );
}
