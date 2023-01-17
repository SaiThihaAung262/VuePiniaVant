import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";

interface AdminInfo {
  username: string;
  password: string;
}

export const useAdminStore = defineStore("admin", {
  state: () => {
    return {
      // for data that is not yet loaded
      admin: null as AdminInfo | null,
      // for initially empty lists
      adminList: useLocalStorage("admin:adminList", []) as AdminInfo | any,
    };
  },
  actions: {
    async addAdminList(data: AdminInfo) {
      this.admin = data;
      this.adminList.push(this.admin);
    },
  },
});
