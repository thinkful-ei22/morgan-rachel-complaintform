

export const required = value => value ? undefined : "Required";

export const nonEmpty = value => value.trim() !== '' ? undefined: "Please type something";

export const inputLength = value => value.length === 5 ? undefined : "Tracking Number should be 5 characters";

export const mustBeNumber = value => isNaN(value) ? "Input must be a number" : undefined;