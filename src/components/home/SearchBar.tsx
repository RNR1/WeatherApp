import { SyntheticEvent, useEffect, useState } from 'react';
import Autocomplete, {
  AutocompleteChangeReason,
  AutocompleteInputChangeReason,
} from '@material-ui/core/Autocomplete';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import { AutocompleteDto } from 'api/transform';
import { useSearch, useDebounce } from 'hooks';
import { countryToFlag, isAlphabetic } from 'utils/search';
import { AUTOCOMPLETE_PROPS } from 'config/consts';

const useStyles = makeStyles({
  option: {
    fontSize: 15,
    '& > span': {
      marginRight: 10,
      fontSize: 18,
    },
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
});

export default function SearchBar() {
  const classes = useStyles();

  const [searchQuery, setSearchQuery] = useState('');
  const { searching, error, autoComplete, ...Search } = useSearch();
  const [value, setValue] = useState<AutocompleteDto | null>(null);
  const q = useDebounce(searchQuery, 300);

  const handleSubmit: (
    event?: SyntheticEvent<Element, Event>,
    value?: AutocompleteDto | null,
    reason?: AutocompleteChangeReason
  ) => void = (_, newValue, reason) => {
    if (!newValue || reason !== 'select-option') return;
    setValue(newValue);
    Search.submit(newValue);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') return handleSubmit(e, value);
    if (!isAlphabetic(e.key)) return e.preventDefault();
    return null;
  };

  const handleChange: (
    event: SyntheticEvent<Element, Event>,
    value: string,
    reason: AutocompleteInputChangeReason
  ) => void = (_, newValue, reason) => {
    if (!newValue || reason === 'reset') return Search.clearResults();
    setSearchQuery(newValue);
    return null;
  };

  useEffect(() => {
    if (q) autoComplete({ q, value });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q, autoComplete]);

  if (error) return null;

  return (
    <div className={classes.container}>
      <Autocomplete
        {...AUTOCOMPLETE_PROPS}
        options={Search.queryResults}
        loading={searching}
        value={value}
        classes={{
          option: classes.option,
        }}
        getOptionLabel={option => option?.name}
        renderOption={(props, option) => (
          <li {...props}>
            <span>{countryToFlag(option?.countryISO)}</span>
            {option?.name}
          </li>
        )}
        onChange={handleSubmit}
        onInputChange={handleChange}
        onKeyPress={handleKeyPress}
        filterOptions={x => x}
        renderInput={params => (
          <TextField
            {...params}
            label="Search location"
            variant="outlined"
            inputProps={{
              ...params.inputProps,
              autoComplete: 'new-password',
            }}
          />
        )}
      />
      <CustomButton
        disabled={!Search.resultsAvailable || searching}
        onClick={e => handleSubmit(e, value)}
        type="button"
      >
        {searching ? 'Searching...' : 'Search'}
      </CustomButton>
    </div>
  );
}

const CustomButton = styled(Button)`
  @media (max-width: 500px) {
    display: none;
  }
`;
