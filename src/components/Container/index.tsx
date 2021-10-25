import React, { FC } from 'react';
import { Redirect } from 'react-router';
import { useContainerHooks } from './hooks';
import './styles.css';

export const Container: FC<{}> = (props) => {
  const { onClickLogout, redirect } = useContainerHooks();
  return (
    <div className="min-h-full">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <button className="logout" onClick={onClickLogout}>Logout</button>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {props.children}
        </div>
      </main>
      {redirect && <Redirect to='/' />}
    </div>
  );
};
