export function validateIntegerProp(props, propName, componentName) {
    if (!Number.isInteger(props[propName])) {
      return new Error(`Invalid prop ${propName} supplied to ${componentName}. ${propName} must be an integer.`);
    }
  }