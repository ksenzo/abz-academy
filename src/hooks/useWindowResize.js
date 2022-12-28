import React from "react"

export const useWindowResize = (callback) => {
    React.useEffect(() => {
        const handleResize = () => {
            callback()
        }

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [callback])
}