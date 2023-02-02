export function getRandomFigure(list) {
    return list[(Math.floor(Math.random() * list.length) + 1)]
}

export const trimString = (string) => {
    return `${string.substring(0, 25)}...`
}