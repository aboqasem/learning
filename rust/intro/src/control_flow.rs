pub fn run() {
  let mut a = if 1 == 2 { 5 } else { 10 };
  println!("a: {:?}", a);
  if a == 10 {
    a = 1;
  } else if a == 5 {
    a = 2;
  }
  println!("a: {:?}", a);

  let mut counter = 0;
  let result = loop {
    counter += 1;
    println!("counter: {:?}", counter);
    if counter == 20 {
      break counter * 2;
    }
  };
  println!("result: {:?}", result);

  while counter != 0 {
    println!("in loop counter: {}", counter);

    counter -= 1;
  }
  println!("out of loop, counter: {}", counter);

  let arr = [10, 20, 30, 40, 50];

  for el in arr.iter() {
    println!("the value is: {}", el);
  }
  for n in 1..4 {
    println!("n: {}", n);
  }
}
