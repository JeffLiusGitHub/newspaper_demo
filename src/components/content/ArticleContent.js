import { omit } from "lodash";
import { DivElement } from "./elementComponent/DivElement";
import { H1Element } from "./elementComponent/H1Element";
import { PElement } from "./elementComponent/PElement";
import { PullquoteElement } from "./elementComponent/PullquoteElement";
import FormatImage from "./FormatImage";
import { ImageElement } from "./elementComponent/ImageElement";
import { InsElement } from "./elementComponent/InsElement";
import { KeyPointsElement } from "./elementComponent/KeyPointsElement";

const tagNameToComponent = {
  pullquote: PullquoteElement,
  h1: H1Element,
  div: DivElement,
  p: PElement,
  a: ImageElement,
};

const ArticleContent = ({ item, image, synopsis }) => {
  const { tagname, parameters, children, content } = item;
  const Tag = tagNameToComponent[tagname] || tagname;
  if (item?.parameters?.ref) {
    if (
      item?.children[0]?.content?.toString().includes("key point") &&
      synopsis !== null
    ) {
      return <KeyPointsElement synopsis={synopsis}></KeyPointsElement>;
    }
    const { alt, url, caption } = FormatImage(image, parameters.ref);
    if (url.includes("instagram")) {
      return <InsElement mediaType ={"Instgram"} url={url}></InsElement>;
    } 
    else if(url.includes("twitter")){
      return <InsElement mediaType ={"Twitter"} url={url}></InsElement>;
    }
    else if (url !== " ") {
      let align = item?.parameters?.align || "";
      return (
          <Tag url={url} alt={alt} align={align} caption={caption}></Tag>
      );
    }
  } else if (item?.type === "element") {
    return (
      <Tag {...omit(parameters, "ref")}>
        {children.map((item, key) => (
          <ArticleContent
            key={key}
            item={item}
            image={image}
            synopsis={synopsis}
          />
        ))}
      </Tag>
    );
  }

  return content;
};
export default ArticleContent;
