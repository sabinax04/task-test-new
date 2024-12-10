import React from 'react'
import { useParams } from 'react-router-dom'
const Menu = () => {
    const {menuId} = useParams();
    // console.log(id);
    
  return (
    <div>
        {menuId ? "sizin oldugunuz menu nomresi " + menuId : "Menu page"}
    </div>
  )
}

export default Menu