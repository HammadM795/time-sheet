export interface WorkStatus {
  id: number;
  title: string;
}


export let WorkStatusList: WorkStatus[] = [
  {
    id: 1,
    title: 'Complete'
  },
  {
    id: 2,
    title: 'On-Hold'
  },
  {
    id: 3,
    title: 'Work in progress'
  },
  {
    id: 4,
    title: 'Delay'
  },
]
