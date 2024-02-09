import { Box, Button, Container, Tooltip, Typography } from '@mui/material';
import React from 'react';
import { Dictionary } from '../../../../types/dictionary';
import { FormData } from '@/types/home';

const Cards = ({
  dictionary,
  data,
  handleFinishTask,
  handleDeleteTask,
  handleEditTask,
}: {
  dictionary: Dictionary;
  data: FormData[];
  handleFinishTask: (e: number) => void;
  handleDeleteTask: (e: number) => void;
  handleEditTask: (e: number) => void;
}) => {
  return (
    <Container
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
        {data.map((val: FormData, key: number) => {
          return (
            <Container
              className='tw-shadow-md tw-bg-slate-300 dark:tw-bg-slate-800 tw-my-3 tw-p-6 tw-rounded-lg tw-z-10'
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
                <Tooltip title={dictionary.delete_item}>
                  <Button
                    variant='contained'
                    onClick={() => handleDeleteTask(key)}
                  >
                    {dictionary?.delete}
                  </Button>
                </Tooltip>
                <Tooltip sx={{ ml: 1 }} title={dictionary.edit_item}>
                  <Button
                    variant='contained'
                    onClick={() => handleEditTask(key)}
                  >
                    {dictionary?.edit}
                  </Button>
                </Tooltip>
                <Tooltip sx={{ ml: 1 }} title={dictionary.finish_item}>
                  <Button
                    variant='contained'
                    onClick={() => handleFinishTask(key)}
                  >
                    {dictionary?.finish}
                  </Button>
                </Tooltip>
              </Box>
            </Container>
          );
        })}
      </Box>
    </Container>
  );
};

export default Cards;
