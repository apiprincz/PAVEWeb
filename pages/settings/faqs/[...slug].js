import { useRouter } from "next/router";
import Questions from "../../../Components/Questions";

const Comment = () => {
  const router = useRouter();
  const slug = router.query.slug || [];

  return (
    <>
      <Questions />
    </>
  );
};

export default Comment;
