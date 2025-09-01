"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

// Define the user type
export interface User {
  id: string;
  name: string;
  email: string;
  role: "user" | "admin";
}

// Define the AuthContext type
interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

// Create the context with a default value
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Auth provider component
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in on initial load
    const checkAuth = async () => {
      try {
        // In a real app, you would check a token in local storage
        // and validate it with your backend
        const storedUser = localStorage.getItem("techNewsUser");
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error("Authentication error:", error);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  // Login function
  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    try {
      // In a real app, you would call your backend API here
      // For demo purposes, we'll use a mock login
      if (email && password) {
        // Mock user for demo
        const mockUser: User = {
          id: "user1",
          name: email.split("@")[0],
          email,
          role: "user",
        };
        
        // Store in localStorage for persistence
        localStorage.setItem("techNewsUser", JSON.stringify(mockUser));
        setUser(mockUser);
        return true;
      }
      return false;
    } catch (error) {
      console.error("Login error:", error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  // Register function
  const register = async (
    name: string,
    email: string,
    password: string
  ): Promise<boolean> => {
    setIsLoading(true);
    try {
      // In a real app, you would call your backend API here
      // For demo purposes, we'll use a mock registration
      if (name && email && password) {
        // Mock user creation for demo
        const mockUser: User = {
          id: `user${Date.now()}`,
          name,
          email,
          role: "user",
        };
        
        // Store in localStorage for persistence
        localStorage.setItem("techNewsUser", JSON.stringify(mockUser));
        setUser(mockUser);
        return true;
      }
      return false;
    } catch (error) {
      console.error("Registration error:", error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem("techNewsUser");
    setUser(null);
  };

  // Calculate authentication status
  const isAuthenticated = !!user;

  // Create the context value
  const contextValue: AuthContextType = {
    user,
    isLoading,
    isAuthenticated,
    login,
    register,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
