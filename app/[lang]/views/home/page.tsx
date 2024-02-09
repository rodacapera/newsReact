'use client';
import useDictionary from '@/hooks/dictionary/useDictionary';
import { FormData } from '@/types/home';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { Locale } from 'i18n-config';
import HomeHook from './hooks/HomeHook';
import FormDataTasks from './components/form/FormDataTasks';

const Home = ({ lang }: { lang: Locale }) => {
  const { dictionary } = useDictionary({ lang });
  const {
    handleAddTask,
    handleGetDataName,
    handleGetDataDescription,
    handleFinishTask,
    handleDeleteTask,
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
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            justifyItems: 'center',
            width: '50%',
          }}
        >
          <Box
            sx={{
              width: 320,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Typography align='center' variant='h4'>
              {dictionary?.task_list}
            </Typography>
            {data &&
              data.map((val: FormData, key: number) => {
                return (
                  <Container
                    className='tw-shadow-md tw-bg-slate-300 tw-my-3 tw-p-6 tw-rounded-lg tw-z-10'
                    key={key}
                  >
                    <Typography className='tw-font-extrabold' variant='body1'>
                      {dictionary.task_name}:{' '}
                      <span className='tw-font-normal'>{val.name}</span>
                    </Typography>
                    <Typography className='tw-font-extrabold' variant='body1'>
                      {dictionary.description}:{' '}
                      <span className='tw-font-normal'>{val.description}</span>
                    </Typography>
                    <Typography className='tw-font-extrabold' variant='body1'>
                      {dictionary.state}:{' '}
                      <span className='tw-font-normal'>{val.state}</span>
                    </Typography>
                    <Box sx={{ display: 'flex', mt: 2 }}>
                      <Button
                        variant='contained'
                        onClick={() => handleFinishTask(key)}
                      >
                        {dictionary?.edit}
                      </Button>
                      <Button
                        sx={{ ml: 1 }}
                        variant='contained'
                        onClick={() => handleDeleteTask(key)}
                      >
                        {dictionary?.delete}
                      </Button>
                      <Button
                        sx={{ ml: 1 }}
                        variant='contained'
                        onClick={() => handleFinishTask(key)}
                      >
                        {dictionary?.finish}
                      </Button>
                    </Box>
                  </Container>
                );
              })}
          </Box>
        </Box>
      </Container>
    )
  );
};

/* <CustomCircularProgress isOpen /> */

export default Home;
