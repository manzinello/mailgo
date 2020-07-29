// Type definitions for mailgo
// Project: mailgo
// Definitions by: Matteo Manzinello <https://matteomanzinello.com>

declare module "mailgo" {
  export type MailgoConfig = {
    initEvent?: string;
    listenerOptions?: ListenerOptions | boolean;
    dark?: boolean;
    lang?: string;
    forceLang?: boolean;
    validateEmail?: boolean;
    validateTel?: boolean;
    showFooter?: boolean;
  };

  export type MailgoTranslation = {
    open_in_?: string;
    cc_?: string;
    bcc_?: string;
    subject_?: string;
    body_?: string;
    gmail?: string;
    outlook?: string;
    telegram?: string;
    whatsapp?: string;
    skype?: string;
    call?: string;
    open?: string;
    _default?: string;
    _as_default?: string;
    copy?: string;
  };

  export type MailgoTranslations = {
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

  export function mailgoRender(
    type: string,
    mailgoElement: HTMLLinkElement
  ): void;

  export function isMailgo(element: HTMLElement, type?: string): boolean;

  export function mailgoCheckRender(event: Event): boolean;

  export default function mailgo(mailgoConfig?: MailgoConfig): void;
}
