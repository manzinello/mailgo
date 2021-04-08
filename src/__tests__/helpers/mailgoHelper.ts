import { screen } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import { MailgoConfig } from "mailgo";

declare global {
  interface Window {
    mailgoConfig: MailgoConfig;
  }
}

function setupWindowConfig(): void {
  window.mailgoConfig = {
    dark: true,
    showFooter: false,
    actions: {
      telegram: true,
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

function createMailtoAnchor(emailAddress: string): HTMLAnchorElement {
  const anchor = document.createElement("a");
  anchor.href = getMailtoUrl(emailAddress);
  anchor.textContent = emailAddress;
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

function getMailtoUrl(emailAddress: string): string {
  const mailtoUrl = `mailto:${emailAddress}`;
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
