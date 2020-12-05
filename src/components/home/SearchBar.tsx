import { SyntheticEvent, useEffect, useState } from 'react';
import Autocomplete, {
  AutocompleteChangeReason,
  AutocompleteInputChangeReason,
} from '@material-ui/core/Autocomplete';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { AutocompleteDto } from 'api/transform';
import * as Actions from 'store/actions/search.actions';
import { useSelector } from 'store/reducer';

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
  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState('');
  const [value, setValue] = useState<AutocompleteDto | null>(null);
  const q = useDebounce(searchQuery, 300);
  const { queryResults, searching, error } = useSelector(
    ({ search }) => search
  );

  const resultsAvailable = () => queryResults?.length > 0;

  const submit: (
    event?: SyntheticEvent<Element, Event>,
    value?: AutocompleteDto | null,
    reason?: AutocompleteChangeReason
  ) => void = (_, newValue, reason) => {
    if (!newValue || reason !== 'select-option') return;
    setValue(newValue);
    dispatch(Actions.searchSubmit(newValue));
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') return submit(e, value);
    if (!isAlphabetic(e.key)) return e.preventDefault();
    return null;
  };

  const handleChange: (
    event: SyntheticEvent<Element, Event>,
    value: string,
    reason: AutocompleteInputChangeReason
  ) => void = (_, newValue, reason) => {
    if (!newValue || reason === 'reset')
      return dispatch(Actions.clearResults());
    setSearchQuery(newValue);
    return null;
  };

  useEffect(() => {
    if (q) dispatch(Actions.autoComplete({ q, value }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q, dispatch]);

  if (error) return null;

  return (
    <div className={classes.container}>
      <Autocomplete
        style={{ width: 300 }}
        options={queryResults}
        autoHighlight
        autoComplete
        includeInputInList
        filterSelectedOptions
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
        onChange={submit}
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
        disabled={!resultsAvailable() || searching}
        onClick={e => submit(e, value)}
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

function countryToFlag(isoCode: string) {
  return typeof String.fromCodePoint !== 'undefined'
    ? isoCode
        .toUpperCase()
        .replace(/./g, char =>
          String.fromCodePoint(char.charCodeAt(0) + 127397)
        )
    : isoCode;
}

function isAlphabetic(key: string) {
  return /^[a-zA-Z ]*$/.test(key);
}

function useDebounce(value: string, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
