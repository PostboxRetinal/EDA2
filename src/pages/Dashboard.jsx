import React from "react";

const Dashboard = ({ user }) => {
  return (
    <>
      <h1>Ruta privada</h1>
      <p>Bienvenido, {user.name}</p>
    </>
  );
};

export default Dashboard;