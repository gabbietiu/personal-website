import { useRouter } from "next/router";

function BlogPost() {
  const router = useRouter();
  const { name } = router.query;

  return <p>Post: {name}</p>;
}

export default BlogPost;
