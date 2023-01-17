import { defineStore } from "pinia";
import { transformWithEsbuild } from "vite";
import { login } from "../api/other";
import { UserInfo } from "../types";

export const useUserStore = defineStore("user-store", {
  state: () => {
    return {
      user: {} as UserInfo,
    };
  },
  actions: {
    async userLogin(data: any): Promise<UserInfo> {
      return await login(data).then((res) => {
        this.user = res.data;
        return res.data;
      });
    },
  },
});
