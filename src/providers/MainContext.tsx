import React, {createContext, useEffect} from 'react';

import {
  IContextReturnType,
  IMainContextProps,
  IMainContextState,
} from '@/types/mainContext.type';

export const Context = createContext<IContextReturnType>(
  {} as IContextReturnType
);

const MainContext = (props: IMainContextProps) => {
  const {children} = props;
  const [state, setState] = React.useState<IMainContextState>({
    user: {id: 1, code: '8401', firstName: 'mehrdad', lastName: 'Mohajel'},
  });

  const isLoggedIn = (): boolean => {
    return !!state.user;
  };

  return (
    <Context.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default MainContext;
