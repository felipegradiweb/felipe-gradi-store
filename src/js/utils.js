const storageProductDiv = document.getElementById("storageProduct");
const sectionfull = document.getElementById("allCartProducts");
const responseModal = document.querySelector(".modal-container");
const sectionempty = document.getElementById("basketProductsEmpty");
//remover producots
function changeallproducts(collectionref, item) {
  let collectionfactory =
    collectionref[0].children[0].children[2].children[0].children[0];
  collectionfactory.children[3].children[0].innerHTML =
    "$" + item.final_line_price;
  collectionfactory.children[2].children[1].value = item.quantity;
  collectionfactory.children[2].children[1].id = "input" + item.variant_id;
  collectionfactory.children[0].children[0].src = item.image;
  collectionfactory.children[1].children[1].children[1].innerHTML =
    item.variant_title;
  collectionfactory.children[1].children[0].innerHTML = item.product_title;
  collectionfactory.children[4].children[0].value = item.variant_id;
  collectionfactory.children[2].children[0].addEventListener("click", (e) => {
    let inputselected =
      collectionfactory.children[2].children[0].parentNode.querySelector(
        "input[type=number]"
      );
    let cantidad = inputselected.value;
    let identifi = inputselected.id.replace("input", "");

    other_test(null, true, identifi, cantidad);
  });
  collectionfactory.children[2].children[2].addEventListener("click", (e) => {
    let inputselected =
      collectionfactory.children[2].children[2].parentNode.querySelector(
        "input[type=number]"
      );
    let cantidad = inputselected.value;
    let identifi = inputselected.id.replace("input", "");

    other_test(null, true, identifi, cantidad);
  });
  collectionfactory.children[4].children[0].addEventListener("click", (e) => {
    other_test(null, true, e.target.value, 0);
  });
}
function other_test(response, flag, variant_id, cantidad) {
  var data;
  if (flag == true) {
    data = {
      updates: {
        [`${variant_id}`]: cantidad,
      },
    };
  } else {
    data = {
      updates: {
        [`${response.items[0].id}`]: response.items[0].quantity,
      },
    };
  }
  fetch("/cart/update.js", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      let item_count = response.item_count;
      while (storageProductDiv.hasChildNodes()) {
        storageProductDiv.removeChild(storageProductDiv.firstChild);
      }
      if (item_count && item_count > 0) {
        let items = response.items;
        for (let i = 0; i < items.length; i++) {
          var clone = sectionfull.cloneNode(true);
          clone.classList.remove("none");

          clone.id = "misproductos-" + i;
          var children = clone.childNodes;
          for (let index = children.length - 1; index >= 0; index--) {
            let collectionref = children[index].children;
            if (collectionref) {
              changeallproducts(collectionref, items[i]);
              if (flag == true) {
                var buttonProd = document.querySelector(".button-delete");
                buttonProd.value = items[i].variant_id;
              }
            }
          }
          storageProductDiv.appendChild(clone);
        }
        responseModal.classList.remove("none");
      } else {
        if (sectionfull || sectionempty) {
          sectionfull.classList.add("none");
          sectionempty.classList.remove("none");
        }
      }
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}

module.exports = {
  other_test,
};
