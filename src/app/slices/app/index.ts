import { PayloadAction } from '@reduxjs/toolkit';
import { useInjectReducer } from 'store/injectors';
import { createSlice } from 'utils/redux/toolkit';
import { AppState, AuthState, SnackbarNotification } from './types';

export const initialState: AppState = {
  authState: AuthState.Loading,
  snackbarNotification: null,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    updateAuthState(state, action: PayloadAction<AuthState>) {
      state.authState = action.payload;
    },
    updateIdentityType(state, action: PayloadAction<UserIdentityType>) {
      state.userIdentityType = action.payload;
    },
    updateLastMapLocation(
      state,
      action: PayloadAction<{
        latitude: number;
        longitude: number;
        zoom: number;
      }>,
    ) {
      state.lastMapLocation = action.payload;
    },
    updateSnackbarNotification(
      state,
      action: PayloadAction<SnackbarNotification | 'error'>,
    ) {
      let notification: SnackbarNotification;
      if (action.payload === 'error') {
        notification = {
          message: 'An error occurred',
          severity: 'error',
          duration: 3000,
        };
      } else {
        if (!action.payload) {
          notification = null;
        } else {
          notification = {
            message:
              action.payload.message ||
              (action.payload.severity === 'error' ? 'An error occurred' : ''),
            severity: action.payload.severity,
            duration: action.payload.duration,
          };
        }
      }
      state.snackbarNotification = notification;
    },
  },
});

export const { actions: appActions } = appSlice;

export const useAppSlice = () => {
  useInjectReducer({ key: appSlice.name, reducer: appSlice.reducer });
  return { appActions: appSlice.actions };
};
