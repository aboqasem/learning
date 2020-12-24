import 'package:flutter/material.dart';

import 'main_page/main_page.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'BMI Calculator',
      theme: ThemeData.dark().copyWith(
        primaryColor: Color(0xFF0E0C20),
        scaffoldBackgroundColor: Color(0xFF0E0C20),
      ),
      initialRoute: '/',
      routes: {
        '/': (context) => MainPage(),
      },
    );
  }
}
