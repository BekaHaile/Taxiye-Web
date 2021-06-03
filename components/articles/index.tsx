import React from 'react';
import FeaturedContent from './featured';
import NormalArticleContent from './normal';



const ArticlesContent = ({featured, unfeatured}) => {
    return(
        <>
        <FeaturedContent featured={featured}></FeaturedContent>
        <NormalArticleContent articles={unfeatured}></NormalArticleContent>

        </>
    );
}

export default ArticlesContent;