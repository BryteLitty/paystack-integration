import { Link } from "react-router-dom";
import React from "react";

function Navbar () {
    return (
        <nav>
            <Link to='payment'>Proceed to make payment</Link>
        </nav>
    )
}

export default Navbar;