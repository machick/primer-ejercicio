import React, { useEffect, useState } from 'react';
import getArticles from '../../services/articles';
import Banners from './banners';
import Content from './content';

export default function Main() {
    
    return (
        <main>
            <Banners />
            <Content/>
        </main>
    );
}