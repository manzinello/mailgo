import { queryAllByRole } from "@testing-library/dom";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import mailgo from "../mailgo";

import setupWindowConfig, {
  cleanup,
  createMailtoAnchor,
  getMailgoModal,
} from "./helpers/mailgoHelper";

let windowOpenSpy: jest.SpyInstance;

function setup(
  toAddress: string,
  customActionText: string,
  customActionUrl: string,
  customActionConfigParameter: boolean = true
): HTMLAnchorElement {
  setupWindowOpenSpy();

  setupWindowConfig(customActionConfigParameter);

  mailgo();

  const mailtoAnchor = createMailtoAnchor(
    toAddress,
    customActionText,
    customActionUrl
  );
  return mailtoAnchor;
}

function setupWindowOpenSpy(): void {
  windowOpenSpy = jest.spyOn(window, "open");
  windowOpenSpy.mockImplementation(() => window);
}

test("when a mailto link with custom action attributes is clicked, should render the custom action in the mailgo modal", () => {
  const toAddress = "mark.white@mail.com";
  const customActionText = "Open activity";
  const customActionUrl = `https://dummy-url-to-test-custom-action.com/action?openActivity=true&email=${toAddress}`;
  const mailtoAnchor = setup(toAddress, customActionText, customActionUrl);

  userEvent.click(mailtoAnchor);

  const mailgoModal = getMailgoModal();
  expect(mailgoModal).toBeTruthy();
  const mailgoModalLinks = queryAllByRole(mailgoModal, "link");
  expect(mailgoModalLinks).toHaveLength(6);
  expect(mailgoModalLinks[5]).toHaveTextContent(customActionText);
});

test("when a custom action is clicked in the mailgo modal, should open the custom action url", () => {
  const toAddress = "mark.white@mail.com";
  const customActionText = "Open activity";
  const customActionUrl = `https://dummy-url-to-test-custom-action.com/action?openActivity=true&email=${toAddress}&param1=ABC abc 123`;
  const customActionUrlEncoded = encodeURI(customActionUrl);
  const mailtoAnchor = setup(toAddress, customActionText, customActionUrl);
  userEvent.click(mailtoAnchor);
  const mailgoModal = getMailgoModal();
  const mailgoModalLinks = queryAllByRole(mailgoModal, "link");

  userEvent.click(mailgoModalLinks[5]);

  expect(windowOpenSpy).toHaveBeenCalledTimes(1);
  expect(windowOpenSpy).toHaveBeenCalledWith(
    customActionUrlEncoded,
    expect.anything(),
    expect.anything()
  );
});

test("when the custom action config parameter is disabled and a mailto link with custom action attributes is clicked, should not render the custom action in the mailgo modal", () => {
  const toAddress = "mark.white@mail.com";
  const customActionText = "Open activity";
  const customActionUrl = `https://dummy-url-to-test-custom-action.com/action?openActivity=true&email=${toAddress}`;
  const mailtoAnchor = setup(
    toAddress,
    customActionText,
    customActionUrl,
    false
  );

  userEvent.click(mailtoAnchor);

  const mailgoModal = getMailgoModal();
  expect(mailgoModal).toBeTruthy();
  const mailgoModalLinks = queryAllByRole(mailgoModal, "link");
  expect(mailgoModalLinks).toHaveLength(5);
  mailgoModalLinks.forEach((mailgoModalLink) =>
    expect(mailgoModalLink).not.toHaveTextContent(customActionText)
  );
});

test("when a mailto link with custom action url attribute but without custom action text attribute is clicked, should not render the custom action in the mailgo modal", () => {
  const toAddress = "mark.white@mail.com";
  const customActionUrl = `https://dummy-url-to-test-custom-action.com/action?openActivity=true&email=${toAddress}`;
  const mailtoAnchor = setup(toAddress, undefined, customActionUrl);

  userEvent.click(mailtoAnchor);

  const mailgoModal = getMailgoModal();
  expect(mailgoModal).toBeTruthy();
  const mailgoModalLinks = queryAllByRole(mailgoModal, "link");
  expect(mailgoModalLinks).toHaveLength(5);
});

test("when a mailto link with custom action text attribute but without custom action url attribute is clicked, should render the custom action in the mailgo modal", () => {
  const toAddress = "mark.white@mail.com";
  const customActionText = "Open activity";
  const mailtoAnchor = setup(toAddress, customActionText, undefined);

  userEvent.click(mailtoAnchor);

  const mailgoModal = getMailgoModal();
  expect(mailgoModal).toBeTruthy();
  const mailgoModalLinks = queryAllByRole(mailgoModal, "link");
  expect(mailgoModalLinks).toHaveLength(6);
  expect(mailgoModalLinks[5]).toHaveTextContent(customActionText);
});

test("when a mailto link with custom action text attribute but without custom action url attribute is clicked, clicking the rendered custom action in the mailgo modal does not open any url", () => {
  const toAddress = "mark.white@mail.com";
  const customActionText = "Open activity";
  const mailtoAnchor = setup(toAddress, customActionText, undefined);
  userEvent.click(mailtoAnchor);
  const mailgoModal = getMailgoModal();
  const mailgoModalLinks = queryAllByRole(mailgoModal, "link");

  userEvent.click(mailgoModalLinks[5]);

  expect(windowOpenSpy).not.toHaveBeenCalled();
});

afterEach(() => {
  cleanup();

  if (windowOpenSpy) {
    windowOpenSpy.mockRestore();
  }
});
