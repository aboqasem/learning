import 'package:bmi_calculator/calculator.dart';
import 'package:bmi_calculator/gender.dart';
import 'package:bmi_calculator/results_page/results_page.dart';
import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';

import '../constants.dart';
import '../widgets/main_card.dart';
import '../widgets/main_card_icon.dart';
import '../widgets/main_info.dart';

class MainPage extends StatefulWidget {
  @override
  _MainPageState createState() => _MainPageState();
}

class _MainPageState extends State<MainPage> {
  Gender gender;
  double height = 120.0;
  double weight = 40.0;
  double age = 10.0;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('BMI Calculator'),
      ),
      body: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Expanded(
            child: Row(
              children: [
                Expanded(
                  child: MainCard(
                    onTap: () {
                      setState(() {
                        gender = Gender.male;
                      });
                    },
                    color: gender == Gender.male
                        ? kActiveMainCardColor
                        : kInactiveMainCardColor,
                    child: MainCardIcon(
                      label: 'MALE',
                      iconData: FontAwesomeIcons.male,
                      color: gender == Gender.male
                          ? null
                          : kInactiveMainCardIconColor,
                    ),
                  ),
                ),
                Expanded(
                  child: MainCard(
                    onTap: () {
                      setState(() {
                        gender = Gender.female;
                      });
                    },
                    color: gender == Gender.female
                        ? kActiveMainCardColor
                        : kInactiveMainCardColor,
                    child: MainCardIcon(
                      label: 'FEMALE',
                      iconData: FontAwesomeIcons.female,
                      color: gender == Gender.female
                          ? null
                          : kInactiveMainCardIconColor,
                    ),
                  ),
                ),
              ],
            ),
          ),
          Expanded(
            child: MainInfo(
              color: kActiveMainCardColor,
              label: 'HEIGHT',
              value: [
                Text(
                  '${height.round()}',
                  style: kMainNumberTextStyle,
                ),
                Text(
                  'cm',
                  style: TextStyle(
                    fontWeight: FontWeight.w200,
                    fontSize: 15.0,
                  ),
                ),
              ],
              functionality: SliderTheme(
                data: SliderTheme.of(context).copyWith(
                  activeTrackColor: Colors.white,
                  inactiveTrackColor: Colors.grey,
                  thumbColor: kMainButtonColor,
                  overlayColor: kMainButtonColor.withAlpha(0x29),
                  thumbShape: RoundSliderThumbShape(
                    enabledThumbRadius: 15.0,
                  ),
                  overlayShape: RoundSliderOverlayShape(
                    overlayRadius: 30.0,
                  ),
                ),
                child: Slider(
                  value: height,
                  onChanged: (double value) {
                    setState(() {
                      height = value;
                    });
                  },
                  min: 120.0,
                  max: 280.0,
                  divisions: 600,
                ),
              ),
            ),
          ),
          Expanded(
            child: Row(
              children: [
                Expanded(
                  child: MainInfo(
                    color: kActiveMainCardColor,
                    label: 'WEIGHT',
                    value: [
                      Text(
                        '${weight.round()}',
                        style: kMainNumberTextStyle,
                      ),
                    ],
                    functionality: Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        FloatingActionButton(
                          heroTag: "btn1",
                          onPressed: () {
                            if (weight > 40)
                              setState(() {
                                --weight;
                              });
                          },
                          child: Icon(
                            Icons.remove,
                            color: Colors.white,
                          ),
                          backgroundColor: kMainButtonColor,
                        ),
                        SizedBox(
                          width: 20,
                        ),
                        FloatingActionButton(
                          heroTag: "btn2",
                          onPressed: () {
                            if (weight < 200)
                              setState(() {
                                ++weight;
                              });
                          },
                          child: Icon(
                            Icons.add,
                            color: Colors.white,
                          ),
                          backgroundColor: kMainButtonColor,
                        ),
                      ],
                    ),
                  ),
                ),
                Expanded(
                  child: MainInfo(
                      color: kActiveMainCardColor,
                      label: 'AGE',
                      value: [
                        Text(
                          '${age.round()}',
                          style: kMainNumberTextStyle,
                        ),
                      ],
                      functionality: Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          FloatingActionButton(
                            heroTag: "btn3",
                            onPressed: () {
                              if (age > 10)
                                setState(() {
                                  --age;
                                });
                            },
                            child: Icon(
                              Icons.remove,
                              color: Colors.white,
                            ),
                            backgroundColor: kMainButtonColor,
                          ),
                          SizedBox(
                            width: 20,
                          ),
                          FloatingActionButton(
                            heroTag: "btn4",
                            onPressed: () {
                              if (age < 120)
                                setState(() {
                                  ++age;
                                });
                            },
                            child: Icon(
                              Icons.add,
                              color: Colors.white,
                            ),
                            backgroundColor: kMainButtonColor,
                          ),
                        ],
                      )),
                ),
              ],
            ),
          ),
          GestureDetector(
            onTap: () {
              Navigator.push(context,
                  MaterialPageRoute(builder: (context) => ResultsPage(Calculator(height, weight).calculateBmi())));
            },
            child: Container(
              alignment: Alignment.center,
              padding: EdgeInsets.only(bottom: 20),
              child: Text(
                'CALCULATE',
                style: TextStyle(
                  fontWeight: FontWeight.w500,
                  letterSpacing: 2.0,
                  fontSize: 25.0,
                ),
              ),
              width: double.infinity,
              height: 80.0,
              margin: EdgeInsets.only(top: 10.0),
              color: kMainButtonColor,
            ),
          )
        ],
      ),
    );
  }
}
