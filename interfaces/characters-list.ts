export interface CharacterList {
    count:    number;
    next?:     string;
    previous?: string;
    results:  smallCharacter[];
}

export interface smallCharacter {
    
    name: string;
    url:  string;
    id: number;

    img: string;
}
