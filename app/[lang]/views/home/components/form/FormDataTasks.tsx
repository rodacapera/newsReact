import { Dictionary } from '@/types/dictionary';
import { Box, Button, Container, TextField } from '@mui/material';
import { ChangeEvent } from 'react';

const FormDataTasks = ({
  dictionary,
  handleGetDataName,
  handleGetDataDescription,
  handleAddTask,
}: {
  dictionary: Dictionary;
  handleGetDataName: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleGetDataDescription: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleAddTask: () => void;
}) => {
  return (
    <Container
      className='tw-shadow-md tw-bg-slate-300 tw-p-6 tw-rounded-lg tw-z-10'
      sx={{
        display: 'flex',
        height: 300,
        width: '50%',
        justifyContent: 'center',
        justifyItems: 'center',
        backgroundColor: '#4eb9d5',
      }}
    >
      <Box
        sx={{
          width: 320,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          justifyItems: 'center',
        }}
      >
        <TextField
          id='outlined-basic'
          label={dictionary?.task}
          variant='outlined'
          onChange={handleGetDataName}
        />
        <TextField
          id='outlined-basic'
          label={dictionary?.description}
          variant='outlined'
          onChange={handleGetDataDescription}
        />
        <Button variant='outlined' onClick={handleAddTask}>
          {dictionary?.save}
        </Button>
      </Box>
    </Container>
  );
};

export default FormDataTasks;
