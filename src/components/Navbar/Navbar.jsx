export default function Navbar() {
    
    const redireciona = () => {
        window.location.href('https://www.w3schools.com/js/js_window_location.asp')
    }

    return(
        <>
            <div className="logo">
                <img src='../../assets/LOGO_DARK.png'></img>
            </div>
            <div className='menu-itens'>

            </div>
            <div>
                <input type="button" onClick={redireciona()}>Registrar</input>
            </div>
        </>
    )
}