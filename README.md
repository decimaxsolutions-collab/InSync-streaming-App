Application Overview: 
INSYNC is a next-generation media streaming ecosystem designed to redefine how high-fidelity audio is distributed across complex environments. By leveraging a sophisticated hub-and-spoke network architecture, the platform transforms a central transmitting node/ Master-spoke into a powerful command center, capable of synchronizing media across a diverse, multi-faceted network of hardware.
Key Technical Architecture
Hybrid Connectivity Engine: The application seamlessly integrates Bluetooth LE (Low Energy) and Web-based (TCP/IP) protocols to ensure stable, low-latency streaming. This dual-layer approach allows the system to bridge the gap between local hardware peripherals and cloud-based assets.
Intelligent Hub-and-Spoke Routing: At its core, the platform utilizes a centralized "Transmitting Node" that acts as the primary intelligence layer. This node manages data packet distribution to various "spokes"—including smart speakers, mobile devices, and web-integrated consoles—ensuring perfect phase alignment and zero-drop performance.
Cross-Protocol Synchronization: Unlike traditional streaming apps, our proprietary synchronization engine allows for the simultaneous management of web-based streams and local Bluetooth playback, creating a unified listening experience across disparate networks.
Scalable Network Topography: The architecture is built for extensibility, allowing users to rapidly add, remove, or re-route spokes within the network without interrupting the primary broadcast, making it ideal for both premium residential setups and large-scale commercial venues.





NETWORK ARCHITECTURE: MULTIFACETED MEDIA STREAMING ECOSYSTEM
Topology: Hub-and-Spoke (Centralized Intelligence)

 [ WEB-BASED SOURCE / CLOUD ASSETS ]

                       |
                       v
          +-------------------------+
          |  CENTRAL TRANSMITTING   |
          |          NODE           | <--- (THE HUB)
          |  (Orchestration Layer)  |
          +------------+------------+

                       |
        _______________|_________________________________
       /               |                |                \
      /                |                |                 \
     v                 v                v                  v
+----------+      +----------+     +----------+      +------------+

| PERSONAL |      | PERSONAL |     | PERSONAL |      |  WEB-ONLY  |
|  DEVICE  |      |  DEVICE  |     |  DEVICE  |      |  ENDPOINT  |
| (Mobile) |      | (Laptop) |     | (Tablet) |      | (Console)  |
+----------+      +----------+     +----------+      +------------+

    |  ^               |                |                  |
    |  |               |                |                  |
    |  | [BRIDGE]      | [BRIDGE]       | [BRIDGE]         | [SINK]
    |  +-----------+   |                |                  |
    v              v   v                v                  v
+----------+      +----------+     +----------+      +------------+

| BLUETOOTH|      | BLUETOOTH|     | BLUETOOTH|      | HIGH-FIDELITY|
| HEADSET  |      | Headset  |     |  Headset   |      | AUDIO RACK |
+----------+      +----------+     +----------+      +------------+
  (Utility)         (Utility)        (Utility)          (SINK)




  




LEGEND & DATA FLOW


[ HUB ] : Central Transmitting Node
          - Manages packet synchronization.
          - Enforces security and QoS (Quality of Service).

[ PERSONAL DEVICES ] : Master Spokes
          - Act as the "Bridge" between Web/Wi-Fi and Bluetooth.
          - Host the User Interface (UI).
          - Perform Protocol Translation (TCP/IP -> BLE).

[ BLUETOOTH DEVICES ] : Utility Spokes
          - Task-specific endpoints (Audio Sinks).
          - Low-power consumption.
          - Direct interaction with the user's physical environment.

[ FLOW ] : HUB ----> PERSONAL DEVICE (Bridge) ----> BLUETOOTH DEVICE











NETWORK ARCHITECTURE: MULTIFACETED MEDIA STREAMING ECOSYSTEM
Topology: Hub-and-Spoke (Centralized Intelligence)


       [ WEB-BASED SOURCE / CLOUD ASSETS ]

                       |
                       v
          +-------------------------+
          |  CENTRAL TRANSMITTING   |
          |          NODE           | <--- (THE HUB)
          |  (Orchestration Layer)  |
          +------------+------------+

                       |
        _______________|_________________________________
       /               |                |                \
      /                |                |                 \
     v                 v                v                  v
+----------+      +----------+     +----------+      +------------+

