const initialState = {
  profile: null, // the logged-in user
  token: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "auth/setToken": {
      return {
        ...state,
        token: action.payload,
      };
    }
    case "auth/setProfile": {
      return {
        ...state,
        profile: action.payload.profile,
      };
    }
    case "auth/logout": {
      localStorage.removeItem("token");
      return {
        profile: null,
        token: null,
      };
    }
    default: {
      return state;
    }
  }
}
