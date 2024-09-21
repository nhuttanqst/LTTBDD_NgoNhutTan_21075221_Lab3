import { createContext, useState } from "react";

const BasketContext = createContext();

function BasketProvider({ children }) {
  const [data, setData] = useState([
    {
      key: "1",
      type: "Vegetable",
      name: "Apple",
      price: "28.00",
      image: require("./assets/Data/Image 101.png"),
      sl: 0,
    },
    {
      key: "2",
      type: "Vegetable",
      name: "Pear",
      price: "28.00",
      image: require("./assets/Data/Image 102.png"),
      sl: 0,
    },
    {
      key: "3",
      type: "Vegetable",
      name: "Coconut",
      price: "28.00",
      image: require("./assets/Data/Image 103.png"),
      sl: 0,
    },
    {
      key: "4",
      type: "Vegetable",
      name: "Pear",
      price: "28.00",
      image: require("./assets/Data/Image 105.png"),
      sl: 0,
    },
    {
      key: "5",
      type: "Vegetable",
      name: "Coconut",
      price: "28.00",
      image: require("./assets/Data/Image 106.png"),
      sl: 0,
    },
    {
      key: "6",
      type: "Vegetable",
      name: "Coconut",
      price: "28.00",
      image: require("./assets/Data/Image 107.png"),
      sl: 0,
    },
    {
      key: "7",
      type: "Vegetable",
      name: "Pear",
      price: "28.00",
      image: require("./assets/Data/Image 105.png"),
      sl: 0,
    },

    {
      key: "8",
      type: "Seafood",
      name: "Seafood 1",
      price: "28.00",
      image: require("./assets/Data/Image 95.png"),
    },
    {
      key: "9",
      type: "Seafood",
      name: "Seafood 2",
      price: "28.00",
      image: require("./assets/Data/Image 95.png"),
    },
    {
      key: "10",
      type: "Seafood",
      name: "Seafood 3",
      price: "28.00",
      image: require("./assets/Data/Image 95.png"),
    },
    {
      key: "11",
      type: "Seafood",
      name: "Seafood 4",
      price: "28.00",
      image: require("./assets/Data/Image 95.png"),
    },
    {
      key: "12",
      type: "Seafood",
      name: "Seafood 5",
      price: "28.00",
      image: require("./assets/Data/Image 95.png"),
    },

    {
      key: "13",
      type: "Drink",
      name: "Drink 1",
      price: "28.00",
      image: require("./assets/Data/Image_96.png"),
    },
    {
      key: "14",
      type: "Drink",
      name: "Drink 2",
      price: "28.00",
      image: require("./assets/Data/Image_96.png"),
    },
    {
      key: "15",
      type: "Drink",
      name: "Drink 3",
      price: "28.00",
      image: require("./assets/Data/Image_96.png"),
    },
    {
      key: "16",
      type: "Drink",
      name: "Drink 4",
      price: "28.00",
      image: require("./assets/Data/Image_96.png"),
    },
    {
      key: "17",
      type: "Drink",
      name: "Drink 5",
      price: "28.00",
      image: require("./assets/Data/Image_96.png"),
    },
    {
      key: "18",
      type: "Drink",
      name: "Drink 6",
      price: "28.00",
      image: require("./assets/Data/Image_96.png"),
    },
  ]);

  const updateQuantity = (key) => {
    setData((prevData) =>
      prevData.map((product) =>
        product.key === key ? { ...product, sl: product.sl + 1 } : product
      )
    );
  };

  const decrementQuantity = (key) => {
    setData((prevData) =>
      prevData.map((data) =>
        data.key === key ? { ...data, sl: Math.max(0, data.sl - 1) } : data
      )
    );
  };

  const resetQuantities = () => {
    setData((prevData) => prevData.map((data) => ({ ...data, sl: 0 })));
  };

  return (
    <BasketContext.Provider
      value={{
        data,
        updateQuantity,
        decrementQuantity,
        resetQuantities,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
}

export { BasketContext, BasketProvider };
