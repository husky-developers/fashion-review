import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Feed from './components/Feed';
// import db from './firebase';

interface Post {
  id: number;
  imageUrl: string;
  title: string;
  date: string;
  description: string;
  college: string;
}

function App() {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      imageUrl: 'https://via.placeholder.com/150',
      title: 'Post 1',
      date: '2021-10-01',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      college: 'Example College',
    },
    {
      id: 2,
      imageUrl: 'https://via.placeholder.com/150',
      title: 'Post 2',
      date: '2021-10-02',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      college: 'Example University',
    },
    {
      id: 3,
      imageUrl: 'https://via.placeholder.com/150',
      title: 'Post 3',
      date: '2021-10-03',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      college: 'Example Institute',
    },
  ]);

  // const newPost: Post = {
  //   id: 4,
  //   imageUrl: 'https://via.placeholder.com/150',
  //   title: 'New Post',
  //   date: new Date().toISOString(),
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  //   college: 'Example College',
  // };
  
  // db.collection('posts').add(newPost);

  // const [posts, setPosts] = useState<Post[]>([]);

  // useEffect(() => {
  //   const unsubscribe = db.collection('posts').onSnapshot((snapshot) => {
  //     const newPosts = snapshot.docs.map((doc) => ({
  //       id: doc.id,
  //       ...doc.data(),
  //     })) as Post[];
  //     setPosts(newPosts);
  //   });

  //   return unsubscribe;
  // }, []);


  return (
    <div>
      <Navbar onSearch={handleSearch} />
      <Feed posts={posts} />
    </div>
  );
}

export default App;
const handleSearch = (query: string) => {
  // Handle search query
};

// import { useEffect, useState } from 'react';
// import { collection, getDocs } from 'firebase/firestore';
// import db from './firebase';

// function App() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       const postsCollection = collection(db, 'posts');
//       const postsSnapshot = await getDocs(postsCollection);
//       const postsData = postsSnapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setPosts(postsData);
//     };

//     fetchPosts();
//   }, []);

//   return (
//     <div>
//       {posts.map((post) => (
//         <div key={post.id}>
//           <h2>{post.title}</h2>
//           <p>{post.content}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;