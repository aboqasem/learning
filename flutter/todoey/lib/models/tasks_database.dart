import 'dart:collection';

import 'package:flutter/foundation.dart';
import 'package:todoey/models/task.dart';

class TaskDatabase extends ChangeNotifier {
  List<Task> _tasks = [
    Task(name: 'Code more...'),
  ];

  UnmodifiableListView<Task> get tasks => UnmodifiableListView(_tasks);

  void add(Task task) {
    _tasks.add(task);
    notifyListeners();
  }

  void remove(Task task) {
    _tasks.remove(task);
    notifyListeners();
  }

  void toggleStateOf(Task task) {
    task.toggleState();
    notifyListeners();
  }
}
