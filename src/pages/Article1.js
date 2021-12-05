import React, { useState, useEffect } from "react";
import Article from "../components/Article/Article";
import data from "../data/article1.json";
import { get } from "lodash";
import { format } from "date-fns";
import { parseISO } from "date-fns";
import { Render } from "../components/content/Render";

const Article1 = () => {
  const [contributor, setContributor] = useState([]);
  const [posted, setPosted] = useState("");
  const [updated, setUpdated] = useState("");
  const [childrens, setChildrens] = useState([]);

  // const [contributor, setContributor] = useState<string[]>([]);
  // const [posted,setPosted] = useState <string>('');
  // const [updated,setUpdated] = useState <string>('');
  // let contributorArray: string[] = [];
  let childrenContent;
  useEffect(() => {
    //set contributor
    let contributorArray = [];
    for (let i = 0; i < data._embedded.contributors.length; i++) {
      contributorArray.push(
        get(data, `_embedded.contributors[${i}].names.full`, "")
      );
    }
    setContributor(contributorArray);
    //set posted date
    let fetchedPostedDate = get(data, "dates.displayPublished", "");
    fetchedPostedDate = parseISO(fetchedPostedDate);

    console.log(fetchedPostedDate);
    console.log(get(data, "dates.displayUpdated", ""));
    //2021-11-21T23:34:23+00:00
    const postedDate = format(fetchedPostedDate, "E d MMM yyyy");
    const postedTime = format(fetchedPostedDate, "p").toLocaleLowerCase();
    const displayPosted = postedDate + " at " + postedTime;
    setPosted(displayPosted);

    //set updated date
    let fetchedUpdatedDate = get(data, "dates.displayUpdated", "");
    fetchedUpdatedDate = parseISO(fetchedUpdatedDate);

    console.log(fetchedUpdatedDate);
    console.log(get(data, "dates.displayUpdated", ""));
    //2021-11-21T23:34:23+00:00
    const updatedDate = format(fetchedUpdatedDate, "E d MMM yyyy");
    const updatedTime = format(fetchedUpdatedDate, "p").toLocaleLowerCase();
    const displayUpdated = updatedDate + " at " + updatedTime;
    setUpdated(displayUpdated);

    const fetchedChildren = get(data, "text.json.children", "");

    setChildrens(fetchedChildren);

    //Mon 22 Nov 2021 at 7:13amMonday 22 Nov 2021 at 7:13am

    
  }, [setContributor, setPosted, setUpdated, setChildrens]);
  console.log(childrens);
  
childrenContent = childrens.map((children) => (
      <Render children={children}></Render>
    ));
    console.log(childrenContent)
  return (
    <>
      <Article
        title={data.title}
        // contributors ={["abc",'def']}
        contributors={contributor}
        // dates={posted:123,updated:234}
        dates={{ posted: posted, updated: updated }}
        // posted = {data._embedded.mediaEmbedded}
      >
        {childrenContent}
      </Article>{" "}
    </>
  );
};

export default Article1;
