document.addEventListener("DOMContentLoaded", () => {
  const paginations = document.querySelectorAll(".pagination__blog");
  paginations.forEach((item, index) => {
    item.addEventListener("click", (e) => {
      item.classList.add("bg-pagination");
      paginations.forEach((pag) => {
        if (e.target !== pag) {
          pag.classList.remove("bg-pagination");
        }
      });
    });
  });
});
