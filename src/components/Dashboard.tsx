import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const [error, setError] = useState("");
  const [loading, setLodaing] = useState(false);

  const navigate = useNavigate();

  const { logOut, currentUser } = useAuth();

  console.log(currentUser.email);

  const handleLogout = async () => {
    try {
      setError("");
      setLodaing(true);
      console.log("Hellooo");
      await logOut();
      console.log("Hellooo2");
      navigate("/");
      console.log("Hellooo3");
    } catch {
      console.log("hello4");
      setError("Failed to logout");
      console.log("hello5");
    }
    // setLodaing(false);
  };

  return (
    <div>
      <div>Dashboard</div>
      <button onClick={handleLogout}>Logout</button>
      <p>{currentUser.email}</p>
    </div>
  );
};
