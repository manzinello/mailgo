import { queryAllByRole } from "@testing-library/dom";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import mailgo from "../mailgo";

import setupWindowConfig, {
  cleanup,
  createMailtoAnchor,
  getMailgoModal,
} from "./helpers/mailgoHelper";

function setup(
  toAddress: string,
  customActionText: string = null,
  customActionUrl: string = null
): HTMLAnchorElement {
  setupWindowConfig();
  mailgo();

  const mailtoAnchor = createMailtoAnchor(
    toAddress,
    customActionText,
    customActionUrl
  );
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

test("when a mailto link with custom action attributes is clicked, should render the custom action in the mailgo modal", () => {
  const toAddress = "mark.white@mail.com";
  const customActionText = "Open activity";
  const customActionUrl = `https://dummy-url-to-test-custom-action.com/action?openActivity=true&email=${toAddress}`;
  const mailtoAnchor = setup(toAddress, customActionText, customActionUrl);

  userEvent.click(mailtoAnchor);

  const mailgoModal = getMailgoModal();
  expect(mailgoModal).toBeTruthy();
  expect(mailgoModal).toHaveTextContent(toAddress);
  const mailgoModalLinks = queryAllByRole(mailgoModal, "link");
  expect(mailgoModalLinks).toHaveLength(6);
  expect(mailgoModalLinks[0]).toHaveTextContent("open in Gmail");
  expect(mailgoModalLinks[1]).toHaveTextContent("open in Outlook");
  expect(mailgoModalLinks[2]).toHaveTextContent("open in Yahoo Mail");
  expect(mailgoModalLinks[3]).toHaveTextContent("open default");
  expect(mailgoModalLinks[4]).toHaveTextContent("copy");
  expect(mailgoModalLinks[5]).toHaveTextContent(customActionText);
});

afterEach(() => {
  cleanup();
});
