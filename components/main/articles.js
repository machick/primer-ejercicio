import React, { useEffect } from "react";
import moment from 'moment';
import 'moment/locale/es';
import { useArticlesContext } from "../../context/context";

export default function Articles() {
    const {state} = useArticlesContext();
    const articles = state.articles;
    const page = state.page;

    let articlesToShow = [];
    const articulosFiltrados = articles.filter((article) => article.subtype === '7');
    const listaArticulos = articulosFiltrados.slice(0, 9 * page);

    articlesToShow = listaArticulos.map((article, index) => {
        const showBannerSmallMobile = ((Number(index) + 1) % 3 === 0);
        let addClassArticle = '';
        if (index === 0) {
            addClassArticle = 'lugares';
        }
        if (index === 1) {
            addClassArticle = 'ohlala';
        }
        if (index === 2) {
            addClassArticle = 'living';
        }
        return (
            <>
                <article className={`mod-caja-nota ${addClassArticle} w-100-mobile`}>
                    <section id="" className="cont-figure">
                        <a href="" className="figure">
                            <picture id="" className="content-pic picture">
                                <img src={article.promo_items.basic.url} alt="" className="content-img" />
                            </picture>
                        </a>
                    </section>
                    <div className="mod-caja-nota__descrip">
                        <h2 className="com-title-acu"><a href="">{article.headlines.basic}</a></h2>
                        <h4 className="com-date">{moment(article.display_date).format('LL')}</h4>
                    </div>
                </article>
                 
                
                {(showBannerSmallMobile && (index !== listaArticulos.length-1)) ? <div className="banner --small --mobile"></div> : <></>}

            </>
        );
    });
    return (articlesToShow);
}