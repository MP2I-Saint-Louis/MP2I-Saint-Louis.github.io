import { getCollection, render, getEntry as getCollectionEntry } from "astro:content";
import type { PromotionProps } from "../components/Promotion.astro";

export interface PromotionArt {
    src: string[];
    alt: string;
    bgColor?: string;
}

export const getImageMIMEType = (url: string) => {
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

export function createThreeVariantArt(src: string, alt: string): PromotionArt {
    const filename_without_extension = src.split('.').slice(0, -1).join('.');

    return {
        src: [filename_without_extension + ".webp", filename_without_extension + ".avif", filename_without_extension + ".jpg"],
        alt: alt
    };
}

export async function getAllPromotions() : Promise<PromotionProps[]> {
    const allPromotions = await getCollection('promotions');
    const parsePromotion = async function (promotion: any) {
        const entry = await getCollectionEntry('promotions', promotion.id);
        if (!entry) {
            throw new Error(`Entry not found for id: ${promotion.id}`);
        }
        const { Content } = await render(entry);
        return {
            name: promotion.data.name,
            year: promotion.data.year_start + " - " + promotion.data.year_end,
            description: Content,
            images: promotion.data.arts.map((art) => {
                if (art.variants) {
                    return createThreeVariantArt(art.url, art.name);
                } else {
                    return {
                        src: [art.url],
                        alt: art.name
                    }
                }
            })
        }
    }
    let promotions: PromotionProps[] = [];
    for (const promotion of allPromotions) {
        const parsedPromotion = await parsePromotion(promotion);
        
        promotions.push(parsedPromotion);
    }
    promotions.sort((a, b) => {
        return a.year.localeCompare(b.year);
    });
    return promotions;
}
function getEntry(arg0: string, id: string) {
    throw new Error("Function not implemented.");
}

