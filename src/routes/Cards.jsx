import CardList from '../components/StudyCards/CardList';
import { Outlet } from 'react-router-dom';

function Cards() {

  return (
    <>
      <Outlet />
      <main> {/* This is a good practice for semantic HTML */}
        <CardList />
      </main>
    </>
  );
}

export default Cards;

export async function loader() {
  const response = await fetch('http://localhost:8080/posts');
  const data = await response.json();
  return data.posts;
}