import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { FaDiscord } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Navbar() {
  const [navState, setNavState] = useState(false);


  async function requestAccount(){
    console.log(`Requesting account...`)
  
  if(window.ethereum) {

    try{
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      })
      setWalletAddress(accounts[0])
    } catch(error) {
      console.log(`Error connecting...`)
    }

  } else  {
    alert("MetaMask was not detected")
  }
  }
  const [walletAddress, setWalletAddress] = useState("")
  return (
    
    <nav style={{
      position: "relative",
      zIndex: 4
    }}>

      <div className="brand-container">
        <div className="toggle-container">
          <div className="toggle">
            {navState ? (
              <MdClose onClick={() => setNavState(false)} />
            ) : (
              <GiHamburgerMenu onClick={() => setNavState(true)} />
            )}
          </div>
        </div>
      </div>
      <div className={`links-container ${navState ? "nav-visible" : ""}`}>
        
        <ul style={{
          marginRight: 20
        }} className="links ">

          <li style={{
          }} className="navItem">
            <a style={{
              fontSize: 30
            }} href="https://discord.gg/hX59ENKj" target={"_blank"}><FaDiscord/></a>
          </li>
          <li style={{
            
          }} className="navItem">
            <a style={{
              fontSize: 30
            }} href="https://twitter.com/AlgoPand" target={"_blank"}><FaTwitter/></a>
          </li>
          <li style={{
            
            
          }} className="navItem">
            <a style={{
              fontSize: 30
            }} href="https://www.instagram.com/algopand/" target={"_blank"}><FaInstagram/></a>
          </li>
          <li className="navItem">
            <a style={{
              fontSize: 30
            }} onClick={requestAccount} href="#" ><FaWallet/></a>
          </li>
          
          <li/>


        </ul>

        
      </div>
    
        {/* <li style={{
          marginBottom: 15
        }}>
    <div id="position" style={{
      zIndex: 55,
      textAlign: "center"
    }} class="c-share">
  <input class="c-share__input" type="checkbox" id="checkbox"/>
  <label class="c-share__toggler" for="checkbox">
            <span class="c-share__icon"></span>
        </label>

  <ul className="c-share_options share " data-title="Share">


    <a className="style" target={"_blank"} href="https://www.facebook.com">
    <li>Facebook</li>
    </a>
    <br/>
    <a className="style" target={"_blank"} href="https://twitter.com/AlgoPand">
    <li>Twitter</li>
    </a>
      <br/>
    <a className="style" target={"_blank"} href="https://www.gmail.com">
    <li>Gmail</li>
    </a>
  </ul>
</div>
</li> */}

</nav>
  );
}