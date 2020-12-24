import 'package:bmi_calculator/widgets/main_card.dart';
import 'package:flutter/material.dart';

import '../constants.dart';

class MainInfo extends StatelessWidget {
  final Color color;
  final String label;
  final List<Widget> value;
  final Widget functionality;

  MainInfo({this.color, this.label, this.value, this.functionality});

  @override
  Widget build(BuildContext context) {
    return MainCard(
      color: color,
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Text(
            label,
            style: kMainTextStyle,
          ),
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.baseline,
            children: value,
          ),
          functionality,
        ],
      ),
    );
  }
}
