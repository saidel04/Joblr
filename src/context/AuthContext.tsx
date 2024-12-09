import React, { createContext, useState, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { loginUser } from "../api/apiService";

interface AuthContextProps {
  userToken: string | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC = ({ children }) => {
  const [userToken, setUserToken] = useState<string | null>(null);

  const login = async (username: string, password: string) => {
    const tokens = await loginUser(username, password);
    await AsyncStorage.setItem("accessToken", tokens.access);
    await AsyncStorage.setItem("refreshToken", tokens.refresh);
    setUserToken(tokens.access);
  };

  const logout = async () => {
    await AsyncStorage.removeItem("accessToken");
    await AsyncStorage.removeItem("refreshToken");
    setUserToken(null);
  };

  return (
    <AuthContext.Provider value={{ userToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
