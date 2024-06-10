export const useHello = () => {
    return {message: 'Hello'}
}

export const useBye = () => {
    return {message: 'bye'}
}

export const useHi = () => {
    return {message: "Hi"}
}

export const useOther = () => {
    const {text} = useCounter()

    return {text}
}