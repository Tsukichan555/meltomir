import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Base from './components/arrangement/Base';
import Layout from './components/arrangement/Layout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Base>
      <Layout>
        Hello
      </Layout>
    </Base>
  </React.StrictMode>
);

