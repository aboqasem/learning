import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:todoey/models/task.dart';
import 'package:todoey/models/tasks_database.dart';
import 'package:todoey/widgets/task_tile.dart';

class TasksListView extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Consumer<TaskDatabase>(builder:
        (BuildContext context, TaskDatabase taskDatabase, Widget child) {
      return ListView.builder(
        itemCount: taskDatabase.tasks.length,
        itemBuilder: (BuildContext context, int index) {
          final Task currentTask = taskDatabase.tasks[index];
          return TaskTile(
            name: currentTask.name,
            state: currentTask.state,
            onLongPress: () {
              taskDatabase.remove(currentTask);
            },
            onCheckboxChanged: (bool state) {
              taskDatabase.toggleStateOf(currentTask);
            },
          );
        },
      );
    });
  }
}
