import {defineStore} from "pinia";
import {transformWithEsbuild} from "vite";
import {login} from "../api/other";
import {UserInfo, LoginData} from "../types";
import router from "../router";

export const useUserStore = defineStore("user-store", {
    state: () => {
        return {
            user: {} as UserInfo,
        };
    },
    actions: {
        async userLogin(data: LoginData): Promise<UserInfo> {
            return await login(data).then((res) => {
                this.user = res.data;
                console.log("Here is res in UseUserStore : ", res)
                if (res.err_code === 0) {
                    setTimeout(
                        () => {
                            router.push("/")
                        },
                        300)
                }
                return res.data;
            });
        },
    },
});
