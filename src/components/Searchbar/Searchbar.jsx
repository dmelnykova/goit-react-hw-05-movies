import toast, { Toaster } from 'react-hot-toast';
import { useSearchParams } from 'react-router-dom';
import { Button, Form, Input } from './Searchbar.styled';

export const SearchMovie = ({ query }) => {
  const [params, setParams] = useSearchParams();

  const updateQuery = evt => {
    evt.preventDefault();
    const value = evt.target.elements.query.value.trim();
    if (!value) {
      return toast.error('Please enter a keyword');
    }
    params.set('query', value);
    setParams(params);
  };

  return (
    <>
      <Form onSubmit={updateQuery}>
        <Input name="query" type="text" defaultValue={query} />
        <Button type="submit">Search</Button>
      </Form>
      <Toaster />
    </>
  );
};