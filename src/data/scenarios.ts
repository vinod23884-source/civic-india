export interface ScenarioOption {
  id: 'A' | 'B' | 'C' | 'D';
  label: string;
  points: number;
  category: 'sharedSpaces' | 'situationalAwareness' | 'ruleResponsibility' | 'empathy' | 'publicSafety';
  consequence: string;
}

export interface Scenario {
  id: number;
  title: string;
  domain: string;
  situation: string;
  question: string;
  options: ScenarioOption[];
  principle: string;
  takeaway: string;
}

export const SCENARIOS: Scenario[] = [
  {
    id: 1,
    title: "The Buffet Rush",
    domain: "Shared Spaces",
    situation: "You are at a crowded wedding reception. Everyone seems to be rushing towards a popular dish and crowding around the counter.",
    question: "What would you do?",
    principle: "Shared spaces work better when everyone considers others.",
    takeaway: "A buffet is not a race. Taking reasonable portions leaves room and food for everyone.",
    options: [
      { id: 'A', label: "Take as much as possible because it may finish.", points: 0, category: 'sharedSpaces', consequence: "Creates artificial scarcity and leads to avoidable food waste." },
      { id: 'B', label: "Push forward so I don't have to wait.", points: 0, category: 'sharedSpaces', consequence: "Increases chaos and discomfort for the people standing around you." },
      { id: 'C', label: "Take a reasonable portion and come back if I want more.", points: 20, category: 'sharedSpaces', consequence: "Keeps the line moving smoothly and ensures food isn't wasted." },
      { id: 'D', label: "Wait for the crowd to move before taking food.", points: 15, category: 'sharedSpaces', consequence: "Patient and considerate, though moving normally with moderate portions works just as well." },
    ]
  },
  {
    id: 2,
    title: "Know the Moment",
    domain: "Situational Awareness",
    situation: "You are attending a funeral or condolence gathering. The atmosphere is quiet and the family is grieving. Your phone is currently on normal volume.",
    question: "What would you do before entering?",
    principle: "Situational awareness is part of civic sense.",
    takeaway: "You may not be able to remove someone's grief, but you can choose not to disturb it.",
    options: [
      { id: 'A', label: "Leave it on normal — an important call may come.", points: 0, category: 'situationalAwareness', consequence: "A sudden loud ringtone shatters a deeply solemn and personal moment." },
      { id: 'B', label: "Put it on silent or vibrate.", points: 20, category: 'situationalAwareness', consequence: "Protects the quiet dignity of the gathering while keeping you reachable silently." },
      { id: 'C', label: "Keep it loud but answer quickly if it rings.", points: 5, category: 'situationalAwareness', consequence: "The first few rings still cause disruption and draw uncomfortable attention." },
      { id: 'D', label: "Ignore it and deal with it later.", points: 0, category: 'situationalAwareness', consequence: "Leaves the risk open during prayers or personal speeches." },
    ]
  },
  {
    id: 3,
    title: "When Nobody Is Watching",
    domain: "Rule Responsibility",
    situation: "You are running late for work. The traffic signal turns red, but there is almost no traffic around and nobody is watching.",
    question: "What would you do?",
    principle: "Rules matter even when nobody is watching.",
    takeaway: "The rule doesn't become optional just because the road feels empty.",
    options: [
      { id: 'A', label: "Cross because the road is empty.", points: 0, category: 'ruleResponsibility', consequence: "Normalizes breaking rules and risks blind-spot accidents." },
      { id: 'B', label: "Wait for the green signal.", points: 20, category: 'ruleResponsibility', consequence: "Maintains discipline and makes intersection behavior predictable for others." },
      { id: 'C', label: "Follow others if they cross.", points: 0, category: 'ruleResponsibility', consequence: "Encourages collective law-breaking where everyone assumes someone else checked." },
      { id: 'D', label: "Cross slowly and carefully since I am in a hurry.", points: 5, category: 'ruleResponsibility', consequence: "Substitutes individual judgment for universal safety rules." },
    ]
  },
  {
    id: 4,
    title: "Just Five Minutes",
    domain: "Empathy & Footpaths",
    situation: "You need to step out for just 5 minutes. The most convenient spot is right on the footpath. There are no marked parking spots nearby.",
    question: "What would you do?",
    principle: "Your convenience should not become someone else's obstacle.",
    takeaway: "Your 5 minutes might force a pedestrian, senior citizen, or wheelchair user onto a dangerous busy road.",
    options: [
      { id: 'A', label: "Park on the footpath for five minutes.", points: 0, category: 'empathy', consequence: "Forces walkers directly into vehicle traffic." },
      { id: 'B', label: "Park half-on the footpath so people can squeeze past.", points: 5, category: 'empathy', consequence: "Still blocks wheelchairs, strollers, and elderly pedestrians completely." },
      { id: 'C', label: "Find a legal spot where pedestrians aren't blocked.", points: 20, category: 'empathy', consequence: "Keeps footpaths safe for their intended purpose: walking safely." },
      { id: 'D', label: "Ask someone nearby to watch the vehicle quickly.", points: 0, category: 'empathy', consequence: "The physical barrier for walkers remains exactly the same." },
    ]
  },
  {
    id: 5,
    title: "Someone Needs That Road",
    domain: "Public Safety",
    situation: "You are stuck in slow-moving traffic and hear an emergency ambulance siren right behind you.",
    question: "What would you do?",
    principle: "Emergency situations require responsibility, not curiosity.",
    takeaway: "Someone in that vehicle might be fighting for their life. Every second counts.",
    options: [
      { id: 'A', label: "Continue normally because everyone is stuck.", points: 0, category: 'publicSafety', consequence: "Leaves the ambulance stranded in traffic." },
      { id: 'B', label: "Safely steer sideways to help create a passage.", points: 20, category: 'publicSafety', consequence: "Helps open an emergency corridor that can save a life." },
      { id: 'C', label: "Follow right behind the ambulance to bypass traffic.", points: 0, category: 'publicSafety', consequence: "Dangerous tailgating that blocks the ambulance from braking or turning." },
      { id: 'D', label: "Take out my phone to record the scene.", points: 0, category: 'publicSafety', consequence: "Distracts from the immediate priority of clearing the path." },
    ]
  }
];