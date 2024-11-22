import React, { useState, createContext, ReactNode, useContext } from "react";

export interface User {
  email: string;
  firstName: string;
  lastName: string;
}

export interface AuthContextProvider {
  user: User | undefined;
  updateUser: (email: string, firstName: string, lastName: string) => void;
  isLoading: boolean;
}

// @ts-expect-error
const AuthContext = createContext<AuthContextProvider>({});

export const useAuth = (): AuthContextProvider => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>();
  const [isLoading, setIsLoading] = useState(true);

  interface UpdateUserIdentityResponse {
    statusCode: number;
    message: string;
    sessionId?: string;
  }
  const updateUser = (
    email: string,
    firstName: string,
    lastName: string
  ): Promise<UpdateUserIdentityResponse | undefined> => {
    setUser({ email, firstName, lastName });
    return Promise.resolve({ statusCode: 200, message: "Success" });
  };

  return (
    <AuthContext.Provider value={{ user, updateUser, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
