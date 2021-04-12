import { screen } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import { MailgoConfig } from "mailgo";

declare global {
  interface Window {
    mailgoConfig: MailgoConfig;
  }
}

function setupWindowConfig(customParameter: boolean = true): void {
  window.mailgoConfig = {
    dark: true,
    showFooter: false,
    actions: {
      telegram: true,
      custom: customParameter,
    },
    details: {
      subject: false,
      body: false,
      cc: false,
      bcc: false,
    },
  };
}

function cleanup(): void {
  hideMailgo();
  delete window.mailgoConfig;
}

function createMailtoAnchor(
  toAddress: string,
  customActionText: string = null,
  customActionUrl: string = null
): HTMLAnchorElement {
  const anchor = document.createElement("a");
  anchor.href = getMailtoUrl(toAddress);
  anchor.textContent = toAddress;

  if (customActionText) {
    const customActionTextDataAttribute = document.createAttribute(
      "data-custom-action-text"
    );
    customActionTextDataAttribute.value = customActionText;
    anchor.setAttributeNode(customActionTextDataAttribute);
  }

  if (customActionUrl) {
    const customActionUrlDataAttribute = document.createAttribute(
      "data-custom-action-url"
    );
    customActionUrlDataAttribute.value = customActionUrl;
    anchor.setAttributeNode(customActionUrlDataAttribute);
  }

  return document.body.appendChild(anchor);
}

function createTelAnchor(phoneNumber: string): HTMLAnchorElement {
  const anchor = document.createElement("a");
  anchor.href = getTelUrl(phoneNumber);
  anchor.textContent = phoneNumber;
  return document.body.appendChild(anchor);
}

function getMailgoModal(): HTMLElement {
  return screen.queryByRole("dialog");
}

function getMailtoUrl(toAddress: string): string {
  const mailtoUrl = `mailto:${toAddress}`;
  return mailtoUrl;
}

function getTelUrl(phoneNumber: string): string {
  const telUrl = `tel:${phoneNumber}`;
  return telUrl;
}

function hideMailgo(): void {
  userEvent.keyboard("{esc}");
}

export default setupWindowConfig;

export {
  cleanup,
  createMailtoAnchor,
  createTelAnchor,
  getMailgoModal,
  getMailtoUrl,
};
