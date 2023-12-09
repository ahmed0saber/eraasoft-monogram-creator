const getMonogramsFromLocalStorage = () => {
    const storedData = localStorage.getItem("monograms")
    if (storedData) {
        return JSON.parse(storedData)
    }

    return []
}

const addMonogramToLocalStorage = (monogram) => {
    const monograms = getMonogramsFromLocalStorage()
    monograms.push(monogram)

    localStorage.setItem("monograms", JSON.stringify(monograms))
}

const removeMonogramFromLocalStorage = (id) => {
    const monograms = getMonogramsFromLocalStorage()
    const newMonograms = monograms.filter(monogram => monogram.id !== id)

    localStorage.setItem("monograms", JSON.stringify(newMonograms))
}

export {
    getMonogramsFromLocalStorage,
    addMonogramToLocalStorage,
    removeMonogramFromLocalStorage
}
