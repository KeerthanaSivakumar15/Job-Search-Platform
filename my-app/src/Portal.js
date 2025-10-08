import { Fragment } from "react/jsx-runtime";
import Header from "./Header";
import Sidenav from "./Sidenav";

function Portal() {
    return(
        <Fragment>
            <div>
                <Header></Header>
            </div>
            <div>
                <Sidenav></Sidenav>
            </div>

        </Fragment>
    )
}export default Portal;