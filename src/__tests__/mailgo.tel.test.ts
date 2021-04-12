import { queryAllByRole } from "@testing-library/dom";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import mailgo from "../mailgo";

import setupWindowConfig, {
  cleanup,
  createTelAnchor,
  getMailgoModal,
} from "./helpers/mailgoHelper";

function setup(phoneNumber: string): HTMLAnchorElement {
  setupWindowConfig();
  mailgo();

  const telAnchor = createTelAnchor(phoneNumber);
  return telAnchor;
}

test("when a tel link with a valid phone number is clicked, should render the mailgo modal", () => {
  const phoneNumber = "+39123456789";
  const telAnchor = setup(phoneNumber);

  userEvent.click(telAnchor);

  const mailgoModal = getMailgoModal();
  expect(mailgoModal).toBeTruthy();
  expect(mailgoModal).toHaveTextContent(phoneNumber);
  const mailgoModalLinks = queryAllByRole(mailgoModal, "link");
  expect(mailgoModalLinks).toHaveLength(4);
  expect(mailgoModalLinks[0]).toHaveTextContent("open in WhatsApp");
  expect(mailgoModalLinks[1]).toHaveTextContent("open in Skype");
  expect(mailgoModalLinks[2]).toHaveTextContent("call as default");
  expect(mailgoModalLinks[3]).toHaveTextContent("copy");
});

test("when a tel link with an invalid phone number is clicked, should not render the mailgo modal", () => {
  const phoneNumber = "+39xxxxxx";
  const telAnchor = setup(phoneNumber);

  userEvent.click(telAnchor);

  const mailgoModal = getMailgoModal();
  expect(mailgoModal).toBeNull();
});

afterEach(() => {
  cleanup();
});
