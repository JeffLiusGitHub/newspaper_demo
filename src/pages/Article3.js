import Article from "../components/Article/Article";
import data from "../data/article3.json";
import formatDate from "../components/content/FormatDate";
import FormatContributors from "../components/content/FormatContributors";
import ArticleContent from "../components/content/ArticleContent";
const Article3 = () => {
  const { text } = data;
  console.log(formatDate(data.dates.published))
  
  return (
    <>
      <Article
        title={data.title}
        contributors={FormatContributors(data)}
        dates={{
          posted: formatDate(data.dates.published),
          updated: formatDate(data.dates.updated),
        }}
      >
        <ArticleContent item={text.json} />
      </Article>{" "}
    </>
  );
};

export default Article3;
