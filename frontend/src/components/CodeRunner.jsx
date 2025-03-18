import React from "react";
import { Sandpack } from "@codesandbox/sandpack-react";

export default function CodeRunner({ code, framework }) {
  return (
    <Sandpack
      template={framework} // React, Vue, Vanilla JS, Svelte, etc.
      files={{ "/App.js": code }} // Injects the code into App.js
      options={{
        showLineNumbers: true, // Enable line numbers
        editorHeight: 400, // Adjust editor height
        editorWidthPercentage: 60, // Control editor size
        showConsole: true, // Show console for debugging
        showInlineErrors: true, // Show errors inside editor
      }}
    />
  );
}

// const files = {
//   "/ProductCard.js": `import React from 'react';
//   import './ProductCard.css';

//   function ProductCard() {
//     const styles = {
//       card: {
//         width: '350px',
//         borderRadius: '10px',
//         boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
//         padding: '20px',
//         backgroundColor: 'white',
//         fontFamily: 'Arial, sans-serif',
//       },
//       // ... other styles
//     };

//     return (
//       <div style={styles.card}>
//         <div style={styles.imageContainer}>
//           <div style={styles.discountBadge}>39% OFF</div>
//           <img
//             src="https://path-to-your-shoe-image.jpg"
//             alt="Nike Air MX Super 2500 - Red"
//             style={styles.image}
//           />
//         </div>
//         <div>
//           <h2 style={styles.title}>Nike Air MX Super 2500 - Red</h2>
//           <div style={styles.priceContainer}>
//             <span style={styles.currentPrice}>$449</span>
//             <span style={styles.originalPrice}>$699</span>
//             <div style={styles.ratingContainer}>
//               <div style={styles.stars}>★★★★☆</div>
//               <span style={styles.ratingScore}>5.0</span>
//             </div>
//           </div>
//           <button style={styles.button}>
//             <span style={styles.cartIcon}>🛒</span>
//             Add to cart
//           </button>
//         </div>
//       </div>
//     );
//   }

//   export default ProductCard;
//   `,

//   "/ProductCard.css": `
//   .product-card {
//     width: 350px;
//     border-radius: 10px;
//     box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
//     padding: 20px;
//     background-color: white;
//     font-family: Arial, sans-serif;
//   }

//   .product-image-container {
//     position: relative;
//     background-color: #f0f0f0;
//     border-radius: 8px;
//     height: 300px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }

//   .discount-badge {
//     position: absolute;
//     top: 10px;
//     left: 10px;
//     background-color: black;
//     color: white;
//     padding: 5px 10px;
//     border-radius: 15px;
//     font-size: 14px;
//     font-weight: bold;
//   }

//   .product-image {
//     max-width: 80%;
//     max-height: 80%;
//   }

//   .product-title {
//     font-size: 20px;
//     margin: 15px 0 10px;
//   }

//   .product-price-container {
//     display: flex;
//     align-items: center;
//     margin-bottom: 15px;
//   }

//   .current-price {
//     font-size: 26px;
//     font-weight: bold;
//     margin-right: 10px;
//   }

//   .original-price {
//     font-size: 16px;
//     color: #888;
//     text-decoration: line-through;
//   }

//   .rating-container {
//     margin-left: auto;
//     display: flex;
//     align-items: center;
//   }

//   .stars {
//     color: gold;
//     margin-right: 5px;
//   }

//   .rating-score {
//     background-color: #ffe977;
//     padding: 2px 8px;
//     border-radius: 10px;
//     font-size: 14px;
//     font-weight: bold;
//   }

//   .add-to-cart-button {
//     width: 100%;
//     padding: 12px;
//     background-color: #0a1929;
//     color: white;
//     border: none;
//     border-radius: 5px;
//     font-size: 16px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     cursor: pointer;
//   }

//   .cart-icon {
//     margin-right: 10px;
//   }
//   `,
//   "/App.js": `import ProductCard from '/ProductCard'

// export default function App() {
//   return <ProductCard />
// }
// `,
// };

// import React from "react";
// import { Sandpack } from "@codesandbox/sandpack-react";

// export default function CodeRunner({ framework }) {
//   return (
//     <Sandpack
//       template={"react"} // React, Vue, Vanilla JS, Svelte, etc.
//       files={files} // Pass files as an object
//       options={{
//         showLineNumbers: true, // Enable line numbers
//         editorHeight: 400, // Adjust editor height
//         editorWidthPercentage: 60, // Control editor size
//         showConsole: true, // Show console for debugging
//         showInlineErrors: true, // Show errors inside editor
//       }}
//     />
//   );
// }
