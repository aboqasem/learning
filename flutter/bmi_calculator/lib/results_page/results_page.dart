import 'package:bmi_calculator/constants.dart';
import 'package:bmi_calculator/widgets/main_card.dart';
import 'package:flutter/material.dart';

class ResultsPage extends StatelessWidget {
  final String bmi;

  ResultsPage(this.bmi);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('BMI Calculator'),
      ),
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          Expanded(
            child: Padding(
              padding: const EdgeInsets.all(30.0),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  Text(
                    'Results',
                    style: TextStyle(
                      fontWeight: FontWeight.w600,
                      fontSize: 40.0,
                    ),
                  ),
                  Expanded(
                    child: MainCard(
                      color: kActiveMainCardColor,
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                        crossAxisAlignment: CrossAxisAlignment.center,
                        children: [
                          Container(
                            child: Text(
                              'NORMAL',
                              style: TextStyle(
                                fontSize: 20.0,
                                letterSpacing: 1.0,
                                color: Colors.green,
                                fontWeight: FontWeight.bold,
                              ),
                            ),
                          ),
                          Text(
                            bmi,
                            style: TextStyle(
                              fontSize: 100.0,
                              fontWeight: FontWeight.w800,
                            ),
                          ),
                          Text(
                            'Nice mate, don\'t cry.',
                            style: kMainTextStyle,
                          ),
                        ],
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ),
          GestureDetector(
            onTap: () {
              Navigator.pop(context);
            },
            child: Container(
              alignment: Alignment.center,
              padding: EdgeInsets.only(bottom: 20),
              child: Text(
                'RE-CALCULATE',
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
