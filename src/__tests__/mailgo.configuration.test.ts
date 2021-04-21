import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import helperSetup, {
  cleanup,
  createMailtoAnchor,
  getMailgoModal,
} from "./helpers/mailgoHelper";

function setup(
  useWindowConfig: boolean,
  toAddress: string,
  showSubject: boolean,
  subject: string
): HTMLAnchorElement {
  helperSetup(useWindowConfig, true, true, showSubject);

  const mailtoAnchor = createMailtoAnchor(toAddress, null, null, subject);
  return mailtoAnchor;
}

test("should support configuration via mailgo function", () => {
  const toAddress = "mark.white@mail.com";
  const subject = "My email subject";
  const mailtoAnchor = setup(false, toAddress, false, subject);

  userEvent.click(mailtoAnchor);

  const mailgoModal = getMailgoModal();
  expect(mailgoModal).toBeTruthy();
  expect(mailgoModal).not.toHaveTextContent(subject);
});

test("should support configuration via window object property", () => {
  const toAddress = "mark.white@mail.com";
  const subject = "My email subject";
  const mailtoAnchor = setup(true, toAddress, false, subject);

  userEvent.click(mailtoAnchor);

  const mailgoModal = getMailgoModal();
  expect(mailgoModal).toBeTruthy();
  expect(mailgoModal).not.toHaveTextContent(subject);
});

afterEach(() => {
  cleanup();
});
