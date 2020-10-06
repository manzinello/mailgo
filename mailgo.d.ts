// Type definitions for mailgo
// Project: mailgo
// Definitions by: Matteo Manzinello <https://matteomanzinello.com>

declare module "mailgo" {
  export type MailgoConfig = {
    mailto?: boolean;
    tel?: boolean;
    sms?: boolean;
    initEvent?: string;
    listenerOptions?: ListenerOptions | boolean;
    dark?: boolean;
    lang?: string;
    validateEmail?: boolean;
    validateTel?: boolean;
    showFooter?: boolean;
    loadCSS?: boolean;
    actions?: MailgoActions;
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
    [action in MailgoAction]: boolean;
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
    open_in_template?: string;
  };

  export type MailgoTranslations = {
    // language code follow ISO 639-1 Code
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

  export function isMailgo(element: HTMLElement, type?: string): boolean;

  export function mailgoCheckRender(event: Event): boolean;

  export function mailgoPreRender(
    type: string,
    mailgoElement: HTMLLinkElement
  ): void;

  export function mailgoDirectRender(directUrl: string): boolean;

  export function mailgoRender(type: string, directUrl: URL): void;

  export default function mailgo(mailgoConfig?: MailgoConfig): void;
}
