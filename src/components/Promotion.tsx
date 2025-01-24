import { Component } from "solid-js";
import "./Promotion.css";

export interface PromotionProps {
    name: string;
    year: string;
    description: string;
    images: string[];
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
                        {props.images.map((image) => (
                            <img src={image} alt={props.name} />
                        ))}
                </div>
                <p>{props.description}</p>
            </div>
        </section>
    );
}

export default Promotion;