
// Endpoint di autenticazione
export const LOGIN_ENDPOINT = `/auth/login`;
export const LOGOUT_ENDPOINT = `/auth/logout`;
export const REFRESH_TOKEN_ENDPOINT = `/auth/refresh-token`;

// Endpoint utente
export const USER_PROFILE_ENDPOINT = `/user/profile`;
export const UPDATE_USER_PROFILE_ENDPOINT = `/user/profile/update`;


// Esporta un oggetto con tutti gli endpoint per un'importazione più pulita
export default {
  LOGIN_ENDPOINT,
  LOGOUT_ENDPOINT,
  REFRESH_TOKEN_ENDPOINT,
  USER_PROFILE_ENDPOINT,
  UPDATE_USER_PROFILE_ENDPOINT,
};