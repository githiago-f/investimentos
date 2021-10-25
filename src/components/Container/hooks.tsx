import { logout } from 'actions/logout';
import { useCallback, useState } from 'react';

export const useContainerHooks = () => {
  const [redirect, setRedirect] = useState(false);

  const onClickLogout = useCallback(() => {
    logout();
    setRedirect(true);
  }, []);

  return {
    onClickLogout,
    redirect
  };
};
