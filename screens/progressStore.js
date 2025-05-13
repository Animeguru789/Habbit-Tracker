import { generateProgressValues } from './dataUtils';

const progressValues = generateProgressValues(); // Generate once and store

export const getProgressValues = () => progressValues;