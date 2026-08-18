export interface ScenarioOption {
  id: 'A' | 'B' | 'C' | 'D';
  label: string;
  points: number;
  category: 'sharedSpaces' | 'situationalAwareness' | 'ruleResponsibility' | 'empathy' | 'publicSafety';
  consequenceTitle: string;
  consequenceDescription: string;
  perspectiveImpact: {
    target: string;
    impact: string;
  };
}

export interface Scenario {
  id: number;
  domainId: string;
  domainName: string;
  title: string;
  tagline: string;
  illustrationType: 'buffet' | 'funeral' | 'redlight' | 'footpath' | 'ambulance';
  situation: string;
  question: string;
  options: ScenarioOption[];
  principle: string;
  takeaway: string;
}

export const CIVIC_DOMAINS = [
  { id: "01", name: "Road & Traffic", question: "Do our shortcuts create someone else's gridlock?" },
  { id: "02", name: "Cleanliness & Waste", question: "Is out-of-sight truly clean when it's in public?" },
  { id: "03", name: "Respect & Accessibility", question: "Can a wheelchair or elder navigate where you stepped?" },
  { id: "04", name: "Public Spaces", question: "Do we treat shared spaces like everyone owns them or nobody does?" },
  { id: "05", name: "Transport & Queues", question: "Does getting ahead by 10 seconds justify collective chaos?" },
  { id: "06", name: "Noise & Neighbourhood", question: "Where does your celebration cross into another's distress?" },
  { id: "07", name: "Community Responsibility", question: "Do we wait for authorities to fix what we can manage?" },
  { id: "08", name: "Emergency & Safety", question: "When seconds mean lives, do we clear paths or take videos?" },
  { id: "09", name: "Environment & Resources", question: "Do we consume shared water and power like it's unlimited?" },
  { id: "10", name: "Digital & Social Conduct", question: "Do we treat online humans with the dignity we expect in person?" }
];

