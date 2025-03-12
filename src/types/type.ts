export interface Planet {
    id: number;
    name: string;
    isDestroyed: boolean;
    description: string;
    image: string;
    deletedAt: string | null;
}

export interface Transformation {
    id: number;
    name: string;
    image: string;
    ki: string;
    deletedAt: string | null;
}

export interface Character {
    id: number;
    name: string;
    ki: string;
    maxKi: string;
    race: string;
    gender: string;
    description: string;
    image: string;
    affiliation: string;
    deletedAt: string | null;
    originPlanet: Planet;
    transformations: Transformation[];
}

export interface Meta {
    totalItems: number;
    itemCount: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
}

export interface Links {
    first: string;
    previous: string | null;
    next: string | null;
    last: string;
}

export interface IResponderGetCharacters {
    items: Character[];
    meta: Meta;
    links: Links;
}