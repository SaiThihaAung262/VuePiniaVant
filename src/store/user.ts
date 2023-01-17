import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";
interface UserInfo {
  name: string;
  age: number;
}

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      user: null as UserInfo | null,
      userList: useLocalStorage("user:userLists", []) as UserInfo[] | any,
    };
  },
  actions: {
    async addUserList(data: UserInfo) {
      this.user = data;
      this.userList.push(this.user);
    },
  },
});
