import Article from "../components/Article/Article";
import data from "../data/article2.json";
import formatDate from "../components/content/FormatDate";
import FormatContributors from "../components/content/FormatContributors";
import ArticleContent from "../components/content/ArticleContent";
import InstagramEmbed from "react-instagram-embed";
import Share from "../components/Share/Share";
const Article2 = () => {
  const { text } = data;
  const url = data.canonicalURL
  console.log(formatDate(data.dates.published));

console.log(data)
  return (
    <>
      <Article
        title={data.title}
        contributors={FormatContributors(data)}
        dates={{
          posted: formatDate(data.dates.published),
          updated: formatDate(data.dates.updated),
        }}
      > <Share url = {url}/>
        <ArticleContent item={text.json} image={data._embedded.mediaEmbedded} 

        ></ArticleContent>
    

      </Article>{" "}
    </>
  );
};

export default Article2;
