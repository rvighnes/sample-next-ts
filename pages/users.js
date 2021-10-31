function UsersPage(props) {
  return (
    <div>
      <h1>Welcome to Next.js!</h1>
      {props.user.name}
    </div>
  );
}

export default UsersPage;

export async function getServerSideProps() {
  return {
    props: {
      user: {
        name: "Vighnesh from server",
      },
    },
  };
}
