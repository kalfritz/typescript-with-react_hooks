import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
} from 'react';

interface User {
  name: string;
  login: string;
  avatar_url: string;
}

const App: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [users, setUsers] = useState<[User]>();

  useEffect(() => {
    async function loadData() {
      const response = await fetch('https://api.github.com/users/diego3g');
      const data = await response.json();
      setUsers(data);
    }
    loadData();
    if (inputRef.current) inputRef.current.focus();
  }, []);

  const names = useMemo(() => users?.map(user => user.name).join(', ') || '', [
    users,
  ]);

  const greeting = useCallback((user: User) => alert(`Hello ${user.name}`), []);

  return (
    <form>
      <input type='text' ref={inputRef} />
    </form>
  );
};

export default App;
