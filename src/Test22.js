import { useEffect, useState } from "react";
import axios from 'axios';

const Test22 = (props) => {
    const data = {
        aa: 'aa',
        bb: 'bb',
    }
    const data2 = null;
   useEffect( () => {
    console.log(props);
   },[])
    return (
        <div>
            <button onClick={() => props.history.push("/test33",data)}>버튼</button>
        </div>
    )
}

export default Test22;