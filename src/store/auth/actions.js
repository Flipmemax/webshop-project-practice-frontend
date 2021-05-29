import axios from "axios";

export const setToken = (token) => ({
  type: "auth/setToken",
  payload: token,
});

const setProfile = (userData) => ({
  type: "auth/setProfile",
  payload: { profile: userData },
});

export const logout = () => ({
  type: "auth/logout",
});

export const login =
  (email, password, history) => async (dispatch, getState) => {
    try {
      const response = await axios.post(`http://localhost:4000/login`, {
        email: email,
        password: password,
      });
      const token = response.data.jwt;
      dispatch(setToken(response.data.jwt));
      localStorage.setItem("token", token);

      //   dispatch(bootstrapLogin(token));

      dispatch(setProfile(response.data));
      history.push("/");
    } catch (error) {
      console.log("error:", error.message);
    }
  };

export const signup =
  (name, email, phone, address, password, history) =>
  async (dispatch, getState) => {
    try {
      const response = await axios.post(`http://localhost:4000/users/new`, {
        name: name,
        email: email,
        phone: phone,
        address: address,
        password: password,
      });
      const token = response.data.jwt;
      dispatch(setToken(response.data.jwt));
      localStorage.setItem("token", token);

      //   dispatch(bootstrapLogin(token));
      history.push("/login");
    } catch (error) {
      console.log("error:", error.message);
    }
  };

// export const bootstrapLogin = (token) => async (dispatch, getState) => {
//   try {
//     const profileResponse = await axios.get(`http://localhost:4000/users/me`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     dispatch(setProfile(profileResponse.data));
//   } catch (error) {
//     console.log("error:", error.message);
//   }
// };
