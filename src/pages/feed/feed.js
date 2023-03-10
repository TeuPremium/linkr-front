import FeedContainer from "../../components/Feeds/feedContainer";
import Header from "../../components/header/header";
import { tokenIsValid } from "../../hooks/auth";
import { useState } from "react";

export default function Feed(prop) {
  tokenIsValid();

  const [comment, setComment] = useState(prop.comment);
  const [deleteComment, setDeleteComment] = useState(false);

  return (
    <>
      {/* colocar imagem por prop no header (é melhor fazer por context) */}

      <Header />
      <FeedContainer
        timeline={prop.timeline}
        delete={(deleteComment) => setDeleteComment(deleteComment)}
      />
    </>
  );
}
