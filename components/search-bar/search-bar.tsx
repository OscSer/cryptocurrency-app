import styles from './search-bar.module.css'
import SearchIcon from '../icon/search-icon'
import {
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material'

export default function SearchBar() {
  return (
    <FormControl className={styles.searchBar} variant="outlined">
      <InputLabel htmlFor="search-bar">Search</InputLabel>
      <OutlinedInput
        id="search-bar"
        label="Search"
        endAdornment={
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        }
      />
    </FormControl>
  )
}
