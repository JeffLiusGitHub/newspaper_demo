import Article from "../components/Article/Article";
import data from "../data/article1.json";
import formatDate from "../components/content/FormatDate";
import FormatContributors from "../components/content/FormatContributors";
import ArticleContent from "../components/content/ArticleContent";
import FormatImage from "../components/content/FormatImage";
const Article1 = () => {
  const { text } = data;
  const image = data._embedded.mediaEmbedded;
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
      >
        <ArticleContent 
        // data = {data}
        item={text.json} image = {image}
         />
      </Article>{" "}
    </>
  );
};


// {
//   "type": "element",
//   "tagname": "a",
//   "parameters": {
//     "align": "embed",
//     "ref": "100635566"
//   },
//   "children": [
//     {
//       "type": "text",
//       "content": "[image]"
//     }
//   ]
// }
// "docType": "Image",
// "id": "100635500",
// "media": {
//   "image": {
//     "primary": {
//       "complete": [
//         {
//           "cropHeight": 1773,
//           "cropWidth": 1773,
//           "height": 862,
//           "ratio": "1x1",
//           "url": "https://live-production.wcms.abc-cdn.net.au/c043fa8a36333e48858d922f164e0ed6?impolicy=wcms_crop_resize&cropH=1773&cropW=1773&xPos=813&yPos=211&width=862&height=862",
//           "width": 862,
//           "x": 813,
//           "y": 211
//         }
//       ]
//     }
//   }
// },


export default Article1;
