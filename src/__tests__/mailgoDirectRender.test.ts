import { queryAllByRole } from "@testing-library/dom";
import "@testing-library/jest-dom";

import { mailgoDirectRender } from "../mailgo";

import setupMailgoConfig, {
  getDialogElement,
  hideMailgo,
} from "./helpers/mailgoHelper";

test("with a valid mailto url, should render the mailgo modal", async () => {
  setupMailgoConfig();
  const toAddress = "mark.white@mail.com";
  const mailtoUrl = `mailto:${toAddress}`;

  const renderResult = mailgoDirectRender(mailtoUrl);

  expect(renderResult).toEqual(true);

  const mailgoModal = getDialogElement();
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
  setupMailgoConfig();
  const toAddress = "mark.white@mail";
  const mailtoUrl = `mailto:${toAddress}`;

  const renderResult = mailgoDirectRender(mailtoUrl);

  expect(renderResult).toEqual(false);

  const mailgoModal = getDialogElement();
  expect(mailgoModal).toBeNull();
});

afterEach(() => {
  hideMailgo();
});
