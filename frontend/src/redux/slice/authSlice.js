import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Retrive the user info and token from local storage
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
  
// check for existing guest ID in local storage or create a new one
const initialGuestId = localStorage.getItem("guestId") || `guest_${new Date().getTime()}`;
localStorage.setItem("guestId", initialGuestId);

// Initial state for authentication slice
const initialState = {
  user: userInfoFromStorage,
  guestId: initialGuestId,
  loading: false,
  error: null,
};

// Async thunk to login user
export const loginUser = createAsyncThunk("auth/loginUser", async (userData, { rejectWithValue }) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_BACKEND-URL}/api/users/login`, userData);
        localStorage.setItem("userInfo", JSON.stringify(response.data));
        localStorage.setItem("userToken", response.data.token);

        return response.data.user; // Return the user object from the response
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});


// Async thunk to register user

export const registerUser = createAsyncThunk("auth/registerUser", async (userData, { rejectWithValue }) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_BACKEND-URL}/api/users/register`, userData);
        localStorage.setItem("userInfo", JSON.stringify(response.data));
        localStorage.setItem("userToken", response.data.token);

        return response.data.user; // Return the user object from the response
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

//slice

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null;
            state.guestId = `guest_${new Date().getTime()}`;
            localStorage.removeItem("userInfo");
            localStorage.removeItem("userToken");
            localStorage.setItem("guestId", state.guestId);
        },
        generateNewGuestId: (state) => {
            state.guestId = `guest_${new Date().getTime()}`;
            localStorage.setItem("guestId", state.guestId);
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(loginUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(loginUser.fulfilled, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(loginUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        })
        .addCase(registerUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(registerUser.fulfilled, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(registerUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        })
    }
});

export const { logout, generateNewGuestId } = authSlice.actions;
export default authSlice.reducer;