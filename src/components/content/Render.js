import  {  createElement } from "react";

import { Div } from "./Div";
import { H1 } from "./H1";
import { Pullquote } from "./Pullquote";
import { P } from "./P";
import { A } from "./A";
// interface Props {
//   type: string;
//   tagname: string;
//   content?: string;
//   children?: Props[];
// }

const childrens =   [
  {
    "type": "element",
    "tagname": "p",
    "children": [
      {
        "type": "text",
        "content": "Women make up only 15 per cent of engineers with lack of support for professional development and gender discrimination still seen as barriers for women in engineering."
      }
    ]
  },
  {
    "type": "element",
    "tagname": "p",
    "children": [
      {
        "type": "text",
        "content": "Like many teenage girls, Chanelle Olive was unsure what path to take as she was graduating from high school."
      }
    ]
  },
  {
    "type": "element",
    "tagname": "p",
    "children": [
      {
        "type": "text",
        "content": "But the opportunity to meet with senior electrical engineer Kathy Noonan inspired her to begin a career in an industry dominated by men."
      }
    ]
  },
  {
    "type": "element",
    "tagname": "p",
    "children": [
      {
        "type": "text",
        "content": "Now an engineering manager at Energy Queensland, Mrs Olive is just one of many women in industries with more men who have put down the tools and guided the next generation of professionals."
      }
    ]
  },
  {
    "type": "element",
    "tagname": "pullquote",
    "children": [
      {
        "type": "element",
        "tagname": "p",
        "children": [
          {
            "type": "text",
            "content": "\"She reassured me that you can still be feminine and be an engineer; you don't have to lose yourself to fit into a stereotype of a career,\" Mrs Olive said of meeting Ms Noonan."
          }
        ]
      }
    ]
  },
  {
    "type": "element",
    "tagname": "p",
    "children": [
      {
        "type": "text",
        "content": "\"You can still be who you are and do that job."
      }
    ]
  },
  {
    "type": "element",
    "tagname": "p",
    "children": [
      {
        "type": "text",
        "content": "\"Any doubts I had prior to talking to her were gone by the time I finished.\""
      }
    ]
  },
  {
    "type": "element",
    "tagname": "p",
    "children": [
      {
        "type": "text",
        "content": "Thirteen years after entering the industry, Mrs Olive jumped at the opportunity to be an advisor with Uniq You, a new service that helps high school girls connect with women in male-dominated industries."
      }
    ]
  },
  {
    "type": "element",
    "tagname": "a",
    "parameters": {
      "align": "embed",
      "ref": "100635566"
    },
    "children": [
      {
        "type": "text",
        "content": "[image]"
      }
    ]
  },
  {
    "type": "element",
    "tagname": "p",
    "children": [
      {
        "type": "text",
        "content": "It connects girls with women in sectors such as mining, construction, aviation and defence."
      }
    ]
  },
  {
    "type": "element",
    "tagname": "h1",
    "children": [
      {
        "type": "text",
        "content": "Unable to resist the urge to follow family"
      }
    ]
  },
  {
    "type": "element",
    "tagname": "p",
    "children": [
      {
        "type": "text",
        "content": "Mrs Olive said engineering proved to be her calling despite attempts to resist following in her family member's footsteps."
      }
    ]
  },
  {
    "type": "element",
    "tagname": "p",
    "children": [
      {
        "type": "text",
        "content": "The Rockhampton woman's father, Graham, and her brothers, Blake and Stuart, and her sister-in-law, Rebecca, are all engineers."
      }
    ]
  },
  {
    "type": "element",
    "tagname": "p",
    "children": [
      {
        "type": "text",
        "content": "As a schoolgirl, Mrs Olive said she was determined to forge her own career in a different industry despite being surrounded by members of the profession."
      }
    ]
  },
  {
    "type": "element",
    "tagname": "a",
    "parameters": {
      "align": "embed",
      "ref": "100635500"
    },
    "children": [
      {
        "type": "text",
        "content": "[image]"
      }
    ]
  },
  {
    "type": "element",
    "tagname": "p",
    "children": [
      {
        "type": "text",
        "content": "\"In grade 12, I said, 'I'm not going to be an engineer, I'm not going to follow along with everyone else in the family, I'm going to do my own thing',\" she said."
      }
    ]
  },
  {
    "type": "element",
    "tagname": "p",
    "children": [
      {
        "type": "text",
        "content": "\"The more I looked into it, the more I realised what really truly was involved and how it really fitted with my strengths, my interests, and my abilities.\""
      }
    ]
  },
  {
    "type": "element",
    "tagname": "h1",
    "children": [
      {
        "type": "text",
        "content": "More work needed"
      }
    ]
  },
  {
    "type": "element",
    "tagname": "p",
    "children": [
      {
        "type": "text",
        "content": "In the past five years, female engineering enrolment rates in university courses have increased by 5 per cent, year on year."
      }
    ]
  },
  {
    "type": "element",
    "tagname": "p",
    "children": [
      {
        "type": "text",
        "content": "However, the Office of the Chief Scientist puts women's participation rate in engineering professions at 15 per cent, meaning participation has only increased by 2 per cent during the past decade."
      }
    ]
  },
  {
    "type": "element",
    "tagname": "p",
    "children": [
      {
        "type": "text",
        "content": "Professionals Australia chief executive Jill McCabe said despite investment encouraging more young women to study science, technology, engineering and mining (STEM) subjects at university, female mentors in senior roles were hard to find."
      }
    ]
  },
  {
    "type": "element",
    "tagname": "a",
    "parameters": {
      "align": "right",
      "ref": "100635626"
    },
    "children": [
      {
        "type": "text",
        "content": "[image]"
      }
    ]
  },
  {
    "type": "element",
    "tagname": "p",
    "children": [
      {
        "type": "text",
        "content": "\"Our survey shows that the engineering sector loses the skills and expertise of a significant number of female engineers between the ages of 30 and 39, which means we also lose valuable role models for young women interested in engineering careers,\" she said."
      }
    ]
  },
  {
    "type": "element",
    "tagname": "pullquote",
    "children": [
      {
        "type": "element",
        "tagname": "p",
        "children": [
          {
            "type": "text",
            "content": "\"Lack of support for professional development and career advancement, gender discrimination and sexual harassment remain significant barriers for women working in engineering.\""
          }
        ]
      }
    ]
  },
  {
    "type": "element",
    "tagname": "p",
    "children": [
      {
        "type": "text",
        "content": "Only 13 per cent of managers in the STEM workforce are women, and about 25 per cent of women reported they had experienced sexual harassment in the workplace."
      }
    ]
  },
  {
    "type": "element",
    "tagname": "p",
    "children": [
      {
        "type": "text",
        "content": "\"This confirms that we need urgent workplace and cultural changes to ensure the retention of women in STEM fields and that increasing the number of female STEM graduates alone isn't enough,\" Ms McCabe said."
      }
    ]
  },
  {
    "type": "element",
    "tagname": "h1",
    "children": [
      {
        "type": "text",
        "content": "Service satisfies students' curiosities"
      }
    ]
  },
  {
    "type": "element",
    "tagname": "p",
    "children": [
      {
        "type": "text",
        "content": "Tanya Meessmann, chief executive of Uniq You, grew up in Yeppoon and said introducing schoolgirls to women in the professions provided opportunities for them to satisfy the curiosities they have."
      }
    ]
  },
  {
    "type": "element",
    "tagname": "p",
    "children": [
      {
        "type": "text",
        "content": "\"They can have their own questions answered, which is going to be breaking down all those barriers that exist at an individual level for the girls, by hearing from a woman who has done the job,\" Ms Meessmann said."
      }
    ]
  }
]

const TagnameToComponentMap = {
  div: Div,
  a: Div,
  p: P,
  h1: H1,
  pullquote: Pullquote,
};

export const Render = ({ children }) => {
  if (typeof TagnameToComponentMap[children.tagname] !== "undefined") {
    // if (children.tagname == "a") {
    //   return createElement("a", {
    //     alt: children.caption,
    //     src: children.mediaEmbedded.media.image.primary.complete.url,
    //   });
    // } else {
    // }
    return createElement(
      TagnameToComponentMap[children.tagname],
      {
        // type: children.type
      },
      children.children &&
        ( children.children.type === "text"
          ? children.children.content
          : children.map((c) => Render(c)))
    );
  }
};
export default Render;
