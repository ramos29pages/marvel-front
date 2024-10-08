export const CURRENT_TOKEN : string = "CURRENT_TOKEN";

export const API = {
  AuthLoginEndpoint : 'http://localhost:3000/api/v1/auth/login',
  AuthLogoutEndpoint : 'http://localhost:3000/api/v1/auth/logout',
  AuthCheckAuthEndpoint : 'http://localhost:3000/api/v1/auth/validate-auth',
  AuthRefreshTokenEndpoint : 'http://localhost:3000/api/v1/auth/refresh-token',
  AuthValidateUsernameEndpoint : 'http://localhost:3000/api/v1/auth/validate-username',
  users : {
    getAllEndpoint: 'http://localhost:3000/api/v1/users',
  }
}
