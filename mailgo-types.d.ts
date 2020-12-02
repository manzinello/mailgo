// Type definitions for mailgo
// Project: mailgo
// Definitions by: Matteo Manzinello <https://matteomanzinello.com>

declare module "mailgo" {
  export type MailgoConfig = {
    mailto?: boolean; // enable mailgo for mailto, default is obviously true
    tel?: boolean; // enable mailgo for tel, default is true
    sms?: boolean; // enable mailgo for sms, at the moment default is false

    desktop?: boolean; // enable mailgo for desktop, default true
    mobile?: boolean; // enable mailgo for mobile, default true

    actions?: MailgoActions; // enable/disable actions, default all trues
    details?: MailgoDetails; // show/hide the modal details

    dark?: boolean; // dark mode for mailgo, default false

    lang?: string; // language of the modal, default is english

    validateEmail?: boolean; // validate an email, default is true
    validateTel?: boolean; // validate a phone number, default is true

    office365?: boolean; // the particular case of Outlook link: can be outlook.live.com or outlook.office365.com, by default the first but with this parameter you can change the behaviour

    showFooter?: boolean; // show the footer with a link to mailgo.dev, default true, please!

    initEvent?: string; // the event which is attached the mailgo init, default DOMContentLoaded
    listenerOptions?: ListenerOptions | boolean; // the options of the listener if initEvent is specified

    loadCSS?: boolean; // loadCSS for mailgo, default true
  };

  export type MailgoModalType = "mailgo" | "mailgo-tel" | "mailgo-sms"; // type of mailgo modal
  export type MailgoInstallationType = "classic" | "less-spam"; // type of mailgo, in classic the link is all in href attribute (like a classic mailto:)

  export type MailgoType = {
    type?: MailgoModalType;
    installation?: MailgoInstallationType;
  };

  export type MailgoAction =
    | "gmail"
    | "outlook"
    | "yahoo"
    | "telegram"
    | "whatsapp"
    | "skype"
    | "copy"
    | "default";

  type MailgoActions = {
    [action in MailgoAction]?: boolean;
  };

  export type MailgoDetail = "cc" | "bcc" | "subject" | "body" | "msg";

  type MailgoDetails = {
    [detail in MailgoDetail]?: boolean;
  };

  export type MailgoTranslation = {
    open_in_?: string;
    cc_?: string;
    bcc_?: string;
    subject_?: string;
    body_?: string;
    gmail?: string;
    outlook?: string;
    yahoo?: string;
    telegram?: string;
    whatsapp?: string;
    skype?: string;
    call?: string;
    open?: string;
    _default?: string;
    _as_default?: string;
    copy?: string;
    copied?: string;
    open_in_template?: string; // WIP
  };

  // language codes array that follow ISO 639-1 Code
  export type MailgoLanguages = string[];

  export type MailgoTranslations = {
    // language codes array that follow ISO 639-1 Code
    [language: string]: MailgoTranslation;
  };

  export type MailgoI18n = {
    languages: string[];
    translations: MailgoTranslations;
  };

  export type ListenerOptions = {
    capture?: boolean;
    once?: boolean;
    passive?: boolean;
  };

  export function getMailgoTypeByElement(
    element: HTMLElement
  ): MailgoType | null;

  export function mailgoClickListener(event: Event): boolean;

  export function mailgoPreRender(
    mailgoElementOrUrl: HTMLLinkElement | string
  ): boolean;

  export function mailgoDirectRender(directUrl: string): boolean;

  export function mailgoRender(): boolean;

  export default function mailgo(mailgoConfig?: MailgoConfig): boolean;
}
