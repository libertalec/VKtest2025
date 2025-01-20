import { FC, useState } from 'react';
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';

type SortTypes = 'asc' | 'desc';

const SortTypesSelect: FC = () => {
  const [sortType, setSortType] = useState<SortTypes>('desc');

  const handleChange = (event: SelectChangeEvent) => {
    // @ts-ignore
    setSortType(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label'>Sort type</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={sortType}
          label='Sort type'
          onChange={handleChange}
        >
          <MenuItem value='desc'>desc</MenuItem>
          <MenuItem value='asc'>asc</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export { SortTypesSelect };
