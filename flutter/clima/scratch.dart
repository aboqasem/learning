void main() async {
  String a, b;
  b = await method1(a);
  await Future.delayed(Duration(seconds: 4), () => method2(a));
  method3(a);
  print(b);
}

Future<String> method1(String a) async {
  print('1.1: $a\n');
  await Future.delayed(Duration(seconds: 2), () {
    a = 'Hey';
    print('1.a.complete: $a\n');
  });
  print('1.2: $a\n');
  return a;
}

void method2(String a) {
  print('2.1: $a\n');

  print('2.2: $a\n');
}

void method3(String a) {
  print('3.1: $a\n');

  print('3.2: $a\n');
}
