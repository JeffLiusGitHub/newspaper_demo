import React, {createElement} from "react";
import { format, utcToZonedTime } from "date-fns-tz";
import { omit } from 'lodash'

import Article from "../components/Article/Article";
import data from "../data/article1.json";

const formatDate = (date) => {
    if (!date) {
        return;
    }
    const zonedDate = utcToZonedTime(date, 'Australia/Melbourne');
    return `${format(zonedDate, 'E d MMM yyyy')} at ${format(zonedDate, 'p')}`;
}


const tagNameToComponent = {
    pullquote: 'span'
}

const ArticleContent = ({ item }) => {
    const {tagname, parameters, children, content} = item;
    const Tag = tagNameToComponent[tagname] || tagname;


    if (item?.type === 'element') {
        return (
            <Tag {...omit(parameters, 'ref')}>
                {children.map((item, key) => (<ArticleContent key={key} item={item}/>))}
            </Tag>
        )
    }

    return content;
}

const Article1 = () => {
    const { contributor, dates, text } = data;

    return (
        <Article
            title={data.title}
            contributors={contributor}
            dates={{posted: formatDate(dates.published), updated: formatDate(dates.updated)}}
        >
            <ArticleContent item={text.json}/>
        </Article>
    );
};

export default Article1;
