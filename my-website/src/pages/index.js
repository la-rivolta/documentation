import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import MainPageHeader from './MainPage/mainHeader/mainHeader.js';
import MainPageBody from './MainPage/mainBody/mainBody.js'



export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <MainPageHeader />
      <main>
        <MainPageBody />
      </main>
    </Layout>
  );
}
