
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  photo: "",
  location: {
    latitude: 0,
    longitude: 0,
  },
  locationString: ""
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateInfo: (state, action) => {
      const {firstName , lastName, email, photo, location, locationString} = action.payload;
      return {
        firstName: firstName ? firstName : state.firstName,
        lastName: lastName ? lastName : state.lastName,
        email: email ? email : state.email,
        photo: photo ? photo : state.photo,
        location: location ? location : state.location,
        locationString: locationString ? locationString : state.locationString,
      };
    },
    logout(state) {
      return initialState;
    },
  },
});

export const { updateInfo, logout } = userSlice.actions;
const userReducer = userSlice.reducer;

export default userReducer;