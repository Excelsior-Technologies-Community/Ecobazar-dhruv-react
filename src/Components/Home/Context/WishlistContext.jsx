import { createContext, useState, useContext } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


// Create Wishlist Context
const WishlistContext = createContext();

// Custom Hook to Use Wishlist Context
export const useWishlist = () => useContext(WishlistContext);

// Provider Component
export const WishlistProvider = ({ children }) => {
    const [wishlist, setWishlist] = useState([]);
     // Function to Add or Remove from Wishlist
    const toggleWishlist = (product) => {
        setWishlist((prevWishlist) => {
            const isProductInWishlist = prevWishlist.find((item) => item.id === product.id);
            if (isProductInWishlist) {
                return prevWishlist.filter((item) => item.id !== product.id); // Remove from Wishlist
            } else {
                return [...prevWishlist, product]; // Add to Wishlist
            }
        });
    };

    return (
        <WishlistContext.Provider value={{ wishlist, toggleWishlist }}>
            {children}
        </WishlistContext.Provider>
    );
};
