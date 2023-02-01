(() => {
    const refs = {
      openModalBtn: document.querySelector("[modal-open-room]"),
      closeModalBtn: document.querySelector("[modal-close-room]"),
      modal: document.querySelector("[modal-room]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();

  (() => {
    const refs = {
      openModalBtn: document.querySelector("[modal-open-room1]"),
      modal: document.querySelector("[modal-room]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();