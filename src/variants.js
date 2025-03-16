export const fadeIn = (direction, delay) => {
    return {
        hidden: {
            y: direction === "up" ? 40 : direction === 'down' ? -40 : 0,
            x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
        },
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: 'tween',
                duration: 0.8,
                // duration: 10,
                delay: delay,

            }
        }
    }
}