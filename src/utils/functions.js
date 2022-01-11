export const checkIfEntriesAreValid = () => {
  const allInputs = document.querySelectorAll("input");
  let isInvalid = false;
  allInputs.forEach((input) => {
    if (input.classList.value.includes("is-invalid")) {
      isInvalid = true;
    }
  });
  if (isInvalid) {
    return false;
  }
  return true;
};
