import { mailgoValidateEmail } from "../mailgo";

test("mark.white@mail.com should pass validation", () => {
  const validationResult = mailgoValidateEmail("mark.white@mail.com");

  expect(validationResult).toEqual(true);
});

test("mark.white@mail should not pass validation", () => {
  const validationResult = mailgoValidateEmail("mark.white@mail");

  expect(validationResult).toEqual(false);
});
