import logo from './logo.svg';
import CardList from './components/StudyCards/CardList';
import MainHeader from './components/Shared/MainHeader';
import { useState } from 'react';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModalHandler = () => {
      setIsModalOpen(true);
  };

  const hideModalHandler = () => {
      setIsModalOpen(false);
  };

  return (
    <>
      <MainHeader onCreateCard={showModalHandler} />
      <main> {/* This is a good practice for semantic HTML */}
        <CardList postingCard={isModalOpen} onStopPostingCard={hideModalHandler} />
      </main>
    </>
  );
}

export default App;
