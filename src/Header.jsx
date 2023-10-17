import React from "react"
import './Header.css'
function Header() {
    return (<form id="email-registration" action="/" method="post">
        <div className="anku" >
            <h1> SIGN UP FOR OUR DAILY INSIDER </h1>
            <button > subscribe </button>
            <input id="emailInput" name="email" type="email" placeholder="Enter your email" />
        </div>
    </form>)

}

export default Header;