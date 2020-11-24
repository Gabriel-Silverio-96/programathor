import React, { useEffect } from 'react';

//Components
import { BtnPrimary } from '../UI/Button';

export default function SocialMediaPost(props) {
    const titleFile = props.titleMain.title
    useEffect(() => {
        const post = document.getElementById('post');
        const ctx = post.getContext('2d');

        //Main Background image 
        const backgroundImg = document.getElementById('backgroundImg');

        const PositionX = props.backgroundImg.PositionX;
        const PositionY = props.backgroundImg.PositionY;
        ctx.drawImage(backgroundImg, PositionX, PositionY);

        //Logo
        const logoPost = document.getElementById('logoPost');
        const LogoY = props.logoPost.LogoY;
        const LogoWidth = props.logoPost.width;
        const LogoHeight = props.logoPost.height;

        ctx.drawImage(logoPost, (props.width / 2) - 120, LogoY, LogoWidth, LogoHeight);

        //Title post
        const titleSize = props.titleMain.size;
        const titleFontFamily = props.titleMain.fontFamily;
        const titleFontWeight = props.titleMain.fontWeight;

        ctx.font = `${titleFontWeight} ${titleSize} ${titleFontFamily}`;
        const titleX = props.titleMain.titleX;
        const titleY = props.titleMain.titleY;

        //Color
        const titleColor = props.titleMain.color;
        ctx.fillStyle = titleColor;
        const titleText = props.titleMain.title
        ctx.fillText(titleText, titleX, titleY);

        //Title small
        const titleFontSmallFamily = props.titleSmall.titleFontSmallFamily;
        const titleSmallSize = props.titleSmall.size;

        ctx.font = `${titleSmallSize} ${titleFontSmallFamily === undefined
            ? titleFontFamily : titleFontSmallFamily}`;

        const titleSmall = props.titleSmall.title;
        const titleSmallX = props.titleSmall.titleSmallX;
        const titleSmallY = props.titleSmall.titleSmallY;

        //Color
        const titleSmallColor = props.titleSmall.color;
        ctx.fillStyle = titleSmallColor;
        ctx.fillText(titleSmall, titleSmallX, titleSmallY);

        //Content
        const contentText = props.content.text;
        const contentTextX = props.content.textX;
        const contentTextY = props.content.textY;

        ctx.font = `${titleSmallSize} ${titleFontSmallFamily === undefined
            ? titleFontFamily : titleFontSmallFamily}`;

        ctx.fillText(contentText, contentTextX, contentTextY);
        let listTechnologyEixoYSum = contentTextY + 20;

        const topics = props.content.topics;
        topics.map(function (value) {
            const topicsColor = props.content.color;
            ctx.fillStyle = topicsColor;
            return ctx.fillText(value.technology, contentTextX, listTechnologyEixoYSum += 60);
        })

    }, [props]);

    function BtnDownloadPost() {
        const post = document.getElementById('post');
        let href = document.createElement('a');
        href.download = `Programathor vaga - ${titleFile}.png`;
        href.href = post.toDataURL();
        return href.click();
    }


    return (
        <>
            <img src={props.backgroundImg.URLImg} id="backgroundImg" style={{ display: "none" }} alt="Background post" />
            <img src={props.logoPost.URLImg} id="logoPost" style={{ display: "none" }} alt="Logo post" />
            <canvas className="img-fluid"
                id="post"
                width={Number(props.width) - 2}
                height={Number(props.height) - 2}
                style={{ border: "2px solid #2013DB", borderRadius: "25px" }}>
            </canvas>

            <BtnPrimary name="Download" click={BtnDownloadPost} />
        </>
    )
}