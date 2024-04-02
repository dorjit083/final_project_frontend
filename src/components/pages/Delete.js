import React, { useState , useEffect} from "react";
import "./style.css"; // Import professional CSS styles

function ProductForm({ onSubmit, productToEdit }) {
    const [productName, setProductName] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productFeatures, setProductFeatures] = useState("");
  
    useEffect(() => {
      if (productToEdit) {
        setProductName(productToEdit.name);
        setProductDescription(productToEdit.description);
        setProductPrice(productToEdit.price);
        setProductFeatures(productToEdit.features.join(", "));
      }
    }, [productToEdit]);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Create a new product object
      const newProduct = {
        name: productName,
        description: productDescription,
        price: productPrice,
        features: productFeatures.split(",").map((feature) => feature.trim()),
      };
      // Call the onSubmit function with the new product
      onSubmit(newProduct);
      // Clear the form fields
      setProductName("");
      setProductDescription("");
      setProductPrice("");
      setProductFeatures("");
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Product Name:
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </label>
        <label>
          Product Description:
          <input
            type="text"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            required
          />
        </label>
        <label>
          Product Price:
          <input
            type="number"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            required
          />
        </label>
        <label>
          Product Features (comma-separated):
          <input
            type="text"
            value={productFeatures}
            onChange={(e) => setProductFeatures(e.target.value)}
            required
          />
        </label>
        <button type="submit">
          {productToEdit ? "Update Product" : "Add Product"}
        </button>
      </form>
    );
  }
  
  function ProductTable({ products, onDeleteProduct, onEditProduct }) {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Features</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>{product.features.join(", ")}</td>
              <td>
                <button onClick={() => onEditProduct(index)}>Edit</button>
                <button onClick={() => onDeleteProduct(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  
  function ProductOnlyFrontEnd() {
    const [products, setProducts] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);
    const [productToEdit, setProductToEdit] = useState(null);
  
    const handleAddProduct = (newProduct) => {
      setProducts([...products, newProduct]);
    };
  
    const handleDeleteProduct = (index) => {
      setProducts(products.filter((_, i) => i !== index));
    };
    console.log("This is test");
  
    const handleEditProduct = (index) => {
      setEditingIndex(index);
      setProductToEdit(products[index]);
    };
  
    const handleUpdateProduct = (updatedProduct) => {
      setProducts(
        products.map((product, index) =>
          index === editingIndex ? updatedProduct : product
        )
      );
      setEditingIndex(null);
      setProductToEdit(null);
    };
  
    return (
      <div className="container">
        <h1>Add Product In FrontEnd Only</h1>
        <h1>Add Product</h1>
        <ProductForm
          onSubmit={
            editingIndex !== null ? handleUpdateProduct : handleAddProduct
          }
          productToEdit={productToEdit}
        />
        <h1>Product List</h1>
        <ProductTable
          products={products}
          onDeleteProduct={handleDeleteProduct}
          onEditProduct={handleEditProduct}
        />
      </div>
    );
  }
  
  export default ProductOnlyFrontEnd;