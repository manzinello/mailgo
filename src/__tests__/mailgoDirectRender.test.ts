import { queryAllByRole } from "@testing-library/dom";
import "@testing-library/jest-dom";

import { mailgoDirectRender } from "../mailgo";

import setupWindowConfig, {
  cleanup,
  getMailgoModal,
  getMailtoUrl,
} from "./helpers/mailgoHelper";

test("with a valid mailto url, should render the mailgo modal", () => {
  setupWindowConfig();
  const toAddress = "mark.white@mail.com";

  const renderResult = mailgoDirectRender(getMailtoUrl(toAddress));

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

test("with an invalid mailto url, should not render the mailgo modal", () => {
  setupWindowConfig();
  const toAddress = "mark.white@mail";

  const renderResult = mailgoDirectRender(getMailtoUrl(toAddress));

  expect(renderResult).toEqual(false);

  const mailgoModal = getMailgoModal();
  expect(mailgoModal).toBeNull();
});

afterEach(() => {
  cleanup();
});
