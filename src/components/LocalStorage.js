const storedBoards = JSON.parse(localStorage.getItem('boards')) || [];
const storedLists = JSON.parse(localStorage.getItem('lists')) || [];
const storedCards = JSON.parse(localStorage.getItem('cards')) || [];

const [boards, setBoards] = useState(storedBoards);
const [lists, setLists] = useState(storedLists);
const [cards, setCards] = useState(storedCards);

useEffect(() => {
  localStorage.setItem('boards', JSON.stringify(boards));
}, [boards]);

useEffect(() => {
  localStorage.setItem('lists', JSON.stringify(lists));
}, [lists]);

useEffect(() => {
  localStorage.setItem('cards', JSON.stringify(cards));
}, [cards]);
