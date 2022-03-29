import pet from "./components/pet";

function App() {
  const name = "Ivan";
  const user = { firstName: "Luka", lastName: "Modric"};
  const formatUser = (userData) => userData.firstName + " " + userData.lastName;

  return (
    <div>
      <pet />
      <h1>Hello world!</h1>
      <h2>Hello, {name}!</h2>
      <h2>
        {user.firstName} {user.lastName}
      </h2>
      <p>Hello, {formatUser(user)}</p>
    </div>
  );
}

export default App;
