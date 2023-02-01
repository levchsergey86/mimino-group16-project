(() => {
    const refs = {
      // openModalBtn: document.querySelector("[modal-open-price]"),

      openModalBtn: document.querySelectorAll("[data-modal-open-price]").forEach(btn => { 
        btn.addEventListener('click', toggleModal) 
       }),

      closeModalBtn: document.querySelector("[data-modal-close-price]"),
      modal: document.querySelector("[data-modal-price]"),
    };
    
    // refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();