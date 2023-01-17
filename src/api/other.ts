import { post, get } from "./axios/reques";

//Get method example
export const login = (data: any) => {
  return post("/user/login", data);
};

//Post method example
export function getBanners(params: any) {
  return get("/home/banners", params);
}
