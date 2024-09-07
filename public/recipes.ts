type Unity = 'ml' | 'g' | 'dash' | 'l' | 'kg';

export interface Ingredient {
    name: string;
    quantity: number;
    unity: Unity;
}

export interface Recipe {
    id: number;
    name: string;
    ingredients: Ingredient[];
}

export type RecipesDatabase = Recipe[];

export const recipesOld: RecipesDatabase = [
    {
        id: 1,
        name: 'Kyoto Kisu',
        ingredients: [
            {name: 'Belvedere Vodka', quantity: 4500, unity: 'ml'},
            {name: 'Briotte Creme de Cacao Blanc', quantity: 2000, unity: 'ml'},
            {name: 'Real Agave Syrup', quantity: 1500, unity: 'ml'},
            {name: 'Water', quantity: 1000, unity: 'ml'},
        ],
    },
    // {
    //     id: 1,
    //     name: 'Kyoto Kisu',
    //     ingredients: [
    //         {name: 'Belvedere Vodka', quantity: 45, unity: 'ml'},
    //         {name: 'Briotte Creme de Cacao Blanc', quantity: 20, unity: 'ml'},
    //         {name: 'Real Agave Syrup', quantity: 15, unity: 'ml'},
    //         {name: 'Water', quantity: 10, unity: 'ml'},
    //     ],
    // },
    {
        id: 2,
        name: 'Rose-Marie Gimlet',
        ingredients: [
            {name: 'Takara Shochikubai Josen Sake', quantity: 6000, unity: 'ml'},
            {name: 'Barsol Pisco', quantity: 1500, unity: 'ml'},
            {name: 'Rosemary Syrup', quantity: 1500, unity: 'ml'},
        ],
    },
    // {
    //     id: 2,
    //     name: 'Rose-Marie Gimlet',
    //     ingredients: [
    //         {name: 'Takara Shochikubai Josen Sake', quantity: 60, unity: 'ml'},
    //         {name: 'Barsol Pisco', quantity: 15, unity: 'ml'},
    //         {name: 'Rosemary Syrup', quantity: 15, unity: 'ml'},
    //     ],
    // },
    {
        id: 3,
        name: 'Spice Club',
        ingredients: [
            {name: 'Jose Cuervo Silver', quantity: 4500, unity: 'ml'},
            {name: 'Clarified Real Mango Puree', quantity: 3000, unity: 'ml'},
            {name: 'Pineapple Juice', quantity: 4000, unity: 'ml'},
            {name: 'Lime Juice', quantity: 1500, unity: 'ml'},
        ],
    },
    // {
    //     id: 3,
    //     name: 'Spice Club',
    //     ingredients: [
    //         {name: 'Jose Cuervo Silver', quantity: 45, unity: 'ml'},
    //         {name: 'Clarified Real Mango Puree', quantity: 30, unity: 'ml'},
    //         {name: 'Pineapple Juice', quantity: 40, unity: 'ml'},
    //         {name: 'Lime Juice', quantity: 15, unity: 'ml'},
    //     ],
    // },
    {
        id: 4,
        name: 'Sloe Gal',
        ingredients: [
            {name: 'Peddlers Salted Plum Gin', quantity: 35, unity: 'ml'},
            {name: 'Briotte Creme de Framboise', quantity: 35, unity: 'ml'},
            {name: 'Honey Syrup', quantity: 20, unity: 'ml'},
            {name: 'Peychauds Bitters', quantity: 1, unity: 'ml'},
        ],
    },

    // ! Inconscistency on used amount for one cocktail and batch recipe
    //! {
    //!     id: 4,
    //!     name: 'Sloe Gal',
    //!     ingredients: [
    //!         {name: 'Peddlers Salted Plum Gin', quantity: 3600, unity: 'ml'},
    //!         {name: 'Briotte Creme de Framboise', quantity: 3600, unity: 'ml'},
    //!         {name: 'Honey Syrup', quantity: 1800, unity: 'ml'},
    //!         {name: 'Peychauds Bitters', quantity: 120, unity: 'ml'},
    //!     ],
    //! },
    {
        id: 5,
        name: 'The Gentleman',
        ingredients: [
            {name: 'Old Forester Bourbon (Chocolate)', quantity: 3500, unity: 'ml'},
            {name: 'Hennessy VS', quantity: 2500, unity: 'ml'},
            {name: 'Cocchi Sweet Vermouth di Torino', quantity: 2000, unity: 'ml'},
            {name: 'Briotte Creme de Ambre', quantity: 1000, unity: 'ml'},
            {name: 'Aztec Chocolate Bitters', quantity: 100, unity: 'ml'},
            {name: 'Peychauds Bitters', quantity: 50, unity: 'ml'},
        ],
    },
    // {
    //     id: 5,
    //     name: 'The Gentleman',
    //     ingredients: [
    //         {name: 'Old Forester Bourbon (Chocolate)', quantity: 35, unity: 'ml'},
    //         {name: 'Hennessy VS', quantity: 25, unity: 'ml'},
    //         {name: 'Cocchi Sweet Vermouth di Torino', quantity: 20, unity: 'ml'},
    //         {name: 'Briotte Creme de Ambre', quantity: 10, unity: 'ml'},
    //         {name: 'Aztec Chocolate Bitters', quantity: 1, unity: 'ml'},
    //         {name: 'Peychauds Bitters', quantity: 0.5, unity: 'ml'},
    //     ],
    // },
    {
        id: 6,
        name: 'Starward Crush',
        ingredients: [
            {name: 'Starward Two Fold Whisky', quantity: 4500, unity: 'ml'},
            {name: 'Starward Peated Finish Whisky', quantity: 1500, unity: 'ml'},
            {name: 'Maple Syrup', quantity: 3000, unity: 'ml'},
        ],
    },
    // {
    //     id: 6,
    //     name: 'Starward Crush',
    //     ingredients: [
    //         {name: 'Starward Two Fold Whisky', quantity: 45, unity: 'ml'},
    //         {name: 'Starward Peated Finish Whisky', quantity: 15, unity: 'ml'},
    //         {name: 'Maple Syrup', quantity: 30, unity: 'ml'},
    //     ],
    // },
    {
        id: 7,
        name: 'Mandarin Spiritz',
        ingredients: [
            {name: 'Briottet Mandarin Liqueur (Thyme)', quantity: 5400, unity: 'ml'},
            {name: "Pimm's No.1", quantity: 1800, unity: 'ml'},
            {name: 'Sugar Syrup', quantity: 1800, unity: 'ml'},
            {name: 'Orange Bitters', quantity: 120, unity: 'ml'},
        ],
    },
    // {
    //     id: 7,
    //     name: 'Mandarin Spiritz',
    //     ingredients: [
    //         {name: 'Briottet Mandarin Liqueur (Thyme)', quantity: 45, unity: 'ml'},
    //         {name: "Pimm's No.1", quantity: 15, unity: 'ml'},
    //         {name: 'Sugar Syrup', quantity: 15, unity: 'ml'},
    //         {name: 'Orange Bitters', quantity: 1, unity: 'ml'},
    //     ],
    // },
    {
        id: 8,
        name: 'Snake Bite',
        ingredients: [
            {name: 'El Jimador Blanco (Jalapeno)', quantity: 4500, unity: 'ml'},
            {name: 'Mezcal Con Gusano Monte Alban', quantity: 1000, unity: 'ml'},
            {name: 'Briottet Liqueur de Poire William', quantity: 2000, unity: 'ml'},
            {name: 'Sugar Syrup', quantity: 1500, unity: 'ml'},
        ],
    },
    // {
    //     id: 8,
    //     name: 'Snake Bite',
    //     ingredients: [
    //         {name: 'El Jimador Blanco (Jalapeno)', quantity: 45, unity: 'ml'},
    //         {name: 'Mezcal Con Gusano Monte Alban', quantity: 10, unity: 'ml'},
    //         {name: 'Briottet Liqueur de Poire William', quantity: 20, unity: 'ml'},
    //         {name: 'Sugar Syrup', quantity: 15, unity: 'ml'},
    //     ],
    // },
];

