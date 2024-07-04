import React from "react";

const DataTable = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Match Score</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            <td>{row.name}</td>
            <td>{row.email}</td>
            <td>{row.role}</td>
            <td>{row.score !== undefined ? row.score.toFixed(2) : "N/A"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
