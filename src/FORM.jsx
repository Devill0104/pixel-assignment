import { useState } from "react";
import Mobile from "./Mobile";
import PanInput from "./PanInput";
import Address from "./Address";
import Postcode from "./Postcode";
export default function FORM(){

    return(
        <>
    
            <div className="container">
                <form action="">
                <PanInput></PanInput>
                {/* <Email></Email> */}
                <Mobile></Mobile>
                <Address></Address>
                <Postcode></Postcode>
                <button >
                    Submit
                </button>
                </form>
            </div>
        
        </>
    );

}