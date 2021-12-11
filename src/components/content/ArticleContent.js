import { omit, replace } from "lodash";
import { DivElement } from "./DivElement";
import { H1Element } from "./H1Element";
import { PElement } from "./PElement";
import { PullquoteElement } from "./PullquoteElement";
import FormatImage from "./FormatImage";
import { ImageElement } from "./ImageElement";
import { FigureCaption } from "./FigureCaption";
import { ButtonElement } from "./ButtonElement";
import { KeyPointsElement } from "./KeyPointsElement";
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

  // console.log(item.content);
  // console.log(synopsis)
  if (item?.parameters?.ref) {
    // console.log(item);
  if (item?.children[0]?.content?.toString().includes("key point")&&synopsis!==null) {
    // if (item?.children[0]?.content?.toString()==="key point"&&synopsis!==null) {
    console.log('000',{synopsis})
    return <KeyPointsElement synopsis={synopsis}></KeyPointsElement>;
  }

    // console.log({ image, ref: item.parameters.ref });
    const { alt, url, caption } = FormatImage(image, parameters.ref);
    // console.log(alt);
    // console.log(url);
    // console.log(caption);
  
    if (url.includes("instagram")) {
      return <ButtonElement url={url}></ButtonElement>;
    } else
     if (url !== " ") {
       let align = item?.parameters?.align||''
      return (
        <>
          <Tag url={url} alt={alt} align={align} caption={caption}></Tag>
          {/* <FigureCaption caption={caption}></FigureCaption> */}
        </>
      );
    }
  } else 
  if (item?.type === "element") {
    return (
      <Tag {...omit(parameters, "ref")}>
        {children.map((item, key) => (
          <ArticleContent key={key} item={item} image={image} synopsis={synopsis}/>
        ))}
      </Tag>
    );
  }

  return content;
};
export default ArticleContent;
