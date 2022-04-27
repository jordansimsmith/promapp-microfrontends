import React from "react";

interface IUserContext {
  user: IUser;
  accessToken: string;
}

const UserContext = React.createContext<IUserContext>({
  user: {
    id: -1,
    name: "",
  },
  accessToken: "",
});

export const useUserContext = () => {
  return React.useContext(UserContext);
};

interface UserContextProviderProps {
  user: IUser;
  accessToken: string;
  children: React.ReactNode;
}

export const UserContextProvider = ({
  children,
  user,
  accessToken,
}: UserContextProviderProps): JSX.Element => {
  return (
    <UserContext.Provider value={{ user, accessToken }}>
      {children}
    </UserContext.Provider>
  );
};
