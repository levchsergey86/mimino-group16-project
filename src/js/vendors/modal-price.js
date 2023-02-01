(() => {
    const refs = {
      openModalBtn: document.querySelector("[modal-open-price]"),
      closeModalBtn: document.querySelector("[modal-close-price]"),
      modal: document.querySelector("[modal-price]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();


  (() => {
    const refs = {
      openModalBtn: document.querySelector("[modal-open-price-1]"),
      modal: document.querySelector("[modal-price]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();

  (() => {
    const refs = {
      openModalBtn: document.querySelector("[modal-open-price-2]"),
      modal: document.querySelector("[modal-price]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();

