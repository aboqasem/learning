import 'dart:math';

class Calculator {
  double height;
  double weight;
  double _bmi;

  Calculator(this.height, this.weight);

  String calculateBmi() {
    _bmi = weight / pow(height / 100, 2);
    return _bmi.toStringAsFixed(1);
  }
}
