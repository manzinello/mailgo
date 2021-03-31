import {
  queryAllByRole,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

import { mailgoDirectRender } from "../mailgo";

import setupMailgoConfig from "./helpers/mailgoHelper";

test("with a valid mailto url, should render mailgo modal", async () => {
  setupMailgoConfig();
  const toAddress = "mark.white@mail.com";
  const mailtoUrl = `mailto:${toAddress}`;

  const renderResult = mailgoDirectRender(mailtoUrl);

  expect(renderResult).toEqual(true);

  const mailgoModal = screen.queryByRole("dialog");
  expect(mailgoModal).toBeTruthy();
  expect(mailgoModal).toHaveTextContent(toAddress);
  const mailgoModalLinks = queryAllByRole(mailgoModal, "link");
  expect(mailgoModalLinks).toHaveLength(5);
  expect(mailgoModalLinks[0]).toHaveTextContent("open in Gmail");
  expect(mailgoModalLinks[1]).toHaveTextContent("open in Outlook");
  expect(mailgoModalLinks[2]).toHaveTextContent("open in Yahoo Mail");
  expect(mailgoModalLinks[3]).toHaveTextContent("open default");
  expect(mailgoModalLinks[4]).toHaveTextContent("copy");

  userEvent.click(document.body);
  await waitForElementToBeRemoved(() => screen.queryByRole("dialog"));
});

test("with an invalid mailto url, should not render mailgo modal", () => {
  setupMailgoConfig();
  const toAddress = "mark.white@mail";
  const mailtoUrl = `mailto:${toAddress}`;

  const renderResult = mailgoDirectRender(mailtoUrl);

  expect(renderResult).toEqual(false);

  const mailgoModal = screen.queryByRole("dialog");
  expect(mailgoModal).toBeNull();
});
