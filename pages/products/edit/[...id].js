import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import mockProducts from "../../../components/data/mockProducts"; // Adjust the path accordingly

const EditProductPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // State to hold the fetched product data
  const [product, setProduct] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedDescription, setEditedDescription] = useState("");
  const [editedPrice, setEditedPrice] = useState("");
  const [editedImage, setEditedImage] = useState(null);
  const [products, setProducts] = useState(mockProducts);

  useEffect(
    () => {
      if (id) {
        const fetchedProduct = mockProducts.find(
          product => product.id === Number(id)
        );
        setProduct(fetchedProduct);
        setEditedTitle(fetchedProduct.title);
        setEditedDescription(fetchedProduct.description);
        setEditedPrice(fetchedProduct.price.toString());
      }
    },
    [id, products]
  );

  const handleTitleChange = event => {
    setEditedTitle(event.target.value);
  };

  const handleImageChange = event => {
    setEditedImage(event.target.files[0]);
  };

  const handleDescriptionChange = event => {
    setEditedDescription(event.target.value);
  };

  const handlePriceChange = event => {
    setEditedPrice(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    const updatedProduct = {
      ...product,
      title: editedTitle,
      description: editedDescription,
      price: parseFloat(editedPrice),
      image: editedImage ? URL.createObjectURL(editedImage) : product.image
    };

    const updatedProducts = mockProducts.map(
      p => (p.id === product.id ? updatedProduct : p)
    );

    setProducts(updatedProducts);
    // localStorage.setItem("products", JSON.stringify(updatedProducts));

    router.push(`/products/${id}`); // Navigate to the edited product's detail page
  };

  return (
    <div>
      {product
        ? <div className="p-5">
            <h1 className="text-2xl pb-2 font-cursive font-extrabold mb-4 text-left mt-5">
              Edit Product
            </h1>
            <form onSubmit={handleSubmit}>
              <label htmlFor="title">Product Title</label>
              <input
                type="text"
                id="title"
                value={editedTitle}
                onChange={handleTitleChange}
              />

              <label htmlFor="description">Product Description</label>
              <textarea
                id="description"
                value={editedDescription}
                onChange={handleDescriptionChange}
              />

              <label htmlFor="price">Product Price</label>
              <input
                type="number"
                id="price"
                value={editedPrice}
                onChange={handlePriceChange}
              />

              <label htmlFor="image">Product Image</label>
              <input
                type="file"
                id="image"
                accept="image/*"
                onChange={handleImageChange}
              />

              <button type="submit" className="btn-primary">
                Save Changes
              </button>
            </form>
          </div>
        : <p>Loading...</p>}
    </div>
  );
};

export default EditProductPage;
