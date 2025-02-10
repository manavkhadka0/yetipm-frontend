export interface Features {
    id: number;
    name: string;
    image: string;
}

export interface FeaturesResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: Features[];
}