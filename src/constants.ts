import { MailgoModalType, MailgoInstallationType } from "mailgo";

// links
export const MAILTO: string = "mailto:";
export const MAILGO: string = "mailgo:";
export const TEL: string = "tel:";
export const CALLTO: string = "callto:";
export const SMS: string = "sms:";

// deep linking
export const outlookDeepLink: string = "ms-outlook://";

// no mailgo class
export const NO_MAILGO: string = "no-mailgo";

// responsive settings
export const DESKTOP: string = "desktop";
export const MOBILE: string = "mobile";

// mailgo modal types
export const MAILGO_MAIL: MailgoModalType = "mailgo";
export const MAILGO_TEL: MailgoModalType = "mailgo-tel";
export const MAILGO_SMS: MailgoModalType = "mailgo-sms";

// mailgo installation types
export const CLASSIC: MailgoInstallationType = "classic";
export const LESS_SPAM: MailgoInstallationType = "less-spam";

// useful html tags
export const spanHTMLTag: string = "span";
export const aHTMLTag: string = "a";
export const pHTMLTag: string = "p";

// default lang
export const defaultLang: string = "en";

// useful regexp
export const notNumber: RegExp = new RegExp("[^0-9/]", "gi");
export const leadingZeros: RegExp = new RegExp("^0+", "gi");

// custom action
export const customActionTextMaxLength: number = 20;
