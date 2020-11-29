// validate a single email with regex
export const validateEmail = (email: string): boolean =>
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );

// validate an array of emails
export const validateEmails = (arr: string[]): boolean =>
  arr.every(validateEmail);

// validate a single tel with regex
export const validateTel = (tel: string): boolean =>
  /^[+]{0,1}[\s0-9]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*[p]{0,1}[\s0-9]*$/.test(
    tel
  );

// copy of a string
export const copyToClipboard = (str: string): boolean => {
  let el: HTMLTextAreaElement = document.createElement(
    "textarea"
  ) as HTMLTextAreaElement;
  el.value = str;
  el.setAttribute("readonly", "");
  el.style.position = "absolute";
  el.style.left = "-9999px";
  document.body.appendChild(el);
  let selected: Range | boolean =
    document.getSelection().rangeCount > 0
      ? document.getSelection().getRangeAt(0)
      : false;
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
  if (selected) {
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(selected);
    return true;
  }
  return false;
};

// set focus loop within modal
export const setFocusLoop = (ref: HTMLElement): void => {
  let modal = ref;
  modal
    .querySelector(".m-modal-content a:last-of-type")
    .addEventListener("keydown", leaveLastLink);
  modal
    .querySelector(".m-modal-content a:first-of-type")
    .addEventListener("keydown", leaveFirstLink);
};

export const leaveLastLink = (e: KeyboardEvent): void => {
  // going back to the first link to force looping
  if (e.code === "Tab" && e.shiftKey === false) {
    e.preventDefault();

    ((e.target as HTMLElement)
      .closest("div")
      .querySelector("a:first-of-type") as HTMLElement).focus();
  }
};

export const leaveFirstLink = (e: KeyboardEvent): void => {
  // going back to the first link to force looping
  if (e.code === "Tab" && e.shiftKey === true) {
    e.preventDefault();
    ((e.target as HTMLElement)
      .closest("div")
      .querySelector("a:last-of-type") as HTMLElement).focus();
  }
};
