
import { Product } from '../types';

export const products: Product[] = [
    {
        id: '1',
        name: 'TOXIC BOMBER V.1',
        price: 12500,
        category: 'outerwear',
        // Dark techwear vibe, face hidden by lighting/angle
        image: 'https://images.unsplash.com/photo-1617114919297-3c8ddbec014e?q=80&w=3087&auto=format&fit=crop',
        status: 'new'
    },
    {
        id: '2',
        name: 'ACID WASH HOODIE',
        price: 6800,
        category: 'tops',
        // Grunge aesthetic, hood up, anonymous
        image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=2574&auto=format&fit=crop',
        status: 'low_stock'
    },
    {
        id: '3',
        name: 'CARGO PANTS "PROTOCOL"',
        price: 8900,
        category: 'bottoms',
        // Focus on pants/boots, industrial setting
        image: 'https://images.unsplash.com/photo-1605218427360-36390f855323?q=80&w=2574&auto=format&fit=crop',
    },
    {
        id: '4',
        name: 'DISTRESSED BALACLAVA',
        price: 3200,
        category: 'accessories',
        // Face completely covered by knit balaclava
        image: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=2787&auto=format&fit=crop',
        status: 'new'
    },
    {
        id: '5',
        name: 'LEATHER TRENCH "MATRIX"',
        price: 24000,
        category: 'outerwear',
        // Matrix vibes, dark glasses, leather
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2564&auto=format&fit=crop',
        status: 'sold_out'
    },
    {
        id: '6',
        name: 'CYBER TEE 2077',
        price: 3500,
        category: 'tops',
        // Y2K flash photography style, obscured face
        image: 'https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&w=2800&auto=format&fit=crop',
        status: 'sold_out'
    },
    {
        id: '7',
        name: 'PARACHUTE PANTS',
        price: 7500,
        category: 'bottoms',
        // Baggy silhouette, movement
        image: 'https://images.unsplash.com/photo-1517438476312-10d79c077509?q=80&w=2340&auto=format&fit=crop',
        status: 'low_stock'
    },
    {
        id: '8',
        name: 'CHAIN LINK CHOKER',
        price: 2100,
        category: 'accessories',
        // Detail shot, metal chains
        image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=2576&auto=format&fit=crop',
        status: 'sold_out'
    }
];
