import { ChangeEventHandler, useEffect, useState } from 'react';
import Autocomplete from '@material-ui/core/Autocomplete';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { autoComplete, search, clearResults } from 'store/actions/root';
import useSelector from 'store/typedSelector';
import { AutocompleteDto } from 'api/transform';

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
  const debouncedQuery = useDebounce(searchQuery, 300);
  const { queryResults, searching, loading, error } = useSelector(
    state => state
  );
  const [selected, setSelected] = useState<AutocompleteDto | null>(
    queryResults?.[0]
  );

  const resultsAvailable = () => queryResults?.length > 0;

  const submit = () => {
    if (resultsAvailable()) {
      dispatch(search(queryResults[0]));
      setSelected(queryResults[0]);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') return submit();
    if (!isAlphabetic(e.key)) return e.preventDefault();
    return null;
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    if (!target.value) return dispatch(clearResults());
    setSearchQuery(target.value);
    return null;
  };

  useEffect(() => {
    if (debouncedQuery) dispatch(autoComplete(debouncedQuery));
  }, [debouncedQuery, dispatch]);

  if (error) return null;

  return (
    <div className={classes.container}>
      <Autocomplete
        style={{ width: 300 }}
        options={queryResults}
        autoHighlight
        loading={searching}
        value={selected}
        classes={{
          option: classes.option,
        }}
        getOptionLabel={option => option?.name}
        getOptionSelected={(option, value) =>
          option?.countryISO === value?.countryISO
        }
        renderOption={(props, option) => (
          <li {...props}>
            <span>{countryToFlag(option?.countryISO)}</span>
            {option?.name}
          </li>
        )}
        renderInput={params => (
          <TextField
            {...params}
            label="Search location"
            onChange={handleChange}
            onKeyPress={handleKeyPress}
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
        onClick={submit}
        type="button"
      >
        {loading ? 'Searching...' : 'Search'}
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
