import React, { useState } from "react";
import mockProducts from "../../components/data/mockProducts"; // Adjust the path accordingly

const NewProduct = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  //   // Fetch stored products from local storage on component mount
  //   const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
  //   const [mockProducts, setMockProducts] = useState(storedProducts);

  function createProduct(event) {
    event.preventDefault();

    const newProduct = {
      id: mockProducts.length + 1, // Assign a unique ID based on your data structure
      title,
      description,
      price: parseFloat(price),
      image: URL.createObjectURL(image) // Store the image URL
    };

    // Update mockProducts with the new product
    mockProducts.push(newProduct);

    // // Update mockProducts and local storage with the new product
    // const updatedProducts = [...mockProducts, newProduct];
    // setMockProducts(updatedProducts);
    // localStorage.setItem("products", JSON.stringify(updatedProducts));

    // Clear the form fields
    setTitle("");
    setDescription("");
    setPrice("");
    setImage(null); // Clear the selected image
  }
  return (
    <div>
      <form className="p-5" action="" onSubmit={createProduct}>
        <h1 className="text-2xl pb-2 font-cursive font-extrabold mb-4 text-left mt-5">
          New Product
        </h1>
        <label htmlFor="">Product Image: </label>
        <input
          type="file"
          accept="image/*"
          onChange={e => setImage(e.target.files[0])}
        />
        <label htmlFor="">Product Name: </label>
        <input
          type="text"
          placeholder="product name"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <label htmlFor="">Description: </label>
        <textarea
          name=""
          placeholder="description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <label htmlFor="">Price: (in $) </label>
        <input
          type="number"
          placeholder="price"
          value={price}
          onChange={e => setPrice(e.target.value)}
        />
        <button type="submit" className="btn-primary">
          Save
        </button>
      </form>
    </div>
  );
};

export default NewProduct;
