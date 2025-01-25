import { Component } from "solid-js";
import "./Promotion.css";

export interface PromotionArt {
    src: string[];
    alt: string;
}

export interface PromotionProps {
    name: string;
    year: string;
    description: string;
    images: PromotionArt[];
}

const getImageMIMEType = (url: string) => {
    const extension = url.split('.').pop()?.toLowerCase();
    switch (extension) {
        case 'webp':
            return 'image/webp';
        case 'png':
            return 'image/png';
        case 'jpg':
        case 'jpeg':
            return 'image/jpeg';
        case 'gif':
            return 'image/gif';
        case 'svg':
            return 'image/svg+xml';
        case 'avif':
            return 'image/avif';
        default:
            return 'image/jpeg';
    }
}

const Promotion: Component<PromotionProps> = (props) => {
    return (
        <section class="promotion">
            <div class="timeline">
                <div class="timeline-dot"></div>
                <div class="timeline-bar"></div>
            </div>
            <div class="promotion-content">
                <h2>{props.name}</h2>
                <h3>{props.year}</h3>
                <div class="gallery">
                    {props.images.map((image: PromotionArt) => {
                        if (image.src.length === 0) {
                            return;
                        } else if (image.src.length === 1) {
                            return <img class="gallery-image" src={image.src[0]} alt={image.alt} />;
                        } else {
                            return (
                                <picture>
                                    {image.src.map((_url) => {
                                        return (
                                            <source
                                                srcset={_url}
                                                type={getImageMIMEType(_url)} />
                                        );
                                    })}
                                    <img
                                        src={image.src[0]}
                                        alt={image.alt} />
                                </picture>

                            );
                        }
                    })}
                </div>
                <p>{props.description}</p>
            </div>
        </section>
    );
}

export default Promotion;