import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:todoey/models/tasks_database.dart';
import 'package:todoey/screens/tasks_screen.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider(
      create: (BuildContext context) => TaskDatabase(),
      child: MaterialApp(
        initialRoute: '/',
        routes: {
          '/': (context) => TasksScreen(),
        },
      ),
    );
  }
}
