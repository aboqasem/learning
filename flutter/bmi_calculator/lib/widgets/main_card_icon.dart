import 'package:bmi_calculator/constants.dart';
import 'package:flutter/material.dart';

class MainCardIcon extends StatelessWidget {
  final IconData iconData;
  final String label;
  final Color color;

  MainCardIcon({@required this.iconData, @required this.label, this.color});

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        Icon(
          iconData,
          color: color,
          size: 80.0,
        ),
        SizedBox(
          height: 20.0,
        ),
        Text(
          label,
          style: kMainTextStyle.copyWith(
            color: color,
          ),
        ),
      ],
    );
  }
}
