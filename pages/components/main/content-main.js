import React, { useEffect, useState } from 'react';
import getArticlesFromApi from '../../services/articles';
import { useArticlesContext } from '../../context';
import TopTags from './top-tags';
import Articles from './articles';

export default function ContentMain() {
    const { state, dispatch } = useArticlesContext();
    function alturaTransparency() {
        setTimeout(() => {
            let article = document.getElementsByClassName('mod-caja-nota')[0];
            let alturaArticle = article.offsetHeight;
            document.getElementsByClassName('transparency')[0].style.height = alturaArticle + "px"
        },10)
    }
    function showMore() {
        dispatch({
            type: 'setPage',
            value: state.page + 1
        })
    }
    async function getArticles() {
        const data = await getArticlesFromApi();
        dispatch({
            type: 'setArticles',
            value: data.articles
        });
        alturaTransparency();
    }

    useEffect(() => {
        getArticles();
        window.addEventListener('onload', () => {
            alturaTransparency();
        });
        window.addEventListener('resize', () => {
            alturaTransparency();
        });
    }, []);

    return (
        <>
            <div className="sidebar__main">
                <div className="row">
                    <div className="com-titleWithfollow hlp-marginBottom-15">
                        <h1 className="com-title-section-xl hlp-marginBottom-40">Acumulado Grilla</h1>
                    </div>
                </div>
                <div className="row">
                    <div id="" className="cont_tags com-secondary-tag hlp-marginBottom-20">
                        <TopTags />
                    </div>
                </div>
                <section className="row-gap-tablet-2 row-gap-deskxl-3 hlp-degrade">
                    <Articles />
                    <div className="transparency"></div>
                </section>
                <section className="row">
                    <div className="col-12 hlp-text-center hlp-margintop-40">
                        <button className="--btn --secondary" onClick={showMore}>MÁS NOTAS DE ACUMULADO GRILLA</button>
                    </div>
                </section>
            </div>
        </>
    );
}