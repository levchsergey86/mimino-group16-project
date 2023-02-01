(() => {
    const refs = {
      openModalBtn: document.querySelector("[modal-open-table]"),
      closeModalBtn: document.querySelector("[modal-close-table]"),
      modal: document.querySelector("[modal-table]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();