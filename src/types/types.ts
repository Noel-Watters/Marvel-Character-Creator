
export interface User {
    id?: string;
    name: string;
    email: string;
    admin?: boolean;
}

export interface Character {
    id: string;
    age: number;
    alignment: string;
    class: string;
    img: string;
    name: string
    player: string;
    race: string;
    level: number;
    stats : {
        CHA: number;
        CON: number;
        DEX: number;
        INT: number;
        STR: number;
        WIS: number;
    }
}

export interface Class {
    base_hp: number;
    class_name: string;
    color: string;
    proficiencies: string[];
}

export interface Race {
    race_name: string;
    darkvision: boolean;
    walk_speed: number;
    languages?: string[];
    resistances?: string[];
}