import { useEffect, useState } from "react";


const Test33 = ({location}) => {
    
    useEffect( () => {
            console.log(location);

    },[])

    return (
        <div>
            test33출력..
        </div>
    )
}

export default Test33;