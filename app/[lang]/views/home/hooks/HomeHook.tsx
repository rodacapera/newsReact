import { GetAllTasksQuery, setTasksQuery } from '@/reactQuery/home';
import { Dictionary } from '@/types/dictionary';
import { FormData } from '@/types/home';
import { ChangeEvent, useEffect, useState } from 'react';

const HomeHook = ({ dictionary }: { dictionary: Dictionary | undefined }) => {
  const [getData, setGetData] = useState<FormData>();
  const [tasks, setTasks] = useState<FormData[]>([]);
  const [state, setState] = useState<string>('');
  const [action, setAction] = useState<string>();
  setTasksQuery(tasks, setState, state);
  const { data } = GetAllTasksQuery();

  const handleEditTask = (key: number) => {
    if (getData && data && dictionary) {
      const dataClone = [...data];
      dataClone[key].name = getData.name;
      dataClone[key].description = getData.description;
      localStorage.setItem('@tasks', JSON.stringify(dataClone));
      setState('edited');
      setTasks(dataClone);
    }
  };

  const handleFinishTask = (key: number) => {
    if (data && dictionary) {
      const dataClone = [...data];
      dataClone[key].state = dictionary.finished;
      localStorage.setItem('@tasks', JSON.stringify(dataClone));
      setState('finished');
      setTasks(dataClone);
    }
  };

  const handleDeleteTask = (key: number) => {
    if (data) {
      const dataClone = [...data];
      dataClone.splice(key, 1);
      localStorage.setItem('@tasks', JSON.stringify(dataClone));
      setState('delete');
      setTasks(dataClone);
    }
  };

  const handleAddTask = () => {
    if (getData && data) {
      const dataClone = [...data];
      dataClone.push(getData);
      localStorage.setItem('@tasks', JSON.stringify(dataClone));
      setState('added');
      setTasks(dataClone);
    }
  };

  const handleGetDataName = (
    text: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const dataClone = { ...getData };
    dataClone &&
      ((dataClone.name = text.target.value),
      (dataClone.state = dictionary?.pending));
    setGetData(dataClone as FormData);
  };

  const handleGetDataDescription = (
    text: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const dataClone = { ...getData };
    dataClone &&
      ((dataClone.description = text.target.value),
      (dataClone.state = dictionary?.pending));
    setGetData(dataClone as FormData);
  };

  return {
    handleAddTask,
    handleGetDataName,
    handleGetDataDescription,
    data,
    handleFinishTask,
    handleDeleteTask,
    handleEditTask,
  };
};

export default HomeHook;
