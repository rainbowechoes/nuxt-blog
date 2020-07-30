import Vue from "vue";
const protocol = "http";
const host = "localhost";
const port = "8081";
const prefix = "v1";

let articleServiceUri =
  `${protocol}://${host}:${port}/${prefix}/article-service/article`;

let articleServiceApi = {
  queryArticleByPage: `${articleServiceUri}`,
  uploadArticleFile: `${articleServiceUri}/upload`,
  replyArticle: `${articleServiceUri}/reply`,
  likeArticle: `${articleServiceUri}/like`,
  unlikeArticle: `${articleServiceUri}/unlike`,
};

export function queryArticleByPage() {
    return articleServiceApi.queryArticleByPage;
}
