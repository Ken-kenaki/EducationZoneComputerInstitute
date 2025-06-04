import React from "react";
import { logout } from "../logout/actions";

const dahboard = () => {
  return (
    <div className="mt-100">
      dahboard
      <form action={logout}>
        <button type="submit">Log Out</button>
      </form>
    </div>
  );
};

export default dahboard;
