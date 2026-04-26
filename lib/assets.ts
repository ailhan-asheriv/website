/**
 * A'SHERIV approved visual asset naming system.
 * Reference these IDs in code; set path when final artwork is available.
 * Placeholder mode when path is null: stable container, no broken image.
 *
 * To replace with final artwork: set path to the public URL, e.g.:
 *   path: "/assets/ash_home_hero_v01.png"
 * Add files under public/assets/ using the exact asset ID as filename (e.g. ash_home_hero_v01.png).
 */

export const ASSET_IDS = [
  "ash_home_hero_v01",
  "ash_home_fragmentation_v01",
  "ash_home_lifecyclediagram_v01",
  "ash_solutions_shipyard_v01",
  "ash_solutions_operationaltwin_v01",
  "ash_solutions_maintenance_v01",
  "ash_compliance_evidencepack_v01",
  "ash_platform_architecture_v01",
  "ash_platform_readonlyconnectors_v01",
  "ash_platform_sensorlayer_v01",
  "ash_home_stakeholders_v01",
  "ash_home_globalfootprint_v01",
  "ash_pilot_flow_v01",
] as const;

export type AssetId = (typeof ASSET_IDS)[number];

export interface AssetDefinition {
  id: AssetId;
  /** Final path when artwork exists; null = show placeholder */
  path: string | null;
  alt: string;
  width: number;
  height: number;
}

const REGISTRY: Record<AssetId, AssetDefinition> = {
  ash_home_hero_v01: {
    id: "ash_home_hero_v01",
    path: null,
    alt: "A'SHERIV digital twin infrastructure for maritime operations",
    width: 1200,
    height: 520,
  },
  ash_home_fragmentation_v01: {
    id: "ash_home_fragmentation_v01",
    path: null,
    alt: "Maritime data fragmentation across shipyards, operations, and maintenance",
    width: 960,
    height: 480,
  },
  ash_home_lifecyclediagram_v01: {
    id: "ash_home_lifecyclediagram_v01",
    path: null,
    alt: "Vessel lifecycle from design through shipyard, operations, and maintenance",
    width: 960,
    height: 540,
  },
  ash_solutions_shipyard_v01: {
    id: "ash_solutions_shipyard_v01",
    path: null,
    alt: "Shipyard intelligence and production data traceability",
    width: 480,
    height: 320,
  },
  ash_solutions_operationaltwin_v01: {
    id: "ash_solutions_operationaltwin_v01",
    path: null,
    alt: "Operational digital twin and live vessel intelligence",
    width: 480,
    height: 320,
  },
  ash_solutions_maintenance_v01: {
    id: "ash_solutions_maintenance_v01",
    path: null,
    alt: "Maintenance intelligence and evidence-based planning",
    width: 480,
    height: 320,
  },
  ash_compliance_evidencepack_v01: {
    id: "ash_compliance_evidencepack_v01",
    path: null,
    alt: "Compliance and structured evidence for audits and claims",
    width: 480,
    height: 320,
  },
  ash_platform_architecture_v01: {
    id: "ash_platform_architecture_v01",
    path: null,
    alt: "A'SHERIV platform architecture and integration model",
    width: 480,
    height: 320,
  },
  ash_platform_readonlyconnectors_v01: {
    id: "ash_platform_readonlyconnectors_v01",
    path: null,
    alt: "Secure read-only connectors for existing maritime systems",
    width: 480,
    height: 320,
  },
  ash_platform_sensorlayer_v01: {
    id: "ash_platform_sensorlayer_v01",
    path: null,
    alt: "Sensor and data augmentation layer for vessel visibility",
    width: 480,
    height: 320,
  },
  ash_home_stakeholders_v01: {
    id: "ash_home_stakeholders_v01",
    path: null,
    alt: "Maritime ecosystem: shipyards, operators, OEMs, insurers, class",
    width: 960,
    height: 400,
  },
  ash_home_globalfootprint_v01: {
    id: "ash_home_globalfootprint_v01",
    path: null,
    alt: "A'SHERIV global operating footprint: Turkey, UK, Dubai",
    width: 960,
    height: 480,
  },
  ash_pilot_flow_v01: {
    id: "ash_pilot_flow_v01",
    path: null,
    alt: "Digital twin pilot deployment flow and steps",
    width: 960,
    height: 440,
  },
};

export function getAsset(id: AssetId): AssetDefinition {
  const asset = REGISTRY[id];
  if (!asset) throw new Error(`Unknown asset: ${id}`);
  return asset;
}

export function getAssetPath(id: AssetId): string | null {
  return getAsset(id).path;
}

/** Homepage section → asset ID mapping for easy replacement */
export const HOMEPAGE_ASSETS = {
  hero: "ash_home_hero_v01" as const,
  problem: "ash_home_fragmentation_v01" as const,
  lifecycle: "ash_home_lifecyclediagram_v01" as const,
  solutions: [
    "ash_solutions_shipyard_v01",
    "ash_solutions_operationaltwin_v01",
    "ash_solutions_maintenance_v01",
    "ash_compliance_evidencepack_v01",
  ] as const,
  platform: [
    "ash_platform_architecture_v01",
    "ash_platform_readonlyconnectors_v01",
    "ash_platform_sensorlayer_v01",
  ] as const,
  stakeholders: "ash_home_stakeholders_v01" as const,
  global: "ash_home_globalfootprint_v01" as const,
  pilot: "ash_pilot_flow_v01" as const,
} as const;