export const SCENARIOS: Scenario[] = [
  {
    id: 1,
    domainId: "04",
    domainName: "Shared Spaces",
    title: "The Buffet Rush",
    tagline: "A wedding reception counter. High demand, limited space.",
    illustrationType: "buffet",
    situation: "You are at a crowded wedding reception. A freshly refilled counter for a popular dish has just opened. Several people are jostling to get ahead and pile their plates high before it runs out.",
    question: "What would you do?",
    principle: "A shared space works better when everyone considers others.",
    takeaway: "A buffet is not a race. Taking reasonable portions leaves room, dignity, and food for everyone.",
    options: [
      {
        id: 'A',
        label: "Take as much as possible because it may finish.",
        points: 0,
        category: 'sharedSpaces',
        consequenceTitle: "Scarcity Illusion & Waste",
        consequenceDescription: "Plates get overloaded. Up to 35% of unconsumed food is discarded, while guests behind you face artificial shortages.",
        perspectiveImpact: {
          target: "The Guest Behind You",
          impact: "Waits 15 extra minutes while food counters empty prematurely."
        }
      },
      {
        id: 'B',
        label: "Push forward so I don't have to wait in line.",
        points: 0,
        category: 'sharedSpaces',
        consequenceTitle: "Heightened Social Friction",
        consequenceDescription: "Physical jostling creates unnecessary tension and spills in a celebratory environment.",
        perspectiveImpact: {
          target: "Catering Staff & Elders",
          impact: "Navigates accidental hot gravy spills and chaotic counter queues."
        }
      },
      {
        id: 'C',
        label: "Take a reasonable portion and return if still hungry.",
        points: 20,
        category: 'sharedSpaces',
        consequenceTitle: "Smooth Circulation & Zero Waste",
        consequenceDescription: "Everyone gets served comfortably without queues stalling or food ending up in the garbage bin.",
        perspectiveImpact: {
          target: "The Entire Hall",
          impact: "Maintains smooth social flow and shared dignity."
        }
      },
      {
        id: 'D',
        label: "Wait for the crowd to disperse before getting food.",
        points: 15,
        category: 'sharedSpaces',
        consequenceTitle: "Patient Consideration",
        consequenceDescription: "Avoids friction, though steady, moderate portion taking by all eliminates the need to hold back.",
        perspectiveImpact: {
          target: "Your Experience",
          impact: "Peace of mind, while modeling calm behavior for others."
        }
      }
    ]
  },
  {
    id: 2,
    domainId: "06",
    domainName: "Situational Awareness",
    title: "Know the Moment",
    tagline: "A quiet memorial gathering. Fragile emotions.",
    illustrationType: "funeral",
    situation: "You are entering a condolence gathering. The room is quiet, family members are grieving, and solemn reflections are underway. Your phone volume is set to high.",
    question: "What would you do before entering?",
    principle: "Situational awareness is part of civic sense.",
    takeaway: "You may not be able to remove someone's grief. But you can choose not to disturb it.",
    options: [
      {
        id: 'A',
        label: "Leave it on normal — an important business call may come.",
        points: 0,
        category: 'situationalAwareness',
        consequenceTitle: "Broken Solemnity",
        consequenceDescription: "A blaring commercial tune breaks a moment of silent prayer, drawing startled looks from grieving family members.",
        perspectiveImpact: {
          target: "Grieving Family",
          impact: "Has their vulnerable moment of remembrance shattered."
        }
      },
      {
        id: 'B',
        label: "Switch the phone to silent / vibration mode before walking in.",
        points: 20,
        category: 'situationalAwareness',
        consequenceTitle: "Preserved Dignity",
        consequenceDescription: "The space remains calm and respectful. You stay silently accessible for genuine emergencies.",
        perspectiveImpact: {
          target: "Everyone Present",
          impact: "Can grieve and share thoughts in undisturbed quiet."
        }
      },
      {
        id: 'C',
        label: "Keep it loud but promise to cut it quickly if it rings.",
        points: 5,
        category: 'situationalAwareness',
        consequenceTitle: "Disruptive Delay",
        consequenceDescription: "Even 2-3 seconds of ringtone pulls everyone out of the moment before you can fumbling pull it out.",
        perspectiveImpact: {
          target: "Speakers & Mourners",
          impact: "Loses emotional train of thought during reflections."
        }
      },
      {
        id: 'D',
        label: "Ignore it and silence it later if someone calls.",
        points: 0,
        category: 'situationalAwareness',
        consequenceTitle: "Passive Hazard",
        consequenceDescription: "Leaves the chance of sudden high-volume disruption during prayers.",
        perspectiveImpact: {
          target: "The Collective Mood",
          impact: "Turns an oversight into a public disruption."
        }
      }
    ]
  },
  {
    id: 3,
    domainId: "01",
    domainName: "Rule Responsibility",
    title: "When Nobody Is Watching",
    tagline: "Late night intersection. Red light. Empty street.",
    illustrationType: "redlight",
    situation: "It is late evening and you are running behind schedule. The traffic light turns red. Looking left and right, the road appears empty with no police or cameras in sight.",
    question: "What would you do?",
    principle: "Rules matter even when nobody is watching.",
    takeaway: "The rule doesn't become optional because no one is watching.",
    options: [
      {
        id: 'A',
        label: "Cross because the intersection is clear.",
        points: 0,
        category: 'ruleResponsibility',
        consequenceTitle: "Blind Spot Vulnerability",
        consequenceDescription: "A high-speed delivery scooter or car having the green light on the blind right corner risks a fatal collision.",
        perspectiveImpact: {
          target: "Approaching Vehicles",
          impact: "Forced into emergency braking or fatal broadside impact."
        }
      },
      {
        id: 'B',
        label: "Wait until the light turns green.",
        points: 20,
        category: 'ruleResponsibility',
        consequenceTitle: "Predictable Order",
        consequenceDescription: "Intersection safety stays intact. You reinforce disciplined habit for everyone observing.",
        perspectiveImpact: {
          target: "Fellow Road Users",
          impact: "Can navigate their legal right of way with full confidence."
        }
      },
      {
        id: 'C',
        label: "Follow someone else if they decide to jump the light.",
        points: 0,
        category: 'ruleResponsibility',
        consequenceTitle: "Cascading Herd Violation",
        consequenceDescription: "One person jumping signals others to follow, creating an uncoordinated swarm in moving cross-traffic.",
        perspectiveImpact: {
          target: "The Intersection",
          impact: "Multiplies danger under the false safety of a crowd."
        }
      },
      {
        id: 'D',
        label: "Creep past slowly on the far left edge.",
        points: 5,
        category: 'ruleResponsibility',
        consequenceTitle: "Unpredictable Movement",
        consequenceDescription: "Still violates signal flow and puts late-crossing pedestrians at blind risk.",
        perspectiveImpact: {
          target: "Night Pedestrians",
          impact: "Faces unexpected vehicles while crossing on pedestrian phase."
        }
      }
    ]
  },
  {
    id: 4,
    domainId: "03",
    domainName: "Respect & Accessibility",
    title: "Just Five Minutes",
    tagline: "A quick errand. A parked vehicle on the footpath.",
    illustrationType: "footpath",
    situation: "You need to collect an item from a shop for just five minutes. Marked parking is 100 meters away, but there is a clear pedestrian footpath right in front of the shop.",
    question: "What would you do?",
    principle: "Your convenience should not become someone else's obstacle.",
    takeaway: "Your five minutes may become someone else's dangerous journey.",
    options: [
      {
        id: 'A',
        label: "Park on the footpath for five minutes.",
        points: 0,
        category: 'empathy',
        consequenceTitle: "Pedestrians Pushed Into Traffic",
        consequenceDescription: "Senior citizens, wheelchair users, and parents with strollers are forced to step down directly into moving vehicular traffic.",
        perspectiveImpact: {
          target: "Wheelchair & Stroller Users",
          impact: "Forced into high-risk road corridors due to blocked curb ramps."
        }
      },
      {
        id: 'B',
        label: "Park half-on the footpath leaving a narrow gap.",
        points: 5,
        category: 'empathy',
        consequenceTitle: "Partial Inaccessibility",
        consequenceDescription: "A regular walker might squeeze through, but anyone with a walking stick, cane, or cart is blocked.",
        perspectiveImpact: {
          target: "Visually Impaired / Elders",
          impact: "Encounters an unexpected knee-height metallic obstacle."
        }
      },
      {
        id: 'C',
        label: "Park in the designated space 100m away and walk.",
        points: 20,
        category: 'empathy',
        consequenceTitle: "Universal Walkability Protected",
        consequenceDescription: "Footpaths remain barrier-free for children, elders, and differently-abled citizens.",
        perspectiveImpact: {
          target: "Every Pedestrian",
          impact: "Safe, dignified, uninterrupted sidewalk passage."
        }
      },
      {
        id: 'D',
        label: "Leave the vehicle hazard lights on while partially blocking.",
        points: 0,
        category: 'empathy',
        consequenceTitle: "Hazard Lights Don't Remove Obstacles",
        consequenceDescription: "Blinking lights do not grant physical right of passage; the path remains impassable.",
        perspectiveImpact: {
          target: "Urban Flow",
          impact: "Creates pedestrian choke points."
        }
      }
    ]
  },
  {
    id: 5,
    domainId: "08",
    domainName: "Emergency & Safety",
    title: "Someone Needs That Road",
    tagline: "Heavy traffic. An approaching emergency siren.",
    illustrationType: "ambulance",
    situation: "You are stuck in slow-moving traffic. You hear an ambulance siren rapidly approaching from behind. Traffic is tight, but adjacent vehicles could shift if coordinated.",
    question: "What would you do?",
    principle: "Emergency situations require responsibility, not curiosity.",
    takeaway: "Someone inside that ambulance may be having the worst day of their life.",
    options: [
      {
        id: 'A',
        label: "Keep moving slowly in line since everyone is stuck.",
        points: 0,
        category: 'publicSafety',
        consequenceTitle: "Critical Golden-Hour Delay",
        consequenceDescription: "Medical response times increase by minutes. For trauma or cardiac arrest, seconds determine survival.",
        perspectiveImpact: {
          target: "The Patient Inside",
          impact: "Critical oxygen and trauma care delayed in transit."
        }
      },
      {
        id: 'B',
        label: "Signal and steer sideways diagonally to create a middle lane.",
        points: 20,
        category: 'publicSafety',
        consequenceTitle: "Active Emergency Corridor",
        consequenceDescription: "Your deliberate move prompts other drivers to follow suit, creating an open rescue corridor.",
        perspectiveImpact: {
          target: "The Paramedics & Patient",
          impact: "Saves vital minutes reaching critical ICU facilities."
        }
      },
      {
        id: 'C',
        label: "Tailgate the ambulance to slip through traffic.",
        points: 0,
        category: 'publicSafety',
        consequenceTitle: "Hazardous Tailgating",
        consequenceDescription: "Prevents the ambulance from braking suddenly and blocks vehicles from re-merging safely.",
        perspectiveImpact: {
          target: "Emergency Responders",
          impact: "Severe rear-collision risk."
        }
      },
      {
        id: 'D',
        label: "Take out my phone to record the bottleneck.",
        points: 0,
        category: 'publicSafety',
        consequenceTitle: "Passive Spectatorship",
        consequenceDescription: "Replaces lifesaving active cooperation with digital curiosity.",
        perspectiveImpact: {
          target: "Traffic Flow",
          impact: "Driver distraction causes additional slowdowns."
        }
      }
    ]
  }
];