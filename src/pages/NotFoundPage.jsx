import { Link } from 'react-router-dom';

export default function NotFoundPages() {
  return (
    <>
      <b>
        Pages not found, back <Link to={'/'}>link</Link> to Home
      </b>
    </>
  );
}