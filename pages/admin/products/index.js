import React from "react";
import AdminDashboard from "../../../components/Admin/AdminDashboard";
import mockProducts from "../../../components/data/mockProducts"; // Update the import path

const Admin = () => {
  return (
    <div>
      <AdminDashboard products={mockProducts} />
    </div>
  );
};

export default Admin;
