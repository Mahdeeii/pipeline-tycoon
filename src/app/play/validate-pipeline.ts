import type { Node, Edge } from '@xyflow/react';
import type { BlockConfig } from './block-configs';

// Checks for a valid Source → Build → Test → Deploy chain in the graph.
export function validatePipeline(nodes: Node<BlockConfig>[], edges: Edge[]): boolean {
  // Build adjacency map: nodeId → [target nodeIds]
  const adj = new Map<string, string[]>();
  for (const edge of edges) {
    if (!adj.has(edge.source)) adj.set(edge.source, []);
    adj.get(edge.source)!.push(edge.target);
  }

  const nodeMap = new Map(nodes.map((n) => [n.id, n]));

  for (const src of nodes.filter((n) => n.data.label === 'Source')) {
    for (const buildId of (adj.get(src.id) ?? [])) {
      if (nodeMap.get(buildId)?.data.label !== 'Build') continue;
      for (const testId of (adj.get(buildId) ?? [])) {
        if (nodeMap.get(testId)?.data.label !== 'Test') continue;
        for (const deployId of (adj.get(testId) ?? [])) {
          if (nodeMap.get(deployId)?.data.label === 'Deploy') return true;
        }
      }
    }
  }

  return false;
}
