function Info() {
    return(
        <div className="info">
            <img src="/images/foto.jpg" alt="" className="foto"/>
            <h1 className="name" >Stefano Scarpetta</h1>
            <h2 className="profession">Programmatore</h2>
            <a className="site" href="https://github.com/StefanoScarpetta">sito personale</a><br />
            <div className="button-container">
                <a href="mailto:stefanoscarpetta02@gmail.com" >
                    <div className="info-button">
                        <img src="/icons/email.PNG" alt=""/>
                        <p>Email</p>
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/stefano-scarpetta/">
                    <button className="info-button">
                        <img src="/icons/linkedin.PNG" alt=""/>
                        <p>Linkedin</p>
                    </button>
                </a>
            </div>
        </div>
    )
}

export default Info