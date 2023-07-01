// import React from "react";
// import './Navbar.css';
// import DropDown from "./DropDown";

// export default function Navbar() {
//   const [activeDropdown, setActiveDropdown] = React.useState(null);

//   const handleMouseEnter = (dropdownId) => {
//     setActiveDropdown(dropdownId);
//   }

//   const handleMouseLeave = () => {
//     setActiveDropdown(null);
//   }

//   return (
//     <div className="Nav">
//       <img src="../Makhdoom.png" alt="Makhdoom_image" className="Img_Icon" />

//       <div className="home">
//         <p>Home</p>
//       </div>

//       <div className="DropDownComponents" onMouseLeave={handleMouseLeave}>

//         <div
//           className="usecase"
//           onMouseEnter={() => handleMouseEnter("useCases")}
//         >
//           <p>UseCases</p>
//           {activeDropdown === "useCases" && <DropDown />}
//         </div>

//         <div
//           className="products"
//           onMouseEnter={() => handleMouseEnter("products")}
//         >
//           <p>Products</p>
//           {activeDropdown === "products" && <DropDown />}
//         </div>

//       </div>

//     </div>
//   );
// }
