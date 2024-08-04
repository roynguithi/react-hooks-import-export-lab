import React from "react";
import { username, city } from "../data/user";

function Home() {
  return (
    <div id="home">
      <h1>
        {username} is a Web Developer from {city}
      </h1>
    </div>
  );
}

function UserDetails() {
  return (
    <div>
      <h1>Username: {username}</h1>
    </div>
  );
}

function Location() {
  return (
    <div>
      <h1>City: {city}</h1>
    </div>
  );
}

// Export default and named exports
export default Home;
export { UserDetails, Location };