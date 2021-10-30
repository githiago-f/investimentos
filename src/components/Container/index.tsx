import React, { FC } from 'react';
import { useAuthActions } from 'actions/auth-actions';
import './styles.css';

export const Container: FC<{}> = (props) => {
  const { logout } = useAuthActions();
  return (
    <div className="min-h-screen">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between">
          <h1 className="text-3xl font-bold text-gray-900">Carteiras</h1>
          <button className="logout" onClick={logout}>Logout</button>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {props.children}
        </div>
      </main>
    </div>
  );
};
