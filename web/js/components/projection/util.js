export default function parse(state, errors, config) {
  // Permalink version 1.0 - 1.1
  if (state.switch) {
    state.p = state.switch;
    delete state.switch;
  }
  const projId = state.p;
  if (projId) {
    if (!config.projections[projId]) {
      delete state.p;
      errors.push({
        message: `Unsupported projection: ${projId}`,
      });
    }
  }
}
