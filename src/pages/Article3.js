import Article from "../components/Article/Article";
import data from "../data/article3.json";
import formatDate from "../components/content/FormatDate";
import FormatContributors from "../components/content/FormatContributors";
import ArticleContent from "../components/content/ArticleContent";
import Share from "../components/Share/Share";
import { MediaQueryContainer } from "../components/content/MediaQueryContainer";

const Article3 = () => {
  const { text } = data;
  const url = data.canonicalURL;
  const synopsis = data._embedded.mediaEmbedded[0].synopsis;

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
        <Share url={url} />
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

export default Article3;
