import { createContext, useState } from "react";
// import PropTypes from "prop-types";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [userInfo, setUserInfo] = useState({});
  return (
    <UserContextProvider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContextProvider>
  );
}

// UserContextProvider.propTypes = {
//   children: PropTypes.node.isRequired,
// };
