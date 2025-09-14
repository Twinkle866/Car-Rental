import { useState, useEffect, createContext, useContext } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import api from "../utils/axios.js";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const navigate = useNavigate();
  const currency = import.meta.env.VITE_CURRENCY;
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [isOwner, setIsOwner] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [cars, setCars] = useState([]);

  // 🔹 Function to check if user is logged in
  const fetchUser = async () => {
    try {
      const { data } = await api.get(`${VITE_API_URL}/api/user/data`);
      if (data.success) {
        setUser(data.user);
        setIsOwner(data.user.role === "owner");
      } else {
        navigate("/");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
    }
  };

  // 🔹 Function to fetch all cars
  const fetchCars = async () => {
    try {
      const { data } = await api.get(`${VITE_API_URL}/api/user/cars`);
      data.success
        ? setCars(data.cars)
        : toast.error(data.message || "Failed to fetch cars");
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
    }
  };

  // 🔹 Function to log out user
  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
    setIsOwner(false);
    toast.success("You have been logged out");
  };

  // 🔹 On mount: get token + cars
  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token);
    fetchCars();
  }, []);

  // 🔹 When token changes: fetch user
  useEffect(() => {
    if (token) {
      fetchUser();
    }
  }, [token]);

  // 🔹 Value passed to context
  const value = {
    navigate,
    currency,
    api,
    user,
    setUser,
    token,
    setToken,
    isOwner,
    setIsOwner,
    fetchUser,
    showLogin,
    setShowLogin,
    logout,
    fetchCars,
    cars,
    setCars,
    pickupDate,
    setPickupDate,
    returnDate,
    setReturnDate,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
