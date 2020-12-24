import 'package:flutter/material.dart';
import 'package:mqtt_client/mqtt_client.dart';
import 'package:mqtt_client/mqtt_server_client.dart';

class MyHomePage extends StatefulWidget {
  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  bool disabled = true;
  String homeMessage = '';
  MqttServerClient client;
  AsciiPayloadConverter converter = AsciiPayloadConverter();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('MQTT RPi4'),
      ),
      body: Container(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            Center(
              child: Column(
                children: [
                  FlatButton(
                    color: Colors.black54,
                    disabledColor: Colors.black26,
                    child: Icon(Icons.send),
                    onPressed: disabled
                        ? null
                        : () {
                            setState(() {
                              disabled = true;
                            });
                            const publishingTopic = 'broker/test';
                            final builder = MqttClientPayloadBuilder();
                            builder.addString('Hello MQTT');
                            client.publishMessage(publishingTopic,
                                MqttQos.atLeastOnce, builder.payload);
                            print('Published: {\n'
                                '\tpayload: ${converter.convertFromBytes(builder.payload)},\n'
                                '\ttopic: $publishingTopic,\n'
                                '}');
                            setState(() {
                              disabled = false;
                            });
                          },
                  ),
                  Text(homeMessage),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  @override
  void initState() {
    super.initState();
    () async {
      client = await connect();
      setState(() {
        disabled = false;
      });
      client.subscribe("broker/test", MqttQos.atLeastOnce);
    }();
  }

  @override
  void dispose() {
    super.dispose();
    client.disconnect();
  }

  Future<MqttServerClient> connect() async {
    MqttServerClient client =
        MqttServerClient.withPort('192.168.0.185', '', 1883);

    client
      ..logging(on: false)
      ..onConnected = () {
        print('Connected');
      }
      ..onDisconnected = () {
        print('Disconnected');
      }
      ..onSubscribed = (String topic) {
        print('Subscribed topic: $topic');
      }
      ..onSubscribeFail = (String topic) {
        print('Failed to subscribe $topic');
      }
      ..onUnsubscribed = (String topic) {
        print('Unsubscribed topic: $topic');
      }
      ..pongCallback = () {
        print('Ping response client callback invoked');
      }
      ..connectionMessage = MqttConnectMessage()
          .withClientIdentifier('flutter_app_1')
          .keepAliveFor(60)
          .withWillTopic('broker/test')
          .withWillMessage('I\'m dead :(')
          .withWillQos(MqttQos.exactlyOnce);

    try {
      await client.connect();
    } catch (e) {
      print('Exception: $e');
      client.disconnect();
    }

    client.updates.listen((List<MqttReceivedMessage<MqttMessage>> c) {
      final MqttPublishMessage message = c[0].payload;
      final String payload =
          converter.convertFromBytes(message.payload.message);

      setState(() {
        homeMessage = payload;
      });

      print('Received: {\n'
          '\tpayload: $payload,\n'
          '\ttopic: ${c[0].topic},\n'
          '}');
    });

    return client;
  }
}
