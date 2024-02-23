import { auth } from "express-oauth2-jwt-bearer";
import "dotenv/config";
export const jwtCheck = auth({
  audience: "DailyEat-food-ordering-api",
  issuerBaseURL: "https://dev-hzcpvarxohu3d2wi.us.auth0.com/",
  tokenSigningAlg: "RS256",
});
