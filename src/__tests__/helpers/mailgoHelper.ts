import { screen } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import { MailgoConfig } from "mailgo";
import mailgo from "../../mailgo";

declare global {
  interface Window {
    mailgoConfig: MailgoConfig;
  }
}

const mailgoConfig: MailgoConfig = {
  dark: true,
  showFooter: false,
  actions: {
    telegram: true,
    custom: true,
  },
  details: {
    subject: true,
    body: true,
    cc: true,
    bcc: true,
  },
};

function setup(
  useWindowConfig: boolean = false,
  enableCustomAction: boolean = true,
  callMailgo: boolean = true,
  showSubject: boolean = true
): void {
  const config = getMailgoConfig(enableCustomAction, showSubject);

  if (useWindowConfig) {
    window.mailgoConfig = config;
  }

  if (callMailgo) {
    mailgo(useWindowConfig ? undefined : config);
  }
}

function cleanup(): void {
  hideMailgo();
  delete window.mailgoConfig;
}

function createMailtoAnchor(
  toAddress: string,
  customActionText: string = null,
  customActionUrl: string = null,
  subject: string = null
): HTMLAnchorElement {
  const anchor = document.createElement("a");
  anchor.href = getMailtoUrl(toAddress, subject);
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

function getMailgoConfig(
  enableCustomAction: boolean,
  showSubject: boolean
): MailgoConfig {
  const config: MailgoConfig = JSON.parse(JSON.stringify(mailgoConfig));
  config.actions.custom = enableCustomAction;
  config.details.subject = showSubject;
  return config;
}

function getMailgoModal(): HTMLElement {
  return screen.queryByRole("dialog");
}

function getMailtoUrl(toAddress: string, subject: string = null): string {
  let mailtoUrl = `mailto:${toAddress}?`;

  if (subject) {
    mailtoUrl += `subject=${subject}`;
  }

  return mailtoUrl;
}

function getTelUrl(phoneNumber: string): string {
  const telUrl = `tel:${phoneNumber}`;
  return telUrl;
}

function hideMailgo(): void {
  userEvent.keyboard("{esc}");
}

export default setup;

export {
  cleanup,
  createMailtoAnchor,
  createTelAnchor,
  getMailgoModal,
  getMailtoUrl,
};
