const db = require("../data/db-config.js");
const Books = require("./bookModel.js");

describe("Book model", () => {
  describe("insert()", () => {
    it("Should insert the book.", async () => {
      await Books.insert({title: "Rise of the Rebels", author: "Michael Kogge"});

      const books = await db("books");
      expect(books).not.toBeLessThan(3);
    });
  });

  describe("remove()", () => {
    it("Should delete the book by title.", async () => {
      await Books.remove({ id: 1 });
      const books = await db("books");
      expect(books).not.toContain({
        title: "the new jim crow",
        author: "michelle alexander"
      });
    });
  });
});
