import Article from "../components/Article/Article";
import data from "../data/article3.json";
import formatDate from "../components/content/FormatDate";
import FormatContributors from "../components/content/FormatContributors";
import ArticleContent from "../components/content/ArticleContent";
import Share from "../components/Share/Share";
const Article3 = () => {
  const { text } = data;
  const url = data.canonicalURL
  console.log(formatDate(data.dates.published))
  const synopsis =data._embedded.mediaEmbedded[0].synopsis
  console.log(synopsis)
  return (
    <>
      <Article
        title={data.title}
        contributors={FormatContributors(data)}
        dates={{
          posted: formatDate(data.dates.published),
          updated: formatDate(data.dates.updated),
        }}
      ><Share url = {url}/>
        <ArticleContent item={text.json} image={data._embedded.mediaEmbedded} synopsis={synopsis}/>
      </Article>{" "}
    </>
  );
};

export default Article3;
