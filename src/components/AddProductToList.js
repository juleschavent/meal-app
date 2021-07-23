import { useState } from "react";

const AddProductToList = ({ supermarcheDb }) => {
  const [addProduct, setAddProduct] = useState("");

  const handleInputProduct = (e) => {
    setAddProduct(e.target.value);
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    if(addProduct === "") {
      console.log('error')
    } else {
      supermarcheDb.push(addProduct);
      setAddProduct("");
    }

  };

  return (
      <div className="input-group mb-3">
        <span onClick={handleAddProduct} className="input-group-text">
          <i className="fas fa-plus"></i>
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Ajouter un produit"
          value={addProduct}
          onChange={handleInputProduct}
        />
      </div>
  );
};

export default AddProductToList;
