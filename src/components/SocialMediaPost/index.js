import React, { useEffect } from 'react';

//Components
import { BtnPrimary, BtnOutlinePrimary } from '../UI/Button';

//Icons
import { FaFacebook, FaLinkedin } from 'react-icons/fa';

//Style
import './style.css';

export default function SocialMediaPost(props) {   
    const titleFile = props.titleMain.title;

    /*
        Construção do post para rede sociais com canvas
        Utilizado o Hook useEffect para solucionar o problema
        de getContext null do canvas    
    */
    useEffect(() => {
        const post = document.getElementById('post');
        const ctx = post.getContext('2d');

        //Main background color
        ctx.rect(0, 0, props.width, props.height);
        ctx.fillStyle = props.backgroundColor.color;
        ctx.fill();

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

    //Função para download do post
    function BtnDownloadPost() {
        const post = document.getElementById('post');
        let href = document.createElement('a');
        href.download = `Programathor vaga - ${titleFile}.jpg`;
        href.href = post.toDataURL();
        return href.click();
    }

    //Link da vaga
    const shareJobURL = window.location.href;

    return (
        <div className="row align-items-center">
            <div className="col-lg-6 m-auto">              
                <img src={props.logoPost.URLImg} id="logoPost" style={{ display: "none" }} alt="Logo post" />
                <canvas className="img-fluid"
                    id="post"
                    width={Number(props.width) - 2}
                    height={Number(props.height) - 2}
                    style={{ border: "2px solid #2013DB", borderRadius: "25px" }}>
                </canvas>
            </div>
            <div className="col-lg-12 btn-post-share">
                <BtnPrimary name="Download post" click={BtnDownloadPost} />

                <a target="_blank" rel="noreferrer"
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareJobURL}&title=&summary=&source=`}>
                    <BtnOutlinePrimary name={<FaLinkedin size={20} color="#cdcdcd" btnicon="true" />}>
                        <span>Linkedin</span>
                    </BtnOutlinePrimary>
                </a>

                <a target="_blank" rel="noreferrer"
                    href={`https://www.facebook.com/sharer/sharer.php?u=${shareJobURL}`}>
                    <BtnOutlinePrimary name={<FaFacebook size={20} color="#cdcdcd" btnicon="true" />}>
                        <span>Facebook</span>
                    </BtnOutlinePrimary>
                </a>
            </div>
        </div>
    )
}