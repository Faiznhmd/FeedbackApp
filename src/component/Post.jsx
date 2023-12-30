// import { useParams } from 'react-router-dom';
import { Navigate, useNavigate, Routes, Route } from 'react-router-dom';

const Post = () => {
  // const params = useParams();
  // return (
  //   <div style={{ color: 'white', fontSize: '30px', fontWeight: 600 }}>
  //     <h1>Post {params.id}</h1>
  //     <p>Name: {params.name}</p>
  //   </div>
  // );
  const status = 200;

  const navigate = useNavigate();

  const onclick = () => {
    navigate('/about');
  };

  if (status === 404) {
    return <Navigate to="/notfound" />;
  }

  return (
    <div>
      <h1>Post</h1>
      <button onClick={onclick}>Click</button>
      <Routes>
        <Route path="/show" element={<h1>Hello World</h1>} />
      </Routes>
    </div>
  );
};

export default Post;
