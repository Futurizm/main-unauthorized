
// Находим кнопку и блок с подробностями по их идентификаторам
const showDetailsBtn = document.getElementById("showDetailsBtn");
const detailsBlock = document.getElementById("detailsBlock");

// Добавляем обработчик события клика по кнопке
showDetailsBtn.addEventListener("click", function () {
    // Переключаем класс для изменения видимости блока с подробностями
    detailsBlock.classList.toggle("hidden");
});



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


document
    .querySelectorAll(".menu-section__row_sort")
    .forEach((container) => {
        let isDown = false;
        let startX;
        let scrollLeft;

        container.addEventListener("mousedown", (e) => {
            isDown = true;
            container.classList.add("active");
            startX = e.pageX - container.offsetLeft;
            scrollLeft = container.scrollLeft;
        });

        container.addEventListener("mouseleave", () => {
            isDown = false;
            container.classList.remove("active");
        });

        container.addEventListener("mouseup", () => {
            isDown = false;
            container.classList.remove("active");
        });

        container.addEventListener("mousemove", (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - container.offsetLeft;
            const walk = (x - startX) * 3;
            container.scrollLeft = scrollLeft - walk;
        });
    });