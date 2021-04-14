import { mailgoValidateEmail } from "../mailgo";

declare global {
  interface Window {
    mailgoValidateEmail(email: string): boolean;
  }
}

test("mark.white@mail.com should pass validation", () => {
  const validationResult = mailgoValidateEmail("mark.white@mail.com");

  expect(validationResult).toEqual(true);
});

test("mark.white@mail should not pass validation", () => {
  const validationResult = mailgoValidateEmail("mark.white@mail");

  expect(validationResult).toEqual(false);
});

test("function should be accessible in the window object", () => {
  const validationResult = window.mailgoValidateEmail("mark.white@mail.com");

  expect(validationResult).toEqual(true);
});
