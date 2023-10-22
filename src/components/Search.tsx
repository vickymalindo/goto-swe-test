import { FaSearch } from 'react-icons/fa';
import { InputSearch } from '../atoms/Inputs';
import { SectionSearch } from '../atoms/Sections';
import { IconSearch } from '../atoms/Spans';
const Search = () => {
  return (
    <SectionSearch>
      <InputSearch placeholder='insert name' />
      <IconSearch>
        <FaSearch />
      </IconSearch>
    </SectionSearch>
  );
};

export default Search;
