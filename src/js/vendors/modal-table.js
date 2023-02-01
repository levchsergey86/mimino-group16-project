  (() => {
    const refs = {
      // openModalBtn: document.querySelector("[modal-open-price]"),

      openModalBtn: document.querySelectorAll("[modal-open-table]").forEach(btn => { 
        btn.addEventListener('click', toggleModal) 
       }),

      closeModalBtn: document.querySelector("[modal-close-table]"),
      modal: document.querySelector("[modal-table]"),
    };
    
    // refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();