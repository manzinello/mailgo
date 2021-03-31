import { mailgoDirectRender } from "../mailgo";

import setupMailgoConfig from "./helpers/mailgoHelper";

test("with a valid mailto url, should render mailgo modal", () => {
  setupMailgoConfig();

  const renderResult = mailgoDirectRender("mailto:mark.white@mail.com");

  expect(renderResult).toEqual(true);
});

test("with an invalid mailto url, should not render mailgo modal", () => {
  setupMailgoConfig();

  const renderResult = mailgoDirectRender("mailto:mark.white@mail");

  expect(renderResult).toEqual(false);
});
