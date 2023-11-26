import { Dispatch, ReactNode, createContext, useReducer } from 'react';
import { User } from '../types/User';

interface InitialState {
  isLogin: boolean;
  user: User;
  token: string;
}

interface Action {
  type: 'USER_LOGIN' | 'USER_LOGOUT';
  payload?: InitialState;
}

const initialState: InitialState = {
  isLogin: false,
  user: {
    username: '',
    id: 0,
  },
  token: '',
};

const reducer = (state: InitialState, action: Action): InitialState => {
  switch (action.type) {
    case 'USER_LOGIN':
      if (action.payload) {
        localStorage.setItem('token', action.payload.token);
        return { ...state, ...action.payload };
      }
      return initialState;
    case 'USER_LOGOUT': {
      localStorage.removeItem('token');
      return initialState;
    }
    default:
      return { ...state };
  }
};

export const UserCtx = createContext<[InitialState, Dispatch<Action>]>([initialState, () => {}]);

export function UserContextProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <UserCtx.Provider value={[state, dispatch]}>{children}</UserCtx.Provider>;
}
