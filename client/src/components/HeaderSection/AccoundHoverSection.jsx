import React from "react";
import { Link } from 'react-router-dom';
function AccoundHoverSection() {
  return (
    <div className="p-8 min-w-max z-10">
      <ul>
        <li className="py-1">
          <Link>My Account</Link>
        </li >
        <li className="py-1">
          <Link>My Wish List (0)</Link>
        </li>
        <li className="py-1">
          <Link>Compare (0)</Link>
        </li>
        <li className="py-1">
          <Link>Create an Account</Link>
        </li>
        <li className="py-1">
          <Link>Sign In</Link>
        </li>
      </ul>
    </div>
  );
}

export default AccoundHoverSection;
