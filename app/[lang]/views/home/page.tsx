'use client';
import useDictionary from '@/hooks/dictionary/useDictionary';
import { Container } from '@mui/material';
import { Locale } from 'i18n-config';
import Cards from './components/cards/Cards';
import FormDataTasks from './components/form/FormDataTasks';
import HomeHook from './hooks/HomeHook';

const Home = ({ lang }: { lang: Locale }) => {
  const { dictionary } = useDictionary({ lang });
  const {
    handleAddTask,
    handleGetDataName,
    handleGetDataDescription,
    handleFinishTask,
    handleDeleteTask,
    handleEditTask,
    data,
  } = HomeHook({ dictionary });

  return (
    dictionary && (
      <Container className='tw-flex  tw-mt-2'>
        <FormDataTasks
          dictionary={dictionary}
          handleAddTask={handleAddTask}
          handleGetDataDescription={handleGetDataDescription}
          handleGetDataName={handleGetDataName}
        />
        {data && (
          <Cards
            data={data}
            dictionary={dictionary}
            handleDeleteTask={handleDeleteTask}
            handleEditTask={handleEditTask}
            handleFinishTask={handleFinishTask}
          />
        )}
      </Container>
    )
  );
};

/* <CustomCircularProgress isOpen /> */

export default Home;
