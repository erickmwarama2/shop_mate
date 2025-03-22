import { Outlet, useNavigate } from "react-router-dom";

export const Contact = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    console.log("done");
    navigate("/");
  };

  return (
    <main>
      <div>Contact</div>
      <button onClick={handleSubmit}>Back to Home</button>
      <Outlet />
    </main>
  );
};
