import firebase from "firebase";

const Product = ({ product, index }) => {

//   if (product) {
//     let toDelete = firebase.database().ref("mealDb/supermarche");
//     console.log(toDelete)
//     console.log(index);
//   }

  // DELETE
  const deleteItem = (todo) => {
    let toDelete = firebase.database().ref("mealDb/supermarche").child(todo);
    toDelete.remove();
  };

//   console.log(product)

  return (
    <div>
      {/* <p>{product}</p> */}
      {/* <button onClick={() => deleteItem(index)}>delete</button> */}
    </div>
  );
};

export default Product;
