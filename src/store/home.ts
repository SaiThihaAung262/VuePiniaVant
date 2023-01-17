import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";
import { getArticles } from "../api/other";
import { ArticleInfo, ArticleData } from "../types";

export const useHomeStore = defineStore("home", {
  state: () => {
    return {
      articleLists: [] as ArticleInfo[],
    };
  },
  actions: {
    async getArticleData(): Promise<ArticleData> {
      return await getArticles().then((res) => {
        return res.data;
      });
    },
  },
});
