import { useEffect, useState } from "react";
import AddProductToList from "./AddProductToList";
import "./style/category.css";
import firebase from "firebase";
import Product from "./Product";

const Supermarche = () => {
  //spécifie où aller fetch la BDD et crée une table supermarche
  const supermarcheDb = firebase.database().ref("mealDb/supermarche");

  //méthode pour afficher l'input d'ajout de produit à la liste
  let [addProduct, setAddProduct] = useState(false);

  const handleAddProduct = () => {
    let isActive = addProduct;
    isActive = !isActive;
    setAddProduct(isActive);
  };

  const [productList, setProductList] = useState(null);
  useEffect(() => {
    supermarcheDb.on("value", (snapshot) => {
      let previousList = snapshot.val();
      let list = [];
      for (const id in previousList) {
        list.push(previousList[id]);
      }
      console.log(list)
      console.log(firebase.database().ref("mealDb").child("supermarche").toString)
    //   firebase.database().ref("todosDb").child(todo.id);
      setProductList(list);      
    });
  }, []);

  return (
    <section>
      <div className="category">
        <h2 className="category__title">Supermarché</h2>
        <i
          onClick={handleAddProduct}
          className="category__iconAdd fas fa-plus"
        />
      </div>
      {/* fonction ternaire qui affiche ou non le composant AddProductToList */}
      {addProduct ? <AddProductToList supermarcheDb={supermarcheDb} /> : ""}
      {productList &&
        productList.map((product, index) => (
          <Product key={index} product={product} />
        ))}
    </section>
  );
};

export default Supermarche;
