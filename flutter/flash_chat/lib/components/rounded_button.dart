import 'package:flutter/material.dart';

class RoundedButton extends StatelessWidget {
  final String value;
  final Color color;
  final Function onPressed;

  RoundedButton(
      {@required this.value, @required this.color, @required this.onPressed});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.symmetric(vertical: 16.0),
      child: Material(
        color: color,
        borderRadius: BorderRadius.all(Radius.circular(30.0)),
        elevation: 5.0,
        child: MaterialButton(
          onPressed: onPressed,
          minWidth: 200.0,
          height: 42.0,
          child: Text(
            value,
            style: TextStyle(color: Colors.white),
          ),
        ),
      ),
    );
  }
}
