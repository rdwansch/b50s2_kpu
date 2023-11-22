import { Dispatch, ReactNode, createContext, useReducer } from 'react';

interface InitialState {
  isLogin: boolean;
  user: {
    username: string;
  };
}

interface Action {
  type: 'USER_LOGIN' | 'USER_LOGOUT';
  payload: InitialState;
}

const initialState: InitialState = {
  isLogin: false,
  user: {
    username: '',
  },
};

const reducer = (state: InitialState, action: Action): InitialState => {
  switch (action.type) {
    case 'USER_LOGIN':
      return { ...state, ...action.payload };
    default:
      return { ...state };
  }
};

export const UserCtx = createContext<[InitialState, Dispatch<Action>]>([initialState, () => {}]);

export function UserContextProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <UserCtx.Provider value={[state, dispatch]}>{children}</UserCtx.Provider>;
}
