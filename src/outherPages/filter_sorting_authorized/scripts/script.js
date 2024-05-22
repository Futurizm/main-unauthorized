const btn = document.querySelector(".filter__btn");
const modal = document.querySelector(".modal-window-box");
const sort_btn = document.querySelector(".modal_sort");
const sort_modal = document.querySelector(".modal_sort_window")
const sort_button_pointer = document.querySelector(".modal_sort")
btn.addEventListener("click", () => {
  modal.classList.toggle ("modal-window-box_active");
});
sort_btn.addEventListener("click", () => {
    sort_modal.classList.toggle ("modal_sort_window_active");
    sort_button_pointer.classList.toggle ("modal_sort_active")
  });