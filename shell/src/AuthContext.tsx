import React from "react";

interface IUser {
  id: number;
  name: string;
}

interface IAuthContext {
  user?: IUser;
  accessToken?: string;
  login: (user: IUser, accessToken: string) => void;
}

const AuthContext = React.createContext<IAuthContext>({
  login: () => null,
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
  const [user, setUser] = React.useState<IUser>();
  const [accessToken, setAccessToken] = React.useState<string>();

  const login = (newUser: IUser, newAccessToken: string) => {
    setUser(newUser);
    setAccessToken(newAccessToken);
  };

  const context: IAuthContext = {
    user,
    accessToken,
    login,
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};
