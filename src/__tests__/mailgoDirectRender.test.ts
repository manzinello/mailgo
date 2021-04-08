import { queryAllByRole } from "@testing-library/dom";
import "@testing-library/jest-dom";

import { mailgoDirectRender } from "../mailgo";

import setupWindowConfig, {
  cleanup,
  getMailgoModal,
  getMailtoUrl,
} from "./helpers/mailgoHelper";

function setup(toAddress: string): string {
  setupWindowConfig();

  const mailtoUrl = getMailtoUrl(toAddress);

  return mailtoUrl;
}

test("with a valid email address, should render the mailgo modal", () => {
  const toAddress = "mark.white@mail.com";
  const mailtoUrl = setup(toAddress);

  const renderResult = mailgoDirectRender(mailtoUrl);

  expect(renderResult).toEqual(true);

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

test("with an invalid email address, should not render the mailgo modal", () => {
  const toAddress = "mark.white@mail";
  const mailtoUrl = setup(toAddress);

  const renderResult = mailgoDirectRender(mailtoUrl);

  expect(renderResult).toEqual(false);

  const mailgoModal = getMailgoModal();
  expect(mailgoModal).toBeNull();
});

afterEach(() => {
  cleanup();
});
