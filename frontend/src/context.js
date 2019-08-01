import React, { createContext, useState } from "react";

export const MyContext = createContext();

function MyProvider(props) {
  const [state, setState] = useState({
    user: null
  });

  const setUser = user => setState(user);
  const delUser = () => setState({ user: null });

  return (
    <MyContext.Provider
      value={{
        state,
        setUser,
        delUser
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
}

export default MyProvider;
