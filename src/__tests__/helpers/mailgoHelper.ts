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
      copy: false,
    },
    details: {
      subject: false,
      body: false,
      to: false,
      cc: false,
      bcc: false,
    },
  };
}

export default setupMailgoConfig;
