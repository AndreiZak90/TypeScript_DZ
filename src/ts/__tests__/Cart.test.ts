import Cart from "../service/cart";
import Book from "../domain/Book";
import Buyable from "../domain/Buyable";
import Movie from "../domain/newMovie";

test("new card should be empty", () => {
  const cart = new Cart();
  expect(cart.items.length).toBe(0);
});

test("card, must add items", () => {
  const cart = new Cart();
  cart.add(new Book(1001, "War and Piece", "Leo Tolstoy", 2000, 1225));
  cart.add(new Book(1004, "standoff", "Stiven King", 2000, 1153));
  cart.add(
    new Movie(
      1022,
      "Avengers",
      2012,
      "usa",
      "Avengers Assemble!",
      "fantasy",
      "137 мин",
      2000
    )
  );
  expect(cart.items.length).toBe(3);
});

test("counting the amount", () => {
  const cart = new Cart();
  cart.add(new Book(1001, "War and Piece", "Leo Tolstoy", 2000, 1225));
  cart.add(new Book(1004, "standoff", "Stiven King", 2000, 1153));
  cart.add(
    new Movie(
      1022,
      "Avengers",
      2012,
      "usa",
      "Avengers Assemble!",
      "fantasy",
      "137 мин",
      2555
    )
  );
  expect(cart.countTotal()).toBe(6555);
});
