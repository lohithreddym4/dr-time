import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Categories() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    //backend nundi cats 
    setCats(["Gastroentrologist", "Gynecologist", "Neurologist", "ENT", "Cardiologist", "Neurologist", "ENT", "Cardiologist"]);
  }, []);
  
  
  return (
    <div className="cat-1">
      {cats.map((val, ind) => {
        return (
          <div key={ind}>
            <i><Link to={`/${val}`} >{val[0].toUpperCase()+val.substring(1)}</Link></i>
          </div>
        );
      })}
    </div>
  );
}

export default Categories;
