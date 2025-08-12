//export const BASE_URL = "https://health-suggestion-app-backend.onrender.com"
export const BASE_URL = "http://localhost:3000"
export default {
  SIGN_UP: BASE_URL+"/user",
  SIGN_IN: BASE_URL+"/user/authentication",
  SERVER: BASE_URL+"/server/ask",
  SYMPTOM:BASE_URL+"/api/symptoms",
  SUGGESTION:BASE_URL+"/api/suggestions",
  LOGOUT:BASE_URL+"/user/logout",
  HISTROY:BASE_URL+"/user/history",
  FORGOT:BASE_URL+"/user/forgot-password",
  ResetPassword:BASE_URL+"/user/reset-password",
  CONTACT:BASE_URL+"/contact/"
}