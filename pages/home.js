function HomePage(props) {
  return (
    <div>
      <h1>Welcome to Next.js!</h1>
      {props.user.name}
    </div>
  );
}

export default HomePage;

// This function gets called at build time
export async function getStaticProps() {
  const user = {
    name: "Vighnesh",
    age: 23,
  };

  return {
    props: {
      user,
    },
  };
}
