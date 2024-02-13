type ApiRecipeHit = {
    recipe: {
        label: string;
        url: string;
    };
};

type ApiRecipeResponse = {
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

type Recipe = {
    label: string;
    url: string;
};
