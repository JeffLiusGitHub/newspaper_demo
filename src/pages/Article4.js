import Article from "../components/Article/Article";
import data from "../data/article4.json";
import formatDate from "../components/content/FormatDate";
import FormatContributors from "../components/content/FormatContributors";
import ArticleContent from "../components/content/ArticleContent";
import Share from "../components/Share/Share";
import { MediaQueryContainer } from "../components/content/LayoutContainer";
const Article4 = () => {
  const { text } = data;
  const url = data.canonicalURL
  const synopsis =data._embedded.mediaEmbedded[0].synopsis
console.log(synopsis)
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
      ><Share url = {url}/>
        <MediaQueryContainer>
          <ArticleContent
            item={text.json}
            image={data._embedded.mediaEmbedded}
            synopsis={synopsis}
          />
        </MediaQueryContainer>
      </Article>{" "}
    </>
  );
};

export default Article4;
