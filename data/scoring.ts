import type { AxisScores } from "./questions";
import type { AestheticId } from "./aesthetics";

// Each aesthetic maps to a region of the 4-axis score space
// darkLight: sum range -24 to +24
// naturalArtificial: sum range -24 to +24
// pastFuture: sum range -24 to +24
// quietBold: sum range -24 to +24

interface AestheticMapping {
  id: AestheticId;
  // Ideal score vector for this aesthetic
  ideal: AxisScores;
  // Weight for each axis (how important is this axis for this type)
  weight: AxisScores;
}

const MAPPINGS: AestheticMapping[] = [
  {
    id: "dark-academia",
    ideal: { darkLight: -14, naturalArtificial: -4, pastFuture: -12, quietBold: -10 },
    weight: { darkLight: 2, naturalArtificial: 1, pastFuture: 2, quietBold: 2 },
  },
  {
    id: "cottagecore",
    ideal: { darkLight: 6, naturalArtificial: -16, pastFuture: -8, quietBold: -10 },
    weight: { darkLight: 1, naturalArtificial: 3, pastFuture: 1, quietBold: 2 },
  },
  {
    id: "y2k-cyber",
    ideal: { darkLight: 4, naturalArtificial: 10, pastFuture: 4, quietBold: 12 },
    weight: { darkLight: 1, naturalArtificial: 2, pastFuture: 1, quietBold: 3 },
  },
  {
    id: "solarpunk",
    ideal: { darkLight: 8, naturalArtificial: -8, pastFuture: 8, quietBold: 4 },
    weight: { darkLight: 1, naturalArtificial: 2, pastFuture: 2, quietBold: 1 },
  },
  {
    id: "midnight-luxe",
    ideal: { darkLight: -12, naturalArtificial: 4, pastFuture: -4, quietBold: 2 },
    weight: { darkLight: 3, naturalArtificial: 1, pastFuture: 1, quietBold: 1 },
  },
  {
    id: "wabi-sabi",
    ideal: { darkLight: -4, naturalArtificial: -12, pastFuture: -10, quietBold: -14 },
    weight: { darkLight: 1, naturalArtificial: 2, pastFuture: 2, quietBold: 3 },
  },
  {
    id: "neon-dystopia",
    ideal: { darkLight: -10, naturalArtificial: 14, pastFuture: 6, quietBold: 8 },
    weight: { darkLight: 2, naturalArtificial: 3, pastFuture: 1, quietBold: 2 },
  },
  {
    id: "coastal-grandmother",
    ideal: { darkLight: 12, naturalArtificial: -6, pastFuture: -4, quietBold: -6 },
    weight: { darkLight: 2, naturalArtificial: 2, pastFuture: 1, quietBold: 2 },
  },
  {
    id: "fairycore",
    ideal: { darkLight: 4, naturalArtificial: -10, pastFuture: -6, quietBold: -4 },
    weight: { darkLight: 1, naturalArtificial: 2, pastFuture: 1, quietBold: 1 },
  },
  {
    id: "industrial-minimalist",
    ideal: { darkLight: -6, naturalArtificial: 8, pastFuture: 0, quietBold: -12 },
    weight: { darkLight: 1, naturalArtificial: 2, pastFuture: 1, quietBold: 3 },
  },
  {
    id: "barbiecore",
    ideal: { darkLight: 14, naturalArtificial: 8, pastFuture: 2, quietBold: 16 },
    weight: { darkLight: 2, naturalArtificial: 1, pastFuture: 1, quietBold: 3 },
  },
  {
    id: "forest-witch",
    ideal: { darkLight: -10, naturalArtificial: -14, pastFuture: -8, quietBold: -6 },
    weight: { darkLight: 2, naturalArtificial: 3, pastFuture: 1, quietBold: 1 },
  },
  {
    id: "retro-futurism",
    ideal: { darkLight: 2, naturalArtificial: 6, pastFuture: -10, quietBold: 6 },
    weight: { darkLight: 1, naturalArtificial: 1, pastFuture: 3, quietBold: 1 },
  },
  {
    id: "quiet-luxury",
    ideal: { darkLight: 6, naturalArtificial: 2, pastFuture: -6, quietBold: -14 },
    weight: { darkLight: 1, naturalArtificial: 1, pastFuture: 1, quietBold: 3 },
  },
  {
    id: "kawaii-pastel",
    ideal: { darkLight: 16, naturalArtificial: 2, pastFuture: 0, quietBold: 10 },
    weight: { darkLight: 3, naturalArtificial: 1, pastFuture: 1, quietBold: 2 },
  },
  {
    id: "nomad-earth",
    ideal: { darkLight: 6, naturalArtificial: -8, pastFuture: 0, quietBold: 2 },
    weight: { darkLight: 1, naturalArtificial: 2, pastFuture: 1, quietBold: 1 },
  },
];

// Weighted Euclidean distance between two score vectors
function distance(a: AxisScores, b: AxisScores, w: AxisScores): number {
  return Math.sqrt(
    w.darkLight * Math.pow(a.darkLight - b.darkLight, 2) +
      w.naturalArtificial * Math.pow(a.naturalArtificial - b.naturalArtificial, 2) +
      w.pastFuture * Math.pow(a.pastFuture - b.pastFuture, 2) +
      w.quietBold * Math.pow(a.quietBold - b.quietBold, 2)
  );
}

export function calculateResult(scores: AxisScores): AestheticId {
  let bestId: AestheticId = "dark-academia";
  let bestDist = Infinity;

  for (const mapping of MAPPINGS) {
    const dist = distance(scores, mapping.ideal, mapping.weight);
    if (dist < bestDist) {
      bestDist = dist;
      bestId = mapping.id;
    }
  }

  return bestId;
}

export function getTopThree(scores: AxisScores): AestheticId[] {
  const sorted = MAPPINGS.map((m) => ({
    id: m.id,
    dist: distance(scores, m.ideal, m.weight),
  })).sort((a, b) => a.dist - b.dist);

  return sorted.slice(0, 3).map((s) => s.id);
}
