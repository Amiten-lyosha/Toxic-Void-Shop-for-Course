export interface NavLink {
    label: string;
    href: string;
}

export interface CategoryItem {
    id: string;
    title: string;
    subtitle: string;
    image: string;
    colSpan: string; // Tailwind class
}

export type CategoryType = 'all' | 'outerwear' | 'tops' | 'bottoms' | 'accessories';

export interface Product {
    id: string;
    name: string;
    price: number;
    category: CategoryType;
    image: string;
    status?: 'new' | 'sold_out' | 'low_stock';
    description?: string; // Added description
}

export interface DropProduct extends Product {
    originalPrice: number;
    endsAt: string; // ISO Date string
    totalStock: number;
    remainingStock: number;
    dropDate?: string;
}

export interface CartItem extends Product {
    selectedSize: string;
    addedAt: number;
}