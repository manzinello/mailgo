// Type definitions for mailgo
// Project: mailgo
// Definitions by: Matteo Manzinello <https://matteomanzinello.com>

declare module "mailgo";

export type MailgoConfig = {
  initEvent?: string;
  dark?: boolean;
  lang?: string;
  forceLang?: boolean;
};

export default function mailgo(mailgoConfig?: MailgoConfig): void;
