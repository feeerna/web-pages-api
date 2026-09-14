export const IDENTIFICATION_TYPES: Record<string, string | number>[] = [
    { name: 'DNI', id: 1 },
    { name: 'PASSPORT', id: 2 },
    { name: 'ID_CARD', id: 3 },
    { name: 'OTHER', id: 4 },
];

export const NODE_ENVIROMENTS: Record<string, string> = {
    DEVELOPMENT: 'development',
    PRODUCTION: 'production',
}