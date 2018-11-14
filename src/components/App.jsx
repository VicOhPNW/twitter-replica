import React from "react";
import NavBar from "./NavBar";

function App(){
    return (
        <div>
            <style jsx global>{`
                    body {
                        font-family: Arial;
                      }
            `}
            </style>
            <NavBar />
        </div>
    );
}

export default App;