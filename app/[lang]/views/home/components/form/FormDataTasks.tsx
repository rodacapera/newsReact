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
      className='tw-shadow-md tw-flex tw-justify-center tw-items-center tw-bg-slate-300 dark:tw-bg-slate-800 tw-p-6 tw-rounded-lg tw-z-10'
      sx={{ height: 400, width: '50%' }}
    >
      <Box
        sx={{
          width: 320,
          height: '100%',
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
