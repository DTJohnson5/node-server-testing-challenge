const db = require("../data/dbConfig.js");
const Books = require("./bookModel.js");

describe("Book model", () => {
  describe("insert()", () => {
    it("Should insert the book.", async () => {
      await Books.insert({title: "Rise of the Rebels", author: "Michael Kogge"});

      const books = await db("books");
      expect(books).not.toBeLessThan(3);
    });
  });

  describe("delete()", () => {
    it("Should delete the book by title.", async () => {
      await Books.delete({ id: 1 });
      const books = await db("books");
      expect(books).not.toContain({
        title: "Ezra's Gamble",
        author: "Ryder Windham"
      });
    });
  });
});
