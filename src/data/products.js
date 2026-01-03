import img1 from './images/1.png';
import img2 from './images/2.png';
import img3 from './images/3.png';
import img4 from './images/4.png';
import img5 from './images/5.png';
import img6 from './images/6.png';
import img7 from './images/7.png';
import img8 from './images/8.png';
import img9 from './images/9.png';
import img10 from './images/10.png';
import img11 from './images/11.png';
import img12 from './images/12.png';
import img13 from './images/13.png';
import img14 from './images/14.png';
import img15 from './images/15.png';
import img16 from './images/16.png';
import img17 from './images/17.png';
import img18 from './images/18.png';
import img19 from './images/19.png';
import img20 from './images/20.png';

const products = [
  {
    "id": 1,
    "name": "Verkada CB62-E (Pro Series)",
    "category": "Dome (Cloud-Managed/AI)",
    "description": "Enterprise-grade, cloud-managed dome camera with a dedicated vision co-processor for real-time people and vehicle detection and advanced motion tracking.",
    "features": [
      "4K Ultra HD Resolution (8MP)",
      "Second-Gen AI Chip for Edge Analytics",
      "Motion Trails and History Player",
      "Vandal-resistant (IK10) and Weatherproof (IP67)",
      "73 Days Onboard Storage"
    ],
    "image": img1
  },
  {
    "id": 2,
    "name": "Reolink Duo 3 PoE (16MP)",
    "category": "Bullet/Dual-Lens (PoE)",
    "description": "Ultra-high-resolution dual-lens camera that stitches two images into a single 180° panoramic view, eliminating the need for multiple cameras.",
    "features": [
      "16MP Ultra HD Resolution",
      "PoE (Power over Ethernet)",
      "Smart Detection (Person/Vehicle/Pet)",
      "180° Wide Viewing Angle",
      "Color Night Vision"
    ],
    "image": img2
  },
  {
    "id": 3,
    "name": "Eufy SoloCam S340",
    "category": "PTZ (Wireless/Solar)",
    "description": "A versatile, wire-free security camera with 3K dual-lens optics, mechanical pan/tilt, and an integrated solar panel for perpetual power.",
    "features": [
      "3K Resolution Dual-Lens",
      "360° Pan & 70° Tilt",
      "Integrated Solar Charging",
      "AI Tracking and Local Storage (HomeBase 3)",
      "900 Lumens Built-in Spotlight"
    ],
    "image": img3
  },
  {
    "id": 4,
    "name": "UniFi Protect AI Pro (Bullet)",
    "category": "Bullet (Professional/AI)",
    "description": "High-performance AI bullet camera designed for the UniFi Protect ecosystem, featuring 4K video, 3x optical zoom, and advanced two-way audio.",
    "features": [
      "4K Ultra HD Resolution",
      "3x Optical Zoom",
      "Built-in Microphone and Speaker (Two-Way Talk)",
      "AI-powered Smart Detection (Person/Vehicle)",
      "Ethernet with PoE"
    ],
    "image": img4
  },
  {
    "id": 5,
    "name": "Hikvision DS-2CD2087G2-L (ColorVu)",
    "category": "Bullet (ColorVu/AcuSense)",
    "description": "A high-end 4K bullet camera with ColorVu technology to deliver vivid, full-time color imaging 24/7, even in near darkness.",
    "features": [
      "8MP 4K Resolution",
      "ColorVu Technology (F1.0 Lens)",
      "AcuSense (Smart Classification)",
      "IP67 Weatherproof",
      "WDR (Wide Dynamic Range)"
    ],
    "image": img5
  },
  {
    "id": 6,
    "name": "Ajax Systems TurretCam (AI)",
    "category": "Turret (AI/Smart Home Pro)",
    "description": "Discreet, AI-enabled turret camera designed for seamless integration with the Ajax Systems security intrusion line, prioritizing edge-based intelligence and privacy.",
    "features": [
      "2K/4K Resolution Options",
      "Built-in AI for Object Detection",
      "Seamless Integration with Ajax Hubs",
      "IR Night Vision up to 30m",
      "Encrypted Communication"
    ],
    "image": img6
  },
  {
    "id": 7,
    "name": "TP-Link Tapo C460",
    "category": "Wireless (4K/Battery)",
    "description": "A new 4K 8MP battery-powered outdoor camera featuring Starlight Color Night Vision and long-lasting rechargeable batteries.",
    "features": [
      "4K 8MP Live View",
      "Starlight Color Night Vision",
      "Rechargeable Battery (Long-Lasting)",
      "Person/Vehicle/Pet Detection",
      "Local and Cloud Storage"
    ],
    "image": img7
  },
  {
    "id": 8,
    "name": "Lorex 4K Nocturnal IP Camera",
    "category": "Bullet (4K/Deterrence)",
    "description": "A rugged 4K camera with industry-leading Color Night Vision and active deterrence features like a built-in siren and warning light.",
    "features": [
      "4K Ultra HD Resolution (8MP)",
      "Color Night Vision",
      "Active Deterrence (Siren & Spotlight)",
      "IP67 Weatherproof",
      "Built-in Microphone"
    ],
    "image": img8
  },
  {
    "id": 9,
    "name": "EufyCam 3 S330 (4K)",
    "category": "Wireless (Solar/4K)",
    "description": "A premium wire-free 4K camera system with a built-in solar panel and expandable local storage via the HomeBase 3 hub (sold separately).",
    "features": [
      "4K Resolution with Starlight Sensor",
      "Solar Charging (Continuous Power)",
      "BionicMind AI (Facial Recognition)",
      "No Monthly Fees (Local Storage)",
      "Wire-free & Weatherproof"
    ],
    "image": img9
  },
  {
    "id": 10,
    "name": "Google Nest Cam (Floodlight)",
    "category": "Floodlight (Smart Home)",
    "description": "A wired outdoor camera integrated with powerful LED floodlights, providing brilliant illumination and AI-powered smart alerts for the Nest ecosystem.",
    "features": [
      "1080p HD Resolution",
      "Dual Motion-Activated LED Floodlights",
      "AI-powered Person/Vehicle/Animal Alerts",
      "Two-Way Audio",
      "Seamless Google Home Integration"
    ],
    "image": img10
  },
  {
    "id": 11,
    "name": "Dahua WizSense IPC-HDBW5442R-ASE",
    "category": "Dome (Starlight/Analytics)",
    "description": "Professional Starlight series dome camera offering superior low-light performance and advanced AI features like Perimeter Protection and SMD 3.0.",
    "features": [
      "4MP Resolution",
      "Starlight Technology (Low Light)",
      "SMD 3.0 (Smart Motion Detection)",
      "IK10 Vandal-proof and IP67",
      "Built-in Mic"
    ],
    "image": img11
  },
  {
    "id": 12,
    "name": "Arlo Ultra 2 Spotlight Camera",
    "category": "Wireless (Premium/4K)",
    "description": "A premium wire-free 4K security camera featuring an ultra-wide 180° view, integrated spotlight, and automatic zoom and tracking.",
    "features": [
      "4K HDR Resolution",
      "180° Diagonal Field of View",
      "Integrated Spotlight & Siren",
      "Auto-Zoom and Tracking",
      "Wire-Free & Weather Resistant"
    ],
    "image": img12
  },
  {
    "id": 13,
    "name": "TP-Link Tapo C120",
    "category": "Indoor (Budget/2K)",
    "description": "A budget-friendly, easy-to-use indoor security camera featuring 2K QHD video and a magnetic base for flexible mounting.",
    "features": [
      "2K QHD Resolution (1440p)",
      "Starlight Sensor (Color Night Vision)",
      "Magnetic Base",
      "Smart Person/Pet Detection",
      "Local Storage (MicroSD up to 512 GB)"
    ],
    "image": img13
  },
  {
    "id": 14,
    "name": "Reolink Argus PT Ultra",
    "category": "PTZ (Wireless/Solar)",
    "description": "A 4K battery-powered PTZ camera with solar charging capabilities, offering 355° pan and 140° tilt for wide-area coverage.",
    "features": [
      "4K Resolution",
      "355° Pan, 140° Tilt",
      "Solar Panel Included",
      "Intelligent Person/Vehicle/Pet Detection",
      "Two-Way Audio and Spotlight"
    ],
    "image": img14
  },
  {
    "id": 15,
    "name": "Wyze Cam v4",
    "category": "Indoor/Outdoor (Budget Wired)",
    "description": "The latest value-for-money camera from Wyze, offering 2.5K resolution, enhanced Color Night Vision, and an integrated spotlight.",
    "features": [
      "2.5K QHD Resolution",
      "Enhanced Color Night Vision",
      "Built-in Spotlight and Siren",
      "IP65 Weather Resistance",
      "Local MicroSD Storage"
    ],
    "image": img15
  },
  {
    "id": 16,
    "name": "Blink Outdoor 4",
    "category": "Wireless (Budget/Battery)",
    "description": "The fourth generation of the popular, affordable, AA battery-powered outdoor camera with a wider field of view and enhanced detection.",
    "features": [
      "1080p HD Resolution",
      "Up to Two-Year Battery Life",
      "Enhanced Motion Detection",
      "143° Wide Field of View",
      "Works with Alexa"
    ],
    "image": img16
  },
  {
    "id": 17,
    "name": "Hanwha PNM-C32084RQZ-8XE4T-W",
    "category": "Multi-Sensor (AI/Professional)",
    "description": "A high-end multi-sensor camera system utilizing NVIDIA Jetson edge AI for real-time analytics and flexible, multi-directional coverage of complex sites.",
    "features": [
      "Quad-Sensor Design (4x 5MP or 2MP)",
      "NVIDIA Jetson Edge AI Platform",
      "360° Field of View",
      "Motorized Varifocal Lenses",
      "WDR and Advanced Video Analytics"
    ],
    "image": img17
  },
  {
    "id": 18,
    "name": "SimpliSafe Outdoor Camera",
    "category": "Wireless (Monitored System)",
    "description": "Wire-free outdoor camera integrated with SimpliSafe's professional monitoring system, enabling active video verification and agent deterrence.",
    "features": [
      "1080p HD Resolution",
      "Active Intruder Deterrence (via monitoring)",
      "Smart Person Detection",
      "Two-Way Audio",
      "Rechargeable Battery"
    ],
    "image": img18
  },
  {
    "id": 19,
    "name": "EZVIZ H3K PoE 4K",
    "category": "Bullet (PoE/4K)",
    "description": "A robust 4K PoE bullet camera offering clear, detailed video and a simple plug-and-play design for reliable, wired outdoor security.",
    "features": [
      "4K Ultra HD Resolution",
      "PoE Connectivity",
      "AI-Powered Human/Vehicle Detection",
      "H.265 Video Compression",
      "IP67 Weatherproof"
    ],
    "image": img19
  },
  {
    "id": 20,
    "name": "Dahua DH-IPC-HFW7442H-ZFR",
    "category": "Bullet (4MP/AI/Pro)",
    "description": "A high-performance 4MP camera featuring high-frame-rate capture and advanced edge AI for detailed analysis in challenging environments.",
    "features": [
      "4MP Resolution @ 60fps",
      "AI Edge Computing",
      "Motorized Varifocal Lens",
      "ePoE Support (Extended PoE)",
      "Intelligent Video Analytics (IVS)"
    ],
    "image": img20
  }
];

export default products;
