import axios from 'axios';

const apiWithToken = axios.create ({
  baseURL: 'http://localhost:8000',
  timeout: 15000,
  headers: {
    'Content-Type': 'Application/json',
    Authorization: `Token ${localStorage.getItem ('accessToken')}`,
  },
});

const {createSlice} = require ('@reduxjs/toolkit');

const dashboardSlice = createSlice ({
  name: 'dashboard',
  initialState: {
    dashboard: {},
    dashboardList: [],
    isLoading: false,
  },

  reducers: {
    setDashboard: (state, action) => {
      state.dashboard = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = !state.isLoading;
    },
  },
});

export const {setDashboard, setLoading} = dashboardSlice.actions;

export default dashboardSlice.reducer;

export function fetchDashboardList (data) {
  return async function fetchDashboardListThunk (dispatch) {
    try {
      const res = await apiWithToken.get (`/api/dashboard/`);
      dispatch (setDashboard (res.data));
      dispatch (setLoading ());
    } catch (err) {
      dispatch (setLoading ());
    }
  };
}
