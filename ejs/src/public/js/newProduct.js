const productForm = document.getElementById("productForm");

productForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(productForm);
  fetch("/api/newProduct", {
    method: "POST",
    body: formData,
  })
    .then((res) => res.json())
    .then((json) => console.log(json))
    .finally(productForm.reset());
});
