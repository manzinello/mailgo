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
  /^[+]{0,1}[\s0-9]{0,}[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(tel);

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