| PERSONAL |      | PERSONAL |     | PERSONAL |      |  WEB-ONLY  |
|  DEVICE  |      |  DEVICE  |     |  DEVICE  |      |  ENDPOINT  |
| (Mobile) |      | (Laptop) |     | (Tablet) |      | (Console)  |
+----------+      +----------+     +----------+      +------------+

    |  ^               |                |                  |
    |  |               |                |                  |
    |  | [BRIDGE]      | [BRIDGE]       | [BRIDGE]         | [SINK]
    |  +-----------+   |                |                  |
    v              v   v                v                  v
+----------+      +----------+     +----------+      +------------+

| BLUETOOTH|      | BLUETOOTH|     | BLUETOOTH|      | HIGH-FIDELITY|
| HEADSET  |      | SPEAKER  |     |  WATCH   |      | AUDIO RACK |
+----------+      +----------+     +----------+      +------------+
  (Utility)         (Utility)        (Utility)          (SINK)










LEGEND & DATA FLOW


[ HUB ] : Central Transmitting Node
          - Manages packet synchronization.
          - Enforces security and QoS (Quality of Service).

[ PERSONAL DEVICES ] : Master Spokes
          - Act as the "Bridge" between Web/Wi-Fi and Bluetooth.
          - Host the User Interface (UI).
          - Perform Protocol Translation (TCP/IP -> BLE).

[ BLUETOOTH DEVICES ] : Utility Spokes
          - Task-specific endpoints (Audio Sinks).
          - Low-power consumption.
          - Direct interaction with the user's physical environment.

[ FLOW ] : HUB ----> PERSONAL DEVICE (Bridge) ----> BLUETOOTH DEVICE









APPLICATION ARCHITECTURE: MASTER SPOKE AS THE INTELLIGENT HUB
Model: Application-Centric Localized Transmission


          [ GLOBAL MEDIA CLOUD / CMS ]

                       |
                       | (HTTPS / WebSockets)
                       v
    +------------------------------------------+

    |           MASTER SPOKE APPLICATION       |
    |      (iOS / Android / Desktop Engine)    | <--- TRANSMITTING NODE
    +-------------------+----------------------+

                        |
      [ ENGINE BLOCK ]  |  [ CONNECTIVITY LAYER ]
      - Session Manager |  - Bluetooth Stack (BLE)
      - Audio Decoder   |  - Web Server (Local)
      - Buffer Manager  |  - API Gateway

                        |
        ________________|_________________________________
       /                |                |                \
      /                 |                |                 \
     v                  v                v                  v
+----------+       +----------+     +----------+      +------------+

| BLUETOOTH|       | BLUETOOTH|     |  REMOTE  |      |  BROWSER  |
| SPEAKER  |       | HEADSET  |     |  CLIENT  |      |  INSTANCE |
+----------+       +----------+     +----------+      +------------+
 (Utility)          (Utility)        (Web Spoke)        (Web Spoke)


     |                  |                |                  |
     | [A2DP / HFP]     | [A2DP]         | [TCP/UDP]        | [HTTP/WS]
     v                  v                v                  v
 (Audio Sink)       (Audio Sink)     (Media Spoke)      (Remote UI)







KEY ROLES OF THE APPLICATION BASE


[ TRANSMITTING NODE ] : The Master Spoke Application
                        - Serves as the localized authority.
                        - Pulls data from the cloud and pushes to spokes.
                        - Maintains clock synchronization across BT/Web.

[ UTILITY SPOKES ]    : Bluetooth Hardware Peripherals
                        - Connected directly to the App's BT Stack.
                        - Low-latency audio destinations.
                        - Transmit battery/status metadata to the App.

[ WEB SPOKES ]        : Browser/Remote Network Clients
                        - Connect via the App's internal Web Server.
                        - Allow multi-room or multi-user synchronized 
                          viewing/listening over the local network.

[ DATA FLOW ] :
  WEB SOURCE ---> [ MASTER APP ENGINE ] ---> PROTOCOL TRANSLATION 
                                        ---> BT BROADCAST (Utility)
                                        ---> WEB STREAM (Remote)





  
  # Mobile App Wireframe

  This is a code bundle for Mobile App Wireframe. The original project is available at https://www.figma.com/design/J6mxpJOCcySNtH1vgpxty9/Mobile-App-Wireframe.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.
  
