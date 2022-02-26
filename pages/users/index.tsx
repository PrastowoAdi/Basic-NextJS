/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import styles from '../../styles/Users.module.css';

interface UsersProps {
  dataUsers: Array<any>;
}
export default function User(props: UsersProps) {
  const { dataUsers } = props;
  const router = useRouter();

  return (
    <Layout pageTitle="User Page">
      {dataUsers.map((user) => (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events
        <div className={styles.card} key={user.id} onClick={() => router.push(`/users/${user.id}`)}>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const dataUsers = await res.json();
  return {
    props: {
      dataUsers,
    },
  };
}
