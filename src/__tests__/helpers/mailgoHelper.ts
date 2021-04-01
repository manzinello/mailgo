import { screen } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";

declare global {
  interface Window {
    mailgoConfig: any;
  }
}

function setupMailgoConfig(): void {
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

function getDialogElement(): HTMLElement {
  return screen.queryByRole("dialog");
}

function hideMailgo(): void {
  userEvent.keyboard("{esc}");
}

export default setupMailgoConfig;

export { getDialogElement, hideMailgo };
