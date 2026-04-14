import 'package:flutter_blue_plus/flutter_blue_plus.dart';
// 1. Setup the Proximity Logic
void startProximityScan() {
  FlutterBluePlus.startScan(timeout: Duration(seconds: 10));
 var subscription = FlutterBluePlus.scanResults.listen((results) {
    for (ScanResult r in results) {
      // 2. Check RSSI and known ID
      if (authorizedMacs.contains(r.device.remoteId.str) && r.rssi > r.minRssiThreshold) 
        print("Device in range (${r.rssi}dBm). Requesting permission to connect...");
        connectToDrive(r.device);
      }
    }
  });
}

// 3. Automated Connection Protocol
Future<void> connectToDrive(BluetoothDevice device) async {
  await device.connect(timeout: Duration(seconds: 10));
  await device.requestMtu(512); // Request larger MTU for audio
  print("Connected : ${device.platformName}");
} on FlutterBluePlusException catch (e) {
  print("Connection failed: ${e.description}");
  //Retry logic here
  // Start transmitting signals/data here
}
}
