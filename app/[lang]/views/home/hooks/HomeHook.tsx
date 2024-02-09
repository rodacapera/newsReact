import { GetAllTasksQuery, setTasksQuery } from '@/reactQuery/home';
import { Dictionary } from '@/types/dictionary';
import { FormData } from '@/types/home';
import { ChangeEvent, useEffect, useState } from 'react';

const HomeHook = ({ dictionary }: { dictionary: Dictionary | undefined }) => {
  const [getData, setGetData] = useState<FormData>();
  const [tasks, setTasks] = useState<FormData[]>([]);
  const [modify, setModify] = useState<number>();
  const [action, setAction] = useState<string>();
  setTasksQuery(tasks, setTasks, modify, dictionary, action);
  const { data } = GetAllTasksQuery();

  const handleFinishTask = (key: number) => {
    setModify(key);
  };
  const handleDeleteTask = (key: number) => {
    setAction('delete');
    setModify(key);
  };

  const handleAddTask = () => {
    const dataClone: FormData[] = [];
    if (getData) {
      dataClone.push(getData);
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
  };
};

export default HomeHook;
