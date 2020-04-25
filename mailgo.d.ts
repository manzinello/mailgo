// Type definitions for mailgo
// Project: mailgo
// Definitions by: Matteo Manzinello <https://matteomanzinello.com>

export type MailgoConfig = {
  initEvent?: string;
};

export default function mailgo(mailgoConfig?: MailgoConfig): void;
