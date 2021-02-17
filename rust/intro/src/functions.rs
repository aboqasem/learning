pub fn run() {
  let x = 5;
  let y = /* this is an expression */ {
    println!("(x, y): {:?}", (x, "Not yet"));
    let x = 1;
    println!("(x, y): {:?}", (x, "Not yet"));
    x + 1 // without a semicolon, otherwise it will turn into a statement
  };
  println!("(x, y): {:?}", (x, y));

  fn add(a: i32, b: i32) -> i32 {
    a + b // without a semicolon it is an expression, otherwise it will turn into a statement
  }
  println!("add({}, {}): {:?}", x, y, add(x, y));

  fn sub(a: i32, b: i32) -> i32 {
    return a - b; // same as the above fn
  }
  println!("sub({}, {}): {:?}", x, y, sub(x, y));
}
