import FotoPerfil from "./FotoPerfil"

const Header = ({nomeEvento, usuario}) => {
    return(
        <div>
            <div className="header">
                <FotoPerfil classname="img-logo" src="https://media-gru2-1.cdn.whatsapp.net/v/t61.24694-24/75510204_451204215558942_5136879328394948585_n.jpg?ccb=11-4&oh=01_AdT9aZzpUcd4YwaEeI6-axXM4He0Os9z_do_WlJhb-7sGw&oe=65607920&_nc_sid=e6ed6c&_nc_cat=107" alt= "Logo"/>
                <h1 className="titulo">Entrevero</h1>
                <p style={{width:'80px'}} ></p>
            </div>


        </div>
    )
}

export default Header;