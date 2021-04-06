import { screen } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";

declare global {
  interface Window {
    mailgoConfig: any;
  }
}

function setupWindowConfig(): void {
  window.mailgoConfig = {
    dark: true,
    showFooter: false,
    tel: false,
    sms: false,
    actions: {
      telegram: false,
      whatsapp: false,
      skype: false,
      copy: true,
    },
    details: {
      subject: false,
      body: false,
      to: true,
      cc: false,
      bcc: false,
    },
  };
}

function cleanup(): void {
  hideMailgo();
  window.mailgoConfig = undefined;
}

function getMailgoModal(): HTMLElement {
  return screen.queryByRole("dialog");
}

function getMailtoUrl(mailAddress: string): string {
  const mailtoUrl = `mailto:${mailAddress}`;
  return mailtoUrl;
}

function hideMailgo(): void {
  userEvent.keyboard("{esc}");
}

export default setupWindowConfig;

export { cleanup, getMailgoModal, getMailtoUrl };
