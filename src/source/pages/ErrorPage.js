import { observer } from "mobx-react";
import "../../styles/ErrorPage.css"
import { Link } from "react-router-dom";

const ErrorPage = observer(()=> {
    return(
        <form style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
            <div className="MainImage">
            </div>
            <div className="ErrorText">
                    Не переживай дружок! Давай еще раз пройдем авторизацию...
                    <Link to="/">
                        <href> Авторизация</href>
                    </Link>
            </div>
        </form>
    )
})

export default ErrorPage