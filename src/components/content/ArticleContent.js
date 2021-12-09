import { omit, replace } from "lodash";
import { DivElement } from "./DivElement";
import { H1Element } from "./H1Element";
import { PElement } from "./PElement";
import { PullquoteElement } from "./PullquoteElement";
import FormatImage from "./FormatImage";
const tagNameToComponent = {
  pullquote: PullquoteElement,
  h1: H1Element,
  div: DivElement,
  p: PElement,
};

const ArticleContent = ({ item, image }) => {

  const { tagname, parameters, children, content } = item;
  const Tag = tagNameToComponent[tagname] || tagname;

  if (item?.parameters?.ref) {
    console.log(image);
    let url = FormatImage(image, parameters.ref);
    return (
      <Tag src={url}>
        {/* {children.map((item, key) => (
              <ArticleContent key={key} item={item} />
            ))} */}
      </Tag>
    );
  }
    else if (item?.type === "element"
    // && !item?.parameters?.ref
    ) {
    return (
      <Tag {...omit(parameters, "ref")}>
        {/* <Tag {...replace(parameters,'ref',FormatImage(image, parameters.ref))}> */}

        {children.map((item, key) => (
          <ArticleContent key={key} item={item} image={image}/>
        ))}
      </Tag>
    );
  }
  //   else if(item?.parameters?.ref){
  //     let url = FormatImage(image, parameters.ref);
  //     return (
  //       <Tag src={url}>
  //         {children.map((item, key) => (
  //           <ArticleContent key={key} item={item} />
  //         ))}
  //       </Tag>
  //     );
  //   }
  //   if (item?.content === "[image]") {
  //     let url = FormatImage(image, parameters.ref);
  //     return (
  //       <Tag src={url}>
  //         {children.map((item, key) => (
  //           <ArticleContent key={key} item={item} />
  //         ))}
  //       </Tag>
  //     );
  //   }

  return content;
};
export default ArticleContent;
