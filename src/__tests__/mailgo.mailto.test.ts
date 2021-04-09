import { queryAllByRole } from "@testing-library/dom";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import mailgo from "../mailgo";

import setupWindowConfig, {
  cleanup,
  createMailtoAnchor,
  getMailgoModal,
} from "./helpers/mailgoHelper";

function setup(toAddress: string): HTMLAnchorElement {
  setupWindowConfig();
  mailgo();

  const mailtoAnchor = createMailtoAnchor(toAddress);
  return mailtoAnchor;
}

test("when a mailto link with a valid email address is clicked, should render the mailgo modal", () => {
  const toAddress = "mark.white@mail.com";
  const mailtoAnchor = setup(toAddress);

  userEvent.click(mailtoAnchor);

  const mailgoModal = getMailgoModal();
  expect(mailgoModal).toBeTruthy();
  expect(mailgoModal).toHaveTextContent(toAddress);
  const mailgoModalLinks = queryAllByRole(mailgoModal, "link");
  expect(mailgoModalLinks).toHaveLength(5);
  expect(mailgoModalLinks[0]).toHaveTextContent("open in Gmail");
  expect(mailgoModalLinks[1]).toHaveTextContent("open in Outlook");
  expect(mailgoModalLinks[2]).toHaveTextContent("open in Yahoo Mail");
  expect(mailgoModalLinks[3]).toHaveTextContent("open default");
  expect(mailgoModalLinks[4]).toHaveTextContent("copy");
});

test("when a mailto link with an invalid email address is clicked, should not render the mailgo modal", () => {
  const toAddress = "mark.white@mail";
  const mailtoAnchor = setup(toAddress);

  userEvent.click(mailtoAnchor);

  const mailgoModal = getMailgoModal();
  expect(mailgoModal).toBeNull();
});

afterEach(() => {
  cleanup();
});
