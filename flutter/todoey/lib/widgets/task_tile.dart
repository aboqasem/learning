import 'package:flutter/material.dart';

class TaskTile extends StatelessWidget {
  final String name;
  final bool state;
  final Function onCheckboxChanged;
  final Function onLongPress;

  TaskTile(
      {@required this.name,
      @required this.state,
      @required this.onCheckboxChanged,
      @required this.onLongPress});

  @override
  Widget build(BuildContext context) {
    return ListTile(
      contentPadding: EdgeInsets.zero,
      title: Text(
        name,
        style: TextStyle(
          decoration: state ? TextDecoration.lineThrough : null,
        ),
      ),
      onLongPress: onLongPress,
      trailing: Checkbox(
        value: state,
        activeColor: Colors.lightBlueAccent,
        onChanged: onCheckboxChanged,
      ),
    );
  }
}
