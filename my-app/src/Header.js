import { Fragment } from "react/jsx-runtime";

function Header() {
    return (
        <Fragment>
            <div className="header-main" style={{background:"#2e004f",color:"white"}}>
                <div className="main">
                    <h1 className="inside" style={{ fontWeight: "bolder",color:"white" }}>MONSTER</h1>
                </div>
                <div>
                    <h6 className="outside" style={{ fontSize: "25px" }}>Already Registered? <a href="#">Login</a> here</h6>
                </div>
            </div>

        </Fragment>
    )
} export default Header;