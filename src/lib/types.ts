export type ApiRecipeResponse = {
    from: number;
    to: number;
    count: number;
    _links: {
        next: {
            href: string;
            title: string;
        };
    };
    hits: ApiRecipeHit[];
};

export type ApiRecipeHit = {
    recipe: {
        label: string;
        url: string;
        images: {
            THUMBNAIL: {
                url: string;
                width: number;
                height: number;
            };
        };
        source: string;
        yield: number;
        dietLabels: string[];
        totalTime: number;
        cuisineType: string[];
        mealType: string[];
        calories: number;
    };
};

export type Recipe = Omit<ApiRecipeHit['recipe'], 'images' | 'yield'> & {
    thumbnail: {
        url: string;
        width: number;
        height: number;
    };
    amount: number;
};
