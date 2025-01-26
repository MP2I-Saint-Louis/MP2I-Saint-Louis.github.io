import { Component, JSX } from "solid-js";
import { Show } from "solid-js"
import "./Promotion.css";

export interface PromotionArt {
    src: string[];
    alt: string;
    bgColor?: string;
}

export interface PromotionProps {
    name: string;
    year: string;
    description: JSX.Element;
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
                <Show when={props.images.length > 0}>
                <div class="gallery">
                    {props.images.map((image: PromotionArt) => {
                        const bgStyle = image.bgColor ? { "background-color": image.bgColor } : {};
                        if (image.src.length === 0) {
                            return;
                        } else if (image.src.length === 1) {
                            return <picture><img class="gallery-image" src={image.src[0]} alt={image.alt} style={bgStyle} /></picture>;
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
                                        alt={image.alt} style={bgStyle} />
                                </picture>

                            );
                        }
                    })}
                </div>
                </Show>
                <div class="promotion-description">{props.description}</div>
            </div>
        </section>
    );
}

export default Promotion;