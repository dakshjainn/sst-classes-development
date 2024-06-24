import { useState,useEffect } from "react";
function useWindowSize(){
    return {width:window.innerWidth,height:window.innerHeight};
}
export default useWindowSize;