const errorMsg = () => {
 
  const submitBtn = document.getElementById("find-doc");
  if(submitBtn){
    const specialization = document.getElementById("specialization");
    const zipCode = document.getElementById("zipcode");
  let formValid;

  function applyError(errorId) {
    const errorMsgId = errorId + "Error";

    const errorField = document.querySelector("#" + errorId);

    const errorMsgel = document.querySelector("#" + errorMsgId);

    errorMsgel.setAttribute("aria-hidden", "false");

    errorField.setAttribute("aria-invalid", "true");

    // const describedBy = errorMsgel.getAttribute("id");

    // errorField.setAttribute("aria-describedby", describedBy);

    errorField.parentElement.classList.add("error-contain");

    document.querySelector(".error-contain input").focus();

    formValid = 0;
  }

  function resetErrors(errorId) {
    const errorMsgId = errorId + "Error";

    const errorField = document.querySelector("#" + errorId);

    if (errorField.parentElement.classList.contains("error-contain")) {
      const errorMsgel = document.querySelector("#" + errorMsgId);

      errorMsgel.setAttribute("aria-hidden", "true");

      errorField.setAttribute("aria-invalid", "false");

    //   errorField.removeAttribute("aria-describedby");

      errorField.parentElement.classList.remove("error-contain");

      errorField.parentElement.classList.remove("is-valid");
    }
  }

  submitBtn.addEventListener("submit", (e) => {
    e.preventDefault();
    if (zipCode.value === "" || zipCode.value == null) {
    //   document.querySelectorAll(".error").forEach((msg) => {
    //     msg.classList.remove("hide_error");
    //     msg.classList.add("show_error");
    //   });
    applyError("zipcode")
    } else {
    //   document.querySelectorAll(".error").forEach((msg) => {
    //     msg.classList.add("hide_error");
    //   });
    resetErrors("zipcode")
    }
    if(specialization.value == ""|| specialization.value == null)
    {
        applyError("specialization")
    }
    else{
        resetErrors("specialization")
    }
if(formValid==0){
    return false;
}
else{
    console.log("form is submitted");
}
  });
}
};
export default errorMsg;
