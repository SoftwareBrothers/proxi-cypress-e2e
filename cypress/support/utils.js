export function generateName(prefix) {
    const d = new Date();
    return `${prefix}-${d.getTime()}`;
  };
