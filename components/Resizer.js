import { useEffect, useState } from "react"

function Resizer() {

    const [windowSize, setWindowSize] = useState[(window.innerWidth, window.innerHeight)]
    const [warningSize, setWarningSize] = useState(false)

    useEffect(() => {
        window.innerWidth < 820 ? setWarningSize(true) : setWarningSize(false)
    }, [windowSize])

    window.addEventListener('resize', () => {

        if (warningSize) {
            return (
                <div class="warningSize">
                    <h1>Votre fenêtre est trop petite.</h1>
                    <br />
                    <p>Le format d'ecran n'est pas adapté. <br /> Veuillez naviguer depuis une tablette ou un ordinateur*.</p>
                    <br />
                    <p>*Si la page ne s'affiche pas depuis votre ordinateur, <br /> veuillez appuyer sur :
                        <p>Ctrl et - pour Windows et Linux</p>
                        <p>Ctrl et - pour Chrome OS</p>
                        <p>⌘ et - pour Mac</p>
                    </p>
                </div>
            )
        }
    })
}

export default Resizer