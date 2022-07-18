import React, { useEffect } from "react";
import { useArticlesContext } from "../../context";
export default function TopTags() { 
    const {state} = useArticlesContext();
    const articles = state.articles;
    let arrayTags = [];
    articles.forEach((article) => {
        arrayTags = arrayTags.concat(article.taxonomy.tags);
    });
    arrayTags.sort((a, b) => {
        if (a.slug < b.slug) {
            return -1;
        }
        return 1;
    });
    let arrayTagsOrdered = [];
    let count = 1;
    arrayTags.forEach((data, index) => {
        if (arrayTags[index + 1] && data.slug === arrayTags[index + 1].slug && data.text === arrayTags[index + 1].text) {
            count++;
        } else {
            arrayTagsOrdered.push({
                slug: data.slug,
                text: data.text,
                count
            });
            count = 1;
        }
    });
    arrayTagsOrdered.sort((a, b) => {
        if (a.count > b.count) {
            return -1;
        }
        return 1;
    });
    const topTags = arrayTagsOrdered.slice(0,10);

    const showTags = topTags.map((tag) => {
        return (
            <a key={tag.slug} href={`tema/${tag.slug}`}
                className="" >{tag.text}</a>);
    });
    return (showTags);
}