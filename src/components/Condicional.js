import { useState } from "react"

export default function Condicional() {

    const [email, setEmail] = useState()
    const [userEmail, setUserEMail] = useState()

    function enviarEmail(e) {
        e.preventDefault()
        setUserEMail(email)
    }
    
    function limparEmail() {
        setUserEMail('')
    }

    return (
        <>
            <h2>Cadastre o seu e-mail</h2>
            <form>
                <input
                    type="email"
                    placeholder="Digite o seu email..."
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" onClick={enviarEmail}>
                    Enviar-email
                </button>
                {userEmail && (
                    <div>
                        <p>O e-mail do usuario é: {userEmail}</p>
                        <button onClick={limparEmail}>Limpar e-mail</button>
                    </div>
                )}
            </form>
        </>
    )
}