import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Custom404() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 2000);
  }, []);
  return (
    <div>
      <h1 className="title-not-found">Oopppss...</h1>
      <h2 className="title-not-found">Halaman yang anda cari tidak ditemukan.</h2>
    </div>
  );
}
