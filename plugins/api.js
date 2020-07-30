const host = "https://1b9b331a-d349-457e-a1c0-aed9a68951f2.mock.pstmn.io";
const prefix = "v1";

let articleServiceUri =
  `${host}/${prefix}/article-service/article`;

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
