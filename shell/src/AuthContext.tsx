import React from "react";

interface IUser {
  id: number;
  name: string;
}

interface IAuthContext {
  user?: IUser;
  accessToken?: string;
  login: (user: IUser, accessToken: string) => void;
  logout: () => void;
}

const AuthContext = React.createContext<IAuthContext>({
  login: () => null,
  logout: () => null,
});

export const useAuthContext = () => {
  return React.useContext(AuthContext);
};

interface AuthContextProviderProps {
  children: React.ReactNode;
}

export const AuthContextProvider = ({
  children,
}: AuthContextProviderProps): JSX.Element => {
  const [user, setUser] = React.useState<IUser | undefined>();
  const [accessToken, setAccessToken] = React.useState<string | undefined>();

  const login = (newUser: IUser, newAccessToken: string) => {
    setUser(newUser);
    setAccessToken(newAccessToken);
  };

  const logout = () => {
    setUser(undefined);
    setAccessToken(undefined);
  };

  const context: IAuthContext = {
    user,
    accessToken,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};
