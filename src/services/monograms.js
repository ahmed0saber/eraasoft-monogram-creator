import axios from 'axios'

const downloadMonogram = (currentMonogram) => {
    axios.post('https://monogram-generator-api.vercel.app/api/generate', currentMonogram, {
            responseType: 'blob',
            headers: {
                'Content-Type': 'text/plain'
            }
        })
            .then(function (response) {
                const href = URL.createObjectURL(response.data)
                const anchorElement = document.createElement('a')
                anchorElement.href = href
                anchorElement.download = `monogram.png`

                document.body.appendChild(anchorElement)
                anchorElement.click()

                document.body.removeChild(anchorElement)
                window.URL.revokeObjectURL(href)
            })
            .catch(function (error) {
                console.error(error)
            })
}

export { downloadMonogram }
