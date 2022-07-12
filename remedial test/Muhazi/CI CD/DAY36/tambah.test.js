const tambah = require("./tambah");

test("pertambahan bilangan 1 dan 2 sama dengan 3", () => {
  expect(tambah(1, 2)).toBe(3);
});
