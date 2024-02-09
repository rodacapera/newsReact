import { Dictionary } from '@/types/dictionary';
import { FormData } from '@/types/home';
import { useQuery } from '@tanstack/react-query';

const GetAllTasksQuery = () => {
  return useQuery({
    queryKey: ['tasks'],
    queryFn: async () => {
      const getTasks = localStorage.getItem('@tasks');
      if (getTasks) {
        const tasks = JSON.parse(getTasks) as FormData[];
        return tasks;
      } else {
        return null;
      }
    },
  });
};

const setTasksQuery = (
  tasks: FormData[] | undefined,
  setState: (e: string) => void,
  state: string
) => {
  console.log('state', state);
  console.log('state !!', !!state);

  return useQuery({
    queryKey: ['tasks'],
    queryFn: async () => {
      console.log('state>>>>', state);

      setState('');
      return tasks;
    },
    // refetchOnWindowFocus: false,
    enabled: !!state,
  });
};

const setTasksQueryOld = (
  tasks: FormData[],
  setTasks: (e: FormData[]) => void,
  modify: number | undefined,
  dictionary: Dictionary | undefined,
  action: string | undefined
) => {
  return useQuery({
    queryKey: ['tasks'],
    queryFn: async () => {
      const getTasks = localStorage.getItem('@tasks');
      console.log('modify', modify);
      console.log('dic', dictionary);
      if (getTasks) {
        const myTasks = JSON.parse(getTasks) as FormData[];
        // modify != undefined && myTasks.splice(modify, 1);
        if (modify != undefined && dictionary) {
          console.log('ddddd');
          const dataClone = [...myTasks];
          if (action == 'delete') {
            dataClone.splice(modify, 1);
          } else if (action == 'update') {
          } else {
            dataClone[modify].state = dictionary?.finished;
          }

          tasks = dataClone;
        } else {
          console.log('pppppppp');
          tasks.push(...myTasks);
        }
        localStorage.setItem('@tasks', JSON.stringify(tasks));
      } else {
        localStorage.setItem('@tasks', JSON.stringify(tasks));
      }
      setTasks([]);
      return tasks;
    },
    // refetchOnWindowFocus: false,
    enabled: tasks.length > 0 || modify != undefined || !!action,
  });
};

export { GetAllTasksQuery, setTasksQuery };
