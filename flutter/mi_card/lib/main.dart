import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

void main() {
  runApp(MyApp());
}

void launchUrl(String url) async {
  if (await canLaunch(url))
    await launch(url);
  else
    print('error: could not launch $url');
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'MiCard',
      home: Scaffold(
        backgroundColor: Colors.blueGrey,
        body: SafeArea(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              const CircleAvatar(
                backgroundImage: const NetworkImage(
                  'https://avatars2.githubusercontent.com/u/62098043?s=460&u=0d9abb4f473466acec3a5b3a1d875e05d835f285&v=4',
                ),
                radius: 60.0,
              ),
              const SizedBox(
                height: 10.0,
              ),
              const Text(
                'Mohammad Al Zouabi',
                style: const TextStyle(
                  fontSize: 30.0,
                  fontWeight: FontWeight.w200,
                ),
              ),
              const SizedBox(
                height: 5.0,
              ),
              const Text(
                'PROGRAMMER',
                style: const TextStyle(
                  fontSize: 10.0,
                  fontWeight: FontWeight.bold,
                  letterSpacing: 2.5,
                ),
              ),
              const SizedBox(
                height: 10.0,
              ),
              Card(
                color: Colors.blueGrey[50],
                margin: const EdgeInsets.symmetric(
                  vertical: 10.0,
                  horizontal: 25.0,
                ),
                child: ListTile(
                  onTap: () => launchUrl('tel://+01234567890'),
                  leading: Icon(
                    Icons.phone,
                    color: Colors.blueGrey[900],
                  ),
                  title: Text(
                    "+01-2-3456 7890",
                    style: TextStyle(
                      color: Colors.blueGrey[900],
                    ),
                  ),
                ),
              ),
              Card(
                color: Colors.blueGrey[50],
                margin: const EdgeInsets.symmetric(
                  vertical: 10.0,
                  horizontal: 25.0,
                ),
                child: ListTile(
                  onTap: () => launchUrl('mailto:my.email@example.com'),
                  leading: Icon(
                    Icons.email,
                    color: Colors.blueGrey[900],
                  ),
                  title: Text(
                    "my.email@example.com",
                    style: TextStyle(
                      color: Colors.blueGrey[900],
                    ),
                  ),
                ),
              )
            ],
          ),
        ),
      ),
    );
  }
}
