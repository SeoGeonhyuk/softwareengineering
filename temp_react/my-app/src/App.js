import logo from './logo.svg';
import './App.css';

import Kakao from './Kakao';

// useEffect(async () => {
// 	// db 뒤에 "techInfo"는 정보를 가져올 컬렉션 이름이다.
//     const query = await getDocs(collection(db, "techInfo")); 
//     query.forEach((doc) => {
//       console.log(doc.id, doc.data())
//     });
//   }, [])
function App() {
  
  return (
    <div className="App">
      <Kakao/>

    </div>
  );
}

export default App;
