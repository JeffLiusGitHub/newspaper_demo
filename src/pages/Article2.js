import Article from "../components/Article/Article";
import data from "../data/article2.json";
import formatDate from "../components/content/FormatDate";
import FormatContributors from "../components/content/FormatContributors";
import ArticleContent from "../components/content/ArticleContent";
import InstagramEmbed from "react-instagram-embed";

const Article2 = () => {
  const { text } = data;
  console.log(formatDate(data.dates.published));

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
        {/* <InstagramEmbedPost url='https://www.instagram.com/p/CPDPd6jDJQK/' /> */}
        {/* '1590365384643070|fc34df21f9e501c901b04d61cd8baa13'  */}
        {/* <InstagramEmbed
  url='https://www.instagram.com/p/CPDPd6jDJQK/'
  clientAccessToken= '1590365384643070|fc34df21f9e501c901b04d61cd8baa13' 
  maxWidth={320}
  hideCaption={false}
  containerTagName='div'
  protocol=''
  injectScript
  onLoading={() => {}}
  onSuccess={() => {}}
  onAfterRender={() => {}}
  onFailure={() => {}}
/> */}
        <InstagramEmbed
  url='https://www.instagram.com/p/CPDPd6jDJQK/'
  clientAccessToken='1590365384643070|fc34df21f9e501c901b04d61cd8baa13' 
  maxWidth={320}
  hideCaption={false}
  containerTagName='div'
  protocol=''
  injectScript
  onLoading={() => {}}
  onSuccess={() => {}}
  onAfterRender={() => {}}
  onFailure={() => {}}
/>

      </Article>{" "}
    </>
  );
};

export default Article2;
