
import { DropProduct } from '../types';

// Helper to set time relative to now for demo purposes
const now = new Date();
const twoHoursFromNow = new Date(now.getTime() + 2 * 60 * 60 * 1000 + 35 * 60 * 1000).toISOString(); // + 2h 35m

export const activeDrops: DropProduct[] = [
    {
        id: 'drop-1',
        name: 'CYBER_MASK_PROTO_V2',
        price: 4500,
        originalPrice: 8000,
        category: 'accessories',
        // Futuristic mask/lighting, face hidden
        image: 'https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=2832&auto=format&fit=crop',
        status: 'low_stock',
        endsAt: twoHoursFromNow,
        totalStock: 100,
        remainingStock: 12
    },
    {
        id: 'drop-2',
        name: 'CHROME_HEART_BOOTS',
        price: 18900,
        originalPrice: 25000,
        category: 'outerwear', 
        // Focus on metallic/chrome details on boots
        image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=2564&auto=format&fit=crop',
        status: 'new',
        endsAt: twoHoursFromNow,
        totalStock: 50,
        remainingStock: 34
    }
];

// Use this to simulate empty state if needed in the component logic
export const emptyDrops: DropProduct[] = [];
