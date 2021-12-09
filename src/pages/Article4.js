import Article from "../components/Article/Article";
import data from "../data/article4.json";
import formatDate from "../components/content/FormatDate";
import FormatContributors from "../components/content/FormatContributors";
import ArticleContent from "../components/content/ArticleContent";
import { KeyPointsElement } from "../components/content/KeyPointsElement";
const Article4 = () => {
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
      <KeyPointsElement>
        
        <ul>
          <li>
               <span>a</span>
          </li>
          <li>
               <span>b</span>
          </li>
        </ul>
      </KeyPointsElement>
    </>
  );
};

export default Article4;