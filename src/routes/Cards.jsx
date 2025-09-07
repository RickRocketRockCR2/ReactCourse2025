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
  const response = await fetch('https://dummy-backend-cha4dtgmgab3awet.eastus-01.azurewebsites.net/posts');
  const data = await response.json();
  return data.posts;
}