export const recipes: RecipesDatabase = [
    // {
    //     id: 0,
    //     name: 'Espresso Martini',
    //     ingredients: [
    //         {name: 'Belvedere Vodka (Cacao Infused)', quantity: 45, unity: 'ml'},
    //         {name: 'Quick Brown Fox Coffee', quantity: 20, unity: 'ml'},
    //         {name: 'Caramelised Sugar Syrup', quantity: 15, unity: 'ml'},
    //         {name: 'Coffee', quantity: 30, unity: 'ml'},
    //     ],
    // },
    {
        id: 1,
        name: 'Kyoto Kisu',
        ingredients: [
            {name: 'Belvedere Vodka', quantity: 45, unity: 'ml'},
            {name: 'Briotte Creme de Cacao Blanc', quantity: 20, unity: 'ml'},
            {name: 'Real Agave Syrup', quantity: 15, unity: 'ml'},
            {name: 'Water', quantity: 10, unity: 'ml'},
        ],
    },
    {
        id: 2,
        name: 'Rose-Marie Gimlet',
        ingredients: [
            {name: 'Takara Shochikubai Josen Sake', quantity: 60, unity: 'ml'},
            {name: 'Barsol Pisco', quantity: 15, unity: 'ml'},
            {name: 'Rosemary Syrup', quantity: 15, unity: 'ml'},
        ],
    },

    {
        id: 3,
        name: 'Spice Club',
        ingredients: [
            {name: 'Jose Cuervo Silver', quantity: 45, unity: 'ml'},
            {name: 'Clarified Real Mango Puree', quantity: 30, unity: 'ml'},
            {name: 'Pineapple Juice', quantity: 40, unity: 'ml'},
            {name: 'Lime Juice', quantity: 15, unity: 'ml'},
        ],
    },
    {
        id: 4,
        name: 'Sloe Gal',
        ingredients: [
            {name: 'Peddlers Salted Plum Gin', quantity: 35, unity: 'ml'},
            {name: 'Briotte Creme de Framboise', quantity: 35, unity: 'ml'},
            {name: 'Honey Syrup', quantity: 20, unity: 'ml'},
            {name: 'Peychauds Bitters', quantity: 1, unity: 'ml'},
        ],
    },
    {
        id: 5,
        name: 'The Gentleman',
        ingredients: [
            {name: 'Old Forester Bourbon (Chocolate)', quantity: 35, unity: 'ml'},
            {name: 'Hennessy VS', quantity: 25, unity: 'ml'},
            {name: 'Cocchi Sweet Vermouth di Torino', quantity: 20, unity: 'ml'},
            {name: 'Briotte Creme de Ambre', quantity: 10, unity: 'ml'},
            {name: 'Aztec Chocolate Bitters', quantity: 1, unity: 'ml'},
            {name: 'Peychauds Bitters', quantity: 0.5, unity: 'ml'},
        ],
    },

    {
        id: 6,
        name: 'Starward Crush',
        ingredients: [
            {name: 'Starward Two Fold Whisky', quantity: 45, unity: 'ml'},
            {name: 'Starward Peated Finish Whisky', quantity: 15, unity: 'ml'},
            {name: 'Maple Syrup', quantity: 30, unity: 'ml'},
        ],
    },
    {
        id: 7,
        name: 'Mandarin Spiritz',
        ingredients: [
            {name: 'Briottet Mandarin Liqueur (Thyme)', quantity: 45, unity: 'ml'},
            {name: "Pimm's No.1", quantity: 15, unity: 'ml'},
            {name: 'Sugar Syrup', quantity: 15, unity: 'ml'},
            {name: 'Orange Bitters', quantity: 1, unity: 'ml'},
        ],
    },
    {
        id: 8,
        name: 'Snake Bite',
        ingredients: [
            {name: 'El Jimador Blanco (Jalapeno)', quantity: 45, unity: 'ml'},
            {name: 'Mezcal Con Gusano Monte Alban', quantity: 10, unity: 'ml'},
            {name: 'Briottet Liqueur de Poire William', quantity: 20, unity: 'ml'},
            {name: 'Sugar Syrup', quantity: 15, unity: 'ml'},
        ],
    },

    {
        id: 9,
        name: 'Simple Syrup',
        ingredients: [
            {name: 'Caster Sugar', quantity: 65, unity: 'g'},
            {name: 'Water', quantity: 35, unity: 'ml'},
        ],
    },
    {
        id: 10,
        name: 'Rosemary Syrup',
        ingredients: [
            {name: 'Caster Sugar', quantity: 32.5, unity: 'g'},
            {name: 'Water', quantity: 17.5, unity: 'ml'},
            {name: 'Rosemary', quantity: 2, unity: 'g'},
        ],
    },
    {
        id: 11,
        name: 'Cinnamon Syrup',
        ingredients: [
            {name: 'Caster Sugar', quantity: 325, unity: 'g'},
            {name: 'Water', quantity: 175, unity: 'ml'},
            {name: 'Cinnamon Quills', quantity: 15, unity: 'g'},
        ],
    },
    {
        id: 12,
        name: 'Honey Syrup',
        ingredients: [
            {name: 'Caster Sugar', quantity: 100, unity: 'g'},
            {name: 'Water', quantity: 175, unity: 'ml'},
            {name: 'Honey', quantity: 225, unity: 'ml'},
        ],
    },
];
