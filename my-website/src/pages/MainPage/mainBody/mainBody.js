import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from '../../index.module.css';

import photo from '../../../../static/img/photo.jpg';

function MainPageBodyLeft() {
  return (
      <div className={clsx('col col--6 main-column')}>
         <img src={photo} className='photo'/>
      </div>
  );
}

function MainPageBodyRight() {
  return (
      <div className={clsx('col col--6 main-column')}>
        There will be information about me
      </div>
  );
}

export default function MainPageBody() {
  return (
      <div className="container">
        <div className="row">
          <MainPageBodyLeft/>
          <MainPageBodyRight/>
        </div>
      </div>
  );
}
