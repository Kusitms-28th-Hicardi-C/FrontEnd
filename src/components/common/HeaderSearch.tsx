import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

interface HeaderSearchProps {
  searchRange?: string;
  value?: string;
  onChange?: (text: string) => void;
}

const HeaderSearchBlock = styled.header`
  padding: 8rem 0;
  background-color: ${({ theme }) => theme.colors.blue4};
  text-align: center;

  h2 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
  }

  @media screen and (max-width: 600px) {
    h2 {
      font-size: 1.5rem;
    }
  }

  @media screen and (max-width: 500px) {
    h2 {
      font-size: 1.25rem;
    }
  }
`;

const SearchInput = styled.div`
  position: relative;
  display: flex;
  justify-content: end;
  align-items: center;
  width: 500px;
  height: 48px;
  margin: 0 auto;

  input {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 32px;
    padding: 0 2rem;
    font-size: 1rem;
    box-shadow: 4px 4px 20px 0px #0000001a;
  }

  i {
    position: absolute;
    right: 24px;
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    cursor: pointer;
  }

  @media screen and (max-width: 600px) {
    width: 450px;
  }

  @media screen and (max-width: 500px) {
    width: 350px;
  }
`;

const HeaderSearch = ({ searchRange, value, onChange }: HeaderSearchProps) => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  return (
    <HeaderSearchBlock>
      {searchRange === 'blog' && <h2>하이카디가 궁금하면 무엇이든 물어보세요</h2>}
      <SearchInput>
        <input
          type="text"
          placeholder="키워드를 입력하세요"
          value={value}
          onChange={(e) => {
            setQuery(e.target.value);
            if (onChange) {
              onChange(e.target.value);
            }
            console.log(query);
          }}
          onKeyDown={(e) => {
            if (e.keyCode === 229) return;
            if (e.key === 'Enter') {
              if (searchRange) {
                navigate(`/search?query=${query}&range=${searchRange}`);
              } else {
                navigate(`/search?query=${query}&range=all`);
              }
              setQuery('');
            }
          }}
        />
        <i
          onClick={() => {
            if (searchRange) {
              return navigate(`/search?query=${query}&range=${searchRange}`);
            }
            navigate(`/search?query=${query}`);
          }}
        >
          <FaSearch />
        </i>
      </SearchInput>
    </HeaderSearchBlock>
  );
};

export default HeaderSearch;
