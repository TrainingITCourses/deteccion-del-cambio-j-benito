export type CriterionType = 'agencies' | 'types' | 'status';
export class Criterion {
  type: CriterionType;
  value: string;
}
